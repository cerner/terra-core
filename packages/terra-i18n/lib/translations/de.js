'use strict';

var _reactIntl = require('react-intl');

var _de = require('react-intl/locale-data/de');

var _de2 = _interopRequireDefault(_de);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_de2.default);

var messages = {
  'Terra.ajax.error': 'Inhalt konnte nicht geladen werden.'
};

module.exports = {
  load: true,
  locale: 'de',
  messages: messages
};