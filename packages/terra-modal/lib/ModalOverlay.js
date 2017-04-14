'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./ModalOverlay.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  classNameOverlay: _react.PropTypes.string
};

var defaultProps = {
  classNameOverlay: null
};

var ModalOverlay = function ModalOverlay(_ref) {
  var classNameOverlay = _ref.classNameOverlay,
      customProps = _objectWithoutProperties(_ref, ['classNameOverlay']);

  return _react2.default.createElement('div', _extends({ tabIndex: '-1', className: classNameOverlay }, customProps));
};

ModalOverlay.propTypes = propTypes;
ModalOverlay.defaultProps = defaultProps;

exports.default = ModalOverlay;