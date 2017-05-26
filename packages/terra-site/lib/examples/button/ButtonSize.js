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

var ButtonSize = function ButtonSize() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_terraButton2.default, { size: 'tiny', text: 'Tiny button', style: buttonStyle }),
    _react2.default.createElement(_terraButton2.default, { size: 'small', text: 'Small button', style: buttonStyle }),
    _react2.default.createElement(_terraButton2.default, { size: 'medium', text: 'Medium button', style: buttonStyle }),
    _react2.default.createElement(_terraButton2.default, { size: 'large', text: 'Large button', style: buttonStyle }),
    _react2.default.createElement(_terraButton2.default, { size: 'huge', text: 'Huge button', style: buttonStyle })
  );
};

exports.default = ButtonSize;