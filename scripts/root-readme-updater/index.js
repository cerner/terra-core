#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const path = require('path');
const packagePaths = require('../common/getPackagePaths');
const findAndReplace = require('../common/findAndReplace');

const rootReadMe = path.join(__dirname, '../../README.md');

// Clean up package entries array
const packages = packagePaths
  .map(component => component.replace('packages/', ''))
  .filter(component => component.startsWith('terra-'));

// Generate package listing template
const packageListing = packages.map(component => `| [${component}](https://github.com/cerner/terra-core/tree/master/packages/${component}) | [![NPM version](https://badgen.net/npm/v/${component})](https://www.npmjs.org/package/${component}) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![${component}](https://badgen.net/david/dep/cerner/terra-core/packages/${component})](https://david-dm.org/cerner/terra-core?path=packages/${component}) |`);

const content = [
  '<!-- AUTO-GENERATED-CONTENT:START (SUBPACKAGELIST) -->',
  '| Terra Package      | Version | Status | Dependencies |',
  '|--------------------|---------|--------|--------------|',
  ...packageListing,
  '<!-- AUTO-GENERATED-CONTENT:END *-->',
];
const regex = /<!--.AUTO-GENERATED-CONTENT.START.\(SUBPACKAGELIST\).-->(.|\n)*<!--.AUTO-GENERATED-CONTENT:END.\*-->/g;

// Update package listing in ./README.md
findAndReplace({
  file: rootReadMe, regex, content: content.join('\n'),
});
