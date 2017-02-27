'use strict';

module.exports = function (browser, callback, tag) {
  var imageTag = tag;
  if (imageTag === undefined) {
    imageTag = '0';
  }
  var width = browser.globals.width;
  var height = browser.globals.height;
  browser.saveScreenshot('target/nightwatch/' + browser.currentTest.name + '/' + browser.options.desiredCapabilities.browserName + '/' + width + 'x' + height + '_' + imageTag + '.png', callback);
};