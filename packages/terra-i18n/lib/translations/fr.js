'use strict';

var _reactIntl = require('react-intl');

var _fr = require('react-intl/locale-data/fr');

var _fr2 = _interopRequireDefault(_fr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_fr2.default);

var messages = {
  'Terra.ajax.error': 'Échec du chargement du contenu.'
};

module.exports = {
  load: true,
  locale: 'fr',
  messages: messages
};