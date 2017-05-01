'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPortal = require('react-portal');

var _reactPortal2 = _interopRequireDefault(_reactPortal);

require('terra-base/lib/baseStyles');

var _ModalContent = require('./ModalContent');

var _ModalContent2 = _interopRequireDefault(_ModalContent);

require('./Modal.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * String that labels the modal for screen readers
   **/
  ariaLabel: _react.PropTypes.string.isRequired,
  /**
   * This callback is called when the closing event is triggered but it prevents normal removal from the DOM. So, you can do some DOMNode animation first and then call removeFromDOM() that removes the modal from DOM.
   **/
  beforeClose: _react.PropTypes.func,
  /**
   * Content inside the modal dialog
   **/
  children: _react.PropTypes.node.isRequired,
  /**
   * CSS classnames that are append to the modal
   **/
  classNameModal: _react.PropTypes.string,
  /**
   * CSS classnames that are append to the overlay
   **/
  classNameOverlay: _react.PropTypes.string,
  /**
   * If set to true, the modal will close when the esc key is pressed
   **/
  closeOnEsc: _react.PropTypes.bool,
  /**
   * If set to true, the modal will close when a mouseclick is triggered outside the modal
   **/
  closeOnOutsideClick: _react.PropTypes.bool,
  /**
   * If set to true, the modal will be fullscreen on all breakpoint sizes
   **/
  isFullscreen: _react.PropTypes.bool,
  /**
   * If set to true, the modal will rendered as opened
   **/
  isOpened: _react.PropTypes.bool,
  /**
   * If set to true, the modal dialog with have overflow-y set to scroll.
   * It is recommended not to use this prop and instead create a HOC
   * with the modal dialog body set to scroll.
   **/
  isScrollable: _react.PropTypes.bool,
  /**
   * This callback is called when the modal closes and after beforeClose.
   **/
  onClose: _react.PropTypes.func,
  /**
   * This callback is called when the modal is opened and rendered (useful for animating the DOMNode).
   **/
  onOpen: _react.PropTypes.func,
  /**
   * This callback is called when the modal is (re)rendered.
   **/
  onUpdate: _react.PropTypes.func,
  /**
   * Role attribute on the modal dialog
   **/
  role: _react.PropTypes.string
};

var defaultProps = {
  ariaLabel: null,
  children: null,
  classNameModal: null,
  classNameOverlay: null,
  closeOnEsc: true,
  closeOnOutsideClick: true,
  isFullscreen: false,
  isOpened: false,
  isScrollable: false,
  role: 'document'
};

/* eslint-disable react/prefer-stateless-function */

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          ariaLabel = _props.ariaLabel,
          beforeClose = _props.beforeClose,
          children = _props.children,
          classNameModal = _props.classNameModal,
          classNameOverlay = _props.classNameOverlay,
          closeOnEsc = _props.closeOnEsc,
          closeOnOutsideClick = _props.closeOnOutsideClick,
          isFullscreen = _props.isFullscreen,
          isOpened = _props.isOpened,
          isScrollable = _props.isScrollable,
          onClose = _props.onClose,
          onOpen = _props.onOpen,
          onUpdate = _props.onUpdate,
          role = _props.role,
          customProps = _objectWithoutProperties(_props, ['ariaLabel', 'beforeClose', 'children', 'classNameModal', 'classNameOverlay', 'closeOnEsc', 'closeOnOutsideClick', 'isFullscreen', 'isOpened', 'isScrollable', 'onClose', 'onOpen', 'onUpdate', 'role']);

      return _react2.default.createElement(
        _reactPortal2.default,
        _extends({
          isOpened: isOpened,
          closeOnEsc: closeOnEsc,
          closeOnOutsideClick: closeOnOutsideClick,
          onClose: onClose,
          onOpen: onOpen,
          onUpdate: onUpdate,
          beforeClose: beforeClose
        }, customProps),
        _react2.default.createElement(
          _ModalContent2.default,
          {
            closeOnOutsideClick: closeOnOutsideClick,
            ariaLabel: ariaLabel,
            classNameModal: classNameModal,
            classNameOverlay: classNameOverlay,
            role: role,
            isFullscreen: isFullscreen,
            isScrollable: isScrollable
          },
          children
        )
      );
    }
  }]);

  return Modal;
}(_react2.default.Component);

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

exports.default = Modal;