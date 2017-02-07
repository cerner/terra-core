'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('../src/arrange.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alignmentTypes = ['center', 'bottom', 'stretch'];

var ObjectFilter = function ObjectFilter(obj, predicate) {
  var filtered = Object.keys(obj).filter(function (key) {
    return predicate(key, obj[key]);
  }).map(function (key) {
    return _defineProperty({}, key, obj[key]);
  });
  return _extends.apply(undefined, [{}].concat(_toConsumableArray(filtered)));
};

var CustomProps = function CustomProps(props, propTypes) {
  return ObjectFilter(props, function (key) {
    return !Object.prototype.hasOwnProperty.call(propTypes, key);
  });
};

var propTypes = {
  fitStart: _react.PropTypes.element,
  fill: _react.PropTypes.element.isRequired,
  fitEnd: _react.PropTypes.element,
  align: _react.PropTypes.oneOf(alignmentTypes),
  alignFitStart: _react.PropTypes.oneOf(alignmentTypes),
  alignFitEnd: _react.PropTypes.oneOf(alignmentTypes),
  alignFill: _react.PropTypes.oneOf(alignmentTypes)
};

var Arrange = function Arrange(props) {
  var customProps = CustomProps(props, Arrange.propTypes);

  var alignFitStart = props.alignFitStart,
      alignFitEnd = props.alignFitEnd,
      alignFill = props.alignFill;


  if (props.align !== undefined) {
    alignFitStart = alignFitEnd = alignFill = props.align;
  }

  var arrangeClass = (0, _classnames2.default)('terra-Arrange', _defineProperty({}, '' + customProps.className, customProps.className));

  var fitStartClass = (0, _classnames2.default)(['terra-Arrange-fitStart', _defineProperty({}, 'terra-Arrange-fitStart--' + alignFitStart, alignFitStart)]);

  var fitEndClass = (0, _classnames2.default)(['terra-Arrange-fitEnd', _defineProperty({}, 'terra-Arrange-fitEnd--' + alignFitEnd, alignFitEnd)]);

  var fillClass = (0, _classnames2.default)(['terra-Arrange-fill', _defineProperty({}, 'terra-Arrange-fill--' + alignFill, alignFill)]);

  if (props.fitStart === undefined && props.fitEnd === undefined) {
    // eslint-disable-next-line no-console
    console.warn('At least one of the props: [fitStart, fitEnd] should be supplied.');
  }

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: arrangeClass }),
    _react2.default.createElement(
      'div',
      { className: fitStartClass },
      props.fitStart
    ),
    _react2.default.createElement(
      'div',
      { className: fillClass },
      props.fill
    ),
    _react2.default.createElement(
      'div',
      { className: fitEndClass },
      props.fitEnd
    )
  );
};

Arrange.propTypes = propTypes;

exports.default = Arrange;