/**
 * POSTCSS PLUGIN UTILITIES
 * IS BOX SHADOW
 * Check if a string is a box shadow value
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let filter  =   require('./filter-object.js'),
    isColor =   require('./is-color.js'),
    isSize  =   require('./is-size.js'),
    postcss =   require('postcss');

// export plugin
module.exports = (val) => {
    val = postcss.list.comma(val);
    try {
        val.forEach((v) => {
            v = postcss.list.space(v);
            let f = filter(v, {
                inset: ['inset'],
                x: [isSize], y: [isSize], blur: [isSize],
                offset: [isSize],
                color: [isColor]
            });
            if(
                v.length !== Object.keys(f).length 
                    ||
                !f.hasOwnProperty('x') 
                    || 
                !f.hasOwnProperty('y') 
                    ||
                !f.hasOwnProperty('blur') 
                    ||
                !f.hasOwnProperty('color')
            ) { throw false }
        });
    } catch(r) { return r; }
    return true;
};