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

/* eslint-enable import/no-extraneous-dependencies */

var csvHeaders = ['name', 'filepath', 'themeable', 'bidi']; /* eslint-disable import/no-extraneous-dependencies */


var parseCsv = function parseCsv() {
  return new Promise(function (resolve, reject) {
    // Parse the csv file to json
    (0, _csvtojson2.default)({ noheader: true, headers: csvHeaders }).fromFile(_config.TerraIcon.csvFile).transf(function (jsonObj) {
      // TODO: move transformation into it's own file
      /* eslint-disable  no-param-reassign */
      jsonObj.componentName = 'Icon' + _lodash2.default.upperFirst(_lodash2.default.camelCase(jsonObj.name));
      jsonObj.filepath = '' + _config.TerraIcon.iconDir + jsonObj.componentName + '.jsx';
      jsonObj.themeable = !!jsonObj.themeable;
      jsonObj.bidi = jsonObj.bidi === 'bi-directional';
      jsonObj.spinner = jsonObj.name === 'IconSpinner';
      jsonObj.syntaxComponent = '<' + jsonObj.componentName + ' height=\'2em\' width=\'2em\' />';
      jsonObj.syntaxImport = 'import ' + jsonObj.componentName + ' from \'terra-icon/lib/icon/' + jsonObj.componentName + '\';\n';
      /* eslint-enable  no-param-reassign */
    }).on('end_parsed', function (jsonObj) {
      resolve(jsonObj);
    }).on('error', function (error) {
      reject(error);
    });
  });
};

exports.default = parseCsv;