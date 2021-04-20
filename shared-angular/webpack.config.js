const ImportMapPlugin = require('webpack-import-map-plugin');
const package = require('./package.json');

const allDeps = Object.keys(package.dependencies);
const allDevDeps = Object.keys(package.devDependencies);
const angularDeps = allDeps.filter(s => s.startsWith('@angular/'))

function createDepsMap(keys) {
    const result = {};
    for(let key of keys) {
        const [scope, baseName] = key.split('/', 2);
        const entryPath = `./node_modules/${scope}/${baseName}/fesm2015/${baseName}.js`
        result[`${scope}__${baseName}`] = entryPath;
    }
    return result;
}

module.exports = {
  mode: 'production',
  entry: {
      ...createDepsMap(angularDeps),
      'single-spa-angular': './node_modules/single-spa-angular/fesm2015/single-spa-angular.js',
  },
  output: {
    libraryTarget: 'system',
  },
  externals: [
    'rxjs',
    'rxjs/operators',
    ...allDeps,
    ...allDevDeps,
  ],
  plugins: [
    new ImportMapPlugin({
      transformKeys: (filename) => {
        return filename.replace('__', '/').replace(/\.js$/, '');
      },
      fileName: 'angular-import-map.json',
      baseUrl: './',
    }),
  ],
  optimization: {
    minimize: true,
  },
  devServer: {
    port: 4210,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
