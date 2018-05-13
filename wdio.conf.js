/* eslint-disable import/no-extraneous-dependencies */
const wdioConf = require('terra-dev-site/config/wdio/wdio.conf');
const PackageUtilities = require('lerna/lib/PackageUtilities');
const Repository = require('lerna/lib/Repository');

const packageLocations = PackageUtilities.getPackages(new Repository(__dirname)).map((pkg) => pkg._location);

const config = {
  ...wdioConf.config,

  seleniumDocker: {
    enabled: false,
  },

  host: 'standalone-chrome',

  // Define wdio test suites
  suites: {},
};

const numberOfSuites = 4;
[...Array(numberOfSuites)].forEach((_, index) => config.suites[`${index + 1}`] = []);
const config.suites.suite1 = [];
const itemsPerSuite = ceil(packageLocations.length / numberOfSuites);
packageLocations.forEach((packageLocation, index) => config.suites[`suite${floor(index / itemsPerSuite) + 1}`].concat(`${packageLocation}/tests/wdio/**/*-spec.js`));
console.log(config);

exports.config = config;
