/* eslint-disable import/no-extraneous-dependencies */
const shell = require('shelljs');

// Compile all packages
shell.echo('Compiling all packages...');

if (shell.exec('npm run compile').code !== 0) {
  shell.echo('Compile failed.');
  shell.exit(1);
} else {
  shell.echo('Compile successful.');
}

// Diff lib directory in package
shell.echo('Diffing lib directory in each package. Verifying all packages have been compiled...');

if (shell.exec('git diff --exit-code packages/*/lib/*').code !== 0) {
  shell.echo('Compiled assets have not been commited. Add the compiled assets to your commit before pushing.');
  shell.exit(1);
} else {
  shell.echo('Verified that all packages have been compiled and commited.');
}

shell.exit(0);
