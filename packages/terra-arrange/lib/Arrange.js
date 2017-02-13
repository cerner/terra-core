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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var alignmentTypes = ['center', 'bottom', 'stretch'];

var propTypes = {
  fitStart: _react.PropTypes.element,
  fill: _react.PropTypes.element.isRequired,
  fitEnd: _react.PropTypes.element,
  align: _react.PropTypes.oneOf(alignmentTypes),
  alignFitStart: _react.PropTypes.oneOf(alignmentTypes),
  alignFitEnd: _react.PropTypes.oneOf(alignmentTypes),
  alignFill: _react.PropTypes.oneOf(alignmentTypes)
};

var Arrange = function Arrange(_ref) {
  var fitStart = _ref.fitStart,
      fill = _ref.fill,
      fitEnd = _ref.fitEnd,
      align = _ref.align,
      alignFitStart = _ref.alignFitStart,
      alignFill = _ref.alignFill,
      alignFitEnd = _ref.alignFitEnd,
      customProps = _objectWithoutProperties(_ref, ['fitStart', 'fill', 'fitEnd', 'align', 'alignFitStart', 'alignFill', 'alignFitEnd']);

  var alignmentFitStart = alignFitStart;
  var alignmentFill = alignFill;
  var alignmentFitEnd = alignFitEnd;

  if (align !== undefined) {
    alignmentFitStart = alignmentFitEnd = alignmentFill = align;
  }

  var arrangeClassNames = (0, _classnames2.default)('terra-Arrange', _defineProperty({}, '' + customProps.className, customProps.className));

  var fitStartClass = (0, _classnames2.default)(['terra-Arrange-fitStart', _defineProperty({}, 'terra-Arrange-fitStart--' + alignmentFitStart, alignmentFitStart)]);

  var fitEndClass = (0, _classnames2.default)(['terra-Arrange-fitEnd', _defineProperty({}, 'terra-Arrange-fitEnd--' + alignmentFitEnd, alignmentFitEnd)]);

  var fillClass = (0, _classnames2.default)(['terra-Arrange-fill', _defineProperty({}, 'terra-Arrange-fill--' + alignmentFill, alignmentFill)]);

  if (fitStart === undefined && fitEnd === undefined) {
    throw new Error('At least one of the props: [fitStart, fitEnd] should be supplied.');
  }

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: arrangeClassNames }),
    _react2.default.createElement(
      'div',
      { className: fitStartClass },
      fitStart
    ),
    _react2.default.createElement(
      'div',
      { className: fillClass },
      fill
    ),
    _react2.default.createElement(
      'div',
      { className: fitEndClass },
      fitEnd
    )
  );
};

Arrange.propTypes = propTypes;

exports.default = Arrange;