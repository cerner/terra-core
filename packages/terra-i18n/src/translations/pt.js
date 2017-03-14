import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/pt';

addLocaleData(localeData);

const messages = {};

module.exports = {
  load: true,
  locale: 'pt',
  messages,
};
