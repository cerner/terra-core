'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

require('./Popup.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var POPUP_CLASSES = {
  top: 'terra-Popup--arrowTop',
  bottom: 'terra-Popup--arrowBottom',
  left: 'terra-Popup--arrowLeft',
  right: 'terra-Popup--arrowRight'
};

var POPUP_OPPOSITE_CLASSES = {
  top: 'terra-Popup--arrowBottom',
  bottom: 'terra-Popup--arrowTop',
  left: 'terra-Popup--arrowRight',
  right: 'terra-Popup--arrowLeft'
};

var KEYCODES = {
  ESCAPE: 27
};

var propTypes = {
  /**
   * The arrow to be placed within the popup frame.
   */
  arrow: _propTypes2.default.element,
  /**
   * Whether or not the using the escape key should trigger the onRequestClose callback.
   */
  closeOnEsc: _propTypes2.default.bool,
  /**
   * Whether or not clicking outside the popup should trigger the onRequestClose callback.
   */
  closeOnOutsideClick: _propTypes2.default.bool,
  /**
   * Whether or not resizing the screen should trigger the onRequestClose callback.
   */
  closeOnResize: _propTypes2.default.bool,
  /**
   * The content to be presented within the popup.
   */
  content: _propTypes2.default.element.isRequired,
  /**
   * The function that should be triggered when a close is indicated.
   */
  onRequestClose: _propTypes2.default.func,
  /**
   * The function returning the frame html reference.
   */
  refCallback: _propTypes2.default.func
};

var defaultProps = {
  arrow: undefined,
  closeOnEsc: true,
  closeOnOutsideClick: true,
  closeOnResize: true,
  content: undefined,
  onRequestClose: undefined,
  refCallback: undefined
};

var Popup = function (_React$Component) {
  _inherits(Popup, _React$Component);

  _createClass(Popup, [{
    key: 'debounce',
    value: function debounce(fn, delay) {
      var timer = null;
      return function () {
        var context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
          fn.apply(context, args);
        }, delay);
      };
    }
  }]);

  function Popup(props) {
    _classCallCheck(this, Popup);

    var _this = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));

    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    _this.handleKeydown = _this.handleKeydown.bind(_this);
    _this.handleResize = _this.debounce(_this.handleResize.bind(_this), 100);
    return _this;
  }

  _createClass(Popup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.closeOnEsc) {
        document.addEventListener('keydown', this.handleKeydown);
      }
      if (this.props.closeOnResize) {
        window.addEventListener('resize', this.handleResize);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.closeOnEsc) {
        document.removeEventListener('keydown', this.handleKeydown);
      }

      if (this.props.closeOnResize) {
        window.removeEventListener('resize', this.handleResize);
      }
    }
  }, {
    key: 'handleResize',
    value: function handleResize(event) {
      if (this.props.closeOnResize && this.props.onRequestClose) {
        this.props.onRequestClose(event);
      }
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside(event) {
      if (this.props.closeOnOutsideClick && this.props.onRequestClose) {
        this.props.onRequestClose(event);
      }
    }
  }, {
    key: 'handleKeydown',
    value: function handleKeydown(event) {
      if (event.keyCode === KEYCODES.ESCAPE && this.props.onRequestClose) {
        this.props.onRequestClose(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          arrow = _props.arrow,
          closeOnEsc = _props.closeOnEsc,
          closeOnOutsideClick = _props.closeOnOutsideClick,
          closeOnResize = _props.closeOnResize,
          content = _props.content,
          onRequestClose = _props.onRequestClose,
          enableOnClickOutside = _props.enableOnClickOutside,
          disableOnClickOutside = _props.disableOnClickOutside,
          refCallback = _props.refCallback,
          customProps = _objectWithoutProperties(_props, ['arrow', 'closeOnEsc', 'closeOnOutsideClick', 'closeOnResize', 'content', 'onRequestClose', 'enableOnClickOutside', 'disableOnClickOutside', 'refCallback']);

      var frameClassNames = (0, _classnames2.default)(['terra-Popup', { 'terra-Popup-showArrow': arrow }, customProps.className]);

      var clonedContent = _react2.default.cloneElement(content, { onRequestClose: onRequestClose });

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: frameClassNames, ref: refCallback }),
        arrow,
        _react2.default.createElement(
          'div',
          { className: 'terra-Popup-content' },
          clonedContent
        )
      );
    }
  }]);

  return Popup;
}(_react2.default.Component);

var onClickOutsidePopup = (0, _reactOnclickoutside2.default)(Popup);
onClickOutsidePopup.propTypes = propTypes;
onClickOutsidePopup.defaultProps = defaultProps;
onClickOutsidePopup.positionClasses = POPUP_CLASSES;
onClickOutsidePopup.oppositePositionClasses = POPUP_OPPOSITE_CLASSES;

exports.default = onClickOutsidePopup;