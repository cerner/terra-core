/*
TODO Look into this issue: https://github.com/storybooks/storybook/issues/1411 may need to update to v3.3.0-alpha to get this fixed
*/

const path = require('path');
const webpack = require('webpack');
const I18nAggregatorPlugin = require('../packages/terra-i18n-plugin/lib/I18nAggregatorPlugin.js');
const i18nSupportedLocales = require('../packages/terra-i18n/lib/i18nSupportedLocales.js');

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
          {
            loader: 'css-loader',
            options: { modules: true, importLoaders: 2 }
          },
          "postcss-loader",
          "sass-loader"
        ],
      }
    ]
  },
  plugins: [
    new I18nAggregatorPlugin({
      baseDirectory: path.resolve(__dirname, '../'),
      translationsDirectoryRouters: ['packages'],
      supportedLocales: i18nSupportedLocales,
    }),
    new webpack.NamedChunksPlugin(),
  ],
  resolve: {
    modules: [path.resolve(__dirname, '../aggregated-translations'), 'node_modules'],
  }
};
