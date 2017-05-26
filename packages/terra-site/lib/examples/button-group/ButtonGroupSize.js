'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButtonGroup = require('terra-button-group');

var _terraButtonGroup2 = _interopRequireDefault(_terraButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroupSize = function ButtonGroupSize() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_terraButtonGroup2.default, {
        size: 'tiny',
        buttons: [_react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Tiny', key: 'tiny1' }), _react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Tiny', key: 'tiny2' })]
      })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_terraButtonGroup2.default, {
        size: 'small',
        buttons: [_react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Small', key: 'small1' }), _react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Small', key: 'small2' })]
      })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_terraButtonGroup2.default, {
        size: 'medium',
        buttons: [_react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Medium', key: 'medium1' }), _react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Medium', key: 'medium2' })]
      })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_terraButtonGroup2.default, {
        size: 'large',
        buttons: [_react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Large', key: 'large1' }), _react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Large', key: 'large2' })]
      })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_terraButtonGroup2.default, {
        size: 'huge',
        buttons: [_react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Huge', key: 'huge1' }), _react2.default.createElement(_terraButtonGroup2.default.Button, { text: 'Huge', key: 'huge2' })]
      })
    )
  );
};

exports.default = ButtonGroupSize;