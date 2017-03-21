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

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _OverlayManager = require('./OverlayManager');

var _OverlayManager2 = _interopRequireDefault(_OverlayManager);

require('./Overlay.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ESCAPE = 27;
var overlayManager = new _OverlayManager2.default();

var propTypes = {
  /**
   * Whether or not <Overlay/> should be rendered
   */
  isOpen: _react.PropTypes.bool,
  /**
   * Set full screen overlay
   */
  isFullScreen: _react.PropTypes.bool,
  /**
   * DOM element that will be overlaid
   */
  container: _react.PropTypes.object,
  /**
   * Callback function for closing the overlay
   */
  onRequestClose: _react.PropTypes.func,
  /**
   * Allow closing overlay by clicking backdrop
   */
  canClickOutsideClose: _react.PropTypes.bool,
  /**
   * Center the content horizontally and vertically
   */
  centerContent: _react.PropTypes.bool,
  /**
   * Visible overlay content when overlay is open
   */
  children: _react.PropTypes.node
};

var defaultProps = {
  isOpen: false,
  isFullScreen: true,
  container: document.body,
  centerContent: true,
  canClickOutsideClose: true
};

var Overlay = function (_React$Component) {
  _inherits(Overlay, _React$Component);

  function Overlay() {
    _classCallCheck(this, Overlay);

    var _this = _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this));

    _this.state = {};
    _this.trapFocus = _this.trapFocus.bind(_this);
    _this.handleEscKeyup = _this.handleEscKeyup.bind(_this);
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    return _this;
  }

  _createClass(Overlay, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.onOpen();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.isOpen && this.props.isOpen) {
        this.onOpen();
      } else if (prevProps.isOpen && !this.props.isOpen) {
        this.onClose();
      }
    }
  }, {
    key: 'onOpen',
    value: function onOpen() {
      overlayManager.add(this, this.props.container);
      this.focus();
      document.addEventListener('focus', this.trapFocus, true);
      document.addEventListener('keyup', this.handleEscKeyup);
    }
  }, {
    key: 'onClose',
    value: function onClose() {
      overlayManager.remove(this, this.props.container);
      document.removeEventListener('focus', this.trapFocus, true);
      document.removeEventListener('keyup', this.handleEscKeyup);
      this.restoreFocus();
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.focusBeforeOpen = document.activeElement;
      this.overlay.firstElementChild.focus();
    }
  }, {
    key: 'trapFocus',
    value: function trapFocus() {
      var currentActive = document.activeElement;
      var child = this.overlay.firstElementChild;
      if (child !== currentActive && !child.contains(currentActive)) {
        child.focus();
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
      if (e.keyCode === ESCAPE) {
        this.props.onRequestClose();
      }
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside(e) {
      if (this.props.canClickOutsideClose && e.target === e.currentTarget) {
        this.props.onRequestClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isOpen = _props.isOpen,
          isFullScreen = _props.isFullScreen,
          container = _props.container,
          onRequestClose = _props.onRequestClose,
          canClickOutsideClose = _props.canClickOutsideClose,
          centerContent = _props.centerContent,
          children = _props.children,
          customProps = _objectWithoutProperties(_props, ['isOpen', 'isFullScreen', 'container', 'onRequestClose', 'canClickOutsideClose', 'centerContent', 'children']);

      var overlayClass = (0, _classnames2.default)('terra-Overlay', { 'terra-Overlay--center': centerContent }, customProps.className);
      var onELementPosition = isFullScreen ? null : {
        position: 'absolute',
        top: container.scrollTop,
        left: container.scrollLeft
      };
      var overlayStyle = _extends({}, onELementPosition, customProps.style);
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      return _react2.default.createElement(
        _Portal2.default,
        { isOpen: isOpen, target: container },
        _react2.default.createElement(
          'div',
          {
            ref: function ref(overlay) {
              _this2.overlay = overlay;
            },
            className: overlayClass,
            onClick: this.handleClickOutside,
            style: overlayStyle
          },
          _react2.default.createElement(
            'div',
            {
              tabIndex: 0,
              className: 'terra-Overlay-content'
            },
            children
          )
        )
      );
    }
  }]);

  return Overlay;
}(_react2.default.Component);

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;

exports.default = Overlay;