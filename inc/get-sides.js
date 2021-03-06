/**
 * POSTCSS PLUGIN UTILITIES
 * GET SIDES
 * Get sides information according to property rules
 * version          1.0.1
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let filterObject = require('./filter-object.js');


// export plugin
module.exports = (value, rules) => {
        
    // get the properties for each side
    let keys = { top: 'top', right: 'right', bottom: 'bottom', left: 'left' };
    for(let [prop, rule] of Object.entries(rules)) {
        if(prop.indexOf('top') >= 0) { keys.top = prop; }
        if(prop.indexOf('right') >= 0) { keys.right = prop; }
        if(prop.indexOf('bottom') >= 0) { keys.bottom = prop; }
        if(prop.indexOf('left') >= 0) { keys.left = prop; }
    }

    // filter object
    value = filterObject(value, rules);

    // fill opposite sides if they have value
    if(value.hasOwnProperty(keys.top) && !value.hasOwnProperty(keys.bottom)) {
        value[keys.bottom] = value[keys.top];
    }
    if(value.hasOwnProperty(keys.right) && !value.hasOwnProperty(keys.left)) {
        value[keys.left] = value[keys.right];
    }

    // remove null value properties
    for (let [prop, val] of Object.entries(value)) {
        if (val === 'null') { delete value[prop]; }
    }

    return value;
}