'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable import/no-extraneous-dependencies */


var _svgo = require('svgo');

var _svgo2 = _interopRequireDefault(_svgo);

var _optimizeConfig = require('./optimizeConfig');

var _optimizeConfig2 = _interopRequireDefault(_optimizeConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies */

var optimizeSvg = function optimizeSvg(csvObject) {
  return new Promise(function (resolve, reject) {
    var objectCsv = _extends({}, csvObject);
    var config = (0, _optimizeConfig2.default)(objectCsv);
    var svgo = new _svgo2.default(config);

    svgo.optimize(objectCsv.svg, function (result) {
      if (result.error) {
        reject(result.error);
      } else {
        objectCsv.svg = result.data;
        resolve(objectCsv);
      }
    });
    resolve(svgo);
  });
};

exports.default = optimizeSvg;