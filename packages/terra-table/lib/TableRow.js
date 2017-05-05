'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('terra-base/lib/baseStyles');

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
   * Whether or not row is selectable
   */
  isSelectable: _react.PropTypes.bool
};

var defaultProps = {
  isSelected: false,
  isSelectable: false
};

var TableRow = function TableRow(_ref) {
  var children = _ref.children,
      isSelected = _ref.isSelected,
      isSelectable = _ref.isSelectable,
      customProps = _objectWithoutProperties(_ref, ['children', 'isSelected', 'isSelectable']);

  var rowClassNames = (0, _classnames2.default)([{ 'terra-Table--isSelected': isSelected }, { 'terra-Table--isSelectable': isSelectable }, 'terra-Table-row', customProps.className]);

  var childrenArray = _react2.default.Children.toArray(children);
  if (childrenArray.length > 16) {
    // eslint-disable-next-line no-console
    console.log('Number of Columns are ' + _react2.default.Children.count(children) + '. This is more than columns limit');
  }

  return _react2.default.createElement(
    'tr',
    _extends({}, customProps, { 'aria-selected': isSelected, className: rowClassNames }),
    children
  );
};

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

exports.default = TableRow;