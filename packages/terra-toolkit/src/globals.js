import { createSpectreRun } from './spectre';
import updateSauce from './update-sauce';

module.exports = {
  beforeEach: (browser, done) => {
    createSpectreRun(browser, done);
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
