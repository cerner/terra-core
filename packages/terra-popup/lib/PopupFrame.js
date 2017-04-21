'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./PopupFrame.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: _react.PropTypes.node
};

var defaultProps = {
  children: []
};

var PopupFrame = function PopupFrame(_ref) {
  var children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['children']);

  var frameClassNames = (0, _classnames2.default)(['terra-PopupFrame', customProps.className]);

  return _react2.default.createElement(
    'ul',
    _extends({}, customProps, { className: frameClassNames }),
    children
  );
};

PopupFrame.propTypes = propTypes;
PopupFrame.defaultProps = defaultProps;

exports.default = PopupFrame;