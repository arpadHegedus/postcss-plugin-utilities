/**
 * POSTCSS PLUGIN UTILITIES
 * IS BEZIER
 * Check if a string is a cubic bezier value
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let regx = require('exact-regex');

// export plugin
module.exports = (val) => {
    return regx(val, /cubic\-bezier\(([\-0-9\.]+\,){2}[\-0-9\.]+\)/gi);
};