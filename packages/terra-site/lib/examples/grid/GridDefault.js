'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraGrid = require('terra-grid');

var _terraGrid2 = _interopRequireDefault(_terraGrid);

require('./GridExample.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridDefault = function GridDefault() {
  return _react2.default.createElement(
    _terraGrid2.default,
    null,
    _react2.default.createElement(
      _terraGrid2.default.Row,
      null,
      _react2.default.createElement(
        _terraGrid2.default.Column,
        { col: 6 },
        _react2.default.createElement(
          'div',
          { className: 'terra-Grid-example' },
          'First Column content'
        )
      ),
      _react2.default.createElement(
        _terraGrid2.default.Column,
        { col: 6 },
        _react2.default.createElement(
          'div',
          { className: 'terra-Grid-example' },
          'Second Column content'
        )
      )
    )
  );
};

exports.default = GridDefault;