import fs from 'fs';
import parseCsv from '../icon-utils/parseCsv';

parseCsv().then((jsonObj) => {
  /* eslint-disable no-console */
  fs.writeFile('src/icon-data.json', JSON.stringify(jsonObj), 'utf8', (err) => {
    if (err) { return console.log(err); }
    return console.log('icon-data.json file created in terra-icon/src.');
  });
  /* eslint-enable no-console */
});
