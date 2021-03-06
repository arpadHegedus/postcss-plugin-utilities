/**
 * POSTCSS PLUGIN UTILITIES
 * IS TRANSITION
 * Check if a string is a transition value
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let filter      =   require('./filter-object.js'),
    isBezier    =   require('./is-bezier.js'),
    isProperty  =   require('./is-property.js'),
    isStep      =   require('./is-step.js'),
    isTime      =   require('./is-time.js'),
    postcss     =   require('postcss');

// export plugin
module.exports = (val) => {
    val = postcss.list.comma(val);
    try {
        val.forEach((v) => {
            v = postcss.list.space(v);
            let f = filter(v, {
                property: [isProperty, 'all'],
                duration: [isTime],
                delay: [isTime],
                timing: [isBezier, isStep, 'ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out']
            });
            if(
                v.length !== Object.keys(f).length 
                    ||
                !f.hasOwnProperty('property')
                    ||
                !f.hasOwnProperty('duration')
            ) { throw false }
        });
    } catch(r) { return r; }
    return true;
};