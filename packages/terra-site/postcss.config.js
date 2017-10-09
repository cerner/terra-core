/* eslint-disable import/no-extraneous-dependencies */
const Autoprefixer = require('autoprefixer');
const CustomProperties = require('postcss-custom-properties');
const rtl = require('postcss-rtl');
const ThemingPlugin = require('./theming-plugin');

module.exports = {
  plugins() {
    return [
      Autoprefixer({
        browsers: ['last 2 versions', 'iOS >= 10'],
      }),
      CustomProperties({ preserve: true, warnings: false }),
      ThemingPlugin,
      rtl(),
    ];
  },
};
