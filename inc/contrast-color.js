/**
 * POSTCSS PLUGIN UTILITIES
 * CONTRAST COLOR
 * Get either black or white depending on a passed-in color
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let hexToRGB = require('./hex-to-rgb.js'),
    nameToHex = require('./name-to-hex.js');

// export plugin
module.exports = color => {
    if (typeof color === 'string') {
        if (color.indexOf('#') === -1 && color.indexOf('rgb(') === -1 && color.indexOf('rgba(') === -1) {
            let hex = nameToHex(color);
            if (hex) { color = hex; }
        }
        if (color.indexOf('#') >= 0) { color = hexToRGB(color); }
        else if (color.indexOf('rgb(') >= 0 || color.indexOf('rgba(') >= 0) {
            color = color.replace(/[^0-9\,]+/ig, '').split(',');
            color = {
                r: color[0],
                g: color[1],
                b: color[2]
            };
        }
    }
    if (typeof color == 'string') { return null; }
    let yiq = ((color.r * 299) + (color.g * 587) + (color.b * 114)) / 1000;
    return (yiq > 128) ? 'black' : 'white';
}