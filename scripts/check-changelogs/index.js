#!/usr/bin/env node
/* eslint-disable no-console */

/*
* This script scans the changelogs of all the packages and prints any unreleased changes noted in those logs.
*/
const fs = require('fs');
const path = require('path');
const packagePaths = require('../common/getPackagePaths');

// Looking for something like:
//
//     ## unreleased
//
//     Something something ...
//
//     ## 2.04.2
//
const unreleasedRegex = /#+\s+unreleased\s+([^#]+)##/im;

const released = [];
const unreleasedChanges = [];

packagePaths.forEach((packPath) => {
  const changelogFile = path.resolve(packPath, 'CHANGELOG.md');
  if (fs.existsSync(changelogFile)) {
    const changelog = fs.readFileSync(changelogFile, { encoding: 'utf8', flag: 'r' });

    // Looking for something like:
    //
    //     ## unreleased
    //
    //     <nothing>
    //
    //     ## 2.04.2
    //
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
