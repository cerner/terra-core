# Terra Toolkit Documentation

This toolkit is designed to help support nightwatch tests.  It provides configuration as well as helper functions that can be used during test runs.

## Test Settings

testSettings sets up the testing environment using a passed in path to a webpack configuration.  There is also a nightwatch json configuration file that can be used to set up some conventions for nightwatch tests:

```javascript
const testSettings = require('terra-toolkit').testSettings;
const resolve = require('path').resolve;

module.exports = ((settings) => {
  const returnSettings = settings;
  returnSettings.test_settings = testSettings(resolve('./tests/features/test.config'));
  return returnSettings;
})(require('./node_modules/terra-toolkit/src/nightwatch.json'));

This sets up various environments that can be run via nightwatch.  Currently, these configurations are named in the form <driver>-<size> where drivers are default (phantomjs), chrome, firefox, and safari and sizes are tiny, small, medium, large, huge, and enormous.
```

## Screenshot

Screenshot is set up to use the web driver to take a screenshot of whatever is currently loaded.  It is highly recommended to set up a screenshot to be taken at the end of every test.

```javascript
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, done);
  },
};

The screenshots will be placed in the target/nightwatch directory in a folder matching the test description and web driver.  The file name will be the size appended with the optional tag that is passed in.
``` 
