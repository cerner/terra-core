'use strict';

var _config = require('../config.js');

var shell = require('shelljs');


var removeMakeDirectories = function removeMakeDirectories() {

  // Delete destination directory
  shell.rm('-rf', _config.TerraIcon.svgDir);

  // Create destination directories
  shell.mkdir(_config.TerraIcon.svgDir);
};

module.exports = removeMakeDirectories;