'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactPortal = require('react-portal');

var _reactPortal2 = _interopRequireDefault(_reactPortal);

var _ModalDialog = require('./ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

require('./Modal.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  ariaLabel: _react.PropTypes.string.isRequired,
  beforeClose: _react.PropTypes.func,
  children: _react.PropTypes.node,
  closeOnEsc: _react.PropTypes.bool,
  closeOnOutsideClick: _react.PropTypes.bool,
  isFullscreen: _react.PropTypes.bool,
  isOpen: _react.PropTypes.bool,
  onClose: _react.PropTypes.func,
  onOpen: _react.PropTypes.func,
  onUpdate: _react.PropTypes.func,
  openByClickOn: _react.PropTypes.element,
  role: _react.PropTypes.string
};

var defaultProps = {
  ariaLabel: null,
  children: null,
  classNameModal: 'terra-Modal',
  classNameOverlay: 'terra-Modal-overlay',
  closeOnEsc: true,
  closeOnOutsideClick: true,
  isFullscreen: false,
  isOpened: false,
  openByClickOn: null,
  role: 'dialog'
};

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      var _React$createElement;

      var _props = this.props,
          ariaLabel = _props.ariaLabel,
          isOpened = _props.isOpened,
          closeOnEsc = _props.closeOnEsc,
          closeOnOutsideClick = _props.closeOnOutsideClick,
          openByClickOn = _props.openByClickOn,
          onClose = _props.onClose,
          onOpen = _props.onOpen,
          onUpdate = _props.onUpdate,
          beforeClose = _props.beforeClose,
          classNameModal = _props.classNameModal,
          classNameOverlay = _props.classNameOverlay,
          role = _props.role,
          customProps = _objectWithoutProperties(_props, ['ariaLabel', 'isOpened', 'closeOnEsc', 'closeOnOutsideClick', 'openByClickOn', 'onClose', 'onOpen', 'onUpdate', 'beforeClose', 'classNameModal', 'classNameOverlay', 'role']);

      return _react2.default.createElement(
        _reactPortal2.default,
        { isOpened: isOpened,
          closeOnEsc: this.props.closeOnEsc,
          closeOnOutsideClick: this.props.closeOnOutsideClick,
          openByClickOn: this.props.openByClickOn,
          onClose: this.props.onClose,
          onOpen: this.props.onOpen,
          onUpdate: this.props.onUpdate,
          beforeClose: this.props.beforeClose
        },
        _react2.default.createElement(
          _ModalDialog2.default,
          (_React$createElement = {
            classNameModal: classNameModal
          }, _defineProperty(_React$createElement, 'classNameModal', classNameOverlay), _defineProperty(_React$createElement, 'role', role), _React$createElement),
          this.props.children
        )
      );
    }
  }]);

  return Modal;
}(_react2.default.Component);

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

exports.default = Modal;