import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

exports.launchServer = () => new Promise((resolve) => {
  let compiler;

  if (process.env.WEBPACK_CONFIG_PATH) {
    /* eslint-disable global-require, import/no-dynamic-require */
    compiler = webpack(require(process.env.WEBPACK_CONFIG_PATH));
    /* eslint-enable global-require, import/no-dynamic-require */
  } else {
    /* eslint-disable global-require, import/no-dynamic-require */
    compiler = webpack(require('../../terra-site/webpack.config'));
    /* eslint-enable global-require, import/no-dynamic-require */
  }

  compiler.plugin('done', resolve);

  module.server = new WebpackDevServer(compiler, {
    noInfo: true,
  });

  module.server.listen(8080, '0.0.0.0');
});

exports.closeServer = () => new Promise((resolve) => {
  if (module.server) {
    module.server.close(resolve());
  } else {
    resolve();
  }
});
