import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/es';

addLocaleData(localeData);

const messages = {
  'Terra.ajax.error': 'Error al cargar el contenido.',
};

module.exports = {
  load: true,
  locale: 'es',
  messages,
};
