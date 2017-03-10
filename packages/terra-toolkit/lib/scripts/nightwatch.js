#!/usr/bin/env node
'use strict';

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
var shell = require('shelljs');
var resolve = require('path').resolve;

var driver = process.argv[2] || 'default';

if (shell.exec(resolve('./node_modules/terra-toolkit/lib/scripts/nightwatch-process.js') + ' --config tests/nightwatch.conf.js -e ' + driver + '-tiny,' + driver + '-small,' + driver + '-medium,' + driver + '-large,' + driver + '-huge,' + driver + '-enormous').code !== 0) {
  shell.exit(1);
}

shell.exit(0);