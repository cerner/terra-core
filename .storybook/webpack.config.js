//const config = require('../packages/terra-site/webpack.prod.config.js');

const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports =  {
  entry: {
    'babel-polyfill': 'babel-polyfill'
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        loaders: [
          "style-loader",
          { loader: 'css-loader', options: { modules: true, importLoaders: 2 } },
          "postcss-loader",
          "sass-loader"],
        include: [
          path.resolve(__dirname, '../'),
          path.resolve(path.join(__dirname, '..', 'node_modules'))
        ]
      }
    ]
  },
};
