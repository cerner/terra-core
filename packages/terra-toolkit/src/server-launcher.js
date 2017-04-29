import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import shell from 'shelljs';
import path from 'path';

exports.launchServer = () => new Promise((resolve) => {
  let compiler;

  // After migrating from webpack 1 to webpack 2
  // webpack can't find correct devDependencies modules directory
  // A quick solution is to switch working directory to terra-site
  // and make all modules available.
  // Switch to terra site directory
  const curDir = path.resolve(process.cwd());
  shell.cd(path.resolve(__dirname, '../../terra-site'));

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
    quiet: true,
  });

  module.server.listen(8080, '0.0.0.0');
  // Switch back to previous directory
  shell.cd(curDir);
});

exports.closeServer = () => new Promise((resolve) => {
  if (module.server) {
    module.server.close(resolve());
  } else {
    resolve();
  }
});
