'use strict';

var _spectre = require('./spectre');

module.exports = function (browser, suiteName, callback, tag) {
  var imageTag = tag;
  if (imageTag === undefined) {
    imageTag = '0';
  }
  var width = browser.globals.width;
  var height = browser.globals.height;
  var version = browser.options.desiredCapabilities.version ? browser.options.desiredCapabilities.version : 'latest';
  var imagePath = 'target/' + browser.currentTest.module + '/' + browser.currentTest.name + '/' + browser.options.desiredCapabilities.browserName + '-' + version + '/' + width + 'x' + height + '_' + imageTag + '.png';
  browser.saveScreenshot(imagePath, function () {
    if (process.env.SAVE_TO_SPECTRE === 'true') {
      (0, _spectre.createSpectreTest)(browser, imagePath, suiteName, callback);
    } else {
      callback();
    }
  });
};