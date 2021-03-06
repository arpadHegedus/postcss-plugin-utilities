/**
 * POSTCSS PLUGIN UTILITIES
 * IS STEP
 * Check if a string is a step value used in animations
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let regx = require('exact-regex');

// export plugin
module.exports = (val) => {
    return regx(val, /steps\([1-9]([0-9]+)?\,[\s]+(start|end)\)/gi);
};