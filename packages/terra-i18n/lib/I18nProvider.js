'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable react/forbid-prop-types */

var propTypes = {
  /**
   * The component that will be wrapped by i18n provider.
   */
  children: _react.PropTypes.node.isRequired,
  /**
   * The locale name.
   */
  locale: _react.PropTypes.string.isRequired,
  /**
   * Translations messages object.
   */
  messages: _react.PropTypes.object.isRequired
};

var I18nProvider = function I18nProvider(props) {
  var locale = props.locale,
      messages = props.messages,
      customProps = _objectWithoutProperties(props, ['locale', 'messages']);

  return _react2.default.createElement(
    _reactIntl.IntlProvider,
    _extends({}, customProps, {
      locale: props.locale,
      key: props.locale,
      messages: props.messages
    }),
    _react2.default.createElement(
      'div',
      null,
      props.children
    )
  );
};

I18nProvider.propTypes = propTypes;

exports.default = I18nProvider;