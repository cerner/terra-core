'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _template = require('lodash/template');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * generateJsx - Takes an Icon object as input and returns a React component
 * @param {object} icon Icon object that stores svg attributes, children, and name
 */
var writeIcon = function writeIcon(reactIcon) {
  return new Promise(function (resolve, reject) {
    _fs2.default.writeFile(reactIcon.file, reactIcon.component, function (error) {
      if (error) {
        reject(error);
      } else {
        console.log('Created ' + reactIcon.name + ' at ' + reactIcon.file);
        resolve(reactIcon.name);
      }
    });
  });
};

exports.default = writeIcon;