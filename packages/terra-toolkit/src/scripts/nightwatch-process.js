#!/usr/bin/env node

import Nightwatch from 'nightwatch';
import { launchSauceConnect, closeSauceConnect } from '../sauce-launcher';
import { launchServer, closeServer } from '../server-launcher';
import { createSpectreRun } from '../spectre';

const isChildProcess = process.argv.find(arg => arg === '--parallel-mode');

if (isChildProcess) {
  Nightwatch.cli((argv) => {
    const updatedArgv = argv;
    /* eslint-disable no-underscore-dangle */
    updatedArgv._source = argv._.slice(0);
    /* eslint-enable no-underscore-dangle */
    Nightwatch.runner(updatedArgv, (success) => {
      if (!success) {
        process.exit(1);
      }
    });
  });
} else {
  let exitCode = 0;
  Promise.all([launchServer(), launchSauceConnect(), createSpectreRun()])
  .then(spectreRunId => new Promise((resolve, reject) => {
    Nightwatch.cli((argv) => {
      const updatedArgv = argv;
      process.env.spectreRunId = spectreRunId[2];
      /* eslint-disable no-underscore-dangle */
      updatedArgv._source = argv._.slice(0);
      /* eslint-enable no-underscore-dangle */
      Nightwatch.runner(updatedArgv, (success) => {
        if (!success) {
          reject(success);
        } else {
          resolve();
        }
      });
    });
  }))
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.log(error);
    exitCode = 1;
  })
  .then(() => (
    Promise.all([closeSauceConnect(), closeServer()])
  ))
  .then(() => {
    process.exit(exitCode);
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.log(error);
    process.exit(1);
  });
}
