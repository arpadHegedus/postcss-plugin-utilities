let addDecls        =   require('./add-decls.js'),
    filterObject    =   require('./filter-object.js'),
    isSize          =   require('./is-size.js'),
    postcss         =   require('postcss');
module.exports = (value, css, rule, decl = null, filter = { top: [ isSize ], right: [ isSize ], bottom: [ isSize ], left: [ isSize ] }, selector = null, beforeAfter = 'before', removeDecl = true, removeRule = true) =>  {
    let keys = { top: 'top', right: 'right', bottom: 'bottom', left: 'left' };
    for(let [p, v] of Object.entries(filter)) {
        if(p.indexOf('top') >= 0) { keys.top = p; }
        if(p.indexOf('right') >= 0) { keys.right = p; }
        if(p.indexOf('bottom') >= 0) { keys.bottom = p; }
        if(p.indexOf('left') >= 0) { keys.left = p; }
    }
    value = filterObject(value, filter);
    for(let [p, v] of Object.entries(value)) { if(v === 'null') { delete value[p]; } }
    if(value.hasOwnProperty(keys.top) && !value.hasOwnProperty(keys.bottom)) { value[keys.bottom] = value[keys.top]; }
    if(value.hasOwnProperty(keys.right) && ! value.hasOwnProperty(keys.left)) { value[keys.left] = value[keys.right]; }
    addDecls(value, css, rule, decl);
}