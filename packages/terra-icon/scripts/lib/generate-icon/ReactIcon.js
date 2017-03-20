'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../config');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactIcon = function ReactIcon(name, component) {
  _classCallCheck(this, ReactIcon);

  this.name = name;
  this.file = '' + _config.TerraIcon.iconDir + name + '.jsx';
  this.component = component;
};

exports.default = ReactIcon;