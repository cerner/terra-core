'use strict';

var _reactIntl = require('react-intl');

var _de = require('react-intl/locale-data/de');

var _de2 = _interopRequireDefault(_de);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_de2.default);

var messages = {
  'Terra.ajax.error': 'Inhalt konnte nicht geladen werden.',
  'Terra.areYouSure.unsaved': 'Es liegen nicht gespeicherte Änderungen vor.',
  'Terra.forms.validation.date': "Geben Sie ein gültiges Datum im Format 'MM.TT.JJJJ' ein.",
  'Terra.forms.validation.digits': 'Geben Sie nur Zahlen ein.',
  'Terra.forms.validation.email': 'Geben Sie eine gültige E-Mail-Adresse ein.',
  'Terra.forms.validation.equalTo': 'Geben Sie denselben Wert erneut ein.',
  'Terra.forms.validation.max': 'Geben Sie einen Wert kleiner als bzw. gleich {value} ein.',
  'Terra.forms.validation.maxlength': 'Geben Sie weniger als {length} Zeichen ein.',
  'Terra.forms.validation.min': 'Geben Sie einen Wert größer als bzw. gleich {value} ein.',
  'Terra.forms.validation.minlength': 'Geben Sie mindestens {length} Zeichen ein.',
  'Terra.forms.validation.number': 'Geben Sie eine gültige Zahl ein.',
  'Terra.forms.validation.range': 'Geben Sie einen Wert zwischen {start} und {end} ein.',
  'Terra.forms.validation.remote': 'Dieses Feld bearbeiten.',
  'Terra.forms.validation.required': 'Dieses Feld ist ein Pflichtfeld.',
  'Terra.forms.validation.url': 'Geben Sie eine gültige URL ein.',
  'Terra.truncateText.showMore': 'Weitere anzeigen',
  'Terra.truncateText.showLess': 'Weniger anzeigen',
  'Terra.truncateText.text_remaining': '{textCount} verbleibend'
};

module.exports = {
  load: true,
  locale: 'de',
  messages: messages
};