import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../../terra-site/webpack.config';

exports.launchServer = (done) => {
  let compiler;
  if (process.env.WEBPACK_CONFIG_PATH) {
    /* eslint-disable global-require, import/no-dynamic-require */
    compiler = webpack(require(process.env.WEBPACK_CONFIG_PATH));
    /* eslint-enable global-require, import/no-dynamic-require */
  } else {
    compiler = webpack(config);
  }
  compiler.plugin('done', done);

  module.server = new WebpackDevServer(compiler, {
    quiet: true,
  });

  // module.server.on('connection', () => {
  //   console.log('Connection!!');
  // });

  // module.server.on('connect', () => {
  //   console.log('Connection!!');
  // });

  module.server.listen(8080, '0.0.0.0');
};

exports.closeServer = (done) => {
  module.server.close();
  done();
};
