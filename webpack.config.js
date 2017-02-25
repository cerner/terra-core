// By default eslint assumes packages imported are supposed to be dependencies,
// not devDependencies. Disabling this rule in webpack.conig.js
/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'terra-ui': path.resolve(path.join(__dirname, 'site', 'Index')),
  },
  resolveLoader: {
    root: path.resolve(path.join(__dirname, 'node_modules')),
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.svg$/,
        loader: 'babel!terra-react-svg-loader',
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
      },
    ],
  },
  sassLoader: {
    data: `@import "${path.resolve(path.join(__dirname, 'node_modules/terra-legacy-theme/src/terra-legacy-theme.scss'))}"; @import "${path.resolve(path.join(__dirname, 'node_modules/terra-application/src/terra-application.scss'))}"; $terra-bidi: true;`,
  },
  plugins: [
    new ExtractTextPlugin('[name]-[hash].css'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'site', 'index.html'),
      chunks: ['terra-ui'],
    }),
  ],
  postcss: [
    autoprefixer({
      browsers: [
        'ie >= 10',
        'last 2 versions',
        'last 2 android versions',
        'last 2 and_chr versions',
        'iOS >= 8',
      ],
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
};
