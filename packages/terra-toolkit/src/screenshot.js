module.exports = (browser, callback) => {
  const width = browser.globals.width;
  const height = browser.globals.height;
  browser.saveScreenshot(`target/nightwatch/${browser.currentTest.name}/${browser.options.desiredCapabilities.browserName}/${width}x${height}.png`, callback);
};
