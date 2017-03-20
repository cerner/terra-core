#!/usr/bin/env node

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const shell = require('shelljs');

const driver = process.argv[2] || 'default';
const script = `./node_modules/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ${driver}-tiny &&
                ./node_modules/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ${driver}-small &&
                ./node_modules/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ${driver}-medium &&
                ./node_modules/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ${driver}-large &&
                ./node_modules/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ${driver}-huge &&
                ./node_modules/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ${driver}-enormous`;

if (shell.exec(script).code !== 0) {
  shell.exit(1);
}

shell.exit(0);
