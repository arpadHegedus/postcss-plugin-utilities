module.exports = (val) => {
    let regx = require('exact-regex');
    return regx(val, /(auto|0|(\-)?([0-9\.]+)(px|\%|em|rem|cm|mm|ch|pica|in|pt|pc|ex|vw|vh|vmin|vmax))/gi);
};