'use strict';

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.launchServer = function () {
  return new Promise(function (resolve) {
    var compiler = void 0;

    // After migrating from webpack 1 to webpack 2
    // webpack can't find correct devDependencies modules directory
    // A quick solution is to switch working directory to terra-site
    // and make all modules available.
    // Switch to terra site directory
    var curDir = _path2.default.resolve(process.cwd());
    _shelljs2.default.cd(_path2.default.resolve(__dirname, '../../terra-site'));

    if (process.env.WEBPACK_CONFIG_PATH) {
      /* eslint-disable global-require, import/no-dynamic-require */
      compiler = (0, _webpack2.default)(require(process.env.WEBPACK_CONFIG_PATH));
      /* eslint-enable global-require, import/no-dynamic-require */
    } else {
      /* eslint-disable global-require, import/no-dynamic-require */
      compiler = (0, _webpack2.default)(require('../../terra-site/webpack.config'));
      /* eslint-enable global-require, import/no-dynamic-require */
    }

    compiler.plugin('done', resolve);

    module.server = new _webpackDevServer2.default(compiler, {
      quiet: true
    });

    module.server.listen(8080, '0.0.0.0');
    // Switch back to previous directory
    _shelljs2.default.cd(curDir);
  });
};

exports.closeServer = function () {
  return new Promise(function (resolve) {
    if (module.server) {
      module.server.close(resolve());
    } else {
      resolve();
    }
  });
};