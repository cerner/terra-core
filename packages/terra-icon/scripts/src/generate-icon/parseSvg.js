/* eslint-disable import/no-extraneous-dependencies, compat/compat */
import jsdom from 'jsdom';
import fs from 'fs';
import path from 'path';
import Icon from './Icon';
/* eslint-enable import/no-extraneous-dependencies */

const parseSvg = filepath => new Promise((resolve, reject) => {
  const source = fs.readFileSync(filepath, 'utf-8');
  const { name } = path.parse(filepath);

  jsdom.env(source, (error, window) => {
    if (error) {
      reject(error);
    } else {
      resolve(new Icon(name, window.document.getElementsByTagName('svg')[0]));
    }
  });
});

export default parseSvg;
/* eslint-enable compat/compat */
