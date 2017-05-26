'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonStyle = { margin: '5px' };

var ButtonVariant = function ButtonVariant() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_terraButton2.default, { text: 'Default', style: buttonStyle }),
    _react2.default.createElement(_terraButton2.default, { text: 'Primary', variant: 'primary', style: buttonStyle }),
    _react2.default.createElement(_terraButton2.default, { text: 'Secondary', variant: 'secondary', style: buttonStyle }),
    _react2.default.createElement(_terraButton2.default, { text: 'Link', variant: 'link', style: buttonStyle })
  );
};

exports.default = ButtonVariant;