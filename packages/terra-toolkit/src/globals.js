import updateSauce from './update-sauce';

module.exports = {
  beforeEach: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },
  afterEach: (browser, done) => {
    browser.end(() => {
      if (process.env.REMOTE === 'true') {
        updateSauce(browser, done);
      } else {
        done();
      }
    });
  },
};
