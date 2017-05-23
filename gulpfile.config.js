/*
 * GULP TASKS CONFIGURATION
 * This file contains the variables used in gulp tasks.
 */

'use strict';

var path = require('path');
var gutil = require('gulp-util');
var fs = require('fs');
var bower = JSON.parse(fs.readFileSync('.bowerrc', 'utf8'));
var HttpsProxyAgent = require('https-proxy-agent');

/**
 * The main paths of your project, handle these with care.
 */
exports.paths = {
  src: 'sources',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e',
  main: 'main',
  bower: bower.directory
};

/**
 * Sass include paths.
 */
exports.sassIncludePaths = [
  bower.directory,
  exports.paths.src,
  path.join(exports.paths.src, exports.paths.main),
  path.join(bower.directory, 'bootstrap-sass/assets/stylesheets/')
];

/**
 * Default build environment, see docs/build-environments.md for more info.
 */
exports.defaultBuildEnvironment = 'production';

/**
 * Extra files that will be copied as-is in the dist folder.
 * Each entry is an object with the form:
 * {
 *   basePath: <files path will be relative to this directory>,
 *   files: <array of minimatch patterns>
 * }
 */
exports.extraFiles = [];

/**
 * Code coverage exclusions for unit tests.
 */
exports.coverageExclusions = [
  '.spec.ts$',        // unit tests
  '.controller.ts$',  // controllers, as we prefer to test them using end-to-end tests
];

/**
 * API proxy configuration.
 * With the given example, HTTP request to like $http.get('/api/stuff') will be automatically proxified
 * to the specified server.
 * Multiple endpoints can be configured here.
 *
 * For more details and option, see https://github.com/chimurai/http-proxy-middleware/
 */
exports.backendProxy = [
  {
    context: '/api',
    options: {
      pathRewrite: {'^/api': ''},
      target: 'http://api.icndb.com',
      changeOrigin: true
    }
  }
];

/**
 * Wiredep is the lib which inject bower dependencies in your project.
 * Mainly used to inject script tags in the index.html but also used to inject css preprocessor
 * deps and js files in karma.
 */
exports.wiredep = {
  exclude: [],
  directory: bower.directory,
  bowerJson: require('./bower.json')
};

/**
 * Configures a corporate proxy agent for the API proxy.
 */
exports.corporateProxyAgent = function() {
  var agent = null;
  var proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;

  if (proxyServer) {
    agent = new HttpsProxyAgent(proxyServer);
    gutil.log(gutil.colors.cyan('Using corporate proxy server: ' + proxyServer));
  }

  return agent;
};

/**
 * Common implementation for an error handler of a gulp plugin.
 */
exports.errorHandler = function(title, skipEnd) {
  return function(err) {
    if (title) {
      gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    }
    if (!skipEnd) {
      this.emit('end');
    }
  };
};
