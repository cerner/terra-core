'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('terra-base/lib/baseStyles');

var _TableRow = require('./TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The children passed to the component
   */
  children: _react.PropTypes.node,
  /**
   * A callback function for onClick action
   */
  onClick: _react.PropTypes.func,
  /**
  * A callback function for onKeyDown action for tab key
  */
  onKeyDown: _react.PropTypes.func
};

var defaultProps = {
  onClick: undefined,
  onKeyDown: undefined
};

function cloneChildItems(children, onClick, onKeyDown) {
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
    return child;
  });
}

var TableRows = function TableRows(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      onKeyDown = _ref.onKeyDown,
      customProps = _objectWithoutProperties(_ref, ['children', 'onClick', 'onKeyDown']);

  var cloneChildren = cloneChildItems(children, onClick, onKeyDown);
  return _react2.default.createElement(
    'tbody',
    customProps,
    cloneChildren
  );
};

TableRows.propTypes = propTypes;
TableRows.defaultProps = defaultProps;

exports.default = TableRows;