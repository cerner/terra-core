/* eslint-disable import/no-extraneous-dependencies */
import csv from 'csvtojson';
import removeMakeDirectories from './removeMakeDirectories';
import CsvObject from './csvObject';
import readSvg from './readSvg';
import optimizeSvg from './optimizeSvg';
import writeSvg from './writeSvg';
import { TerraIcon, CernerOneIcons } from '../config';
import iconData from '../CernerOneIcons.json';
/* eslint-enable import/no-extraneous-dependencies */

removeMakeDirectories();

// Read
// Optimize
// Write

// For each icon in CernerOneIcons.json, optimize and copy corresponding svg
iconData.forEach(({fileName}) => {
  readSvg(fileName)
    .then(optimizeSvg)
    .then(svg => writeSvg(fileName, svg))
    // eslint-disable-next-line no-console
    .catch(console.error);
});
