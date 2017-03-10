const shell = require('shelljs');
import { TerraIcon } from '../config.js';

const removeMakeDirectories = () => {

  // Delete destination directory
  shell.rm('-rf', TerraIcon.svgDir);

  // Create destination directories
  shell.mkdir(TerraIcon.svgDir);
};

module.exports = removeMakeDirectories;
