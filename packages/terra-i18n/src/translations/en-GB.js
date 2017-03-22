import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/en';

addLocaleData(localeData);

const messages = {
  'Terra.ajax.error': 'This content failed to load.',
};

module.exports = {
  load: true,
  locale: 'en-GB',
  messages,
};
