// const purgecss = require('purgecss')
// const fs = require('fs');



// const purgecssConfig = {
//   content: ['./templates/**/*.html', './static/**/*.js'], // The files to scan for used classes
//   css: ['./static/css/bulma.min.css'], // The CSS framework file to extract classes from
// }

// let purge = new purgecss.PurgeCSS
// const result = purge.extractSelectorsFromFiles(purgecssConfig.content, purgecssConfig.css)

// // Write the new CSS file with only the used classes

// console.log(result)

// // fs.writeFileSync('./static/css/bulma.purged.css', JSON.stringify(result))



// const { PurgeCSS } = require("postcss-purgecss");


// const purgecssConfig = {
//   content: ['./templates/**/*.html', './static/**/*.js'], // The files to scan for used classes
//   css: ['./static/css/bulma.min.css'], // The CSS framework file to extract classes from
//   output: './static/css/bulma.purged.css'
// }

// async function run() {
//     const purgeCSSResult = await new PurgeCSS().purge({
//         content: ['index.html', '**/*.js', '**/*.html', '**/*.vue'],
//         css: ['static/css/bulma.min.css'],
//         output: ['static/css/bulma.purged.css']
//     })
// }
// run()



const cssPurge = require('css-purge');

const OPTIONS = {
    zero_ignore_declaration: [],
    zero_units: []
  };

  //purging a CSS file with HTML and options
  cssPurge.purgeCSSFiles({}, 'config_css.json');








