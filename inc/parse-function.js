/**
 * POSTCSS PLUGIN UTILITIES
 * PARSE FUNCTION
 * Parse a SASS OR CSS function and call a JS function on it
 * version          1.0.1
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let parser = require('postcss-value-parser');

// parse function
function parse (value, funcName, func, object) {
    value = parser(value)
    value.walk(node => {
        if (node.type === 'function' && node.value === funcName) {
            let args = [object]
            node.nodes.forEach(n => {
              if (n.type === 'function') args.push(parser.stringify(n))
              if (n.type === 'word' || n.type === 'string') args.push(n.value)
            })
            node.type = 'word'
            node.value = func(...args)
        }
    })
    return value.toString()
}

// export plugin
module.exports = (css, funcName, func) => {
    css.walkAtRules(atrule => { atrule.params = parse(atrule.params, funcName, func, atrule) })
    css.walkDecls(decl => { decl.value = parse(decl.value, funcName, func, decl) })
}