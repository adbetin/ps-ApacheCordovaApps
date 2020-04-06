const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/angular9-poc/runtime-es5.js',
    './dist/angular9-poc/polyfills-es5.js',
    //'./dist/angular9-poc/scripts-es5.js',
    './dist/angular9-poc/main-es5.js',
  ];
  const filterFonts = (path) => {
    const fontExtensions = /\.(woff2|woff|ttf|svg|eot)$/i;

    if (path === './dist/angular9-poc') {
      return true;
    } else {
      return fontExtensions.test(path);
    }
  };

  // valida la existencia del directorio
  await fs.ensureDir('www');
  await fs.emptyDir('www');
  // concatena todos los archivos en un bundle
  // await concat(files, './www/js/app-bundle.js');
  // copia los estilos hacia un solo archivo
  // await fs.copyFile('./dist/angular9-poc/styles.css', 'www/css/styles.css');
  // copia los archivos de fuentes hacia el objetivo
  // await fs.copy('./dist/angular9-poc', 'www', { filter: filterFonts });
  // copia los assets de fuentes hacia el objetivo
  //await fs.copy('./dist/angular9-poc/assets', 'www/assets');


  //copiar todo
  await fs.copy('./dist/angular9-poc', 'www');
})()