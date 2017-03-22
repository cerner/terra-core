'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/forbid-prop-types */

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
  return _react2.default.createElement(
    _reactIntl.IntlProvider,
    { locale: props.locale, key: props.locale, messages: props.messages },
    _react2.default.createElement(
      'div',
      null,
      props.children
    )
  );
};

I18nProvider.propTypes = propTypes;

exports.default = I18nProvider;