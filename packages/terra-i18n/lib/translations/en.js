'use strict';

var _reactIntl = require('react-intl');

var _en = require('react-intl/locale-data/en');

var _en2 = _interopRequireDefault(_en);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_en2.default);

var messages = {
  'Terra.ajax.error': 'This content failed to load.'
};

module.exports = {
  load: true,
  locale: 'en',
  messages: messages
};