'use strict';

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpack3 = require('../../terra-site/webpack.config');

var _webpack4 = _interopRequireDefault(_webpack3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.launchServer = function (done) {
  var compiler = void 0;
  if (process.env.WEBPACK_CONFIG_PATH) {
    /* eslint-disable global-require, import/no-dynamic-require */
    compiler = (0, _webpack2.default)(require(process.env.WEBPACK_CONFIG_PATH));
    /* eslint-enable global-require, import/no-dynamic-require */
  } else {
    compiler = (0, _webpack2.default)(_webpack4.default);
  }
  compiler.plugin('done', done);

  module.server = new _webpackDevServer2.default(compiler, {
    quiet: true
  });

  // module.server.on('connection', () => {
  //   console.log('Connection!!');
  // });

  // module.server.on('connect', () => {
  //   console.log('Connection!!');
  // });

  module.server.listen(8080, '0.0.0.0');
};

exports.closeServer = function (done) {
  module.server.close();
  done();
};