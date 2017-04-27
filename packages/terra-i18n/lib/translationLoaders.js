'use strict';

var loadEnTranslation = function loadEnTranslation(callback, scope) {
  require.ensure([], function (require) {
    /* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
    var i18n = require('en.js');
    /* eslint-enable import/no-extraneous-dependencies, import/no-unresolved */
    callback.call(scope, i18n);
  }, 'en-translations');
};

var loadEnGBTranslation = function loadEnGBTranslation(callback, scope) {
  require.ensure([], function (require) {
    /* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
    var i18n = require('en-GB.js');
    /* eslint-enable import/no-extraneous-dependencies, import/no-unresolved */
    callback.call(scope, i18n);
  }, 'en-GB-translations');
};

var loadEnUSTranslation = function loadEnUSTranslation(callback, scope) {
  require.ensure([], function (require) {
    /* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
    var i18n = require('en-US.js');
    /* eslint-enable import/no-extraneous-dependencies, import/no-unresolved */
    callback.call(scope, i18n);
  }, 'en-US-translations');
};

var loadDeTranslation = function loadDeTranslation(callback, scope) {
  require.ensure([], function (require) {
    /* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
    var i18n = require('de.js');
    /* eslint-enable import/no-extraneous-dependencies, import/no-unresolved */
    callback.call(scope, i18n);
  }, 'de-translations');
};

var loadPtTranslation = function loadPtTranslation(callback, scope) {
  require.ensure([], function (require) {
    /* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
    var i18n = require('pt.js');
    /* eslint-enable import/no-extraneous-dependencies, import/no-unresolved */
    callback.call(scope, i18n);
  }, 'pt-translations');
};

var loadFrTranslation = function loadFrTranslation(callback, scope) {
  require.ensure([], function (require) {
    /* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
    var i18n = require('fr.js');
    /* eslint-enable import/no-extraneous-dependencies, import/no-unresolved */
    callback.call(scope, i18n);
  }, 'fr-translations');
};

var loadEsTranslation = function loadEsTranslation(callback, scope) {
  require.ensure([], function (require) {
    /* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
    var i18n = require('es.js');
    /* eslint-enable import/no-extraneous-dependencies, import/no-unresolved */
    callback.call(scope, i18n);
  }, 'es-translations');
};

var loadFiFITranslation = function loadFiFITranslation(callback, scope) {
  require.ensure([], function (require) {
    /* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
    var i18n = require('fi-FI.js');
    /* eslint-enable import/no-extraneous-dependencies, import/no-unresolved */
    callback.call(scope, i18n);
  }, 'fi-FI-translations');
};

var translationLoaders = {
  en: loadEnTranslation,
  'en-GB': loadEnGBTranslation,
  'en-US': loadEnUSTranslation,
  de: loadDeTranslation,
  pt: loadPtTranslation,
  fr: loadFrTranslation,
  es: loadEsTranslation,
  'fi-FI': loadFiFITranslation
};

module.exports = translationLoaders;