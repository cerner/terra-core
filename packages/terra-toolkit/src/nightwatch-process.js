#!/usr/bin/env node

import Nightwatch from 'nightwatch';
import { launchSauceConnect, closeSauceConnect } from './sauce-launcher';
import { launchServer, closeServer } from './server-launcher';

const isChildProcess = process.argv.find(arg => arg === '--parallel-mode');

if (isChildProcess) {
  Nightwatch.cli((argv) => {
    argv._source = argv._.slice(0); // eslint-disable-line
    Nightwatch.runner(argv, () => {
      process.exit(0);
    });
  });
} else {
  launchServer(() => {
    launchSauceConnect(() => {
      Nightwatch.cli((argv) => {
        argv._source = argv._.slice(0); // eslint-disable-line
        Nightwatch.runner(argv, () => {
          closeSauceConnect(() => {
            closeServer(() => {
              process.exit(0);
            });
          });
        });
      });
    });
  });
}
