/* eslint-disable import/no-unresolved, no-console */
import translationLoaders from 'translationsLoaders';

const loadFallbackLocale = (localeContext, callback, scope) => {
  try {
    translationLoaders.en(callback, scope);
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Translations were not supplied for the ${localeContext}. Using en as the fallback locale.`);
    }
  } catch (e) {
    throw new Error(`Translations were not supplied for the ${localeContext}, or the en fallback locale.`);
  }
};

const loadTranslations = (locale, callback, scope) => {
  const fallbackLocale = locale.split('-').length > 1 ? locale.split('-')[0] : false;
  try {
    translationLoaders[locale](callback, scope);
  } catch (e) {
    if (fallbackLocale) {
      try {
        translationLoaders[fallbackLocale](callback, scope);
        if (process.env.NODE_ENV !== 'production') {
          console.warn(`Translations were not supplied for the ${locale} locale. Using ${fallbackLocale} as the fallback locale.`);
        }
      } catch (error) {
        const localeContext = `${locale} or ${fallbackLocale} locales`;
        loadFallbackLocale(localeContext, callback, scope);
      }
    } else {
      const localeContext = `${locale} locale`;
      loadFallbackLocale(localeContext, callback, scope);
    }
  }
};

export default loadTranslations;
/* eslint-enable import/no-unresolved, no-console */
