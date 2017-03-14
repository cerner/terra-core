import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/fi';

addLocaleData(localeData);

const messages = {};

module.exports = {
  load: true,
  locale: 'fi-FI',
  messages,
};
