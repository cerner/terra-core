'use strict';

var _reactIntl = require('react-intl');

var _pt = require('react-intl/locale-data/pt');

var _pt2 = _interopRequireDefault(_pt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_pt2.default);

var messages = {
  'Terra.ajax.error': 'Falha ao carregar conteúdo.'
};

module.exports = {
  load: true,
  locale: 'pt',
  messages: messages
};