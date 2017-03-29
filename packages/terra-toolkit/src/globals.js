import updateSauce from './update-sauce';

module.exports = {
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
