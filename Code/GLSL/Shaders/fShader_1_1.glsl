///fShader///
/*
* v1.1
* last change in CastleHunt II
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

const int N_LIGHTS = 1;                                         //replaced before compiling
float illumination;
uniform vec3 uPointLights[N_LIGHTS];
uniform vec3 uLightColors[N_LIGHTS];
uniform vec3 uLightDirections[N_LIGHTS];
uniform sampler2D uSampler;
uniform vec3 uCameraPos;
uniform Material uMaterial;
uniform sampler2D uOcclusionMap;                                // Occlusion map
uniform vec2 uGridSize;                                         // Size of the grid in the occlusion map

varying vec3 FragPos;
varying vec3 v_normal;
varying vec2 vTextureCoord;

//bloody hardcoded constants
const vec3 innerLightColor = vec3(0.9, 0.9, 0.81);
const float innerAmbientStrength = 0.25;        //0.25
const float innerDiffuseStrength = 2.5;          //2.5
const float innerSpecularStrength = 2.0;        //2.0

const float PL_AmbientStrength = 2.0;           //2.0
const float PL_DiffuseStrength = 5.5;           //5.5
const float PL_SpecularStrength = 1.5;          //1.5

const float IGNORE_ALPHA = 0.2;
const int MAX_STEPS = 50;                                       // Max steps for raycasting loop - 50
const float EPSILON = 0.02;                                     // don't enter the wall, check for occlusion - 0.02
const float PL_AMBIENT_OCCLUSION = 0.225;                       //how much of ambient light gets through occlusion - 0.225
const float PL_DIFFUSE_OCCLUSION = 0.30;                        //how much of diffused light gets through occlusion - 0.30
const float ATTNF = 0.05;                                       // linear arrenuation factor - 0.1
const float ATTNF2 = 0.5;                                       //quadratic attenuation factor

vec3 CalcLight(vec3 lightPosition, vec3 FragPos, vec3 viewDir, vec3 normal, vec3 pointLightColor, float shininess, vec3 ambientColor, vec3 diffuseColor, vec3 specularColor, float ambientStrength, float diffuseStrength, float specularStrength, int inner, vec3 lightDirection);
bool Raycast(vec3 rayOrigin3D, vec3 rayTarget3D, vec2 lightDir2D);
vec2 worldToGridTexCoord(vec2 position2D);
vec2 worldToNormalizedTexCoord(vec2 position2D);
bool isOccluded(vec2 position2D);

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
    vec2 lightDir2D = normalize(-lightDir).xz;
    vec2 lightDirection2D = normalize(-lightDirection).xz;
    bool occluded = Raycast(lightPosition, FragPos, lightDir2D);
    float attenuation = 1.0 / (1.0 + ATTNF * distance + ATTNF2 * (distance * distance));

    //is fragment illuminated by ligh source? omni dir is (255,255,255) so if x < 2.0 it is not omni dir, but directional!
    illumination = 1.0;
    if (inner == 0 && lightDirection.x < 2.0) {
        illumination = dot(lightDir2D, lightDirection2D);               // considers only directional lights
    }

    //ambient
    vec3 ambientLight = vec3(0.0);
    if (inner == 1) {
        ambientLight = pointLightColor * ambientStrength * ambientColor;
    } else {
        ambientLight = pointLightColor * ambientStrength * attenuation * ambientColor;
    }

    // Diffuse lighting - thanks to AI for writing docs 
    // The diffuse term is calculated as a weighted combination of two components:
    // 1. diffLight: Standard diffuse lighting based on the angle between the surface normal and light direction.
    //    This represents the primary contribution to diffuse lighting (95% weight).
    // 2. diffView: An additional term based on the alignment of the surface normal and the view direction.
    //    This contributes 5% to the final result, subtly brightening areas facing the camera.
    // Combining these helps to smooth out lighting transitions and reduce harsh shadows, but note that 
    // it is not physically accurate and is primarily an artistic enhancement.
    float diffLight = max(dot(normal, lightDir), 0.0);
    float diffView = max(dot(normal, viewDir), 0.0);
    float diff = 0.95 * diffLight + 0.05 * diffView;
    vec3 diffuselight = pointLightColor * diff * diffuseStrength * attenuation * diffuseColor;

    // specular shading
    vec3 reflectDir = reflect(-lightDir, normal);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), shininess);
    vec3 specularLight = pointLightColor * spec * specularStrength * attenuation * specularColor;

    ambientLight = clamp(ambientLight, 0.0, 1.0);
    diffuselight = clamp(diffuselight, 0.0, 1.0);
    specularLight = clamp(specularLight, 0.0, 1.0);

    if (illumination <= 0.0) {
        diffuselight = vec3(0.0, 0.0, 0.0);
    } else if (occluded && inner == 0) {
        return PL_AMBIENT_OCCLUSION * ambientLight + PL_DIFFUSE_OCCLUSION * diffuselight;
    }

    return ambientLight + diffuselight + specularLight;
}

bool Raycast(vec3 rayOrigin3D, vec3 rayTarget3D, vec2 lightDir2D) {
    vec2 origin = rayOrigin3D.xz;
    vec2 target = rayTarget3D.xz;
    vec2 normalizedDelta = normalize(target - origin);
    target -= normalizedDelta * EPSILON;

    vec2 gridOrigin = worldToGridTexCoord(origin + lightDir2D * EPSILON);
    vec2 gridTarget = worldToGridTexCoord(target);
    vec2 delta = gridTarget - gridOrigin;

    vec2 step = sign(delta);
    vec2 tDelta = abs(1.0 / delta);             // How far to go in each direction to cross a grid line
    vec2 tMax = (vec2(step.x > 0.0 ? (1.0 - fract(gridOrigin.x)) : fract(gridOrigin.x), step.y > 0.0 ? (1.0 - fract(gridOrigin.y)) : fract(gridOrigin.y)) * tDelta);
    vec2 current = gridOrigin;

    for (int i = 0; i < MAX_STEPS; i++) {
        if (isOccluded(current))
            return true;                        // Blocked
        if (current == gridTarget)
            break;                              // Reached target
        if (tMax.x < tMax.y) {
            tMax.x += tDelta.x;
            current.x += step.x;
        } else {
            tMax.y += tDelta.y;
            current.y += step.y;
        }
    }
    return false;                               // No occlusion detected
}

vec2 worldToGridTexCoord(vec2 position2D) {
    return vec2(floor(position2D.x), floor(position2D.y));
}

vec2 worldToNormalizedTexCoord(vec2 position2D) {
    return vec2(floor(position2D.x) / uGridSize.x, floor(position2D.y) / uGridSize.y);
}

bool isOccluded(vec2 position2D) {
    vec2 texCoord = worldToNormalizedTexCoord(position2D);
    float occlusion = texture2D(uOcclusionMap, texCoord).r; // Sample red channel
    return occlusion > 0.5; //  >0.5 indicates impassable
}