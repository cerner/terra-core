'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButtonGroup = require('terra-button-group');

var _terraButtonGroup2 = _interopRequireDefault(_terraButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroupIntent = function ButtonGroupIntent() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_terraButtonGroup2.default, {
        buttons: [_react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Default', key: 'default1' }), _react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Default', key: 'default2' })]
      })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_terraButtonGroup2.default, {
        variant: 'secondary',
        buttons: [_react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Secondary', key: 'secondary1' }), _react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Secondary', key: 'secondary2' })]
      })
    )
  );
};

exports.default = ButtonGroupIntent;