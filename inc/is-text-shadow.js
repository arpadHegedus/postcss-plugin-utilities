module.exports = (val) => {
    let filter  =   require('./filter-object.js'),
        isColor =   require('./is-color.js'),
        isSize  =   require('./is-size.js'),
        postcss =   require('postcss');
    val = postcss.list.comma(val);
    try {
        val.forEach((v) => {
            v = postcss.list.space(v);
            let f = filter(v, {
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