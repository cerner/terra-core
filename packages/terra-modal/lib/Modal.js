'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _Backdrop = require('./Backdrop');

var _Backdrop2 = _interopRequireDefault(_Backdrop);

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _ModalManager = require('./ModalManager');

var _ModalManager2 = _interopRequireDefault(_ModalManager);

require('./Modal.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modalManager = new _ModalManager2.default();

/**
 * A modal is a dialog prompt containing additional information to be revealed to the user.
 * It consists of a backdrop, a modal dialog with a header/body/footer.
 * It offers a few helpful features:
 * - Support scrolling of content within the modal window.
 * - Disable background scrolling when a modal window is displayed on a page.
 * - Allow closing the modal on backdrop click, ESC key, close button inside dialog.
 * - Keyboard navigation stays inside of the modal
 */
var propTypes = {
  /**
   * Whether or not the modal is open
   */
  isOpen: _react.PropTypes.bool,
  /**
   * Set aria-label for modal dialog
   */
  ariaLabel: _react.PropTypes.string.isRequired,
  /**
   * Set modal dialog to full screen
   */
  isFullScreen: _react.PropTypes.bool,
  /**
   * Set the max-width for modal dialog
   */
  size: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Set the height of modal dialog in px, max-height = windows.height * 85%
   */
  height: _react.PropTypes.number,
  /**
   * Callback function for closing the modal
   */
  onRequestClose: _react.PropTypes.func.isRequired,
  /**
   * Allow closing modal by clicking modal backdrop
   */
  canCloseOnBackdropClick: _react.PropTypes.bool,
  /**
   * Displays close button on the top right(ltr) of container
   */
  hasCloseButton: _react.PropTypes.bool,
  /**
   * Modal header
   */
  header: _react.PropTypes.element,
  /**
  * Modal body
  */
  body: _react.PropTypes.element,
  /**
  * Modal footer
  */
  footer: _react.PropTypes.element
};

var defaultProps = {
  isOpen: false,
  isFullScreen: false,
  size: 'medium',
  canCloseOnBackdropClick: true,
  hasCloseButton: true
};

var Modal = function (_React$Component) {
  (0, _inherits3.default)(Modal, _React$Component);

  function Modal() {
    (0, _classCallCheck3.default)(this, Modal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call(this));

    _this.trapFocus = _this.trapFocus.bind(_this);
    _this.handleEscKeyup = _this.handleEscKeyup.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.onOpen();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.isOpen) {
        this.onOpen();
      } else {
        this.onClose();
      }
    }
  }, {
    key: 'onOpen',
    value: function onOpen() {
      modalManager.add(this);
      document.addEventListener('focus', this.trapFocus, true);
      document.addEventListener('keyup', this.handleEscKeyup);
      this.focus();
    }
  }, {
    key: 'onClose',
    value: function onClose() {
      modalManager.remove(this);
      document.removeEventListener('focus', this.trapFocus, true);
      document.removeEventListener('keyup', this.handleEscKeyup);
      this.restoreFocus();
    }
  }, {
    key: 'focus',
    value: function focus() {
      var currentActive = document.activeElement;
      var dialog = this.modal.lastElementChild;
      this.focusBeforeOpen = currentActive;
      dialog.focus();
    }
  }, {
    key: 'trapFocus',
    value: function trapFocus() {
      var currentActive = document.activeElement;
      var dialog = this.modal.lastElementChild;
      if (dialog !== currentActive && !dialog.contains(currentActive)) {
        dialog.focus();
      }
    }
  }, {
    key: 'restoreFocus',
    value: function restoreFocus() {
      if (this.focusBeforeOpen && this.focusBeforeOpen.focus) {
        this.focusBeforeOpen.focus();
        this.focusBeforeOpen = null;
      }
    }
  }, {
    key: 'handleEscKeyup',
    value: function handleEscKeyup(e) {
      if (e.keyCode === 27) {
        this.props.onRequestClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _Portal2.default,
        { isOpen: this.props.isOpen },
        _react2.default.createElement(
          'div',
          { ref: function ref(modal) {
              _this2.modal = modal;
            } },
          _react2.default.createElement(_Backdrop2.default, {
            canCloseOnBackdropClick: this.props.canCloseOnBackdropClick,
            onRequestClose: this.props.onRequestClose
          }),
          _react2.default.createElement(_Dialog2.default, {
            ariaLabel: this.props.ariaLabel,
            isFullScreen: this.props.isFullScreen,
            size: this.props.size,
            height: this.props.height,
            onRequestClose: this.props.onRequestClose,
            hasCloseButton: this.props.hasCloseButton,
            header: this.props.header,
            body: this.props.body,
            footer: this.props.footer
          })
        )
      );
    }
  }]);
  return Modal;
}(_react2.default.Component);

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

exports.default = Modal;