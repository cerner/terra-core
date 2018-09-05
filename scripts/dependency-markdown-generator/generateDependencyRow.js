const generateDependencyRow = dependencyInfo => (
  `| ${dependencyInfo.name} `
    + `| ${dependencyInfo.version} `
    + `| ${dependencyInfo.reactVersion} `
    + `| ${dependencyInfo.description ? dependencyInfo.description.replace(/\n|\r/g, ' ') : ''} `
    + '|'
);

module.exports = generateDependencyRow;
