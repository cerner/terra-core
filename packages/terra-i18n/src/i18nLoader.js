/* eslint-disable global-require, import/no-named-as-default */
import loadIntl from './intlLoaders';
import loadTranslations from './translationsLoaders';

const permitParams = (callback) => {
  if (typeof (callback) !== 'function') {
    throw new Error('Second argument must be function');
  }
};

export default (locale, callback, scope) => {
  permitParams(callback);

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
