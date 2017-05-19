'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('terra-base/lib/baseStyles');

var _TableHeaderCell = require('./TableHeaderCell');

var _TableHeaderCell2 = _interopRequireDefault(_TableHeaderCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The children passed to the component
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * A callback function for onClick action
   */
  onClick: _propTypes2.default.func
};

var defaultProps = {
  onClick: undefined
};

function cloneChildItems(children, onClick) {
  var newProps = {
    onClick: onClick
  };
  var childrenArray = _react2.default.Children.toArray(children);
  if (childrenArray.length > 16) {
    // eslint-disable-next-line no-console
    console.log('Number of Columns are ' + _react2.default.Children.count(children) + '. This is more than columns limit');
  }
  // Filtering children to render only 16 columns
  return childrenArray.filter(function (child, index) {
    return index < 16;
  }).map(function (child) {
    if (child.type === _TableHeaderCell2.default) {
      return _react2.default.cloneElement(child, newProps);
    }
    return child;
  });
}

var TableHeader = function TableHeader(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      customProps = _objectWithoutProperties(_ref, ['children', 'onClick']);

  var cloneChildren = cloneChildItems(children, onClick);
  return _react2.default.createElement(
    'thead',
    customProps,
    _react2.default.createElement(
      'tr',
      null,
      cloneChildren
    )
  );
};

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;

exports.default = TableHeader;