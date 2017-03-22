'use strict';

var _parseCsv = require('./parseCsv');

var _parseCsv2 = _interopRequireDefault(_parseCsv);

var _generateIconAll = require('./generateIconAll');

var _generateIconAll2 = _interopRequireDefault(_generateIconAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies */

/* eslint-disable import/no-extraneous-dependencies */
(0, _parseCsv2.default)().then(_generateIconAll2.default);