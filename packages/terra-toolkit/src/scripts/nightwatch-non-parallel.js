#!/usr/bin/env node

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const shell = require('shelljs');

const driver = process.argv[2] || 'default';
const script = `$(cd ..; npm bin)/../../packages/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ${driver}-tiny &&
                $(cd ..; npm bin)/../../packages/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ${driver}-small &&
                $(cd ..; npm bin)/../../packages/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ${driver}-medium &&
                $(cd ..; npm bin)/../../packages/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ${driver}-large &&
                $(cd ..; npm bin)/../../packages/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ${driver}-huge &&
                $(cd ..; npm bin)/../../packages/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ${driver}-enormous`;

if (shell.exec(script).code !== 0) {
  shell.exit(1);
}

shell.exit(0);
