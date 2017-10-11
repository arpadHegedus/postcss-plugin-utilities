/**
 * POSTCSS PLUGIN UTILITIES
 * SASS GET VAR
 * Get the value of a sass variable
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// export plugin
module.exports = (variable, node) => {
    if (!variable || typeof variable !== 'string') { return null; }
    if (variable.indexOf('$') === 0) { variable = variable.substring(1); }
    let parent = (node.parent) ? node.parent : null,
        v = null;
    if (parent) {
        parent.walkDecls(`$${variable}`, decl => { v = decl.value; });
        if (v) { return v; }
        return module.exports(variable, parent);
    }
    return null;
};