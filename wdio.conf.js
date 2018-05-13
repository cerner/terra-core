/* eslint-disable import/no-extraneous-dependencies */
const wdioConf = require('terra-dev-site/config/wdio/wdio.conf');
const PackageUtilities = require('lerna/lib/PackageUtilities');
const Repository = require('lerna/lib/Repository');

// eslint-disable-next-line no-underscore-dangle
const packageLocations = PackageUtilities.getPackages(new Repository(__dirname)).map(pkg => pkg._location);

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
[...Array(numberOfSuites)].forEach((_, index) => {
  config.suites[`suite${index + 1}`] = [];
});
const itemsPerSuite = Math.ceil(packageLocations.length / numberOfSuites);
console.log(packageLocations);
console.log(itemsPerSuite);
packageLocations.forEach((packageLocation, index) => {
  const currentSuite = `suite${Math.floor(index / itemsPerSuite) + 1}`;
  config config.suites[currentSuite] = config config.suites[currentSuite].concat(`${packageLocation}/tests/wdio/**/*-spec.js`);
});
console.log(config);

exports.config = config;
