'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('terra-base/lib/baseStyles');

var _TableRow = require('./TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableSubheader = require('./TableSubheader');

var _TableSubheader2 = _interopRequireDefault(_TableSubheader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The children passed to the component
   */
  children: _propTypes2.default.node,
  /**
   * A callback function for onClick action
   */
  onClick: _propTypes2.default.func,
  /**
   * A callback function for onKeyDown action for tab key
   */
  onKeyDown: _propTypes2.default.func
};

var defaultProps = {
  onClick: undefined,
  onKeyDown: undefined
};

function cloneChildItems(children, onClick, onKeyDown, numberOfCols) {
  return _react2.default.Children.map(children, function (child) {
    var newProps = {};
    if (onClick) {
      newProps.onClick = onClick;
    }
    if (onKeyDown) {
      newProps.onKeyDown = onKeyDown;
    }
    if (child.type === _TableRow2.default) {
      return _react2.default.cloneElement(child, newProps);
    }
    if (child.type === _TableSubheader2.default) {
      return _react2.default.cloneElement(child, { colSpan: numberOfCols });
    }
    return child;
  });
}

function getNumberOfColumns(children) {
  var count = 0;
  var childArray = _react2.default.Children.toArray(children);
  for (var i = 0; i < childArray.length; i += 1) {
    // If the child is a TableRow and it has children, then return the count of the TableRow's children.
    // Assumptions: Number of children will be equal to number of columns. Children of TableRow should be TableCell
    if (childArray[i].type === _TableRow2.default && childArray[i].props.children !== null) {
      count = _react2.default.Children.count(childArray[i].props.children);
      return count >= 16 ? 16 : count;
    }
  }
  return count;
}

var TableRows = function TableRows(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      onKeyDown = _ref.onKeyDown,
      customProps = _objectWithoutProperties(_ref, ['children', 'onClick', 'onKeyDown']);

  var numberOfCols = getNumberOfColumns(children);
  var cloneChildren = cloneChildItems(children, onClick, onKeyDown, numberOfCols);
  return _react2.default.createElement(
    'tbody',
    customProps,
    cloneChildren
  );
};

TableRows.propTypes = propTypes;
TableRows.defaultProps = defaultProps;

exports.default = TableRows;