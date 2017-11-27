import fs from 'fs';
import path from 'path';

let supportedLocales;

function generateTranslationFile(language, messages) {
  return `import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/${language.split('-')[0]}';

addLocaleData(localeData);

const messages = ${JSON.stringify(messages, null, 2)};
const areTranslationsLoaded = true;
const locale = '${language}';
export {
  areTranslationsLoaded,
  locale,
  messages
};`;
}

function getDirectories(srcPath, inputFileSystem) {
  return inputFileSystem.readdirSync(srcPath).filter(file => inputFileSystem.statSync(path.join(srcPath, file)).isDirectory());
}

function readTranslations(languageMessages, currentDirectory, inputFileSystem) {
  // Check the directory for translations
  const translationsDirectory = path.resolve(currentDirectory, 'translations');
  try {
    // Check if the directory exists by attempting to read from it
    inputFileSystem.readdirSync(translationsDirectory);
    // Check the directory for each translation file
    supportedLocales.forEach((language) => {
      const translationFile = path.resolve(translationsDirectory, `${language}.json`);
      try {
        Object.assign(languageMessages[language], JSON.parse(inputFileSystem.readFileSync(translationFile, 'utf8')));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(`Translation file ${language}.json not found for ${translationsDirectory}`);
      }
    });
  } catch (e) {
    // not outputting anything here as the catching of the directory not existing is not an error in this case
  }
}

function aggregateDirectory(languageMessages, currentDirectory, router, inputFileSystem) {
  readTranslations(languageMessages, currentDirectory, inputFileSystem);
  // Check the directory's router for translation files
  const modulePath = path.resolve(currentDirectory, router);
  try {
    getDirectories(modulePath, inputFileSystem).forEach((module) => {
      aggregateDirectory(languageMessages, path.resolve(modulePath, module), router, inputFileSystem);
    });
  } catch (e) {
    // not outputting anything here as the catching of the directories not existing is not an error in this case
  }
}

function aggregateTranslationMessages(options, inputFileSystem) {
  if (!options.baseDirectory) {
    throw new Error('Please included the base directory path in the plugin options.');
  }

  if (!options.supportedLocales) {
    throw new Error('Please included the supported locales in the plugin options.');
  }

  supportedLocales = options.supportedLocales;

  const languageMessages = {};
  supportedLocales.forEach((language) => { languageMessages[language] = {}; });

  // Read translations directly from specific paths
  if (options.translationsDirectories) {
    options.translationsDirectories.forEach(dir =>
      readTranslations(languageMessages, path.resolve(options.baseDirectory, dir), inputFileSystem),
    );
  }
  // Set translationsDirectoryRouters to node_modules if not specified
  const translationsDirectoryRouters = options.translationsDirectoryRouters || [];
  translationsDirectoryRouters.push('node_modules');
  // Search and aggregate translation messages under each router
  translationsDirectoryRouters.forEach(router =>
    aggregateDirectory(languageMessages, options.baseDirectory, router, inputFileSystem),
  );
  return languageMessages;
}

function aggregateTranslations(options, compiler) {
  compiler.plugin('after-environment', () => {
    let inputFileSystem = options.inputFileSystem;
    if (!inputFileSystem) {
      inputFileSystem = compiler.inputFileSystem;
    }

    // Aggregate translation messages for the directory
    const languageMessages = aggregateTranslationMessages(options, inputFileSystem);
    const directoryPath = path.resolve(options.baseDirectory, 'aggregated-translations');
    let outputFileSystem = options.outputFileSystem;

    // Create the aggregated-translations directory
    if (outputFileSystem) {
      outputFileSystem.mkdirpSync(directoryPath);
    } else {
      outputFileSystem = fs;
      if (!outputFileSystem.existsSync(directoryPath)) {
        outputFileSystem.mkdirSync(directoryPath);
      }
    }

    // Create a file for each language for the aggregated messages
    supportedLocales.forEach((language) => {
      if (language in languageMessages) {
        outputFileSystem.writeFileSync(path.resolve(directoryPath, `${language}.js`),
          generateTranslationFile(language, languageMessages[language]));
      } else {
        throw new Error(`Translation file found for ${language}.json, but translations were not loaded correctly. Please check that your translated modules were installed correctly.`);
      }
    });
  });
}

module.exports = (options) => {
  let updatedOptions = options;
  if (updatedOptions instanceof Array) {
    updatedOptions = {
      include: updatedOptions,
    };
  }

  if (!Array.isArray(updatedOptions.include)) {
    updatedOptions.include = [updatedOptions.include];
  }

  return {
    apply: aggregateTranslations.bind(this, updatedOptions),
  };
};
