/**
 * POSTCSS PLUGIN UTILITIES
 * IS NUMBER
 * Check if a string is a number value
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let regx = require('exact-regex');

// export plugin
module.exports = (val) => {
    return regx(val, /(auto|(\-)?([0-9\.]+))/gi);
};