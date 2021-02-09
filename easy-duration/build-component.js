const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
  const files = [
    './dist/easy-duration/runtime.js',
    './dist/easy-duration/polyfills.js',
    './dist/easy-duration/main.js'
  ];

  await fs.ensureDir('components');
  await concat(files, 'components/easy-duration.js');
}
build();
