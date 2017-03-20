import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/pt';

addLocaleData(localeData);

const messages = {
  'Terra.ajax.error': 'Falha ao carregar conteúdo.',
};

module.exports = {
  load: true,
  locale: 'pt',
  messages,
};
