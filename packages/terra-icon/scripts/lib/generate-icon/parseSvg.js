'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _jsdom = require('jsdom');

var _jsdom2 = _interopRequireDefault(_jsdom);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parseSvg = function parseSvg(filepath) {
  return new Promise(function (resolve, reject) {
    var source = _fs2.default.readFileSync(filepath, 'utf-8');
    var name = _path2.default.parse(filepath).name;

    _jsdom2.default.env(source, function (error, window) {
      if (error) {
        reject(error);
      } else {
        resolve(new _icon2.default(name, window.document.getElementsByTagName('svg')[0]));
      }
    });
  });
};

exports.default = parseSvg;