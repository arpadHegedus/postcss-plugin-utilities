module.exports = (val) => {
    let regx = require('exact-regex');
    return regx(val, /(auto|(\-)?([0-9\.]+))/gi);
};