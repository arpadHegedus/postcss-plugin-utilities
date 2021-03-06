/**
 * POSTCSS PLUGIN UTILITIES
 * SASS HAS VAR
 * Check if sass variable exists
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// export plugin
module.exports = (variable, node) => {
  if (!variable || typeof variable !== "string") {
    return null;
  }
  if (variable.indexOf("$") === 0) {
    variable = variable.substring(1).split(" ")[0];
  }
  let parent = node.parent ? node.parent : null,
    v = false;
  if (parent) {
    parent.walkDecls(`$${variable}`, decl => {
      v = true;
    });
    if (v) {
      return true;
    }
    return module.exports(variable, parent);
  }
  return false;
};
