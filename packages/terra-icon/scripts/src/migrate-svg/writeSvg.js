/* eslint-disable compat/compat */
const fs = require('fs');
const path = require('path');
const { TerraIcon } = require('../config');

// Writes previously optimized svg markup to designated file in src/svg
const writeSvg = (fileName, svg) => new Promise((resolve, reject) => {
  const filePath = path.join(TerraIcon.svgDir, fileName);
  fs.writeFile(filePath, `${svg}\n`, 'utf-8', (error) => {
    if (error) {
      reject(error);
    } else {
      // eslint-disable-next-line no-console
      resolve(console.log(`Created ${filePath}`));
    }
  });
});

module.exports = writeSvg;
/* eslint-enable compat/compat */
