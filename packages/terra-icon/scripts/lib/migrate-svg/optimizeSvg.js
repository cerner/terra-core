'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _svgo = require('svgo');

var _svgo2 = _interopRequireDefault(_svgo);

var _optimizeConfig = require('./optimizeConfig');

var _optimizeConfig2 = _interopRequireDefault(_optimizeConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var optimizeSvg = function optimizeSvg(csvObject) {
  return new Promise(function (resolve, reject) {
    var config = (0, _optimizeConfig2.default)(csvObject);
    var svgo = new _svgo2.default(config);

    svgo.optimize(csvObject.svg, function (result) {
      if (result.error) {
        reject(result.error);
      } else {
        csvObject.svg = result.data;
        resolve(csvObject);
      }
    });
    resolve(svgo);
  });
};

exports.default = optimizeSvg;