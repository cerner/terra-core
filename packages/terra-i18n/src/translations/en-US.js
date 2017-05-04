import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/en';

addLocaleData(localeData);

const messages = {
  'Terra.ajax.error': 'This content failed to load.',
  'Terra.demographicsBanner.dateOfBirth': 'DOB: ',
  'Terra.demographicsBanner.deceased': 'Deceased: ',
  'Terra.demographicsBanner.gestationalAge': 'GA: ',
  'Terra.demographicsBanner.noDataProvided': '--',
  'Terra.demographicsBanner.postMenstrualAge': 'PMA: ',
};

module.exports = {
  load: true,
  locale: 'en-US',
  messages,
};
