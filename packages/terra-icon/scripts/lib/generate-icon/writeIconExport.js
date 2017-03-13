'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var outputfile = _fs2.default.createWriteStream(_config.TerraIcon.iconExport + '.jsx', { flags: 'w' });

var writeIconExport = function writeIconExport(reactIconName) {
  return new Promise(function (resolve) {
    outputfile.write('export { default as ' + reactIconName + ' } from \'./icon/' + reactIconName + '\';\n');

    // eslint-disable-next-line no-console
    resolve(console.log('export { default as ' + reactIconName + ' } from \'./icon/' + reactIconName + '\';\n'));
  });
};

exports.default = writeIconExport;