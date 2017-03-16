'use strict';

var fs = require('fs');

var writeSvg = function writeSvg(csvObject) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(csvObject.svgDest, csvObject.svg, 'utf-8', function (error) {
      if (error) {
        reject(error);
      } else {
        // eslint-disable-next-line no-console
        resolve(console.log('Created ' + csvObject.svgDest));
      }
    });
  });
};

module.exports = writeSvg;