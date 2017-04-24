var postcss = require('postcss');
module.exports = (add, css, rule, decl = null, selector = null, beforeAfter = 'before', removeDecl = true, cleanRule = true) => {
    let toAdd = '';
    if(typeof add === 'string') { 
        toAdd = add; 
    } else {
        for(let [prop, value] of Object.entries(add)){ toAdd = toAdd + `${prop}: ${value};`; }
    }
    if(selector === rule.selector) { selector = null; }
    if(selector) {
        let newSelector = '',
            currentRule = rule,
            atSelector = false,
            ruleSelector = '';
        if(currentRule) {
            while(currentRule.type !== 'root') {
                if(currentRule.type === 'atrule') {
                    atSelector = `@${currentRule.name} ${currentRule.params}`;
                } else {
                    newRuleSelector = '';
                    postcss.list.comma(ruleSelector).forEach((slc) => {
                        let sprtr = (newRuleSelector === '')? '' : ',',
                            newRuleSub = '';
                        postcss.list.comma(currentRule.selector).forEach((sl) => {
                            let spr = (newRuleSub === '')? '' : ',';
                            newRuleSub = `${newRuleSub}${spr}${sl} ${slc}`;
                        });
                        newRuleSelector = `${newRuleSelector}${sprtr}${newRuleSub}`;
                    });
                    ruleSelector = newRuleSelector;
                }
                currentRule = currentRule.parent;
            }
        }
        postcss.list.comma(selector).forEach((select) => {
            let separator = (newSelector === '')? '' : ',';
            if(select.indexOf('&') !== -1) {
                let subSelector = '';
                postcss.list.comma(ruleSelector).forEach((sel) => {
                    let sep = (subSelector === '')? '' : ',';
                    sel = select.replace(/\&/ig, sel);
                    subSelector = `${subSelector}${sep}${sel}`;
                });
                select = subSelector;
            }
            newSelector = `${newSelector}${separator}${select}`;
        });
        newSelector = `${newSelector} { ${toAdd} }`;
        if(atSelector) { newSelector = `${atSelector} { ${newSelector} }`; }        
        selector = newSelector;
    }
    if(selector && beforeAfter == 'before') {
        css.insertBefore(rule, `${selector}`);
    } else if(selector && beforeAfter === 'after') {
        css.insertAfter(rule, `${selector}`);
    } else if(decl && beforeAfter === 'before') {
        rule.insertBefore(decl, toAdd);
    } else if(decl && beforeAfter === 'after') {
        rule.insertAfter(decl, toAdd);
    } else if(!decl && beforeAfter === 'before') {
        rule.prepend(toAdd);
    } else {
        rule.append(toAdd);
    }
    if(decl && removeDecl) { decl.remove(); }
    if(cleanRule && rule.nodes.length === 0) { rule.remove(); }
}