'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = require('react-intl');

var _terraI18n = require('terra-i18n');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Demo = function (_React$Component) {
  _inherits(Demo, _React$Component);

  function Demo(props) {
    _classCallCheck(this, Demo);

    var _this = _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

    _this.state = {
      areTranslationsLoaded: false,
      locale: 'en-US',
      messages: {}
    };
    _this.handleLocaleChange = _this.handleLocaleChange.bind(_this);
    return _this;
  }

  _createClass(Demo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _terraI18n.i18nLoader)(this.state.locale, this.setState, this);
    }
  }, {
    key: 'handleLocaleChange',
    value: function handleLocaleChange(e) {
      (0, _terraI18n.i18nLoader)(e.target.value, this.setState, this);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.areTranslationsLoaded) {
        return _react2.default.createElement('div', null);
      }
      return _react2.default.createElement(
        _terraI18n.I18nProvider,
        {
          locale: this.state.locale,
          messages: this.state.messages
        },
        _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'Terra.ajax.error' }),
        _react2.default.createElement(
          'label',
          { htmlFor: 'locale' },
          ' Current locale: ',
          this.state.locale,
          ' '
        ),
        _react2.default.createElement(
          'select',
          { value: this.state.locale, onChange: this.handleLocaleChange },
          _react2.default.createElement(
            'option',
            { value: 'en' },
            'en'
          ),
          _react2.default.createElement(
            'option',
            { value: 'en-GB' },
            'en-GB'
          ),
          _react2.default.createElement(
            'option',
            { value: 'en-US' },
            'en-US'
          ),
          _react2.default.createElement(
            'option',
            { value: 'de' },
            'de'
          ),
          _react2.default.createElement(
            'option',
            { value: 'es' },
            'es'
          ),
          _react2.default.createElement(
            'option',
            { value: 'fr' },
            'fr'
          ),
          _react2.default.createElement(
            'option',
            { value: 'pt' },
            'pt'
          ),
          _react2.default.createElement(
            'option',
            { value: 'fi-FI' },
            'fi-FI'
          )
        )
      );
    }
  }]);

  return Demo;
}(_react2.default.Component);

Demo.propTypes = {
  locale: _propTypes2.default.string
};

Demo.defaultProps = {
  locale: 'en'
};

exports.default = function () {
  return _react2.default.createElement(Demo, null);
};