/**
 * get the value of a sass variable
 * @param {string} variable 
 * @param {object} node 
 */

function gather (variable, node) {
  if (node.parent) {
    let values = []
    for (let n of Object.values(node.parent.nodes)) {
      if (n.type === 'decl' && n.prop === `$${variable}`) {
        values.push(n.value)
      }
    }
    values.reverse()
    let parentValues = node.parent.parent ? gather(variable, node.parent) : null
    if (parentValues) {
      values = values.concat(parentValues)
    }
    return values
  }
  return null
}

module.exports = (variable, node) => {
  if (!variable || typeof variable !== 'string' || !node || typeof node !== 'object') return null
  if (variable.indexOf('$') === 0) variable = variable.substring(1)
  let value = null
  let values = gather(variable, node)
  if (!values) return null
  console.log(values)
  values.some(v => {
    value = v
    if (!value.endsWith('!default')) { return value }
  })
  return value
}
