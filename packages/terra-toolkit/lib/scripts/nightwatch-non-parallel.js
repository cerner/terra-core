#!/usr/bin/env node
'use strict';

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
var shell = require('shelljs');

var driver = process.argv[2] || 'default';
var script = '$(cd ..; npm bin)/../../packages/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ' + driver + '-tiny &&\n                $(cd ..; npm bin)/../../packages/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ' + driver + '-small &&\n                $(cd ..; npm bin)/../../packages/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ' + driver + '-medium &&\n                $(cd ..; npm bin)/../../packages/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ' + driver + '-large &&\n                $(cd ..; npm bin)/../../packages/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ' + driver + '-huge &&\n                $(cd ..; npm bin)/../../packages/terra-toolkit/lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e ' + driver + '-enormous';

if (shell.exec(script).code !== 0) {
                shell.exit(1);
}

shell.exit(0);