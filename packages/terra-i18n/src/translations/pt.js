import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/pt';

addLocaleData(localeData);

const messages = {
  'Terra.ajax.error': 'Falha ao carregar conteúdo.',
  'Terra.demographicsBanner.dateOfBirth': 'DN: ',
  'Terra.demographicsBanner.deceased': 'Óbito: ',
  'Terra.demographicsBanner.gestationalAge': 'IG: ',
  'Terra.demographicsBanner.noDataProvided': '--',
  'Terra.demographicsBanner.postMenstrualAge': 'IPM: ',
};

module.exports = {
  load: true,
  locale: 'pt',
  messages,
};
