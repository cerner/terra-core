'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TableRowContent = require('./TableRowContent');

var _TableRowContent2 = _interopRequireDefault(_TableRowContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  children: _react.PropTypes.node,
  isSelected: _react.PropTypes.bool,
  height: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  onClick: _react.PropTypes.func,
  isSelectable: _react.PropTypes.bool,
  className: _react.PropTypes.string
};

var defaultProps = {
  isSelected: false,
  isSelectable: undefined,
  className: ''
};

function cloneChildItems(children, height, onClick) {
  var childrenArray = _react2.default.Children.toArray(children);
  if (childrenArray.length > 16) {
    console.log('Number of Columns are ' + _react2.default.Children.count(children) + '. This is more than columns limit');
  }
  return childrenArray.filter(function (child, index) {
    return index < 16;
  }).map(function (child) {
    if (child.type === _TableRowContent2.default) {
      return _react2.default.cloneElement(child, { height: height, onClick: onClick });
    }
    return child;
  });
}

var TableRow = function TableRow(_ref) {
  var className = _ref.className,
      children = _ref.children,
      isSelected = _ref.isSelected,
      isSelectable = _ref.isSelectable,
      height = _ref.height,
      onClick = _ref.onClick,
      customProps = _objectWithoutProperties(_ref, ['className', 'children', 'isSelected', 'isSelectable', 'height', 'onClick']);

  var rowClassNames = (0, _classnames2.default)([{ 'terra-Table--isSelected': isSelected }, { 'terra-Table--isSelectable': isSelectable }, className]);

  var cloneChildren = cloneChildItems(children, height, onClick);
  return _react2.default.createElement(
    'tr',
    _extends({ className: rowClassNames }, customProps),
    cloneChildren
  );
};

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

exports.default = TableRow;