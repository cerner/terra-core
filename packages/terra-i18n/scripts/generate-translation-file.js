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

const translationFile = (language, messages) => (
  `import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/${language.split('-')[0]}';

addLocaleData(localeData);

const messages = ${JSON.stringify(messages, null, 2)};
const areTranslationsLoaded = true;
const locale = '${language}';
export {
  areTranslationsLoaded,
  locale,
  messages
};`);

const generateTranslationFile = (language, messages) => {
  const sortedMessages = sortMessages(messages);
  return translationFile(language, sortedMessages);
};

module.exports = generateTranslationFile;
