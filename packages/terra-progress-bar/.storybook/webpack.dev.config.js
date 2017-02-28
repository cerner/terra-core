const ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require('./webpack.config');
const path = require('path');

config.entry = {
    'ProgressBar': './public/index.jsx'
  };
config.resolve = {
  extensions: ["", ".js", ".jsx"],
};

config.output = {
  path: './public',
  filename: '[name].js',
  publicPath: '/',
  library: 'ProgressBar'
};

config.module.loaders.push(
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'react']
    }
  });

config.devServer = {
    contentBase: './public',
    inline: true,
    historyApiFallback: true,
  };

module.exports = config;
