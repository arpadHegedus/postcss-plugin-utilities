/**
 * POSTCSS PLUGIN UTILITIES
 * RGB TO HEX
 * Convert rgb colors to hex
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// export plugin
module.exports = (r, g, b) => {
    return "#" + ((1 << 24) + (parseInt(r) << 16) + (parseInt(g) << 8) + parseInt(b)).toString(16).slice(1);
}