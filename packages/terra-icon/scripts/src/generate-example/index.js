/* eslint-disable import/no-extraneous-dependencies */
import parseCsv from './parseCsv';
import generateIconAll from './generateIconAll';
/* eslint-enable import/no-extraneous-dependencies */

parseCsv()
.then(generateIconAll);
