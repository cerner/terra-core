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

require('./PopupFrame.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrowAlignments = ['Start', 'Center', 'End'];

var arrowPositions = ['Top', 'Bottom', 'Start', 'End'];

var KEYCODES = {
  ESCAPE: 27
};

var propTypes = {
  /**
   * The child elements passed to the component.
   */
  arrow: _react.PropTypes.element,
  content: _react.PropTypes.element,
  /**
   * Whether or not the using the escape key should also trigger the onClickOutside event.
   */
  closeOnEsc: _react.PropTypes.bool,
  /**
   * Whether or not the using the escape key should also trigger the onClickOutside event.
   */
  closeOnOutsideClick: _react.PropTypes.bool,
  /**
   * Whether or not the using the escape key should also trigger the onClickOutside event.
   */
  closeOnResize: _react.PropTypes.bool,
  /**
   * The function that should be triggered when a close is indicated.
   */
  onRequestClose: _react.PropTypes.func,
  /**
   * The function that should be triggered when a close is indicated.
   */
  arrowPosition: _react.PropTypes.oneOf(arrowPositions),
  /**
   * The function that should be triggered when a close is indicated.
   */
  constraintContainer: _react.PropTypes.any
};

var defaultProps = {
  arrow: undefined,
  content: undefined,
  closeOnEsc: true,
  closeOnOutsideClick: true,
  closeOnResize: true,
  onRequestClose: undefined,
  arrowPosition: 'Top'
};

var PopupFrame = function (_React$Component) {
  _inherits(PopupFrame, _React$Component);

  function PopupFrame(props) {
    _classCallCheck(this, PopupFrame);

    var _this = _possibleConstructorReturn(this, (PopupFrame.__proto__ || Object.getPrototypeOf(PopupFrame)).call(this, props));

    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    _this.handleKeydown = _this.handleKeydown.bind(_this);
    _this.handleResize = _this.handleResize.bind(_this);
    return _this;
  }

  _createClass(PopupFrame, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.closeOnEsc) {
        document.addEventListener('keydown', this.handleKeydown);
      }
      if (this.props.closeOnResize) {
        window.addEventListener('resize', this.handleResize); //might need debounce, and/or use resize observer
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.closeOnEsc) {
        document.removeEventListener('keydown', this.handleKeydown);
      }

      if (this.props.closeOnResize) {
        document.removeEventListener('resize', this.handleResize);
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
          content = _props.content,
          closeOnEsc = _props.closeOnEsc,
          closeOnOutsideClick = _props.closeOnOutsideClick,
          closeOnResize = _props.closeOnResize,
          onRequestClose = _props.onRequestClose,
          enableOnClickOutside = _props.enableOnClickOutside,
          disableOnClickOutside = _props.disableOnClickOutside,
          arrowPosition = _props.arrowPosition,
          constraintContainer = _props.constraintContainer,
          customProps = _objectWithoutProperties(_props, ['arrow', 'content', 'closeOnEsc', 'closeOnOutsideClick', 'closeOnResize', 'onRequestClose', 'enableOnClickOutside', 'disableOnClickOutside', 'arrowPosition', 'constraintContainer']);

      var frameClassNames = (0, _classnames2.default)(['terra-PopupFrame', _defineProperty({}, 'terra-PopupFrame--arrow' + arrowPosition, arrowPosition), customProps.className]);

      var constraintStyle = void 0;
      if (this.props.constraintContainer) {
        var rect = this.props.constraintContainer.getBoundingClientRect();
        constraintStyle = { maxHeight: rect.height.toString() + 'px', maxWidth: rect.width.toString() + 'px' };
      }

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: frameClassNames, style: constraintStyle }),
        arrow,
        _react2.default.createElement(
          'div',
          { className: 'terra-PopupFrame-content' },
          content
        )
      );
    }
  }]);

  return PopupFrame;
}(_react2.default.Component);

PopupFrame.propTypes = propTypes;
PopupFrame.defaultProps = defaultProps;

exports.default = PopupFrame;