import fs from 'fs';
import path from 'path';
import jsdom from 'jsdom';
import Icon from './icon';

const parseSvg = filepath => new Promise((resolve, reject) => {
  const source = fs.readFileSync(filepath, 'utf-8');
  const name = path.parse(filepath).name;

  jsdom.env(source, (error, window) => {
    if (error) {
      reject(error);
    } else {
      resolve(new Icon(name, window.document.getElementsByTagName('svg')[0]));
    }
  });
});

export default parseSvg;
