/**
 * POSTCSS PLUGIN UTILITIES
 * IS PROPERTY
 * Check if a string is a CSS property value
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let regx = require('exact-regex');

// export plugin
module.exports = (val) => {
    return regx(val, /^((-webkit-|-moz-|-ms-|-o-)?(opacity|background-attachment|background-blend-mode|background-color|background-image|background-position|background-repeat|background-clip|background-origin|background-size|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-bottom|border-color|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-image|border-left-color|border-left-style|border-left-width|border-left|border-radius|border-right-color|border-right-style|border-right-width|border-right|border-style|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-top|border-width|box-decoration-break|box-shadow|clear|clip|display|float|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|min-height|min-width|overflow-x|overflow-y|overflow|padding-bottom|padding-left|padding-right|padding-top|visibility|vertical-align|z-index|hanging-punctuation|hyphens|letter-spacing|line-break|line-height|overflow-wrap|tab-size|text-align-last|text-align|text-combine-upright|text-indent|text-justify|text-transform|white-space|word-break|word-spacing|word-wrap|text-decoration-color|text-decoration-line|text-decoration-style|text-decoration|text-shadow|text-underline-position|font-family|font-feature-settings|font-kerning|font-language-override|font-size-adjust|font-size|font-stretch|font-style|font-synthesis|font-variant-alternates|font-variant-caps|font-variant-east-asian|font-variant-ligatures|font-variant-numeric|font-variant-position|font-variant|font-weight|font|direction|text-orientation|text-combine-upright|unicode-bidi|writing-mode|break-after|break-before|break-inside|column-count|column-fill|column-gap|column-rule-color|column-rule-style|column-rule-width|column-rule|column-span|column-width|columns|widows|orphans|page-break-after|page-break-before|page-break-inside|image-orientation|image-rendering|image-resolution|object-fit|object-position|position|color|width|height|top|left|right|bottom|background|padding|margin|border))/gi);
};