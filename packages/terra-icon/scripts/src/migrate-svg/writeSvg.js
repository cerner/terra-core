/* eslint-disable compat/compat */
const fs = require('fs');

const writeSvg = (csvObject) => new Promise((resolve, reject) => {
  fs.writeFile(csvObject.svgDest, csvObject.svg, 'utf-8', (error) => {
    if (error) {
      reject(error);
    } else {
      // eslint-disable-next-line no-console
      resolve(console.log(`Created ${csvObject.svgDest}`));
    }
  });
});

module.exports = writeSvg;
/* eslint-enable compat/compat */
