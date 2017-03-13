'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _csvtojson = require('csvtojson');

var _csvtojson2 = _interopRequireDefault(_csvtojson);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var csvHeaders = ['name', 'filepath', 'themeable', 'bidi'];

var parseCsv = function parseCsv() {
  return new Promise(function (resolve, reject) {
    // Parse the csv file to json
    (0, _csvtojson2.default)({ noheader: true, headers: csvHeaders }).fromFile(_config.TerraIcon.csvFile).transf(function (jsonObj) {
      // TODO: move transformation into it's own file
      jsonObj.componentName = 'Icon' + _lodash2.default.upperFirst(_lodash2.default.camelCase(jsonObj.name));
      jsonObj.filepath = '' + _config.TerraIcon.iconDir + jsonObj.componentName + '.jsx';
      jsonObj.themeable = !!jsonObj.themeable;
      jsonObj.bidi = jsonObj.bidi === 'bi-directional';
      jsonObj.spinner = jsonObj.name === 'IconSpinner';
      jsonObj.syntaxComponent = '<' + jsonObj.componentName + ' />';
      jsonObj.syntaxImport = 'import { ' + jsonObj.componentName + ' } from \'../' + _config.TerraIcon.iconExport + '\';\n';
    }).on('end_parsed', function (jsonObj) {
      resolve(jsonObj);
    }).on('error', function (error) {
      reject(error);
    });
  });
};

exports.default = parseCsv;