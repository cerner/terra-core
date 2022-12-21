/* eslint-disable compat/compat */
const fs = require('fs');
import path from 'path';
const { CernerOneIcons } = require('../config');

const readSvg = source => new Promise((resolve, reject) => {
  const filePath = path.join(CernerOneIcons.svgDir, source);
  fs.readFile(filePath, 'utf-8', (error, svg) => {
    if (error) {
      reject(error);
    } else {
      resolve(svg);
    }
  });
});

export default readSvg;
/* eslint-enable compat/compat */
