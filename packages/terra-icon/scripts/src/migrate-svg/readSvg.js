const fs = require('fs');

const readSvg = csvObject => new Promise((resolve, reject) => {
  const objectCsv = Object.assign({}, csvObject);
  fs.readFile(objectCsv.svgSrc, 'utf-8', (error, svg) => {
    if (error) {
      reject(error);
    } else {
      objectCsv.svg = svg;
      resolve(objectCsv);
    }
  });
});

export default readSvg;
