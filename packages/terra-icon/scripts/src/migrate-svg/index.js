/* eslint-disable import/no-extraneous-dependencies */
import csv from 'csvtojson';
import removeMakeDirectories from './removeMakeDirectories';
import CsvObject from './csvObject';
import readSvg from './readSvg';
import optimizeSvg from './optimizeSvg';
import writeSvg from './writeSvg';
import { TerraIcon } from '../config';
/* eslint-enable import/no-extraneous-dependencies */

removeMakeDirectories();

const csvHeaders = ['name', 'filepath', 'themeable', 'bidi'];

// Parse the csv file to json
csv({ noheader: true, headers: csvHeaders }).fromFile(TerraIcon.csvFile).subscribe((jsonObj) => {
  const csvObject = new CsvObject(jsonObj.name, jsonObj.filepath, jsonObj.themeable, jsonObj.bidi);

  readSvg(csvObject)
    .then(optimizeSvg)
    .then(writeSvg)
    // eslint-disable-next-line no-console
    .catch(console.error);
});
