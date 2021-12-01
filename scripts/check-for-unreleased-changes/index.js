#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const { release } = require('os');
const path = require('path');
const packagePaths = require('../common/getPackagePaths');

const unreleasedRegex = /#+\s+unreleased\s+([^#]+)##/im;

const released = [];
const unreleasedChanges = [];

packagePaths.forEach((packPath) => {
  const changelogFile = path.resolve(packPath, 'CHANGELOG.md');
  if (fs.existsSync(changelogFile)) {
    const changelog = fs.readFileSync(changelogFile, { encoding: 'utf8', flag: 'r' });
    if (/#+\s+unreleased\s+#+\s+\d+\.\d+\.\d+/im.test(changelog)) {
      released.push(`${packPath} has no unreleased changes.`);
    } else if (unreleasedRegex.test(changelog)) {
      unreleasedChanges.push(`${packPath} has unreleased changes:`);
      unreleasedChanges.push(changelog.match(unreleasedRegex)[1]);
    }
  }
});

released.forEach((item) => {
  console.log(item);
});

console.log('');

unreleasedChanges.forEach((item) => {
  console.log(item);
});

console.log('');
if (released.length > 0) {
  console.log('%cThere are unreleased changes. See above.', 'color:white; background-color:red; font-weight: bold; ');
} else {
  console.log('%cThere are no unreleased changes.', 'color:green');
}
