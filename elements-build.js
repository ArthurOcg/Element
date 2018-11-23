const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/element/runtime.js',
        './dist/element/polyfills.js',
        './dist/element/scripts.js',
        './dist/element/main.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/framework-poll.js');
    await fs.copyFile('./dist/element/styles.css', 'elements/styles.css')
    //await fs.copy('./dist/element/assets/', 'elements/assets/' )
    
})()