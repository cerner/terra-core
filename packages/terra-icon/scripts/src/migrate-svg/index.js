/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import csv from 'csvtojson';
import shell from 'shelljs';
import removeMakeDirectories from './removeMakeDirectories';
import CsvObject from './csvObject';
import readSvg from './readSvg';
import optimizeSvg from './optimizeSvg';
import writeSvg from './writeSvg';
import { CernerOneIcons, TerraIcon } from '../config.js';
/* eslint-enable import/no-extraneous-dependencies */

removeMakeDirectories();

const csvHeaders = ['name', 'filepath', 'themeable', 'bidi'];


// Parse the csv file to json
csv({ noheader: true, headers: csvHeaders }).fromFile(TerraIcon.csvFile).on('json', (jsonObj) => {
  const csvObject = new CsvObject(jsonObj.name, jsonObj.filepath, jsonObj.themeable, jsonObj.bidi);

  readSvg(csvObject)
    .then(optimizeSvg)
    .then(writeSvg)
    .catch(console.error);
});
