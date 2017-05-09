'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraI18n = require('terra-i18n');

require('./baseStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * The component(s) that will be wrapped by `<Base />`.
   */
  children: _react.PropTypes.node.isRequired,
  /**
   * The locale name.
   */
  locale: _react.PropTypes.string.isRequired,
  /**
   * Customized translations provided by consuming application
   * only for current locale.
   */
  customMessages: _react.PropTypes.object
};

var defaultProps = {
  customMessages: {}
};

var Base = function (_React$Component) {
  _inherits(Base, _React$Component);

  function Base(props) {
    _classCallCheck(this, Base);

    var _this = _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).call(this, props));

    _this.state = {
      load: false,
      locale: props.locale,
      messages: {}
    };
    return _this;
  }

  _createClass(Base, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _terraI18n.i18nLoader)(this.props.locale, this.setState, this);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props === nextProps) return;
      (0, _terraI18n.i18nLoader)(nextProps.locale, this.setState, this);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.load) return null;

      var _props = this.props,
          children = _props.children,
          locale = _props.locale,
          customMessages = _props.customMessages,
          customProps = _objectWithoutProperties(_props, ['children', 'locale', 'customMessages']);

      var messages = _extends({}, this.state.messages, customMessages);

      return _react2.default.createElement(
        _terraI18n.I18nProvider,
        {
          locale: this.state.locale,
          messages: messages
        },
        _react2.default.createElement(
          'div',
          customProps,
          children
        )
      );
    }
  }]);

  return Base;
}(_react2.default.Component);

Base.propTypes = propTypes;

Base.defaultProps = defaultProps;

exports.default = Base;