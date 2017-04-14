import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/es';

addLocaleData(localeData);

const messages = {
  'Terra.ajax.error': 'Error al cargar el contenido.',
  'Terra.demographicsBanner.dateOfBirth': 'Fecha de nacimiento: ',
  'Terra.demographicsBanner.deceased': 'Fallecido: ',
  'Terra.demographicsBanner.gestationalAge': 'EG: ',
  'Terra.demographicsBanner.noDataProvided': '--',
  'Terra.demographicsBanner.postMenstrualAge': 'EPM: ',
};

module.exports = {
  load: true,
  locale: 'es',
  messages,
};
