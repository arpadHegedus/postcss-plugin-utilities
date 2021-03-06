/**
 * POSTCSS PLUGIN UTILITIES
 * IS URL
 * Check if a string is a url value
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let regx = require('exact-regex');

// export plugin
module.exports = (val) => {
    return regx(val, /url\([^\(\)]+\)/gi);
};