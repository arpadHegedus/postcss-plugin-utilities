module.exports = (val) => {
    let regx = require('exact-regex');
    return regx(val, /cubic\-bezier\(([\-0-9\.]+\,){2}[\-0-9\.]+\)/gi);
};