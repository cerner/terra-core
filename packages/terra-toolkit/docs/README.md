# Terra Toolkit Documentation

This toolkit is designed to help support nightwatch tests.  It provides configuration as well as helper functions that can be used during test runs.

## Test Settings

testSettings sets up the testing environment using a passed in path to a webpack configuration.  There is also a nightwatch json configuration file that can be used to set up some conventions for nightwatch tests:

```javascript
const testSettings = require('terra-toolkit').testSettings;
const resolve = require('path').resolve;
const nightwatchConfiguration = require('../node_modules/terra-toolkit/lib/nightwatch.json');

module.exports = (settings => (
  testSettings(resolve('../../packages/terra-site/webpack.config'), settings)
))(nightwatchConfiguration);
```

This sets up various environments that can be run via nightwatch.  Currently, these configurations are named in the form <driver>-<size> where drivers are default (phantomjs), chrome, firefox, ie10, ie11, edge, and safari and sizes are tiny, small, medium, large, huge, and enormous.

## Screenshot

Screenshot is set up to use the web driver to take a screenshot of whatever is currently loaded.  It is highly recommended to set up a screenshot to be taken at the end of every test.

```javascript
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, 'terra-widget', done);
  },
};
```

The screenshots will be placed in the target/nightwatch directory in a folder matching the test description and web driver.  The file name will be the size appended with the optional tag that is passed in.

## Nightwatch Process Script

The nightwatch process script will handle the entire process of running the nightwatch tests.  This includes setting up the webpack dev server, the connection to sauce labs (if running in remote mode), running the tests themselves, and then shutting everything down.

```
node lib/scripts/nightwatch-process.js --config tests/nightwatch.conf.js -e chrome-tiny
```

## Nightwatch Script

The nightwatch script will run tests at all resolutions given a passed in argument to represent the driver in parallel.  If no argument is passed in the default driver will be used, namely phantomjs.  It will run these tests via the nightwatch process script to take advantage of the setup and teardown capabilities that that script offers.

```
node lib/scripts/nightwatch.js chrome
```

## Nightwatch Non Parallel Script

The nightwatch non parallel script will run tests at all resolutions given a passed in argument to represent the driver.  If no argument is passed in the default driver will be used, namely phantomjs.  It will run these tests via the nightwatch process script to take advantage of the setup and teardown capabilities that that script offers.

```
node lib/scripts/nightwatch-non-parallel.js safari
```
