'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var display1 = _react2.default.createElement(
  'p',
  { key: '1' },
  'display1display1display1display1display1display1display1display1display1display1display1display1display1display1'
);
var display2 = _react2.default.createElement(
  'p',
  { key: '2' },
  'display2display2display2display2display2display2display2display2display2display2display2display2display2display2'
);
var display3 = _react2.default.createElement(
  'p',
  { key: '3' },
  'display 3'
);
var display4 = _react2.default.createElement(
  'p',
  { key: '4' },
  'display 4'
);
var display5 = _react2.default.createElement(
  'p',
  { key: '5' },
  'display 5'
);
var display6 = _react2.default.createElement(
  'p',
  { key: '6' },
  'display 6'
);

var displays1 = [display1, display2, display3, display4, display5, display6];
var displays2 = displays1;
var displays3 = displays1;

var button1 = _react2.default.createElement(_terraButton2.default, { text: 'header button' });

var container = function container() {
  return _react2.default.createElement(
    'div',
    { style: { height: '200px', overflow: 'auto' } },
    _react2.default.createElement(
      _terraContentContainer2.default,
      { header: button1, fill: true },
      _react2.default.createElement(
        'div',
        { key: '1' },
        displays1
      ),
      _react2.default.createElement(
        'div',
        { key: '2' },
        displays2
      ),
      _react2.default.createElement(
        'div',
        { key: '3' },
        displays3
      )
    )
  );
};

exports.default = container;