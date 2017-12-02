const Autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CustomProperties = require('postcss-custom-properties');
const path = require('path');
const PostCSSAssetsPlugin = require('postcss-assets-webpack-plugin');
const PostCSSCustomProperties = require('postcss-custom-properties');
const PostCssRTL = require('postcss-rtl');
const webpack = require('webpack');
const I18nAggregatorPlugin = require('../packages/terra-i18n-plugin/lib/I18nAggregatorPlugin.js');
const i18nSupportedLocales = require('../packages/terra-i18n/lib/i18nSupportedLocales.js');

module.exports =  {
  module: {
    rules: [
      {
        test: /.(scss|css)$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
              sourceMap: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
            },
            { loader: 'sass-loader' },
          ],
        })),
      }
    ]
  },
  plugins: [
    new I18nAggregatorPlugin({
      baseDirectory: path.resolve(__dirname, '../'),
      translationsDirectoryRouters: ['packages'],
      supportedLocales: i18nSupportedLocales,
    }),
    new ExtractTextPlugin('[name].css'),
    new PostCSSAssetsPlugin({
      test: /\.css$/,
      log: false,
      plugins: [
        Autoprefixer({
          browsers: [
            'ie >= 10',
            'last 2 versions',
            'last 2 android versions',
            'last 2 and_chr versions',
            'iOS >= 8',
          ],
        }),
        PostCssRTL(),
        PostCSSCustomProperties({ preserve: true }),
      ]
    }),
    new webpack.NamedChunksPlugin(),
  ],
  resolve: {
    modules: [path.resolve(__dirname, '../aggregated-translations'), 'node_modules'],
  }
};
