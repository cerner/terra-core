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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KEYCODES = {
  ESCAPE: 27
};

var propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: _react.PropTypes.node,
  closeOnEsc: _react.PropTypes.bool
};

var defaultProps = {
  children: [],
  closeOnEsc: false
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
      if (this.props.onClickOutside) {
        this.props.onClickOutside(event);
      }
    }
  }, {
    key: 'handleKeydown',
    value: function handleKeydown(event) {
      if (event.keyCode === KEYCODES.ESCAPE) {
        this.props.onClickOutside(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onClickOutside = _props.onClickOutside,
          enableOnClickOutside = _props.enableOnClickOutside,
          disableOnClickOutside = _props.disableOnClickOutside,
          customProps = _objectWithoutProperties(_props, ['children', 'onClickOutside', 'enableOnClickOutside', 'disableOnClickOutside']);

      var frameClassNames = (0, _classnames2.default)(['terra-PopupFrame', customProps.className]);

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: frameClassNames }),
        children
      );
    }
  }]);

  return PopupFrame;
}(_react2.default.Component);

PopupFrame.propTypes = propTypes;
PopupFrame.defaultProps = defaultProps;

exports.default = PopupFrame;