const sortMessages = (messages) => {
  const sortedKeys = Object.keys(messages).sort((a, b) => {
    const lowerA = a.toLowerCase();
    const lowerB = b.toLowerCase();
    if (lowerA === lowerB) {
      return 0;
    }
    return lowerA < lowerB ? -1 : 1;
  });

  const sortedMessages = {};
  sortedKeys.forEach((messageKey) => {
    sortedMessages[messageKey] = messages[messageKey];
    return undefined;
  });
  return sortedMessages;
};

const translationFile = (locale, messages) => (
  `import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/${locale.split('-')[0]}';

addLocaleData(localeData);

const messages = ${JSON.stringify(messages, null, 2)};
const areTranslationsLoaded = true;
const locale = '${locale}';
export {
  areTranslationsLoaded,
  locale,
  messages
};`);

const generateTranslationFile = (locale, messages) => {
  const sortedMessages = sortMessages(messages);
  return translationFile(locale, sortedMessages);
};

module.exports = generateTranslationFile;
