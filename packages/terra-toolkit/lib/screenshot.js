'use strict';

module.exports = function (browser, callback, tag) {
  var imageTag = tag;
  if (imageTag === undefined) {
    imageTag = '0';
  }
  var width = browser.globals.width;
  var height = browser.globals.height;
  var version = browser.options.desiredCapabilities.version ? browser.options.desiredCapabilities.version : 'latest';
  browser.saveScreenshot('target/' + browser.currentTest.module + '/' + browser.currentTest.name + '/' + browser.options.desiredCapabilities.browserName + '-' + version + '/' + width + 'x' + height + '_' + imageTag + '.png', callback);
};