/**
 * POSTCSS PLUGIN UTILITIES
 * IS TIME
 * Check if a string is a time value
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let regx = require('exact-regex');

// export plugin
module.exports = (val) => {
    return regx(val, /([0-9\.]+)(s|ms)/gi);
};