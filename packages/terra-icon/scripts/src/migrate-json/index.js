/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import shell from 'shelljs';
import { CernerOneIcons, TerraIcon } from '../config';
/* eslint-enable import/no-extraneous-dependencies */

// remove current csv file
shell.rm('-r', TerraIcon.jsonFile);

fs.createReadStream(CernerOneIcons.jsonFile).pipe(fs.createWriteStream(TerraIcon.jsonFile));

// eslint-disable-next-line no-console
console.log(`Copied ${CernerOneIcons.jsonFile} to ${TerraIcon.jsonFile}`);
