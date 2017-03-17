'use strict';

var _csvtojson = require('csvtojson');

var _csvtojson2 = _interopRequireDefault(_csvtojson);

var _removeMakeDirectories = require('./removeMakeDirectories');

var _removeMakeDirectories2 = _interopRequireDefault(_removeMakeDirectories);

var _csvObject = require('./csvObject');

var _csvObject2 = _interopRequireDefault(_csvObject);

var _readSvg = require('./readSvg');

var _readSvg2 = _interopRequireDefault(_readSvg);

var _optimizeSvg = require('./optimizeSvg');

var _optimizeSvg2 = _interopRequireDefault(_optimizeSvg);

var _writeSvg = require('./writeSvg');

var _writeSvg2 = _interopRequireDefault(_writeSvg);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies */

(0, _removeMakeDirectories2.default)(); /* eslint-disable import/no-extraneous-dependencies */


var csvHeaders = ['name', 'filepath', 'themeable', 'bidi'];

// Parse the csv file to json
(0, _csvtojson2.default)({ noheader: true, headers: csvHeaders }).fromFile(_config.TerraIcon.csvFile).on('json', function (jsonObj) {
  var csvObject = new _csvObject2.default(jsonObj.name, jsonObj.filepath, jsonObj.themeable, jsonObj.bidi);

  (0, _readSvg2.default)(csvObject).then(_optimizeSvg2.default).then(_writeSvg2.default)
  // eslint-disable-next-line no-console
  .catch(console.error);
});