'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var svgoConfig = function svgoConfig(csvObject) {
  var classes = (0, _classnames2.default)({ 'is-spin': csvObject.isSpin }, { 'is-bidi': csvObject.isBidi });
  var config = {
    plugins: [{
      mergePaths: false
    }, {
      removeTitle: true
    }]
  };

  // if is-spin or is-bidi exists, add to svg
  if (classes) {
    config.plugins.push({ addClassesToSVGElement: { className: classes } });
  }

  return config;
};

exports.default = svgoConfig;