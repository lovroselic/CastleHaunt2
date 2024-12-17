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
const vec3 innerLightColor = vec3(1.0, 1.0, 1.0);
const float innerAmbientStrength = 0.30;                        //0.30
const float innerDiffuseStrength = 15.0;                        //15.0
const float innerSpecularStrength = 5.0;                        //5.0

const float PL_AmbientStrength = 8.0;                           //8.0
const float PL_DiffuseStrength = 20.0;                          //20.0
const float PL_SpecularStrength = 2.5;                          //2.5

const float IGNORE_ALPHA = 0.2;
const int MAX_STEPS = 99;                                       // Max steps for raycasting loop - 99
const float EPSILON = 0.005;                                    // don't enter the wall, check for occlusion - 0.005
const float PL_AMBIENT_OCCLUSION = 0.225;                       // how much of ambient light gets through occlusion - 0.225
const float PL_DIFFUSE_OCCLUSION = 0.30;                        // how much of diffused light gets through occlusion - 0.30
const float PL_AMBIENT_ILLUMINATION_REDUCTION = 0.05;           // how much of ambient light gets through in reverse direction - 0.05
const float PL_DIFUSSE_ILLUMINATION_REDUCTION = 0.20;           // how much of ambient light gets through in reverse direction - 0.20
const float PL_DIFUSSE_LIGHT_HALO_REDUCTION = 0.80;             // intensity of light halo
const float ATTNF = 0.3;                                        // linear arrenuation factor 0.3
const float ATTNF2 = 0.75;                                      // quadratic attenuation factor 0.75
const float HATTNF = 1.5;                                       // light halo -- linear arrenuation factor - 0.1 -- 0.3
const float HATTNF2 = 5.0;                                      // light halo quadratic attenuation factor - 0.5 -->0.75
const float MAXLIGHT = 0.95;                                    // max contribution to avoid overburning; - 0.95
const float IGNORED_ATTN_DISTANCE = 0.012;                      // distance after attenuation starts taking effect - 0.012
const float ILLUMINATION_CUTOFF = 0.005;                        // remove flickering - 0.005
const float DISTANCE_LIGHT = 0.475;                             // force illumination near the light source 
const float LIGHT_POS_Y = 0.5;                                  // vertical light position change

vec3 CalcLight(vec3 lightPosition, vec3 FragPos, vec3 viewDir, vec3 normal, vec3 pointLightColor, float shininess, vec3 ambientColor, vec3 diffuseColor, vec3 specularColor, float ambientStrength, float diffuseStrength, float specularStrength, int inner, vec3 lightDirection);
bool Raycast(vec3 rayOrigin3D, vec3 rayTarget3D);
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
    float lightPosDistance = distance(lightPosition, FragPos);
    float lightDistance = distance(vec3(lightPosition.x, LIGHT_POS_Y, lightPosition.z), FragPos);
    vec3 lightDir = normalize(FragPos - lightPosition);
    vec3 directionOfOrthoLight = lightDirection;                                //it normal already!

    float invDistance = 1.0 / lightPosDistance;
    float attenuation = invDistance / (ATTNF + ATTNF2 * lightPosDistance);

    //is fragment illuminated by ligh source? omni dir is (128,128,128) so if x < 128.0 it is not omni dir, but directional!
    illumination = 1.0;
    if (inner == 0 && lightDirection.x < 128.0) {
        illumination = dot(lightDir, directionOfOrthoLight);               // considers only directional lights
    }

    bool occluded = Raycast(lightPosition, FragPos);

    bool isLight = false;
    if (lightDistance < DISTANCE_LIGHT) {
        isLight = true;
    }

    //ambient
    vec3 ambientLight = vec3(0.0);
    if (inner == 1) {
        ambientLight = pointLightColor * ambientStrength * ambientColor;
    } else {
        ambientLight = pointLightColor * ambientStrength * attenuation * ambientColor;
    }

    // Diffuse lighting  
    float diffLight = max(dot(normal, lightDir), 0.0);
    float diffView = max(dot(normal, viewDir), 0.0);
    float diff = 0.95 * diffLight + 0.05 * diffView;
    vec3 diffuselight = pointLightColor * diff * diffuseStrength * attenuation * diffuseColor;

    // specular shading
    vec3 reflectDir = reflect(-lightDir, normal);
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), shininess);
    vec3 specularLight = pointLightColor * spec * specularStrength * attenuation * specularColor;

    ambientLight = clamp(ambientLight, 0.0, MAXLIGHT);
    diffuselight = clamp(diffuselight, 0.0, MAXLIGHT);
    specularLight = clamp(specularLight, 0.0, MAXLIGHT);

    if (illumination < ILLUMINATION_CUTOFF) {
        if (isLight) {
            float invlightDistance = 1.0 / lightDistance;
            float attenuationHalo = invlightDistance / (HATTNF + HATTNF2 * lightDistance);
            diffuselight *= PL_DIFUSSE_LIGHT_HALO_REDUCTION * attenuationHalo;
        } else {
            diffuselight *= PL_DIFUSSE_ILLUMINATION_REDUCTION;
        }

        if (lightPosDistance > IGNORED_ATTN_DISTANCE) {
            ambientLight *= PL_AMBIENT_ILLUMINATION_REDUCTION;
        }
    } else if (occluded && inner == 0) {
        return PL_AMBIENT_OCCLUSION * ambientLight + PL_DIFFUSE_OCCLUSION * diffuselight;
    }

    return ambientLight + diffuselight + specularLight;
}

