'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _removeMakeDirectories = require('./removeMakeDirectories');

var _removeMakeDirectories2 = _interopRequireDefault(_removeMakeDirectories);

var _parseSvg = require('./parseSvg');

var _parseSvg2 = _interopRequireDefault(_parseSvg);

var _renderJsx = require('./renderJsx');

var _renderJsx2 = _interopRequireDefault(_renderJsx);

var _writeIcon = require('./writeIcon');

var _writeIcon2 = _interopRequireDefault(_writeIcon);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies */

(0, _removeMakeDirectories2.default)();

// get filepath for every svg
/* eslint-disable import/no-extraneous-dependencies */
var svgs = _fs2.default.readdirSync(_config.TerraIcon.svgDir)
// Only load svg files
.filter(function (f) {
    return _path2.default.extname(f) === '.svg';
})
// // Resolve to absolute path
.map(function (f) {
    return _path2.default.join(_config.TerraIcon.svgDir, f);
});

svgs.forEach(function (svg) {
    (0, _parseSvg2.default)(svg).then(_renderJsx2.default).then(_writeIcon2.default);
});