/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import shell from 'shelljs';
import { CernerOneIcons, TerraIcon } from '../config';
/* eslint-enable import/no-extraneous-dependencies */

// remove current csv file
shell.rm('-r', TerraIcon.csvFile);

fs.createReadStream(CernerOneIcons.csvFile).pipe(fs.createWriteStream(TerraIcon.csvFile));

// eslint-disable-next-line no-console
console.log(`Copied ${CernerOneIcons.csvFile} to ${TerraIcon.csvFile}`);
