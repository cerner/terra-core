import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/de';

addLocaleData(localeData);

const messages = {
  'Terra.ajax.error': 'Inhalt konnte nicht geladen werden.',
  'Terra.demographicsBanner.dateOfBirth': 'Geburtsdatum: ',
  'Terra.demographicsBanner.deceased': 'Verstorben: ',
  'Terra.demographicsBanner.gestationalAge': 'GA: ',
  'Terra.demographicsBanner.noDataProvided': '--',
  'Terra.demographicsBanner.postMenstrualAge': 'Postmenstruelles Alter: ',
};

module.exports = {
  load: true,
  locale: 'de',
  messages,
};
