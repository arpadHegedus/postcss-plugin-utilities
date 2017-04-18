module.exports = (val) => {
    let filter      =   require('./filter-object.js'),
        isBezier    =   require('./is-bezier.js'),
        isProperty  =   require('./is-property.js'),
        isStep      =   require('./is-step.js'),
        isTime      =   require('./is-time.js'),
        postcss     =   require('postcss');
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