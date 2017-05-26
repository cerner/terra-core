'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButtonGroup = require('terra-button-group');

var _terraButtonGroup2 = _interopRequireDefault(_terraButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-alert
var onClick = function onClick() {
  return alert('Ive been clicked!');
};

var ButtonGroupOnClick = function ButtonGroupOnClick() {
  return _react2.default.createElement(_terraButtonGroup2.default, {
    buttons: [_react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Default', onClick: onClick, key: 'default1' }), _react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Default', onClick: onClick, key: 'default2' })]
  });
};

exports.default = ButtonGroupOnClick;