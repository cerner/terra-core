'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('terra-base/lib/baseStyles');

var _GridRow = require('./GridRow');

var _GridRow2 = _interopRequireDefault(_GridRow);

var _GridColumn = require('./GridColumn');

var _GridColumn2 = _interopRequireDefault(_GridColumn);

require('./Grid.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * The component that will be displayed at row level.
   */
  children: _react.PropTypes.node.isRequired
};

var Grid = function Grid(props) {
  return _react2.default.createElement('div', props);
};

Grid.propTypes = propTypes;
Grid.Row = _GridRow2.default;
Grid.Column = _GridColumn2.default;

exports.default = Grid;