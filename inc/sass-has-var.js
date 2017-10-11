/**
 * POSTCSS PLUGIN UTILITIES
 * SASS HAS VAR
 * Check if sass variable exists
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// export plugin
module.exports = (variable, node) => {
    if (varaible.indexOf('$') === 0) { variable = variable.substring(1); }
    let parent = (node.parent) ? node.parent : null,
        v = false;
    if (parent) {
        parent.walkDecls(`$${v}`, decl => { v = true; });
        if (v) { return true; }
        return varExists(v, parent);
    }
    return false;
};