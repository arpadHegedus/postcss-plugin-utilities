/**
 * POSTCSS PLUGIN UTILITIES
 * GET RGB
 * Get an object of RGB and possibly A values from a color string
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let hexToRGB = require('./hex-to-rgb.js'),
    nameToHex = require('./name-to-hex.js');

// export plugin
module.exports = color => {
    if (color.startsWith('rgba')) {
        let rgba = { r: 0, g: 0, b: 0, a: 0 }
        color = color.replace('rgba(', '').replace(')', '').split(',')
        color.forEach((c, i) => {
            let key = 'r'
            if (i === 1) { key = 'g' } if (i === 2) { key = 'b' } if (i === 3) { key = 'a' }
            rgba[key] = parseFloat(c.trim())
        })
        return rgba
    }
    if (color.startsWith('rgb')) {
        let rgb = { r: 0, g: 0, b: 0 }
        color = color.replace('rgb(', '').replace(')', '').split(',')
        color.forEach((c, i) => {
            let key = 'r'
            if (i === 1) { key = 'g' } if (i === 2) { key = 'b' }
            rgb[key] = parseFloat(c.trim())
        })
        return rgb
    }
    if (!color.startsWith('#')) color = nameToHex(color)
    if (color.startsWith('#')) return hexToRGB(color)
    return color
}