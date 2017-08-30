#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const fs = require('fs');
const path = require('path');
const loadJsonFile = require('load-json-file');
const glob = require('glob');
const aggregateDependencies = require('./aggregateDependencies');
const generateDependencyTable = require('./generateDependencyTable');

const packagePaths = ['./'];

// Get the base directory paths for each package
loadJsonFile.sync(path.resolve('lerna.json')).packages.forEach((globPath) => {
  glob.sync(globPath).forEach((packagePath) => {
    if (fs.existsSync(packagePath)) {
      packagePaths.push(packagePath);
    }
  });
});

// Generate the markdown to display the dependencies, devDependencies, and peerDependencies information for each package
packagePaths.forEach((packagePath) => {
  const packageFile = path.resolve(packagePath, 'package.json');

  fs.readFile(packageFile, 'utf8', (err, packageJson) => {
    if (err) {
      console.error(`Error reading file ${packageFile} ${err}\n`);
    } else {
      // Aggregate the dependencies, devDependencies, and peerDependencies lists
      const packageDependencies = aggregateDependencies(JSON.parse(packageJson));

      let markdown = '# Dependency Information\n';
      // Generate the markdown table for each dependency list
      Object.keys(packageDependencies).forEach((depencencyListType) => {
        const dependencyList = packageDependencies[depencencyListType];
        const { dependencyTableMarkdown, dependencyErrors } = generateDependencyTable(depencencyListType, dependencyList, packagePath);

        // Throw the error(s) that occured while generating markdown table
        if (dependencyErrors.length) {
          const error = dependencyErrors.length > 1 ? 'Errors' : 'Error';
          console.error(`${error} occurred when generating the ${depencencyListType} markdown:\n${dependencyErrors.join('\n\n')}\n`);
        }

        markdown += dependencyTableMarkdown;
      });

      const outDirectory = packagePath !== './' ? path.resolve(packagePath, 'docs') : path.resolve(packagePath);

      // Create docs directory if it does not exist within the package
      if (!fs.existsSync(outDirectory)) {
        fs.mkdirSync(outDirectory);
      }

      const outpath = `${path.join(outDirectory, 'DEPENDENCIES')}.md`;

      // Write dependency markdown to DEPENDENCIES.md
      fs.writeFile(outpath, markdown, (error) => {
        if (error) {
          console.error(`Error writing DEPENDENCIES to ${outpath} ${error}\n`);
        }
      });
    }
  });
});
