/* eslint-disable import/no-extraneous-dependencies */
import shell from 'shelljs';
import { TerraIcon } from '../config';

const removeMakeDirectories = () => {
  // Delete destination directory
  shell.rm('-rf', TerraIcon.iconDir);

  // Create destination directories
  shell.mkdir(TerraIcon.iconDir);
};

module.exports = removeMakeDirectories;
