/**
 * POSTCSS PLUGIN UTILITIES
 * SASS FUNCTION
 * Parse a SASS function and call a JS function on it
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let parser = require('postcss-value-parser');

// parse function
function parse (value, funcName, func) {
    value = parser(value)
    value.walk(node => {
        if (node.type === 'function' && node.value = funcName) {
            let args = []
            node.nodes.forEach(n => { if (n.type === 'word') args.push(n.value) })
            node.type = 'word'
            node.value = func(...args)
        }
    })
    return value.toString()
}

// export plugin
module.exports = (css, funcName, func) => {
    css.walkAtRules(atrule => { atrule.params = parse(atrule.params, funcName, func) })
    css.walkDecls(decl => { decl.value = parse(decl.value, funcName, func) })
}