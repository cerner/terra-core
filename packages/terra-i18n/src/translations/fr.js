import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/fr';

addLocaleData(localeData);

const messages = {
  'Terra.ajax.error': 'Échec du chargement du contenu.',
};

module.exports = {
  load: true,
  locale: 'fr',
  messages,
};
