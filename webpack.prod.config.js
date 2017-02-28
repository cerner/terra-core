// By default eslint assumes packages imported are supposed to be dependencies,
// not devDependencies. Disabling this rule in webpack.conig.js
/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');
const config = require('./webpack.config');
const CleanPlugin = require('clean-webpack-plugin');

// https://facebook.github.io/react/docs/optimizing-performance.html#use-the-production-build
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
}));

// Clean build before running
config.plugins.push(new CleanPlugin('build', { exclude: ['stats.json'] }));

// Create output file
config.output = {
  path: 'build',
  filename: '[name]-[hash].js',
};

module.exports = config;
