/* eslint-disable import/no-unresolved, compat/compat, no-console */
import intlLoaders from 'intlLoaders';
import hasIntlData from 'intl-locales-supported';

const supportedIntlConstructors = () => {
  /**
   * Use try-catch to check if Intl is provided by the browser. In some instances checking Intl will throw an
   * error and crash the page with little information.
   *
   * Reference: https://github.com/cerner/terra-core/issues/2820
   */
  let constructors;
  try {
    if (typeof (Intl) === 'object' && typeof (Intl.DateTimeFormat) === 'function' && typeof (Intl.NumberFormat) === 'function') {
      /**
       * intl-locales-supported accesses the 'supportedLocalesOf' property of each of these constructors.
       * When certain polyfills are used, the polyfill may not have the 'supportedLocalesOf' property.
       * For example, when using the date-time-format-timezone Intl.DateTimeFormat becomes Intl.DateTimeFormatPolyfill which does not support this property.
       *
       * Reference: https://github.com/cerner/terra-core/issues/2914
       */
      if (Object.prototype.hasOwnProperty.call(Intl.DateTimeFormat, 'supportedLocalesOf') && Object.prototype.hasOwnProperty.call(Intl.NumberFormat, 'supportedLocalesOf')) {
        constructors = [
          Intl.DateTimeFormat,
          Intl.NumberFormat,
        ];
      } else {
        constructors = [];
      }
    }
  } catch (error) {
    constructors = [];
  }

  return constructors;
};

const loadFallbackIntl = (localeContext) => {
  try {
    if (!hasIntlData(['en'], supportedIntlConstructors())) {
      intlLoaders.en();
    }

    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Locale data was not supplied for the ${localeContext}. Using en data as the fallback locale data.`);
    }
  } catch (e) {
    throw new Error(`Locale data was not supplied for the ${localeContext}, or the en fallback locale.`);
  }
};

const loadIntl = (locale) => {
  const fallbackLocale = locale.split('-').length > 1 ? locale.split('-')[0] : false;
  try {
    if (!hasIntlData([locale], supportedIntlConstructors())) {
      intlLoaders[locale]();
    }
  } catch (e) {
    if (fallbackLocale) {
      try {
        if (!hasIntlData([fallbackLocale], supportedIntlConstructors())) {
          intlLoaders[fallbackLocale]();
        }

        if (process.env.NODE_ENV !== 'production') {
          console.warn(`Locale data was not supplied for the ${locale} locale. Using ${fallbackLocale} data as the fallback locale data.`);
        }
      } catch (error) {
        const localeContext = `${locale} or ${fallbackLocale} locales`;
        loadFallbackIntl(localeContext);
      }
    } else {
      const localeContext = `${locale} locale`;
      loadFallbackIntl(localeContext);
    }
  }
};

export default loadIntl;

export {
  loadIntl,
};
/* eslint-enable import/no-unresolved, compat/compat, no-console */
