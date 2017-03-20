'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _template = require('lodash/template');

var _template2 = _interopRequireDefault(_template);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _ReactIcon = require('./ReactIcon');

var _ReactIcon2 = _interopRequireDefault(_ReactIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-extraneous-dependencies
var templatePath = _path2.default.join(__dirname, './template.txt');

/**
 * generateJsx - Takes an Icon object as input and returns a React component
 * @param {object} icon Icon object that stores svg attributes, children, and name
 */
var renderJsx = function renderJsx(icon) {
  return new Promise(function (resolve, reject) {
    _fs2.default.readFile(templatePath, 'utf-8', function (error, text) {
      if (error) {
        reject(error);
      } else {
        var compiled = (0, _template2.default)(text);
        resolve(new _ReactIcon2.default(icon.name, compiled({ icon: icon })));
      }
    });
  });
};

exports.default = renderJsx;