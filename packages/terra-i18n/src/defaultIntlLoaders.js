const loadArIntl = () => require.ensure(
  [],
  require => require('intl/locale-data/jsonp/ar.js'),
  'ar-intl-local',
);

const loadEnIntl = () => require.ensure(
  [],
  require => require('intl/locale-data/jsonp/en.js'),
  'en-intl-local',
);

const loadEnGBIntl = () => require.ensure(
  [],
  require => require('intl/locale-data/jsonp/en-GB.js'),
  'en-GB-intl-local',
);

const loadEnUSIntl = () => require.ensure(
  [],
  require => require('intl/locale-data/jsonp/en-US.js'),
  'en-US-intl-local',
);

const loadDeIntl = () => require.ensure(
  [],
  require => require('intl/locale-data/jsonp/de.js'),
  'de-intl-local',
);

const loadPtIntl = () => require.ensure(
  [],
  require => require('intl/locale-data/jsonp/pt.js'),
  'pt-intl-local',
);

const loadPtBRIntl = () => require.ensure(
  [],
  require => require('intl/locale-data/jsonp/pt-BR.js'),
  'pt-BR-intl-local',
);

const loadFrIntl = () => require.ensure(
  [],
  require => require('intl/locale-data/jsonp/fr.js'),
  'fr-intl-local',
);

const loadFrFRIntl = () => require.ensure(
  [],
  require => require('intl/locale-data/jsonp/fr-FR.js'),
  'fr-FR-intl-local',
);

const loadEsIntl = () => require.ensure(
  [],
  require => require('intl/locale-data/jsonp/es.js'),
  'es-intl-local',
);

const loadEsUSIntl = () => require.ensure(
  [],
  require => require('intl/locale-data/jsonp/es-US.js'),
  'es-US-intl-local',
);

const loadEsESIntl = () => require.ensure(
  [],
  require => require('intl/locale-data/jsonp/es-ES.js'),
  'es-ES-intl-local',
);

const loadFiFIIntl = () => require.ensure(
  [],
  require => require('intl/locale-data/jsonp/fi-FI.js'),
  'fi-FI-intl-local',
);

const loadNlIntl = () => require.ensure(
  [],
  require => require('intl/locale-data/jsonp/nl.js'),
  'nl-intl-local',
);

const loadNlBEIntl = () => require.ensure(
  [],
  require => require('intl/locale-data/jsonp/nl-BE.js'),
  'nl-BE-intl-local',
);

const loadSvIntl = () => require.ensure(
  [],
  require => require('intl/locale-data/jsonp/sv.js'),
  'sv-intl-local',
);

const loadSvSEIntl = () => require.ensure(
  [],
  require => require('intl/locale-data/jsonp/sv-SE.js'),
  'sv-SE-intl-local',
);

const intlLoaders = {
  ar: loadArIntl,
  en: loadEnIntl,
  'en-GB': loadEnGBIntl,
  'en-US': loadEnUSIntl,
  de: loadDeIntl,
  pt: loadPtIntl,
  'pt-BR': loadPtBRIntl,
  fr: loadFrIntl,
  'fr-FR': loadFrFRIntl,
  es: loadEsIntl,
  'es-US': loadEsUSIntl,
  'es-ES': loadEsESIntl,
  'fi-FI': loadFiFIIntl,
  nl: loadNlIntl,
  'nl-BE': loadNlBEIntl,
  sv: loadSvIntl,
  'sv-SE': loadSvSEIntl,
};

module.exports = intlLoaders;
