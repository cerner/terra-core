import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/fr';

addLocaleData(localeData);

const messages = {};

module.exports = {
  load: true,
  locale: 'fr',
  messages,
};
