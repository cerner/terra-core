'use strict';

var _reactIntl = require('react-intl');

var _fi = require('react-intl/locale-data/fi');

var _fi2 = _interopRequireDefault(_fi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_fi2.default);

var messages = {
  'Terra.ajax.error': 'This content failed to load.n9KZ Pi~'
};

module.exports = {
  load: true,
  locale: 'fi-FI',
  messages: messages
};