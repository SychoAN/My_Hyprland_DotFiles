// vim: set ft=glsl:
// Increases vibrance in colors with reduced intensity

precision mediump float;
varying vec2 v_texcoord;
uniform sampler2D tex;

void main() {
    vec4 pixColor = texture2D(tex, v_texcoord);

    // Calculate the average of the RGB channels
    float avg = (pixColor.r + pixColor.g + pixColor.b) / 3.0;

    // Calculate the difference between the color and the average
    float diff = max(pixColor.r, max(pixColor.g, pixColor.b)) - avg;

    // Increase the saturation of the color with reduced intensity
    pixColor.rgb += 0.5 * diff;

    // Clamp color values to ensure they stay within the valid range
    pixColor = clamp(pixColor, vec4(0.0), vec4(1.0));

    gl_FragColor = pixColor;
}
