import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/es';

addLocaleData(localeData);

const messages = {};

module.exports = {
  load: true,
  locale: 'es',
  messages,
};
