'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButtonGroup = require('terra-button-group');

var _terraButtonGroup2 = _interopRequireDefault(_terraButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroupCompact = function ButtonGroupCompact() {
  return _react2.default.createElement(_terraButtonGroup2.default, {
    isCompact: true,
    buttons: [_react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Compact', key: 'compact1' }), _react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Compact', key: 'compact2' })]
  });
};

exports.default = ButtonGroupCompact;