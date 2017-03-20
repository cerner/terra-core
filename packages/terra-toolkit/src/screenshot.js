module.exports = (browser, callback, tag) => {
  let imageTag = tag;
  if (imageTag === undefined) {
    imageTag = '0';
  }
  const width = browser.globals.width;
  const height = browser.globals.height;
  const version = browser.options.desiredCapabilities.version ? browser.options.desiredCapabilities.version : 'latest';
  browser.saveScreenshot(`target/${browser.currentTest.module}/${browser.currentTest.name}/${browser.options.desiredCapabilities.browserName}-${version}/${width}x${height}_${imageTag}.png`, callback);
};
