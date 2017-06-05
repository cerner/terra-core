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

var _terraContentContainer = require('terra-content-container');

var _terraContentContainer2 = _interopRequireDefault(_terraContentContainer);

var _IconClose = require('terra-icon/lib/icon/IconClose');

var _IconClose2 = _interopRequireDefault(_IconClose);

require('./Popup.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Directional classes to be applied by a presenting component.
 */
var POPUP_CLASSES = {
  top: 'terra-Popup--arrowTop',
  bottom: 'terra-Popup--arrowBottom',
  left: 'terra-Popup--arrowLeft',
  right: 'terra-Popup--arrowRight'
};

/**
 * Mirrored directional classes, used to flip the arrow on repositioning.
 */
var POPUP_OPPOSITE_CLASSES = {
  top: 'terra-Popup--arrowBottom',
  bottom: 'terra-Popup--arrowTop',
  left: 'terra-Popup--arrowRight',
  right: 'terra-Popup--arrowLeft'
};

/**
 * Key code value for the escape key.
 */
var KEYCODES = {
  ESCAPE: 27
};

var ARROW_POSITIONS = ['top', 'bottom', 'left', 'right'];

var POPUP_MARGIN = 9;

var propTypes = {
  /**
   * The arrow to be placed within the popup frame.
   */
  arrow: _propTypes2.default.element,
  /**
   * The initial arrow position.
   */
  arrowPosition: _propTypes2.default.oneOf(ARROW_POSITIONS),
  /**
   * The children to be presented as the popup's content.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * CSS classnames that are append to the popup content body.
   */
  classNameContent: _propTypes2.default.string,
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
   * A the px value of height to be applied to the content container.
   */
  contentHeight: _propTypes2.default.number.isRequired,
  /**
   * The maximum height to set for popup content in px, also used with responsive behavior for actual height.
   */
  contentHeightMax: _propTypes2.default.number,
  /**
   * A the px value of width to be applied to the content container.
   */
  contentWidth: _propTypes2.default.number.isRequired,
  /**
   * The maximum width of the popup content in px, also used with responsive behavior for actual width.
   */
  contentWidthMax: _propTypes2.default.number,
  /**
   * Should the default behavior, that inserts a header when constraints are breached, be disabled.
   */
  isHeaderDisabled: _propTypes2.default.bool,
  /**
   * The function that should be triggered when a close is indicated.
   */
  onRequestClose: _propTypes2.default.func.isRequired,
  /**
   * The function returning the frame html reference.
   */
  refCallback: _propTypes2.default.func
};

var defaultProps = {
  arrowPosition: 'top',
  classNameContent: null,
  closeOnEsc: false,
  closeOnOutsideClick: false,
  closeOnResize: false,
  contentHeightMax: -1,
  contentWidthMax: -1,
  isHeaderDisabled: false
};

var Popup = function (_React$Component) {
  _inherits(Popup, _React$Component);

  _createClass(Popup, null, [{
    key: 'getContentStyle',
    value: function getContentStyle(height, maxHeight, width, maxWidth) {
      var validHeight = maxHeight <= 0 || height <= maxHeight ? height : maxHeight;
      var validWidth = maxWidth <= 0 || width <= maxWidth ? width : maxWidth;
      return { height: validHeight.toString() + 'px', width: validWidth.toString() + 'px' };
    }
  }, {
    key: 'addPopupHeader',
    value: function addPopupHeader(children, onRequestClose) {
      var icon = _react2.default.createElement(_IconClose2.default, { className: 'terra-Popup-closeButton', onClick: onRequestClose, height: '30', width: '30', style: { float: 'right' } });
      var header = _react2.default.createElement(
        'div',
        { className: 'terra-Popup-header' },
        icon
      );
      return _react2.default.createElement(
        _terraContentContainer2.default,
        { header: header, fill: true },
        children
      );
    }
  }, {
    key: 'isFullScreen',
    value: function isFullScreen(height, maxHeight, width, maxWidth) {
      if (maxHeight <= 0 || maxWidth <= 0) {
        return false;
      }
      return height >= maxHeight && width >= maxWidth;
    }
  }, {
    key: 'isMarginValid',
    value: function isMarginValid(dimension, dimensionMax) {
      if (dimensionMax <= 0) {
        return true;
      }
      return dimensionMax >= dimension + POPUP_MARGIN;
    }
  }, {
    key: 'shouldShowArrow',
    value: function shouldShowArrow(arrow, arrowPosition, contentHeight, contentHeightMax, contentWidth, contentWidthMax) {
      if (arrow) {
        if (['top', 'bottom'].indexOf(arrowPosition) >= 0) {
          return Popup.isMarginValid(contentHeight, contentHeightMax);
        }
        return Popup.isMarginValid(contentWidth, contentWidthMax);
      }
      return false;
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
    key: 'debounce',
    value: function debounce(fn, delay) {
      var _this2 = this;

      var timer = null;
      return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var context = _this2;
        clearTimeout(timer);
        timer = setTimeout(function () {
          fn.apply(context, args);
        }, delay);
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          arrow = _props.arrow,
          arrowPosition = _props.arrowPosition,
          children = _props.children,
          classNameContent = _props.classNameContent,
          closeOnEsc = _props.closeOnEsc,
          closeOnOutsideClick = _props.closeOnOutsideClick,
          closeOnResize = _props.closeOnResize,
          contentHeight = _props.contentHeight,
          contentHeightMax = _props.contentHeightMax,
          contentWidth = _props.contentWidth,
          contentWidthMax = _props.contentWidthMax,
          isHeaderDisabled = _props.isHeaderDisabled,
          onRequestClose = _props.onRequestClose,
          refCallback = _props.refCallback,
          customProps = _objectWithoutProperties(_props, ['arrow', 'arrowPosition', 'children', 'classNameContent', 'closeOnEsc', 'closeOnOutsideClick', 'closeOnResize', 'contentHeight', 'contentHeightMax', 'contentWidth', 'contentWidthMax', 'isHeaderDisabled', 'onRequestClose', 'refCallback']);

      var showArrow = Popup.shouldShowArrow(arrow, arrowPosition, contentHeight, contentHeightMax, contentWidth, contentWidthMax);
      var contentStyle = Popup.getContentStyle(contentHeight, contentHeightMax, contentWidth, contentWidthMax);
      var isFullScreen = Popup.isFullScreen(contentHeight, contentHeightMax, contentWidth, contentWidthMax);

      var content = children;
      if (isFullScreen && !isHeaderDisabled) {
        content = Popup.addPopupHeader(children, onRequestClose);
      }

      var arrowContent = void 0;
      if (showArrow) {
        arrowContent = arrow;
      }

      var popupClassNames = (0, _classnames2.default)(['terra-Popup', { 'terra-Popup-showArrow': showArrow }, _defineProperty({}, '' + POPUP_CLASSES[arrowPosition], showArrow), customProps.className]);

      var contentClassNames = (0, _classnames2.default)(['terra-Popup-content', { 'terra-Popup-content--isFullScreen': isFullScreen }, classNameContent]);

      // Delete the disableOnClickOutside and disableOnClickOutside prop that comes from react-onclickoutside.
      delete customProps.disableOnClickOutside;
      delete customProps.enableOnClickOutside;

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: popupClassNames, ref: refCallback }),
        arrowContent,
        _react2.default.createElement(
          'div',
          { className: contentClassNames, style: contentStyle },
          content
        )
      );
    }
  }]);

  return Popup;
}(_react2.default.Component);

Popup.propTypes = propTypes;
Popup.defaultProps = defaultProps;

var onClickOutsidePopup = (0, _reactOnclickoutside2.default)(Popup);
onClickOutsidePopup.positionClasses = POPUP_CLASSES;
onClickOutsidePopup.oppositePositionClasses = POPUP_OPPOSITE_CLASSES;

exports.default = onClickOutsidePopup;