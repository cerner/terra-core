#!/usr/bin/env node

// Remove the first 2 arguments
// First argument is alays node
// Second arugment is the file being executed. (This file)
const fs = require('fs');
const path = require('path');
const commander = require('commander');
const pkg = require('../package.json');
const parse = require('react-docgen').parse;
const glob = require('glob');
const uniq = require('lodash/uniq');
const generateMarkdown = require('react-docgen/example/generateMarkdown');

commander
  .version(pkg.version)
  .option("-f, --filename [filename]", "filename to use when reading from stdin")
  .option('-d, --out-dir [out]', 'directory to output props-table')
  .parse(process.argv);

const errors = [];

// get all filenames
let filenames = commander.args.reduce(function (globbed, input) {
  let files = glob.sync(input);
  if (!files.length) {
    files = [input];
  }
  return globbed.concat(files);
}, []);

// verify filenames are unique
filenames = uniq(filenames);

// check if filenames exist
filenames.forEach(function (filename) {
  if (!fs.existsSync(filename)) {
    errors.push(filename + " doesn't exist");
  }
});

// verify output directory and filesnames exist
if (commander.outDir && !filenames.length) {
  errors.push("filenames required for --out-dir");
}

if (errors.length) {
  console.error(errors.join(". "));
  process.exit(2);
}

const fullPath = path.join(__dirname, '../', commander.outDir, path.basename(filenames[0], path.extname(filenames[0])) + '.md');
console.log(fullPath);

fs.readFile(filenames[0], 'utf8', (err, data) => {
  if (err) throw err;

  fs.writeFile(fullPath, generateMarkdown(path.basename(filenames[0], path.extname(filenames[0])) ,parse(data)), (err) => {
    if (err) throw err;
    console.log('The file has been saved! ' + fullPath);
  });
});


// output src/PropsTable.jsx -> lib/PropsTable.js
