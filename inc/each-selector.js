/**
 * POSTCSS PLUGIN UTILITIES
 * EACH SELECTOR
 * Apply a change to a list of selectors
 * version          1.0.1
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */
// load dependencies
let postcss = require('postcss');

// export plugin
module.exports = (selectors, update) => {
    let newSelector = '';
    postcss.list.comma(selectors).forEach(selector => {
        let separator = (newSelector === '') ? '' : ', ';
        newSelector += separator + update.split('&').join(selector);
    });
    return newSelector;
}