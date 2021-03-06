/**
 * POSTCSS PLUGIN UTILITIES
 * REMOVE NODE
 * Recursively delete nodes
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// export plugin
module.exports = (node) => {
    let parent = node.parent;
    node.remove();
    if (parent && parent.nodes.lenght == 0) {
        module.exports(parent);
    }
};