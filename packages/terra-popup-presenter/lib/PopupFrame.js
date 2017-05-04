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

var _PopupArrow = require('./PopupArrow');

var _PopupArrow2 = _interopRequireDefault(_PopupArrow);

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
  children: _react.PropTypes.node,
  /**
   * Whether or not the using the escape key should also trigger the onClickOutside event.
   */
  closeOnEsc: _react.PropTypes.bool,
  /**
   * Whether or not the using the escape key should also trigger the onClickOutside event.
   */
  closeOnOutsideClick: _react.PropTypes.bool,
  /**
   * The function that should be triggered when a close is indicated.
   */
  onRequestClose: _react.PropTypes.func,
  /**
   * The function that should be triggered when a close is indicated.
   */
  arrowAlignment: _react.PropTypes.oneOf(arrowAlignments),
  /**
   * The function that should be triggered when a close is indicated.
   */
  arrowPosition: _react.PropTypes.oneOf(arrowPositions),
  showArrow: _react.PropTypes.bool
};

var defaultProps = {
  children: [],
  closeOnEsc: true,
  closeOnOutsideClick: true,
  onRequestClose: undefined,
  arrowAlignment: 'middle',
  arrowPosition: 'top',
  showArrow: true
};

var PopupFrame = function (_React$Component) {
  _inherits(PopupFrame, _React$Component);

  function PopupFrame(props) {
    _classCallCheck(this, PopupFrame);

    var _this = _possibleConstructorReturn(this, (PopupFrame.__proto__ || Object.getPrototypeOf(PopupFrame)).call(this, props));

    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    _this.handleKeydown = _this.handleKeydown.bind(_this);
    return _this;
  }

  _createClass(PopupFrame, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.closeOnEsc) {
        document.addEventListener('keydown', this.handleKeydown);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.closeOnEsc) {
        document.removeEventListener('keydown', this.handleKeydown);
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
          children = _props.children,
          closeOnEsc = _props.closeOnEsc,
          closeOnOutsideClick = _props.closeOnOutsideClick,
          onRequestClose = _props.onRequestClose,
          enableOnClickOutside = _props.enableOnClickOutside,
          disableOnClickOutside = _props.disableOnClickOutside,
          arrowAlignment = _props.arrowAlignment,
          arrowPosition = _props.arrowPosition,
          showArrow = _props.showArrow,
          customProps = _objectWithoutProperties(_props, ['children', 'closeOnEsc', 'closeOnOutsideClick', 'onRequestClose', 'enableOnClickOutside', 'disableOnClickOutside', 'arrowAlignment', 'arrowPosition', 'showArrow']);

      var frameClassNames = (0, _classnames2.default)(['terra-PopupFrame', _defineProperty({}, 'terra-PopupFrame--arrow' + arrowPosition, arrowPosition), customProps.className]);

      var arrowClassNames = (0, _classnames2.default)(['terra-PopupFrame-arrow', _defineProperty({}, 'terra-PopupFrame-arrow--align' + arrowAlignment, arrowAlignment)]);

      var arrow = void 0;
      if (showArrow) {
        arrow = _react2.default.createElement(
          'div',
          { className: arrowClassNames },
          _react2.default.createElement(_PopupArrow2.default, { direction: arrowPosition })
        );
      }

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: frameClassNames }),
        arrow,
        _react2.default.createElement(
          'div',
          { className: 'terra-PopupFrame-content' },
          children
        )
      );
    }
  }]);

  return PopupFrame;
}(_react2.default.Component);

PopupFrame.propTypes = propTypes;
PopupFrame.defaultProps = defaultProps;

exports.default = PopupFrame;