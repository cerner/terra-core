'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies */

// remove current csv file
_shelljs2.default.rm('-r', _config.TerraIcon.csvFile); /* eslint-disable import/no-extraneous-dependencies */


_fs2.default.createReadStream(_config.CernerOneIcons.csvFile).pipe(_fs2.default.createWriteStream(_config.TerraIcon.csvFile));

// eslint-disable-next-line no-console
console.log('Copied ' + _config.CernerOneIcons.csvFile + ' to ' + _config.TerraIcon.csvFile);