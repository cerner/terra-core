import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../../terra-site/webpack.config';

exports.launchServer = () => new Promise((resolve) => {
  let compiler;
  if (process.env.WEBPACK_CONFIG_PATH) {
    /* eslint-disable global-require, import/no-dynamic-require */
    compiler = webpack(require(process.env.WEBPACK_CONFIG_PATH));
    /* eslint-enable global-require, import/no-dynamic-require */
  } else {
    compiler = webpack(config);
  }
  compiler.plugin('done', resolve);

  module.server = new WebpackDevServer(compiler, {
    quiet: true,
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
