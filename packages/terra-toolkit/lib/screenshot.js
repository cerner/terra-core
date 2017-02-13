'use strict';

module.exports = (browser, callback, tag) => {
  let imageTag = tag;
  if (imageTag === undefined) {
    imageTag = '0';
  }
  const width = browser.globals.width;
  const height = browser.globals.height;
  browser.saveScreenshot(`target/nightwatch/${browser.currentTest.name}/${browser.options.desiredCapabilities.browserName}/${width}x${height}_${imageTag}.png`, callback);
};