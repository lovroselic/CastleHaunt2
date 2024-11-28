///fShader///
/*
* v1.1
*/
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

struct Material {
    vec3 ambientColor;
    vec3 diffuseColor;
    vec3 specularColor;
    float shininess;
};

const int N_LIGHTS = 1;                                     //replaced before compiling
float illumination;
uniform vec3 uPointLights[N_LIGHTS];
uniform vec3 uLightColors[N_LIGHTS];
uniform vec3 uLightDirections[N_LIGHTS];
uniform sampler2D uSampler;
uniform vec3 uCameraPos;
uniform Material uMaterial;
uniform sampler2D uOcclusionMap;                            // Occlusion map
uniform vec2 uGridSize;                                     // Size of the grid in the occlusion map

varying vec3 FragPos;
varying vec3 v_normal;
varying vec2 vTextureCoord;

//bloody hardcoded constants
const vec3 innerLightColor = vec3(0.9, 0.9, 0.81);
const float innerAmbientStrength = 0.225;
const float innerDiffuseStrength = 2.1;
const float innerSpecularStrength = 1.0;

const float PL_AmbientStrength = 2.0;
const float PL_DiffuseStrength = 5.0;
const float PL_SpecularStrength = 6.5;

const float IGNORE_ALPHA = 0.2;
const int MAX_STEPS = 25;                                   // Max steps for raycasting loop - 25

vec3 CalcLight(vec3 lightPosition, vec3 FragPos, vec3 viewDir, vec3 normal, vec3 pointLightColor, float shininess, vec3 ambientColor, vec3 diffuseColor, vec3 specularColor, float ambientStrength, float diffuseStrength, float specularStrength, int inner, vec3 lightDirection);
bool Raycast(vec3 rayOrigin, vec3 raytarget);
vec2 worldToGridTexCoord(vec3 worldPos);
vec2 worldToNormalizedTexCoord(vec3 worldPos);
bool isOccluded(vec3 fragPos);

void main(void) {
    vec3 ambientColor = uMaterial.ambientColor;
    vec3 diffuseColor = uMaterial.diffuseColor;
    vec3 specularColor = uMaterial.specularColor;
    float shininess = uMaterial.shininess;
    vec3 norm = normalize(v_normal);
    vec3 viewDir = normalize(uCameraPos - FragPos);

    vec3 innerLight = CalcLight(uCameraPos, FragPos, viewDir, norm, innerLightColor, shininess, ambientColor, diffuseColor, specularColor, innerAmbientStrength, innerDiffuseStrength, innerSpecularStrength, 1, viewDir);
    vec3 PL_output = vec3(0.0);

    for (int i = 0; i < N_LIGHTS; i++) {
        if (uPointLights[i].x < 0.0) {
            continue;
        }
        PL_output += CalcLight(uPointLights[i], FragPos, viewDir, norm, uLightColors[i], shininess, ambientColor, diffuseColor, specularColor, PL_AmbientStrength, PL_DiffuseStrength, PL_SpecularStrength, 0, uLightDirections[i]);
    }

    vec3 light = innerLight + PL_output;
    vec4 texelColor = texture2D(uSampler, vTextureCoord);
    if (texelColor.a < IGNORE_ALPHA) {
        discard;
    }

    gl_FragColor = vec4(texelColor.rgb * light, texelColor.a);
}

vec3 CalcLight(vec3 lightPosition, vec3 FragPos, vec3 viewDir, vec3 normal, vec3 pointLightColor, float shininess, vec3 ambientColor, vec3 diffuseColor, vec3 specularColor, float ambientStrength, float diffuseStrength, float specularStrength, int inner, vec3 lightDirection) {
    float distance = distance(lightPosition, FragPos);
    vec3 lightDir = normalize(lightPosition - FragPos);
    bool occluded = Raycast(lightPosition, FragPos);
    //if (occluded) return vec3(0.0); // No contribution if occluded

    float attenuation = 1.0 / (1.0 + 0.1 * distance + 0.65 * (distance * distance));

    //is fragment illuminated by ligh source? omni dir is (255,255,255)
    if (inner == 0) {
        if (lightDirection.x < 2.0) {
        // considers only directional lights
        //lightDirection points away from light source, so it needs to be reversed
            illumination = dot(lightDir, normalize(-lightDirection));
        }
    } else {
        illumination = 1.0;
    }

    //ambient
    vec3 ambientLight = vec3(0.0);
    if (inner == 1) {
        ambientLight = pointLightColor * ambientStrength * ambientColor;
    } else {
        ambientLight = pointLightColor * ambientStrength * attenuation * ambientColor;
    }

    //diffuse
    float diffLight = max(dot(normal, lightDir), 0.0);
    float diffView = max(dot(normal, viewDir), 0.0);
    float diff = 0.9 * diffLight + 0.1 * diffView;
    vec3 diffuselight = pointLightColor * diff * diffuseStrength * attenuation * diffuseColor;

    // specular shading
    vec3 reflectDir = reflect(-lightDir, normal);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), shininess);
    vec3 specularLight = pointLightColor * spec * specularStrength * attenuation * specularColor;

    ambientLight = clamp(ambientLight, 0.0, 1.0);
    diffuselight = clamp(diffuselight, 0.0, 1.0);
    specularLight = clamp(specularLight, 0.0, 1.0);

    if (illumination <= 0.0 || occluded) {
        diffuselight = vec3(0.0, 0.0, 0.0);
    }

    return ambientLight + diffuselight + specularLight;
}

bool Raycast(vec3 rayOrigin, vec3 rayTarget) {
    vec2 gridOrigin = worldToGridTexCoord(rayOrigin);
    vec2 gridTarget = worldToGridTexCoord(rayTarget);
    vec2 delta = gridTarget - gridOrigin;
    vec2 step = sign(delta);
    vec2 tDelta = abs(1.0 / delta);
    vec2 tMax = (vec2(step.x > 0.0 ? (1.0 - fract(gridOrigin.x)) : fract(gridOrigin.x), step.y > 0.0 ? (1.0 - fract(gridOrigin.y)) : fract(gridOrigin.y)) * tDelta);
    vec2 current = floor(gridOrigin);

    for (int i = 0; i < MAX_STEPS; i++) {
        if (isOccluded(vec3(current.x * uGridSize.x, current.y * uGridSize.y, rayOrigin.z)))
            return true; // Blocked
        if (current == floor(gridTarget))
            break; // Reached target
        if (tMax.x < tMax.y) {
            tMax.x += tDelta.x;
            current.x += step.x;
        } else {
            tMax.y += tDelta.y;
            current.y += step.y;
        }
    }
    return false; // No occlusion detected
}

vec2 worldToGridTexCoord(vec3 worldPos) {
    return vec2(floor(worldPos.x), floor(worldPos.y));
}

vec2 worldToNormalizedTexCoord(vec3 worldPos) {
    return vec2(floor(worldPos.x) / uGridSize.x, floor(worldPos.y) / uGridSize.y);
}

bool isOccluded(vec3 fragPos) {
    vec2 texCoord = worldToNormalizedTexCoord(fragPos);
    float occlusion = texture2D(uOcclusionMap, texCoord).r; // Sample red channel
    return occlusion > 0.5; // Assume >0.5 indicates impassable
}