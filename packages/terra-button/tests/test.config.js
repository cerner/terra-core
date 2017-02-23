/* eslint-disable import/no-extraneous-dependencies */

const config = require('../../../webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

function createPathForKey(key, ...endingDirectories) {
  config.entry[key] = path.join(__dirname, 'nightwatch', 'fixtures', ...endingDirectories);
}

function createWebpackPluginForKey(key) {
  return new HtmlWebpackPlugin({
    template: path.join(__dirname, 'nightwatch', 'fixtures', 'button-base.html'),
    chunks: [key],
    filename: `${key}.html`,
  });
}

createPathForKey('default', 'default', 'index');
createPathForKey('disabled', 'disabled', 'button', 'index');
createPathForKey('disabled-link', 'disabled', 'link', 'index');
createPathForKey('long-text', 'long-text', 'index');
createPathForKey('icon-default', 'icon', 'default', 'index');
createPathForKey('icon-only', 'icon', 'icon-only', 'index');
createPathForKey('icon-reversed', 'icon', 'icon-reversed', 'index');
createPathForKey('info', 'intent', 'info', 'index');
createPathForKey('negative', 'intent', 'negative', 'index');
createPathForKey('positive', 'intent', 'positive', 'index');
createPathForKey('primary', 'intent', 'primary', 'index');
createPathForKey('secondary', 'intent', 'secondary', 'index');
createPathForKey('warning', 'intent', 'warning', 'index');
createPathForKey('link', 'variant', 'link', 'index');
createPathForKey('outline', 'variant', 'outline', 'index');
createPathForKey('huge', 'size', 'huge', 'index');
createPathForKey('large', 'size', 'large', 'index');
createPathForKey('medium', 'size', 'medium', 'index');
createPathForKey('small', 'size', 'small', 'index');
createPathForKey('tiny', 'size', 'tiny', 'index');

config.plugins = config.plugins.concat([
  createWebpackPluginForKey('default'),
  createWebpackPluginForKey('disabled'),
  createWebpackPluginForKey('disabled-link'),
  createWebpackPluginForKey('long-text'),
  createWebpackPluginForKey('icon-default'),
  createWebpackPluginForKey('icon-only'),
  createWebpackPluginForKey('icon-reversed'),
  createWebpackPluginForKey('info'),
  createWebpackPluginForKey('negative'),
  createWebpackPluginForKey('positive'),
  createWebpackPluginForKey('primary'),
  createWebpackPluginForKey('secondary'),
  createWebpackPluginForKey('warning'),
  createWebpackPluginForKey('link'),
  createWebpackPluginForKey('outline'),
  createWebpackPluginForKey('huge'),
  createWebpackPluginForKey('large'),
  createWebpackPluginForKey('medium'),
  createWebpackPluginForKey('small'),
  createWebpackPluginForKey('tiny'),
]);
config.output = {
  filename: '[name].js',
  path: path.join(__dirname, 'dist'),
};

module.exports = config;
