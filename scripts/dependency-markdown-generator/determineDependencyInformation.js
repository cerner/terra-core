const fs = require('fs');
const path = require('path');
const generateDependencyRow = require('./generateDependencyRow');

const parseDependencyPackage = (dependencyJsonPath, specifiedVersion) => {
  try {
    const dependencyPackage = fs.readFileSync(dependencyJsonPath, 'utf8');
    const dependencyJson = JSON.parse(dependencyPackage);
    const dependencyInfo = {};

    dependencyInfo.name = dependencyJson.name;
    dependencyInfo.version = specifiedVersion;
    dependencyInfo.reactVersion = '--';
    if (dependencyJson.peerDependencies && dependencyJson.peerDependencies.react) {
      // Replace || with \|\| to maintain table markdown structure when displaying versions like '14.0.0 || 15.0.0'
      // eslint-disable-next-line no-useless-escape
      dependencyInfo.reactVersion = dependencyJson.peerDependencies.react.replace(/\|\|/g, '\\\|\\\|');
    }
    dependencyInfo.description = dependencyJson.description;

    return generateDependencyRow(dependencyInfo);
  } catch (err) {
    return `Error reading file ${dependencyJsonPath} ${err}`;
  }
};

const determineDependencyInformation = (dependency, specifiedVersion, packagePath) => {
  // Determine the package level and global level paths. Useful for bootstrapped dependencies.
  const packageLevelPath = path.resolve(packagePath, 'node_modules', dependency, 'package.json');
  const globalLevelPath = packageLevelPath.replace(`${packagePath}/`, '');

  // The dependency markdown if an error occurs
  let dependencyRow = `| ${dependency} | ${specifiedVersion} | | |`;
  let dependencyError;

  if (fs.existsSync(packageLevelPath)) {
    dependencyRow = parseDependencyPackage(packageLevelPath, specifiedVersion);
  } else if (fs.existsSync(globalLevelPath)) {
    dependencyRow = parseDependencyPackage(globalLevelPath, specifiedVersion);
  } else {
    dependencyError = `${dependency} dependency package.json is not found at ${packageLevelPath} or ${globalLevelPath}.`;
  }

  // Returns the error that occured when reading the package.json file
  if (dependencyRow.startsWith('Error')) {
    dependencyError = dependencyRow;
  }

  return { dependencyRow, dependencyError };
};

module.exports = determineDependencyInformation;
