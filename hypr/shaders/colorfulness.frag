// vim: set ft=glsl:
// Colorfulness filter shader

precision mediump float;
varying vec2 v_texcoord;
uniform sampler2D tex;

void main() {
    vec4 pixColor = texture2D(tex, v_texcoord);

    // Calculate average color
    float avgColor = (pixColor.r + pixColor.g + pixColor.b) / 3.0;

    // Increase colorfulness
    pixColor.rgb += 0.7 * (pixColor.rgb - vec3(avgColor));

    // Clamp color values to ensure they stay within the valid range
    pixColor = clamp(pixColor, vec4(0.0), vec4(1.0));

    gl_FragColor = pixColor;
}
