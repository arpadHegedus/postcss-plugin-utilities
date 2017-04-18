module.exports = (val) => {
    let regx = require('exact-regex');
    return regx(val, /url\([^\(\)]+\)/gi);
};