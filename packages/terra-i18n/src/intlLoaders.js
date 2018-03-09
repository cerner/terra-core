/* eslint-disable */
import intlLoaders from 'intlLoaders';

const loadFallbackLocale = (localeContext, callback, scope) => {
  try {
    intlLoaders['en'](callback, scope);
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Locale data was not supplied for the ${localeContext}. Using en as the fallback locale data.`);
    }
  } catch (e) {
    throw new Error(`Locale data was not supplied for the ${localeContext}, or the en fallback locale.`);
  }
}

const loadIntl = (locale) => {
  const fallbackLocale = locale.split('-').length > 1 ? locale.split('-')[0] : false;
  try {
     intlLoaders[locale]();
  } catch (e) {
    if(fallbackLocale) {
      try {
        intlLoaders[fallbackLocale](callback, scope);
        if (process.env.NODE_ENV !== 'production') {
          console.warn(`Locale data was not supplied for the ${locale} locale. Using ${fallbackLocale} data as the fallback locale data.`);
        }
      } catch (e) {
        const localeContext = `${locale} or ${fallbackLocale} locales`;
        loadFallbackLocale(localeContext, callback, scope);
      }
    } else {
      const localeContext = `${locale} locale`;
      loadFallbackLocale(localeContext, callback, scope);
    }
  }
};

module.exports = loadIntl;
