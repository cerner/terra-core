const loadEnIntl = () =>
  require.ensure([],
    require => require('intl/locale-data/jsonp/en.js'),
    'en-intl-local');

const loadEnGBIntl = () =>
  require.ensure([],
    require => require('intl/locale-data/jsonp/en-GB.js'),
    'en-GB-intl-local');

const loadEnUSIntl = () =>
  require.ensure([],
    require => require('intl/locale-data/jsonp/en-US.js'),
    'en-US-intl-local');

const loadDeIntl = () =>
  require.ensure([],
    require => require('intl/locale-data/jsonp/de.js'),
    'de-intl-local');

const loadPtIntl = () =>
  require.ensure([],
    require => require('intl/locale-data/jsonp/pt.js'),
    'pt-intl-local');

const loadFrIntl = () =>
  require.ensure([],
    require => require('intl/locale-data/jsonp/fr.js'),
    'fr-intl-local');

const loadEsIntl = () =>
  require.ensure([],
    require => require('intl/locale-data/jsonp/es.js'),
    'es-intl-local');

const loadFiFIIntl = () =>
  require.ensure([],
    require => require('intl/locale-data/jsonp/fi-FI.js'),
    'fi-FI-intl-local');

const intlLoaders = {
  en: loadEnIntl,
  'en-GB': loadEnGBIntl,
  'en-US': loadEnUSIntl,
  de: loadDeIntl,
  pt: loadPtIntl,
  fr: loadFrIntl,
  es: loadEsIntl,
  'fi-FI': loadFiFIIntl,
};

module.exports = intlLoaders;
