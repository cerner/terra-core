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

/* Find all descendant directories by a target name under the current directory
   and return an array of the target folder paths
   Assume a directory structure:
   A: {
     B,
     C: {
        B
        D
      },
      E: {
        B
      },
      F: {
        G
      }
   }
   findDirectories(B, A, inputFileSystem) returns: [A/B, A/C/B, A/E/B]
*/

function findDirectories(dirName, currentDirectory, inputFileSystem) {
  const result = [];
  // Get all current children directories
  const childrenDirs = getDirectories(currentDirectory, inputFileSystem);
  // Filter current childrenDirs by the target directory name and store their paths
  result.push(childrenDirs.filter(dir => dir === dirName).map(dir => path.join(currentDirectory, dir)));
  // Go into each childrenDir and search for target directory path
  childrenDirs.forEach(dir => result.push(findDirectories(dirName, path.join(currentDirectory, dir), inputFileSystem)));
  // Flatten the result into one-dimensional array
  return [].concat(...result);
}

function readTranslations(languageMessages, translationsDirectory, inputFileSystem) {
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

// Aggregate all translation messages under a custom directory
function aggregateCustomDirectory(languageMessages, translationsDirectory, inputFileSystem) {
  // First find all the translations folder paths under translationsDirectory
  // and then read the messages from each of them
  findDirectories('translations', translationsDirectory, inputFileSystem)
    .forEach(dir => readTranslations(languageMessages, dir, inputFileSystem));
}

// Aggregate all translation messages under node_modules
function aggregateDirectory(languageMessages, currentDirectory, inputFileSystem) {
  // Check the directory for translations
  const translationsDirectory = path.resolve(currentDirectory, 'translations');
  readTranslations(languageMessages, translationsDirectory, inputFileSystem);
  // Check the directory's node_modules for translation files
  const nodeMoudlesPath = path.resolve(currentDirectory, 'node_modules');
  try {
    getDirectories(nodeMoudlesPath, inputFileSystem).forEach((module) => {
      aggregateDirectory(languageMessages, path.resolve(nodeMoudlesPath, module), inputFileSystem);
    });
  } catch (e) {
    // not outputting anything here as the catching of the directories not existing is not an error in this case
  }

  return languageMessages;
}

function aggregateTranslationMessages(options, inputFileSystem) {
  if (!options.baseDirectory) {
    throw new Error('Please included the base directory path in the plugin options.');
  }

  if (!options.supportedLocales) {
    throw new Error('Please included the supported locales in the plugin options.');
  }

  supportedLocales = options.supportedLocales;

  let languageMessages = {};
  supportedLocales.forEach((language) => { languageMessages[language] = {}; });

  // Aggregate translation messages for node_modules
  languageMessages = aggregateDirectory(languageMessages, options.baseDirectory, inputFileSystem);
  // Aggregate translation messages for custom directory
  const translationsDirectory = options.translationsDirectory;
  if (translationsDirectory) {
    aggregateCustomDirectory(languageMessages, translationsDirectory, inputFileSystem);
  }
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
