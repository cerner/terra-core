import fs from 'fs';
import parseCsv from '../icon-utils/parseCsv';

parseCsv().then((jsonObj) => {
  fs.writeFile('src/icon-data.json', JSON.stringify(jsonObj), 'utf8', (err) => {
    if (err) { return console.log(err); }
    console.log('icon-data.json file created in terra-icon/src.');
  });
});
