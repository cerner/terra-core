'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./Icon.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// eslint-disable-next-line import/no-unresolved, import/no-webpack-loader-syntax


var propTypes = {
  /**
   * Should the svg mirror when dir="rtl".
   */
  isBidi: _react.PropTypes.bool,
  /**
   * Should the SVG rotate.
   */
  isSpin: _react.PropTypes.bool,
  /**
   * Child nodes.
   */
  children: _react.PropTypes.node,
  /**
   * Height of SVG.
   */
  height: _react.PropTypes.string,
  /**
   * Width of SVG.
   */
  width: _react.PropTypes.string,
  /**
   * String that labels the current element. If 'aria-label' is present,
   * role is set to 'img' and aria-hidden is removed.
   */
  'aria-label': _react.PropTypes.string,
  /**
   * Focusable attribute. IE 10/11 are focusable without this attribute.
   */
  focusable: _react.PropTypes.bool
};

var defaultProps = {
  isBidi: false,
  isSpin: false,
  children: null,
  height: '1em',
  width: '1em',
  'aria-label': null,
  focusable: false
};

var IconBase = function IconBase(_ref) {
  var isBidi = _ref.isBidi,
      isSpin = _ref.isSpin,
      children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['isBidi', 'isSpin', 'children']);

  var attributes = _extends({}, customProps);

  attributes.className = (0, _classnames2.default)('terra-Icon', { 'is-bidi': isBidi }, { 'is-spin': isSpin }, attributes.className);

  // aria-label is present, remove aria-hidden, set role to img
  if (attributes['aria-label']) {
    attributes.role = 'img';
    attributes['aria-hidden'] = null;
  } else {
    attributes['aria-hidden'] = 'true';
  }

  return _react2.default.createElement(
    'svg',
    attributes,
    children
  );
};

IconBase.propTypes = propTypes;
IconBase.defaultProps = defaultProps;

exports.default = IconBase;