'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('terra-base/lib/baseStyles');

var _IconCaretRight = require('terra-icon/lib/icon/IconCaretRight');

var _IconCaretRight2 = _interopRequireDefault(_IconCaretRight);

var _IconCaretLeft = require('terra-icon/lib/icon/IconCaretLeft');

var _IconCaretLeft2 = _interopRequireDefault(_IconCaretLeft);

var _IconCaretUp = require('terra-icon/lib/icon/IconCaretUp');

var _IconCaretUp2 = _interopRequireDefault(_IconCaretUp);

var _IconCaretDown = require('terra-icon/lib/icon/IconCaretDown');

var _IconCaretDown2 = _interopRequireDefault(_IconCaretDown);

require('./PopupArrow.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var arrowPositions = ['Top', 'Bottom', 'Start', 'End'];

var propTypes = {
  /**
   * The position of the arrow image.
   */
  position: _react.PropTypes.oneOf(arrowPositions),
  offset: _react.PropTypes.number
};

var defaultProps = {
  position: 'Top',
  offset: 0
};

var spacerFromOffset = function spacerFromOffset(offset, position) {
  var styleOffset = {};
  if (['Top', 'Bottom'].indexOf(position) >= 0) {
    styleOffset.width = offset.toString() + 'px';
    styleOffset.maxWidth = 'calc(100% - 30px)';
  } else {
    styleOffset.height = offset.toString() + 'px';
    styleOffset.maxHeight = 'calc(100% - 30px)';
  }
  return _react2.default.createElement('div', { className: 'terra-PopupArrow-spacer', style: styleOffset });
};

var PopupArrow = function PopupArrow(_ref) {
  var position = _ref.position,
      offset = _ref.offset,
      customProps = _objectWithoutProperties(_ref, ['position', 'offset']);

  var arrowClassNames = (0, _classnames2.default)(['terra-PopupArrow', _defineProperty({}, 'terra-PopupArrow--align' + position, position), customProps.className]);

  var startSpacer = void 0;
  var endSpacer = void 0;
  var absOffset = Math.abs(offset);
  if (absOffset > 0) {
    if (offset < 0) {
      endSpacer = spacerFromOffset(absOffset, position);
    } else {
      startSpacer = spacerFromOffset(absOffset, position);
    }
  }

  // let arrow;
  // if (position === 'Bottom') {
  //   arrow = <IconCaretDown height="30" width="30" />;
  // } else if (position === 'Start') {
  //   arrow = <IconCaretLeft height="30" width="30" />;
  // } else if (position === 'End') {
  //   arrow = <IconCaretRight height="30" width="30" />;
  // } else {
  //   arrow = <IconCaretUp height="30" width="30" />;
  // }

  return _react2.default.createElement('div', _extends({}, customProps, { className: arrowClassNames }));
};

PopupArrow.propTypes = propTypes;
PopupArrow.defaultProps = defaultProps;

exports.default = PopupArrow;