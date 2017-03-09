#!/usr/bin/env node
'use strict';

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
var shell = require('shelljs');

var driver = process.argv[2] || 'default';
var script = './node_modules/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ' + driver + '-tiny &&\n                ./node_modules/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ' + driver + '-small &&\n                ./node_modules/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ' + driver + '-medium &&\n                ./node_modules/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ' + driver + '-large &&\n                ./node_modules/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ' + driver + '-huge &&\n                ./node_modules/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ' + driver + '-enormous';

if (shell.exec(script).code !== 0) {
                shell.exit(1);
}

shell.exit(0);