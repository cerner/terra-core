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

require('./PopupArrow.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ARROW_OFFSET = 10;
var ARROW_CLASSES = {
  top: 'terra-PopupArrow--alignTop',
  bottom: 'terra-PopupArrow--alignBottom',
  left: 'terra-PopupArrow--alignLeft',
  right: 'terra-PopupArrow--alignRight'
};

var ARROW_OPPOSITE_CLASSES = {
  top: 'terra-PopupArrow--alignBottom',
  bottom: 'terra-PopupArrow--alignTop',
  left: 'terra-PopupArrow--alignRight',
  right: 'terra-PopupArrow--alignLeft'
};

var propTypes = {
  /**
   * The function returning the frame html reference.
   */
  refCallback: _propTypes2.default.func
};

var defaultProps = {
  refCallback: undefined
};

var PopupArrow = function PopupArrow(_ref) {
  var refCallback = _ref.refCallback,
      customProps = _objectWithoutProperties(_ref, ['refCallback']);

  var arrowClassNames = (0, _classnames2.default)(['terra-PopupArrow', customProps.className]);

  return _react2.default.createElement('div', _extends({}, customProps, { className: arrowClassNames, ref: refCallback }));
};

PopupArrow.propTypes = propTypes;
PopupArrow.defaultProps = defaultProps;
PopupArrow.positionClasses = ARROW_CLASSES;
PopupArrow.oppositePositionClasses = ARROW_OPPOSITE_CLASSES;
PopupArrow.arrowSize = ARROW_OFFSET;

exports.default = PopupArrow;