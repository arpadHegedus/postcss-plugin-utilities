module.exports = (val) => {
    let regx = require('exact-regex');
    return regx(val, /steps\([1-9]([0-9]+)?\,[\s]+(start|end)\)/gi);
};