/* eslint-disable no-console */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const fs = require('fs');

const findAndReplace = (options) => {
  /* eslint-disable-next-line consistent-return */
  fs.readFile(options.file, 'utf8', (errMsg, data) => {
    if (errMsg) {
      return console.log(errMsg);
    }

    const result = data.replace(options.regex, options.content);

    fs.writeFile(options.file, result, 'utf8', (error) => {
      if (error) {
        console.error(`Error writing content to ${options.file} ${error}\n`);
      } else {
        console.log(`Content written to ${options.file}`);
      }
    });
  });
};

module.exports = findAndReplace;
