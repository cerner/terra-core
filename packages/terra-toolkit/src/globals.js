import updateSauce from './update-sauce';

module.exports = {
  beforeEach: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },
  afterEach: (browser, done) => {
    function endBrowser() {
      browser.end(done);
    }

    if (process.env.REMOTE === 'true') {
      updateSauce(browser, endBrowser);
    } else {
      endBrowser();
    }
  },
};
