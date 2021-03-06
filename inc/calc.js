/**
 * POSTCSS PLUGIN UTILITIES
 * CALC
 * Do math on CSS sizes that have units
 * version          1.1.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let math = require('mathjs');

// export plugin
module.exports = (calculation, val, withUnit = true) => {
    let mainUnit = '', equals = null;
    val = (typeof val === 'string') ? { x: val } : val;
    Object.keys(val).forEach((key) => {
        if (typeof key === 'string') {
            let num = val[key],
                unit = null;
            if (typeof num === 'string') {
                num = parseFloat(val[key].match(/[\-]?[0-9\.]+/ig));
                unit = val[key].match(/(px|\%|em|rem|cm|mm|ch|pica|in|pt|pc|ex|vw|vh|vmin|vmax)/ig);
            }
            if (unit !== null && typeof unit !== 'undefined') { mainUnit = unit[0]; }
            while (calculation.indexOf(key) >= 0) { calculation = calculation.replace(key, num); }
        }
    });
    if (!withUnit) { mainUnit = ''; }
    equals = math.eval(calculation) + mainUnit;
    return equals;
};