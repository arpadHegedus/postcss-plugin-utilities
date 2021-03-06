/**
 * POSTCSS PLUGIN UTILITIES
 * IS SIZE
 * Check if a string is a size value
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let regx = require('exact-regex');

// export plugin
module.exports = (val) => {
    return regx(val, /((\-)?([0-9\.]+)(px|\%|em|rem|cm|mm|ch|pica|in|pt|pc|ex|vw|vh|vmin|vmax)|auto|0)/gi);
};