const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // Feel free to modify this webpack config however you'd like to
  // singleSpaWebpackConfig.externals.push(...[
  //   '@kaz/utility',
  //   '@kaz/auth',
  //   '@angular/core',
  //   '@angular/animations',
  //   '@angular/common',
  //   '@angular/forms',
  //   '@angular/platform-browser',
  //   '@angular/platform-browser-dynamic',
  //   '@angular/router',
  //   '@angular/compiler'
  // ]);

  singleSpaWebpackConfig.externals.push('@kaz/utility');
  // singleSpaWebpackConfig.output.libraryTarget = 'system';
  // delete singleSpaWebpackConfig.output.library;
  console.log('DEBUG: webpack config in auth', singleSpaWebpackConfig)
  return singleSpaWebpackConfig;
};
