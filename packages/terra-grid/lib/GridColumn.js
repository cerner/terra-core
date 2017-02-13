'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var columnRange = function columnRange(props, propName) {
  if (props[propName]) {
    var val = props[propName];
    return val >= 1 && val <= 12 ? null : new Error(propName + ' must be in range 1 to 12 inclusively');
  }
  return null;
};

var propTypes = {
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  col: columnRange,
  tiny: columnRange,
  small: columnRange,
  medium: columnRange,
  large: columnRange,
  huge: columnRange
};

var GridColumn = function GridColumn(_ref) {
  var _ref2;

  var className = _ref.className,
      children = _ref.children,
      col = _ref.col,
      tiny = _ref.tiny,
      small = _ref.small,
      medium = _ref.medium,
      large = _ref.large,
      huge = _ref.huge,
      customProps = _objectWithoutProperties(_ref, ['className', 'children', 'col', 'tiny', 'small', 'medium', 'large', 'huge']);

  var colClassNames = (0, _classnames2.default)(['terra-Grid-col', (_ref2 = {}, _defineProperty(_ref2, 'terra-Grid-col--' + col, col), _defineProperty(_ref2, 'terra-Grid-col--tiny-' + tiny, tiny), _defineProperty(_ref2, 'terra-Grid-col--small-' + small, small), _defineProperty(_ref2, 'terra-Grid-col--medium-' + medium, medium), _defineProperty(_ref2, 'terra-Grid-col--large-' + large, large), _defineProperty(_ref2, 'terra-Grid-col--huge-' + huge, huge), _ref2), className]);

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, {
      className: colClassNames
    }),
    children
  );
};

GridColumn.propTypes = propTypes;

exports.default = GridColumn;