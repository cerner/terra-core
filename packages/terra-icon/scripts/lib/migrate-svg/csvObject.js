'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../config');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var csvObject = function csvObject(name, filepath, themeable, bidi) {
  _classCallCheck(this, csvObject);

  this.name = name;
  this.svgSrc = 'node_modules/one-cerner-style-icons/' + filepath;
  this.svgDest = '' + _config.TerraIcon.svgDir + name + '.svg';
  this.isThemeable = !!themeable;
  this.isBidi = bidi === 'bi-directional';
  this.isSpin = name === 'spinner';
};

exports.default = csvObject;