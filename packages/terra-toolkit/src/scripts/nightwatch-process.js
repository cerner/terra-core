#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import loadJsonFile from 'load-json-file';
import { sync as globSync } from 'glob';
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
  const testSuitePromises = [];
  const spectreRunMap = {};

  if (process.env.SAVE_TO_SPECTRE === 'true') {
    if (process.env.SPECTRE_TEST_SUITE) {
      testSuitePromises.push(createSpectreRun(spectreRunMap, process.env.SPECTRE_TEST_SUITE));
    } else {
      loadJsonFile.sync(path.resolve('lerna.json')).packages.forEach((globPath) => {
        globSync(globPath).forEach((packagePath) => {
          const nightWatchPath = `${packagePath}/tests/nightwatch`;
          if (fs.existsSync(nightWatchPath) && nightWatchPath !== 'packages/terra-toolkit/tests/nightwatch') {
            testSuitePromises.push(createSpectreRun(spectreRunMap, path.basename(packagePath)));
          }
        });
      });
    }
  }

  let exitCode = 0;
  Promise.all([launchServer(), launchSauceConnect(), testSuitePromises.reduce((current, next) => current.then(next), Promise.resolve())])
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.log(error);
    process.exit(1);
  })
  .then(promiseResolution => new Promise((resolve, reject) => {
    if (process.env.SAVE_TO_SPECTRE === 'true') {
      process.env.spectreRunMap = JSON.stringify(promiseResolution[2]);
    }
    Nightwatch.cli((argv) => {
      const updatedArgv = argv;
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
