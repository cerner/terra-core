#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const fs = require('fs');
const path = require('path');
const packagePaths = require('../common/getPackagePaths');
const findAndReplace = require('../common/findAndReplace');

// Generate the markdown to display peerDependencies information for each package
packagePaths.forEach((packagePath) => {
  const packageFile = path.resolve(packagePath, 'package.json');
  const changelogFile = path.resolve(packagePath, 'CHANGELOG.md');
  const releaseDate = new Date().toLocaleString('en-us', { month: 'long', year: 'numeric', day: 'numeric' });

  if (!fs.existsSync(packageFile) || !fs.existsSync(changelogFile)) {
    return; /* eslint-disable-line no-useless-return */
  }

  // Read package.json and pull out version
  fs.readFile(packageFile, 'utf8', (err, packageJson) => {
    if (err) {
      console.error(`Error reading file ${packageFile} ${err}\n`);
    } else {
      const { version } = JSON.parse(packageJson);

      // Hard coded for minor updates for now
      const major = false;
      const minor = true;
      const patch = false;

      if (version) {
        const majorVersion = version.split('.')[0];
        const minorVersion = version.split('.')[1];
        const patchVersion = version.split('.')[2];

        let newVersion;

        if (major) {
          const updatedMajorVersion = parseInt(majorVersion, 10) + 1;
          newVersion = `${updatedMajorVersion}.0.0`;
        }

        if (minor) {
          const updatedMinorVersion = parseInt(minorVersion, 10) + 1;
          newVersion = `${majorVersion}.${updatedMinorVersion}.0`;
        }

        if (patch) {
          const updatedPatchVersion = parseInt(patchVersion, 10) + 1;
          newVersion = `${majorVersion}.${minorVersion}.${updatedPatchVersion}`;
        }

        const changelogDoc = `Unreleased
----------

${newVersion} - (${releaseDate})
------------------`;
        const regex = /Unreleased\n----------/g;

        // Update CHANGELOG.md
        findAndReplace({
          file: changelogFile, regex, content: changelogDoc,
        });
      }
    }
  });
});
