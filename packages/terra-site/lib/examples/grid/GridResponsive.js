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

var GridResponsive = function GridResponsive() {
  return _react2.default.createElement(
    _terraGrid2.default,
    null,
    _react2.default.createElement(
      _terraGrid2.default.Row,
      null,
      _react2.default.createElement(
        _terraGrid2.default.Column,
        { tiny: 12, small: 8, medium: 4, large: 6 },
        _react2.default.createElement(
          'div',
          { className: 'terra-Grid-example' },
          'First Column content'
        )
      ),
      _react2.default.createElement(
        _terraGrid2.default.Column,
        { tiny: 12, small: 4, medium: 8, large: 6 },
        _react2.default.createElement(
          'div',
          { className: 'terra-Grid-example' },
          'Second Column content'
        )
      )
    )
  );
};

exports.default = GridResponsive;