#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const fs = require('fs');
const path = require('path');
const packagePaths = require('../common/getPackagePaths');
const generatePeerDependenciesDoc = require('./generatePeerDependencyDoc');
const findAndReplace = require('../common/findAndReplace');

// Generate the markdown to display peerDependencies information for each package
packagePaths.forEach((packagePath) => {
  const packageFile = path.resolve(packagePath, 'package.json');
  const readmeFile = path.resolve(packagePath, 'README.md');
  const docReadmeFile = path.resolve(packagePath, 'docs/README.md');

  if (!fs.existsSync(packageFile) || !fs.existsSync(readmeFile) || !fs.existsSync(docReadmeFile)) {
    return; /* eslint-disable-line no-useless-return */
  }

  // Read package.json and pull out peerDependencies
  fs.readFile(packageFile, 'utf8', (err, packageJson) => {
    if (err) {
      console.error(`Error reading file ${packageFile} ${err}\n`);
    } else {
      const { peerDependencies } = JSON.parse(packageJson);

      if (peerDependencies) {
        const peerDependenciesDoc = generatePeerDependenciesDoc(peerDependencies);
        const regex = /<!--.AUTO-GENERATED-CONTENT.START.Peer.Dependencies.-->(.|\n)*<!--.AUTO-GENERATED-CONTENT:END.-->/g;

        // Update peerDependencies in ./README.md
        findAndReplace({
          file: readmeFile, regex, content: peerDependenciesDoc,
        });

        // Update peerDependencies in ./docs/README.md
        findAndReplace({
          file: docReadmeFile, regex, content: peerDependenciesDoc,
        });
      }
    }
  });
});
