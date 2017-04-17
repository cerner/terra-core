import { createSpectreTest } from './spectre';

module.exports = (browser, suiteName, callback, tag) => {
  let imageTag = tag;
  if (imageTag === undefined) {
    imageTag = '0';
  }
  const width = browser.globals.width;
  const height = browser.globals.height;
  const version = browser.options.desiredCapabilities.version ? browser.options.desiredCapabilities.version : 'latest';
  const imagePath = `target/${browser.currentTest.module}/${browser.currentTest.name}/${browser.options.desiredCapabilities.browserName}-${version}/${width}x${height}_${imageTag}.png`;
  browser.saveScreenshot(imagePath, () => {
    if (process.env.SAVE_TO_SPECTRE === 'true') {
      createSpectreTest(browser, imagePath, suiteName, callback);
    } else {
      callback();
    }
  });
};
