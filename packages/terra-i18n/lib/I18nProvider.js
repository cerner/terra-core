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

var I18nProvider = function I18nProvider(_ref) {
  var children = _ref.children,
      locale = _ref.locale,
      messages = _ref.messages,
      customProps = _objectWithoutProperties(_ref, ['children', 'locale', 'messages']);

  return _react2.default.createElement(
    _reactIntl.IntlProvider,
    _extends({}, customProps, {
      locale: locale,
      key: locale,
      messages: messages
    }),
    _react2.default.createElement(
      'div',
      null,
      children
    )
  );
};

I18nProvider.propTypes = propTypes;

exports.default = I18nProvider;