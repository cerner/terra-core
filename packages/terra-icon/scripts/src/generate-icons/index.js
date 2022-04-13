/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import path from 'path';
import removeMakeDirectories from './removeMakeDirectories';
import parseSvg from './parseSvg';
import renderJsx from './renderJsx';
import writeIcon from './writeIcon';
import { TerraIcon } from '../config';
/* eslint-enable import/no-extraneous-dependencies */

removeMakeDirectories();

// get filepath for every svg
const svgs = fs.readdirSync(TerraIcon.svgDir)
// Only load svg files
  .filter(f => path.extname(f) === '.svg')
// // Resolve to absolute path
  .map(f => path.join(TerraIcon.svgDir, f));

/* eslint-disable no-console */
svgs.forEach((svg) => {
  parseSvg(svg)
    .then(renderJsx)
    .then(writeIcon)
    .catch(console.error);
});
