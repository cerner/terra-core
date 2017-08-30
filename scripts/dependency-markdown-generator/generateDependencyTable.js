const determineDependencyInformation = require('./determineDependencyInformation');

const generateDependencyTable = (depencencyType, dependencies, packagePath) => {
  const tableHeader = '| Dependency | Version | React Version | Description |';
  const tableHeaderBottom = '|-|-|-|-|';
  const dependencyErrors = [];

  const dependencyRows = Object.keys(dependencies).sort().map((dependency) => {
    // Use the dependency version specified in the package.json, not the installed version.
    const specifiedVersion = dependencies[dependency];
    const { dependencyRow, dependencyError } = determineDependencyInformation(dependency, specifiedVersion, packagePath);

    // Add any error that ocurred while determining the dependency information
    if (dependencyError) {
      dependencyErrors.push(dependencyError);
    }
    return dependencyRow;
  });

  const dependencyTableMarkdown = `\n## ${depencencyType}\n${tableHeader}\n${tableHeaderBottom}\n${dependencyRows.join('\n')}\n`;
  return { dependencyTableMarkdown, dependencyErrors };
};

module.exports = generateDependencyTable;
