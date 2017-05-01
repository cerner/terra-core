'use strict';

var _parseCsv = require('./parseCsv');

var _parseCsv2 = _interopRequireDefault(_parseCsv);

var _generateThemeableIcons = require('./generateThemeableIcons');

var _generateThemeableIcons2 = _interopRequireDefault(_generateThemeableIcons);

var _generateStaticIcons = require('./generateStaticIcons');

var _generateStaticIcons2 = _interopRequireDefault(_generateStaticIcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies */

(0, _parseCsv2.default)().then(_generateStaticIcons2.default).then(_generateThemeableIcons2.default); /* eslint-disable import/no-extraneous-dependencies */