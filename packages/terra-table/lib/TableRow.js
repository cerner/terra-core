'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TableCell = require('./TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The children passed to the component
   */
  children: _react.PropTypes.node,
  /**
   * Whether or not row is selected
   */
  isSelected: _react.PropTypes.bool,
  /**
   * The maximum height for the row in a table
   */
  height: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Whether or not row is selectable
   */
  isSelectable: _react.PropTypes.bool
};

var defaultProps = {
  isSelected: false
};

function cloneChildItems(children, height) {
  var childrenArray = _react2.default.Children.toArray(children);
  if (childrenArray.length > 16) {
    // eslint-disable-next-line no-console
    console.log('Number of Columns are ' + _react2.default.Children.count(children) + '. This is more than columns limit');
  }
  return childrenArray.filter(function (child, index) {
    return index < 16;
  }).map(function (child) {
    if (child.type === _TableCell2.default) {
      return _react2.default.cloneElement(child, { height: height });
    }
    return child;
  });
}

var TableRow = function TableRow(_ref) {
  var children = _ref.children,
      isSelected = _ref.isSelected,
      isSelectable = _ref.isSelectable,
      height = _ref.height,
      customProps = _objectWithoutProperties(_ref, ['children', 'isSelected', 'isSelectable', 'height']);

  var rowClassNames = (0, _classnames2.default)([{ 'terra-Table--isSelected': isSelected }, { 'terra-Table--isSelectable': isSelectable }, 'terra-Table-row', customProps.className]);

  var cloneChildren = cloneChildItems(children, height);
  return _react2.default.createElement(
    'tr',
    _extends({}, customProps, { 'aria-selected': isSelected, className: rowClassNames }),
    cloneChildren
  );
};

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

exports.default = TableRow;