A list of utilities for creating [PostCSS] plugins

[PostCSS]: https://github.com/postcss/postcss
[Gulp]: https://github.com/gulpjs/gulp
[exact-regex]: https://github.com/arpadHegedus/exact-regex.git
[overwrite-object]: https://github.com/arpadHegedus/overwrite-object.git
[mathjs]: http://mathjs.org/


## Installation

```
npm install postcss-plugin-utilities
```

## Utilities

### calc(calculation, values, return_with_units = true)

Do calculations on css (uses [mathjs])

Example:
```js
let util = require('postcss-plugin-utilities'),
    width = '1600px',
    height = util.calc('x/16*9', width); 
    // height will be 900px
```

### contrastColor(color)

Returns either black or white depending on contrasting a color. Useful for calculating overlay text color for an unknown background-color.

### eachSelector(selector, update)

Updates a selector with SASS like syntax

Example:
```js
let util = require('postcss-plugin-utilities'),
    selector = 'p, ul, ol',
    newSelector = util.eachSelector(selector, '&:before');
    // newSelector will be 'p:before, ul:before, ol:before'
```

### filterObject(values, rules, defaults = null)

Go through an array and filter the values as per set rules and falling back to defaults.

Example:
```js
let util = require('postcss-plugin-utilities'),
    values = ['20px', 'center', 'black'],
    theObject = util.filterObject(values, {
        // rules are set up using an object, 
        // the values being an array of correct values 
        // or a validation function
        align: ['left', 'right', 'center'], // left, right or center are accepted values
        blackOrWhite: [(testingValue) => { // a function can be passedin to validate
            if(['black', 'white'].indexOf(testingValue) >= 0) { return true; }
            return false;
        }],
        size: [util.isSize], // we can also link in functions for validation
        shadow: [util.isBoxShadow]
    }, {
        // a set of defaults can be passed in as well
        size: '30px',
        shadow: '1px 1px 1px black'
    });
    // theObject will result in
    // {
    //     align: 'center',
    //     blackOrWhite: 'black',
    //     size: '20px',
    //     shadow: '1px 1px 1px black'
    // }
```

### getRGB(color)

Get an object of RGB and possibly A values from a color string

### getSides(values, rules)

Wrap filter object and return sides values the same way as margin and padding works in CSS

Example:
```js
let util = require('postcss-plugin-utilities'),
    values = ['20px', '10px'],
    sides = util.getSides(values, {
        'border-top': [util.isSize],
        'border-right': [util.isSize],
        'border-bottom': [util.isSize],
        'border-left': [util.isSize]
    });
    // sides will equal to
    // {
    //     'border-top': '20px',
    //     'border-right': '10px',
    //     'border-bottom': '20px',
    //     'border-left': '10px',
    // }
```

### hexToRGB(hexValue)

Convert a hex color to RGB

### isBezier(value)

Returns true if a value is a valid bezier

### isBorder(value)

Return true if a value is a valid border

### isBoxShadow(value)

Return true if a value is a valid box-shadow

### isColor(value)

Return true if a value is a valid color

### isCursor(value)

Return true if a value is a valid cursor

### isHTML(value)

Return true if a value is a valid HTML element

### isNumber(value)

Return true if a value is a valid number (unitless)

### isProperty(value)

Return true if a value is a valid CSS property

### isRegex(value, regex)

Checks if a value matches a regex (uses [exact-regex])

### isSizeList(value)

Return true if a value is a valid CSS size list (eg.: padding, margin)

### isSize(value)

Return true if a value is a valid CSS size

### isStep(value)

Return true if a value is a valid CSS animation step

### isTextShadow(value)

Return true if a value is a valid text-shadow

### isTime(value)

Return true if a value is a valid time (eg.: 3s)

### isTransition(value)

Check if a string is a transition value

### isURL(value)

Return true if a value is a valid CSS URL

### nameToHex(colorName)

Convert a named color to its hex value

### overwrite(valuesObj, defaultObj)

Merge two arrays with the same properties to be overwritten with values (uses [overwrite-object])

### removeNode(node)

Recursively delete nodes

### rgbToHex(rgbValue)

Convert an RGB value to its hex value

### sassFunction(nodes, funcName, func)

Parse a SASS function and call a JS function on it

### sassGetVar(variable, node)

Get the value of a sass variable

### sassHasVar(variable, node)

Check if sass variable exists