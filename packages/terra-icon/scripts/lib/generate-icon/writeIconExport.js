'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../config');

var fs = require('fs');


var outputfile = fs.createWriteStream(_config.TerraIcon.iconExport, { flags: 'w' });

var writeIconExport = function writeIconExport(reactIconName) {
  return new Promise(function (resolve, reject) {
    outputfile.write('export { default as ' + reactIconName + ' } from \'./icon/' + reactIconName + '.jsx\';\n');

    resolve(console.log('export { default as ' + reactIconName + ' } from \'./icon/' + reactIconName + '.jsx\';\n'));
  });
};

exports.default = writeIconExport;