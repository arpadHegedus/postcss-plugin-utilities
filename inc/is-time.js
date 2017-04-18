module.exports = (val) => {
    let regx = require('exact-regex');
    return regx(val, /([0-9\.]+)(s|ms)/gi);
};