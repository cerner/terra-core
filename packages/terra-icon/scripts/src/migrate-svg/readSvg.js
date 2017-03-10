const fs = require('fs');

const readSvg = csvObject => new Promise((resolve, reject) => {
  fs.readFile(csvObject.svgSrc, 'utf-8', (error, svg) => {
    if (error) {
      reject(error);
    } else {
      csvObject.svg = svg;
      resolve(csvObject);
    }
  });
});

export default readSvg;
