'use strict';

var _reactIntl = require('react-intl');

var _es = require('react-intl/locale-data/es');

var _es2 = _interopRequireDefault(_es);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_es2.default);

var messages = {
  'Terra.ajax.error': 'Error al cargar el contenido.'
};

module.exports = {
  load: true,
  locale: 'es',
  messages: messages
};