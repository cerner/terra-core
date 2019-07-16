/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const fs = require('fs');
const glob = require('glob');
const lernaJson = require('../../lerna.json');

const packagePaths = ['./'];

// Get the base directory paths for each package
lernaJson.packages.forEach((globPath) => {
  glob.sync(globPath).forEach((packagePath) => {
    if (fs.existsSync(packagePath)) {
      packagePaths.push(packagePath);
    }
  });
});

module.exports = packagePaths;
