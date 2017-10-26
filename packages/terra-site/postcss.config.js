/* eslint-disable import/no-extraneous-dependencies */
const Autoprefixer = require('autoprefixer');
const rtl = require('postcss-rtl');
const ThemingPlugin = require('./theming-plugin');

module.exports = {
  plugins() {
    return [
      Autoprefixer({
        browsers: [
          'ie >= 10',
          'last 2 versions',
          'last 2 android versions',
          'last 2 and_chr versions',
          'iOS >= 10',
        ],
      }),
      ThemingPlugin,
      rtl(),
    ];
  },
};