bool Raycast(vec3 rayOrigin3D, vec3 rayTarget3D) {
    vec2 origin = rayOrigin3D.xz;
    vec2 target = rayTarget3D.xz;

    vec2 deltaGrid = target - origin;
    vec2 step = sign(target - origin);
    vec2 gridOrigin = origin;
    vec2 gridTarget = worldToGridTexCoord(target - step * (1.0 + EPSILON));            // Adjusted target with directional offset so the target is reached when FragPOs is in the wall - iluminating wall    
    vec2 tDelta = abs(1.0 / max(abs(deltaGrid), vec2(EPSILON)));                  // How far to go in each direction to cross a grid line

    vec2 tMax;
    tMax.x = step.x > 0.0 ? (1.0 - fract(gridOrigin.x)) * tDelta.x : fract(gridOrigin.x) * tDelta.x;
    tMax.y = step.y > 0.0 ? (1.0 - fract(gridOrigin.y)) * tDelta.y : fract(gridOrigin.y) * tDelta.y;

    vec2 current = gridOrigin;

    for (int i = 0; i < MAX_STEPS; i++) {
        if (isOccluded(current)) {
            return true;
        }
        if ((step.x > 0.0 && current.x >= gridTarget.x) || (step.x < 0.0 && current.x <= gridTarget.x)) {
            if ((step.y > 0.0 && current.y >= gridTarget.y) || (step.y < 0.0 && current.y <= gridTarget.y)) {
                return false;                                                                   // Target reached
            }
        }
        if (tMax.x < tMax.y) {
            tMax.x += tDelta.x;
            current.x += step.x;
        } else {
            tMax.y += tDelta.y;
            current.y += step.y;
        }
    }
    return false;                               // No occlusion detected, target not reached
}

vec2 worldToGridTexCoord(vec2 position2D) {
    return vec2(floor(position2D.x), floor(position2D.y));
}

vec2 worldToNormalizedTexCoord(vec2 position2D) {
    return vec2(position2D.x / uGridSize.x, position2D.y / uGridSize.y);
}

bool isOccluded(vec2 position2D) {
    vec2 texCoord = worldToNormalizedTexCoord(position2D);
    float occlusion = texture2D(uOcclusionMap, texCoord).r; // Sample red channel
    return occlusion > 0.5; //  >0.5 indicates impassable
}