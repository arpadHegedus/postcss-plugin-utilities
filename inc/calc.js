var math = require('mathjs');
module.exports = (calculation, val) => {
    let mainUnit = '', equals = null;
    val = (typeof val === 'string')? {x: val} : val;
    Object.keys(val).forEach((key) => {
        if(typeof key === 'string') {
            let num = parseFloat(val[key].match(/[\-]?[0-9\.]+/ig)),
                unit = val[key].match(/(px|\%|em|rem|cm|mm|ch|pica|in|pt|pc|ex|vw|vh|vmin|vmax)/ig);
            if(unit !== null && typeof unit !== 'undefined') { mainUnit = unit[0]; }
            while(calculation.indexOf(key) >= 0) { calculation = calculation.replace(key, num); }
        }
    });
    equals = math.eval(calculation) + mainUnit;
    return equals;
};