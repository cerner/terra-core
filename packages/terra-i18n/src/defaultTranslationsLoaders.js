const loadArTranslation = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('ar.js');
    callback.call(scope, i18n);
  }, 'ar-translations');
};

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

const loadPtBRTranslation = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('pt-BR.js');
    callback.call(scope, i18n);
  }, 'pt-BR-translations');
};

const loadFrTranslation = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('fr.js');
    callback.call(scope, i18n);
  }, 'fr-translations');
};

const loadFrFRTranslation = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('fr-FR.js');
    callback.call(scope, i18n);
  }, 'fr-FR-translations');
};

const loadEsTranslation = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('es.js');
    callback.call(scope, i18n);
  }, 'es-translations');
};

const loadEsUSTranslation = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('es-US.js');
    callback.call(scope, i18n);
  }, 'es-US-translations');
};

const loadEsESTranslation = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('es-ES.js');
    callback.call(scope, i18n);
  }, 'es-ES-translations');
};

const loadFiFITranslation = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('fi-FI.js');
    callback.call(scope, i18n);
  }, 'fi-FI-translations');
};

const loadNlTranslation = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('nl.js');
    callback.call(scope, i18n);
  }, 'nl-translations');
};

const loadNlBETranslation = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('nl-BE.js');
    callback.call(scope, i18n);
  }, 'nl-BE-translations');
};

const loadSvTranslation = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('sv.js');
    callback.call(scope, i18n);
  }, 'sv-translations');
};

const loadSvSETranslation = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('sv-SE.js');
    callback.call(scope, i18n);
  }, 'sv-SE-translations');
};

const translationLoaders = {
  ar: loadArTranslation,
  en: loadEnTranslation,
  'en-GB': loadEnGBTranslation,
  'en-US': loadEnUSTranslation,
  de: loadDeTranslation,
  pt: loadPtTranslation,
  'pt-BR': loadPtBRTranslation,
  fr: loadFrTranslation,
  'fr-FR': loadFrFRTranslation,
  es: loadEsTranslation,
  'es-US': loadEsUSTranslation,
  'es-ES': loadEsESTranslation,
  'fi-FI': loadFiFITranslation,
  nl: loadNlTranslation,
  'nl-BE': loadNlBETranslation,
  sv: loadSvTranslation,
  'sv-SE': loadSvSETranslation,
};

module.exports = translationLoaders;
