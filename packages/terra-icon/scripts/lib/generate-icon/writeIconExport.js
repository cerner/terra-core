'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var fs = require('fs');

var outputfile = fs.createWriteStream('src/Icon.jsx', { flags: 'w' });

var writeIconExport = function writeIconExport(reactIconName) {
  return new Promise(function (resolve, reject) {
    outputfile.write('export { default as ' + reactIconName + ' } from \'./icon/' + reactIconName + '.jsx\';\n');
    resolve('matt');
  });
};

exports.default = writeIconExport;