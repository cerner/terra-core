/* eslint-disable import/no-extraneous-dependencies */

import removeMakeDirectories from './removeMakeDirectories';
import parseCsv from './parseCsv';
import generateIconAll from './generateIconAll';


/* eslint-enable import/no-extraneous-dependencies */

// removeMakeDirectories();

parseCsv()
.then(generateIconAll);

