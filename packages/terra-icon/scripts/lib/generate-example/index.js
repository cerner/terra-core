'use strict';

var _removeMakeDirectories = require('./removeMakeDirectories');

var _removeMakeDirectories2 = _interopRequireDefault(_removeMakeDirectories);

var _parseCsv = require('./parseCsv');

var _parseCsv2 = _interopRequireDefault(_parseCsv);

var _generateIconAll = require('./generateIconAll');

var _generateIconAll2 = _interopRequireDefault(_generateIconAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies */

// removeMakeDirectories();

(0, _parseCsv2.default)().then(_generateIconAll2.default); /* eslint-disable import/no-extraneous-dependencies */