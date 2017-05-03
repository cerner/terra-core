'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _focusTrapReact = require('focus-trap-react');

var _focusTrapReact2 = _interopRequireDefault(_focusTrapReact);

require('terra-base/lib/baseStyles');

var _ModalOverlay = require('./ModalOverlay');

var _ModalOverlay2 = _interopRequireDefault(_ModalOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  ariaLabel: _react.PropTypes.string.isRequired,
  children: _react.PropTypes.node.isRequired,
  classNameModal: _react.PropTypes.string,
  classNameOverlay: _react.PropTypes.string,
  closeOnOutsideClick: _react.PropTypes.bool,
  closePortal: _react.PropTypes.func,
  isFullscreen: _react.PropTypes.bool,
  isScrollable: _react.PropTypes.bool,
  role: _react.PropTypes.string
};

var defaultProps = {
  ariaLabel: null,
  children: null,
  classNameModal: null,
  classNameOverlay: null,
  closeOnOutsideClick: true,
  isFullscreen: false,
  isScrollable: false,
  role: 'dialog'
};

/* eslint-disable react/prefer-stateless-function */

var ModalContent = function (_React$Component) {
  _inherits(ModalContent, _React$Component);

  function ModalContent() {
    _classCallCheck(this, ModalContent);

    return _possibleConstructorReturn(this, (ModalContent.__proto__ || Object.getPrototypeOf(ModalContent)).apply(this, arguments));
  }

  _createClass(ModalContent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          ariaLabel = _props.ariaLabel,
          children = _props.children,
          classNameModal = _props.classNameModal,
          classNameOverlay = _props.classNameOverlay,
          closeOnOutsideClick = _props.closeOnOutsideClick,
          closePortal = _props.closePortal,
          role = _props.role,
          isFullscreen = _props.isFullscreen,
          isScrollable = _props.isScrollable,
          customProps = _objectWithoutProperties(_props, ['ariaLabel', 'children', 'classNameModal', 'classNameOverlay', 'closeOnOutsideClick', 'closePortal', 'role', 'isFullscreen', 'isScrollable']);

      var modalClassName = (0, _classnames2.default)(['terra-Modal', { 'terra-Modal--fullscreen': isFullscreen }, { 'terra-Modal--scrollable': isScrollable }, classNameModal]);

      return _react2.default.createElement(
        _focusTrapReact2.default,
        null,
        _react2.default.createElement(_ModalOverlay2.default, {
          onClick: closeOnOutsideClick ? closePortal : null,
          className: classNameOverlay
        }),
        _react2.default.createElement(
          'div',
          _extends({
            tabIndex: '0',
            'aria-label': ariaLabel,
            className: modalClassName,
            role: role
          }, customProps),
          children
        )
      );
    }
  }]);

  return ModalContent;
}(_react2.default.Component);

ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;

exports.default = ModalContent;