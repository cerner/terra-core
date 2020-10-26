/* eslint-disable global-require, import/no-named-as-default */
import { shouldPolyfill as shouldPolyfillGetCanonicalLocales } from '@formatjs/intl-getcanonicallocales/should-polyfill';
import { shouldPolyfill as shouldPolyfillPluralRules } from '@formatjs/intl-pluralrules/should-polyfill';
import { shouldPolyfill as shouldPolyfillRelativeTimeFormat } from '@formatjs/intl-relativetimeformat/should-polyfill';
import { shouldPolyfill as shouldPolyfillNumberFormat } from '@formatjs/intl-numberformat/should-polyfill';
import { shouldPolyfill as shouldPolyfillDateTimeFormat } from '@formatjs/intl-datetimeformat/should-polyfill';
import loadIntl from './intlLoaders';
import loadTranslations from './translationsLoaders';


const permitParams = (callback) => {
  if (typeof (callback) !== 'function') {
    throw new Error('Second argument must be function');
  }
};

export default (locale, callback, scope) => {
  permitParams(callback);

  const polyfills = {
    'getCanonicalLocales': {
      hasIntl: shouldPolyfillGetCanonicalLocales,
      polyfills: ['@formatjs/intl-getcanonicallocales'],
    },
    'PluralRules': {
      hasIntl: shouldPolyfillPluralRules,
      polyfills: ['@formatjs/intl-pluralrules'],
    },
    'RelativeTimeFormat': {
      hasIntl: shouldPolyfillRelativeTimeFormat,
      polyfills: ['@formatjs/intl-relativetimeformat'],
    },
    'NumberFormat': {
      hasIntl: shouldPolyfillNumberFormat,
      polyfills: ['@formatjs/intl-numberformat'],
    },
    'DateTimeFormat': {
      hasIntl: shouldPolyfillDateTimeFormat,
      polyfills: ['@formatjs/intl-datetimeformat'],
    },
  },

  /**
   * Use try-catch to check if Intl is provided by the browser. In some instances checking Intl will throw an
   * error and crash the page with little information.
   *
   * Reference: https://github.com/cerner/terra-core/issues/2820
   */
  let hasIntl;
  try {
    // eslint-disable-next-line compat/compat
    hasIntl = typeof (Intl) === 'object' && typeof (Intl.DateTimeFormat) === 'function' && typeof (Intl.NumberFormat) === 'function';
  } catch (error) {
    hasIntl = false;
  }

  if (!hasIntl) {
    require('intl');
  }

  if (global.IntlPolyfill) {
    loadIntl(locale);
  }

  loadTranslations(locale, callback, scope);
};
/* eslint-enable global-require, import/no-named-as-default */
