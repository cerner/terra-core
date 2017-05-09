'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('terra-base/lib/baseStyles');

require('./Toggler.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * Child Nodes.
   */
  children: _propTypes2.default.node
};

var defaultProps = {
  children: null
};

var Toggler = function Toggler(_ref) {
  var customProps = _objectWithoutProperties(_ref, []);

  var classes = (0, _classnames2.default)(['terra-Toggler', _defineProperty({}, 'terra-Toggler--' + size, size), _defineProperty({}, 'terra-Toggler--' + intent, intent), customProps.className]);

  var textContent = text ? _react2.default.createElement(
    'span',
    { className: 'terra-Toggler-text' },
    text
  ) : null;

  var content = isReversed ? [textContent, icon, customProps.children] : [icon, textContent, customProps.children];

  return _react2.default.createElement.apply(_react2.default, ['span', _extends({}, customProps, { className: classes })].concat(content));
};

Toggler.propTypes = propTypes;
Toggler.defaultProps = defaultProps;

exports.default = Toggler;