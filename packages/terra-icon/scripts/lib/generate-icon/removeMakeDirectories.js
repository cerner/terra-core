'use strict';

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
var removeMakeDirectories = function removeMakeDirectories() {
  // Delete destination directory
  _shelljs2.default.rm('-rf', _config.TerraIcon.iconDir);

  // Create destination directories
  _shelljs2.default.mkdir(_config.TerraIcon.iconDir);
};

module.exports = removeMakeDirectories;