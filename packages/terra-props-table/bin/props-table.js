#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');
const commander = require('commander');
const parse = require('react-docgen').parse;
const glob = require('glob');
const uniq = require('lodash/uniq');
const generateMarkdown = require('./generateMarkdown');

commander
  .version(pkg.version)
  .option('-f, --filename [filename]', 'filename to use when reading from stdin')
  .option('-d, --out-dir [out]', 'directory to output props-table')
  .parse(process.argv);

const errors = [];

// get all filenames
let filenames = commander.args.reduce((globbed, input) => {
  let files = glob.sync(input);
  if (!files.length) {
    files = [input];
  }
  return globbed.concat(files);
}, []);

// verify filenames are unique
filenames = uniq(filenames);

// check if filenames exist
filenames.forEach((filename) => {
  if (!fs.existsSync(filename)) {
    errors.push(`${filename} does not exist`);
  }
});

// verify output directory and filesnames exist
if (commander.outDir && !filenames.length) {
  errors.push('filenames required for --out-dir');
}

// Iterate through files
filenames.forEach((filename) => {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      errors.push(`Error reading file ${filename} ${err}`);
    } else {
      const currentComponent = path.basename(filename, path.extname(filename));
      const fullPath = `${path.join(commander.outDir, currentComponent)}.md`;

      fs.writeFile(fullPath, generateMarkdown(parse(data)), (error) => {
        if (error) {
          errors.push(`Error writing file ${fullPath} ${err}`);
        }
        console.log(`${filename} -> ${fullPath}`);
      });
    }
  });
});

// Throw errors to console
if (errors.length) {
  console.error(errors.join('. '));
  process.exit(2);
}
