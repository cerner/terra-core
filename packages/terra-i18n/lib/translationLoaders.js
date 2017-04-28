'use strict';

var loadEnTranslation = function loadEnTranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('en.js');
    callback.call(scope, i18n);
  }, 'en-translations');
};

var loadEnGBTranslation = function loadEnGBTranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('en-GB.js');
    callback.call(scope, i18n);
  }, 'en-GB-translations');
};

var loadEnUSTranslation = function loadEnUSTranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('en-US.js');
    callback.call(scope, i18n);
  }, 'en-US-translations');
};

var loadDeTranslation = function loadDeTranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('de.js');
    callback.call(scope, i18n);
  }, 'de-translations');
};

var loadPtTranslation = function loadPtTranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('pt.js');
    callback.call(scope, i18n);
  }, 'pt-translations');
};

var loadFrTranslation = function loadFrTranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('fr.js');
    callback.call(scope, i18n);
  }, 'fr-translations');
};

var loadEsTranslation = function loadEsTranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('es.js');
    callback.call(scope, i18n);
  }, 'es-translations');
};

var loadFiFITranslation = function loadFiFITranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('fi-FI.js');
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