// By default eslint assumes packages imported are supposed to be dependencies,
// not devDependencies. Disabling this rule in webpack.conig.js
/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');

const path = require('path');
const Autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const I18nAggregatorPlugin = require('terra-i18n-plugin');
const i18nSupportedLocales = require('terra-i18n/lib/i18nSupportedLocales');
const CustomProperties = require('postcss-custom-properties');
const rtl = require('postcss-rtl');

module.exports = {
  entry: {
    'babel-polyfill': 'babel-polyfill',
    'terra-core': path.resolve(path.join(__dirname, 'src', 'Index')),
  },
  module: {
    loaders: [{
      test: /\.(jsx|js)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.json$/,
      loader: 'json-loader',
    },
    {
      test: /\.(scss|css)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true,
            importLoaders: 2,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        }, {
          loader: 'postcss-loader',
          options: {
            plugins() {
              return [
                Autoprefixer({
                  browsers: [
                    'ie >= 10',
                    'last 2 versions',
                    'last 2 android versions',
                    'last 2 and_chr versions',
                    'iOS >= 8',
                  ],
                }),
                CustomProperties(),
                rtl(),
              ];
            },
          },
        },
        {
          loader: 'sass-loader',
        }],
      }),
    },
    {
      test: /\.md$/,
      loader: 'raw-loader',
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader',
      ],
    },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name]-[hash].css'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      chunks: ['babel-polyfill', 'terra-core'],
    }),
    new I18nAggregatorPlugin({
      baseDirectory: __dirname,
      supportedLocales: i18nSupportedLocales,
    }),
    new webpack.NamedChunksPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'aggregated-translations'), 'node_modules'],

    // See https://github.com/facebook/react/issues/8026
    alias: {
      react: path.resolve(__dirname, 'node_modules', 'react'),
      'react-intl': path.resolve(__dirname, 'node_modules/react-intl'),
      moment: path.resolve(__dirname, 'node_modules/moment'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    },
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  devtool: 'cheap-source-map',
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: true,
      warnings: true,
    },
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  resolveLoader: {
    modules: [path.resolve(path.join(__dirname, 'node_modules'))],
  },
};
