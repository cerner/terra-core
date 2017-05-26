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

var ButtonDisabled = function ButtonDisabled() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_terraButton2.default, { text: 'Disabled Button', isDisabled: true, style: buttonStyle }),
    _react2.default.createElement(_terraButton2.default, { text: 'Disabled Primary', variant: 'primary', isDisabled: true, style: buttonStyle }),
    _react2.default.createElement(_terraButton2.default, { text: 'Disabled Secondary', variant: 'secondary', isDisabled: true, style: buttonStyle }),
    _react2.default.createElement(_terraButton2.default, { text: 'Disabled Link', variant: 'link', isDisabled: true, style: buttonStyle })
  );
};

exports.default = ButtonDisabled;