#! /usr/local/bin/node

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const shell = require('shelljs');

shell.exec('nightwatch -e default-tiny,default-small,default-medium,default-large,default-huge,default-enormous');
