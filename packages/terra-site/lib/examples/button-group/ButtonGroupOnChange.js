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
var onChange = function onChange() {
  return alert('My selected button changed!');
};

var ButtonGroupOnChange = function ButtonGroupOnChange() {
  return _react2.default.createElement(_terraButtonGroup2.default, {
    isSelectable: true,
    onChange: onChange,
    buttons: [_react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Selectable', key: 'selectable1' }), _react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Selectable', key: 'selectable2' })]
  });
};

exports.default = ButtonGroupOnChange;