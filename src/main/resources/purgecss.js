const uncss = require('uncss');
const fs = require('fs');

var files   = ['templates/**/*.html'],
    options = {
        banner       : false,
        // csspath      : '../static/css/',
        htmlroot     : 'templates',
        ignore       : ['#added_at_runtime', /test\-[0-9]+/],
        ignoreSheets : [/fonts.googleapis/],
        inject       : function(window) { window.document.querySelector('html').classList.add('no-csscalc', 'csscalc'); },
        jsdom        : {
            userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X)',
        },
        media        : ['(min-width: 700px) handheld and (orientation: landscape)'],
        raw          : 'h1 { color: green }',
        report       : false,
        strictSSL    : true,
        // stylesheets  : ['bulma.min.css'],
        timeout      : 1000,
        // uncssrc      : '.uncssrc',
        userAgent    : 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X)'
    };


uncss(files, options, function (error, output) {
  console.log(output);
  fs.writeFileSync("./static/css/bulma.purged.css", output)
});
