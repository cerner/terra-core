const loadEnTranslation = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('en.js');
    callback.call(scope, i18n);
  }, 'en-translations');
};

const loadEnGBTranslation = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('en-GB.js');
    callback.call(scope, i18n);
  }, 'en-GB-translations');
};

const loadEnUSTranslation = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('en-US.js');
    callback.call(scope, i18n);
  }, 'en-US-translations');
};

const loadDeTranslation = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('de.js');
    callback.call(scope, i18n);
  }, 'de-translations');
};

const loadPtTranslation = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('pt.js');
    callback.call(scope, i18n);
  }, 'pt-translations');
};

const loadFrTranslation = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('fr.js');
    callback.call(scope, i18n);
  }, 'fr-translations');
};

const loadEsTranslation = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('es.js');
    callback.call(scope, i18n);
  }, 'es-translations');
};

const loadFiFITranslation = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('fi-FI.js');
    callback.call(scope, i18n);
  }, 'fi-FI-translations');
};

const translationLoaders = {
  en: loadEnTranslation,
  'en-GB': loadEnGBTranslation,
  'en-US': loadEnUSTranslation,
  de: loadDeTranslation,
  pt: loadPtTranslation,
  fr: loadFrTranslation,
  es: loadEsTranslation,
  'fi-FI': loadFiFITranslation,
};

module.exports = translationLoaders;
