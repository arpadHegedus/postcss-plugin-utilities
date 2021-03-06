/**
 * POSTCSS PLUGIN UTILITIES
 * IS SIZE LIST
 * Check if a string is a list of sizes value
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let isSize  =   require('./is-size.js'),
    postcss =   require('postcss');

// export plugin
module.exports = (val) => {
    val = postcss.list.space(val);
    try {
        val.forEach((v) => {
            if(!isSize(v)) {
                throw false;
            }
        });
    } catch(r) { return r; }
    return true;
};