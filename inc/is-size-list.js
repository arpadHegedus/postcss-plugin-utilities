module.exports = (val) => {
    let isSize  =   require('./is-size.js'),
        postcss =   require('postcss');
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