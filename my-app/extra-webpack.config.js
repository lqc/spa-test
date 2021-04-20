const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const webpackMerge = require("webpack-merge");
const SystemJSPublicPathWebpackPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // singleSpaWebpackConfig.plugins.push(new SystemJSPublicPathWebpackPlugin({
  //   // ONLY NEEDED FOR WEBPACK 1-4. Not necessary for webpack@5
  //   systemjsModuleName: "@cxone/app1"
  // }));

  singleSpaWebpackConfig.externals.push(
    "rxjs",
    "rxjs/operators",
    'single-spa',
    'single-spa-angular',
    /^@angular\/.*/,
  );
  return singleSpaWebpackConfig;
};
