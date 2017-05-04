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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var arrowDirections = ['Top', 'Bottom', 'Start', 'End'];

var propTypes = {
  /**
   * The direction of the arrow image.
   */
  direction: _react.PropTypes.oneOf(arrowDirections)
};

var defaultProps = {
  direction: 'Top'
};

var PopupArrow = function PopupArrow(_ref) {
  var direction = _ref.direction,
      customProps = _objectWithoutProperties(_ref, ['direction']);

  var arrowClassNames = (0, _classnames2.default)(['terra-PopupArrow', customProps.className]);

  var arrow = void 0;
  if (direction === 'Bottom') {
    arrow = _react2.default.createElement(_IconCaretDown2.default, { height: '30', width: '30' });
  } else if (direction === 'Start') {
    arrow = _react2.default.createElement(_IconCaretLeft2.default, { height: '30', width: '30' });
  } else if (direction === 'End') {
    arrow = _react2.default.createElement(_IconCaretRight2.default, { height: '30', width: '30' });
  } else {
    arrow = _react2.default.createElement(_IconCaretUp2.default, { height: '30', width: '30' });
  }

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: arrowClassNames }),
    arrow
  );
};

PopupArrow.propTypes = propTypes;
PopupArrow.defaultProps = defaultProps;

exports.default = PopupArrow;