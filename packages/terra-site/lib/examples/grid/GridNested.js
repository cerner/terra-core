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

var GridNested = function GridNested() {
  return _react2.default.createElement(
    _terraGrid2.default,
    null,
    _react2.default.createElement(
      _terraGrid2.default.Row,
      null,
      _react2.default.createElement(
        _terraGrid2.default.Column,
        { col: 4 },
        _react2.default.createElement(
          'div',
          { className: 'terra-Grid-example' },
          '4 Columns'
        )
      ),
      _react2.default.createElement(
        _terraGrid2.default.Column,
        { col: 8 },
        _react2.default.createElement(
          'div',
          { className: 'terra-Grid-example' },
          '8 Columns'
        ),
        _react2.default.createElement(
          _terraGrid2.default.Row,
          null,
          _react2.default.createElement(
            _terraGrid2.default.Column,
            { col: 5 },
            _react2.default.createElement(
              'div',
              { className: 'terra-Grid-example' },
              '5 Nested Columns'
            )
          ),
          _react2.default.createElement(
            _terraGrid2.default.Column,
            { col: 7 },
            _react2.default.createElement(
              'div',
              { className: 'terra-Grid-example' },
              '7 Nested Columns'
            )
          )
        )
      )
    )
  );
};

exports.default = GridNested;