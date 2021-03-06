/**
 * POSTCSS PLUGIN UTILITIES
 * IS BORDER
 * Check if a string is a border value
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
    if(val === '0') { return true; }
    val = postcss.list.space(val);
    try {
        let f = filter(val, {
            width: [isSize],
            style: ['none', 'hidden', 'dashed', 'dotted', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit'],
            color: [isColor]
        });
        if(val.length !== Object.keys(f).length && Object.keys(f).length === 3) { throw false }
    } catch(r) { return r; }
    return true;
};