module.exports = (values, rules, defaults = null) => {
    if(!Array.isArray(values)) { return null; }
    let filteredObject = {},
        usedKeys = [],
        usedVals = [];
    if(defaults && typeof defaults === 'object') { filteredObject = defaults; }
    for(let [key, value] of Object.entries(rules)) {
        values.forEach((val, ind) => {
            if(usedVals.indexOf(ind) < 0 && usedKeys.indexOf(key) < 0) {
                value.forEach((v) => {
                    if((typeof v === 'function' && v(val)) || (typeof v !== 'function') && v === val) {
                        filteredObject[key] = val;
                        usedKeys.push(key);
                        usedVals.push(ind);
                    }
                });
            }
        });
    }
    return filteredObject;
}