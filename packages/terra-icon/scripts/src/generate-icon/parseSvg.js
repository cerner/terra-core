/* eslint-disable import/no-extraneous-dependencies, compat/compat */
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import Icon from './Icon';
/* eslint-enable import/no-extraneous-dependencies */

const parseSvg = filepath => new Promise((resolve) => {
  const source = fs.readFileSync(filepath, 'utf-8');
  const { name } = path.parse(filepath);

  const { document } = new JSDOM(source).window;
  const icon = new Icon(name, document.querySelector('svg'));

  resolve(icon);
});

export default parseSvg;
/* eslint-enable compat/compat */
