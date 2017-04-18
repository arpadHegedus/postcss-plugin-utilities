module.exports = (val) => {
    let postcss =   require('postcss'),
        regx    =   require('exact-regex');
    val = postcss.list.comma(val);
    try {
        val.forEach((v) => {
            if(!regx(v, /(url\([^\(\)]+\)|alias|all-scroll|auto|cell|context-menu|col-resize|copy|crosshair|default|e-resize|ew-resize|grap|grabbing|help|move|n-resize|ne-resize|nesw-resize|ns-resize|nw-resize|nwse-resize|no-drop|none|not-allowed|pointer|progress|row-resize|s-resize|se-resize|sw-resize|text|w-resize|wait|wait|zoon-in|zoom-out|initial|inherit)/gi)) {
                throw false;
            }
        });
    } catch(r) { return r; }
    return true;
};