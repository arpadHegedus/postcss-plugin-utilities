/**
 * POSTCSS PLUGIN UTILITIES
 * IS HTML
 * Check if a string is a html element
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let regx = require('exact-regex');

// export plugin
module.exports = (val) => {
    return regx(val, /^(abbr|acronym|address|applet|area|article|aside|audio|a|basefont|base|big|blink|blockquote|body|br|button|b|caption|canvas|command|center|cite|code|col|datalist|details|dfn|dir|div|dl|dt|dd|embed|em|figcaption|figure|footer|font|form|h1|h2|h3|h4|h5|h6|header|head|hgroup|hr|html|img|input|isindex|i|keygen|kbd|link|li|map|marquee|menu|meta|mark|meter|nav|ol|option|output|param|pre|progress|rp|rt|ruby|p|q|samp|section|summary|script|select|small|span|strikeout|strong|style|sub|sup|table|td|time|textarea|tbody|thead|th|tfoot|title|tr|tt|ul|u|video|var|wbr)/gi);
};