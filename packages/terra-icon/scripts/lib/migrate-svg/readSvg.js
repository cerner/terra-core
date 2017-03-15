'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fs = require('fs');

var readSvg = function readSvg(csvObject) {
  return new Promise(function (resolve, reject) {
    var objectCsv = _extends({}, csvObject);
    fs.readFile(objectCsv.svgSrc, 'utf-8', function (error, svg) {
      if (error) {
        reject(error);
      } else {
        objectCsv.svg = svg;
        resolve(objectCsv);
      }
    });
  });
};

exports.default = readSvg;