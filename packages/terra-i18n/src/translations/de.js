import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/de';

addLocaleData(localeData);

const messages = {
  'Terra.ajax.error': 'Inhalt konnte nicht geladen werden.',
};

module.exports = {
  load: true,
  locale: 'de',
  messages,
};
