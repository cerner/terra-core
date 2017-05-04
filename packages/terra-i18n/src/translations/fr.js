import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/fr';

addLocaleData(localeData);

const messages = {
  'Terra.ajax.error': 'Échec du chargement du contenu.',
  'Terra.demographicsBanner.dateOfBirth': 'Date de naissance: ',
  'Terra.demographicsBanner.deceased': 'Décédé(e): ',
  'Terra.demographicsBanner.gestationalAge': 'Âge gestationnel: ',
  'Terra.demographicsBanner.noDataProvided': '--',
  'Terra.demographicsBanner.postMenstrualAge': 'Âge postmenstruel: ',
};

module.exports = {
  load: true,
  locale: 'fr',
  messages,
};
