'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var fs = require('fs');

var readSvg = function readSvg(csvObject) {
  return new Promise(function (resolve, reject) {
    fs.readFile(csvObject.svgSrc, 'utf-8', function (error, svg) {
      if (error) {
        reject(error);
      } else {
        csvObject.svg = svg;
        resolve(csvObject);
      }
    });
  });
};

exports.default = readSvg;