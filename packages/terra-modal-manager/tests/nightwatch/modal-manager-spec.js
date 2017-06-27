/* eslint-disable no-unused-expressions */

// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-modal-manager', done);
  },

  'Renders the ModalManager': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-manager-tests/demo`);

    browser.expect.element('.terra-ModalManager').to.be.present;
  },

  'Opens the modal when disclose is selected': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-manager-tests/demo`);

    browser.click('#root-component .disclose');

    browser.expect.element('.terra-SlideGroup #DemoContainer-1').to.be.present;
  },

  'Ensures goBack is not provided to a single modal component': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-manager-tests/demo`);

    browser.click('#root-component .disclose');

    browser.expect.element('.terra-SlideGroup #DemoContainer-1').to.be.present;

    browser.expect.element('.terra-SlideGroup #DemoContainer-1 button.go-back').to.not.be.present;
  },

  'Closes the modal when dismiss is selected within modal with one modal component': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-manager-tests/demo`);

    browser.click('#root-component .disclose');

    browser.expect.element('.terra-SlideGroup #DemoContainer-1').to.be.present;

    browser.click('#DemoContainer-1 .dismiss');

    browser.expect.element('.terra-SlideGroup #DemoContainer-1').to.not.be.present;
  },

  'Closes the modal when closeDisclosure is selected within modal': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-manager-tests/demo`);

    browser.click('#root-component .disclose');

    browser.expect.element('.terra-SlideGroup #DemoContainer-1').to.be.present;

    browser.click('#DemoContainer-1 .close-disclosure');

    browser.expect.element('.terra-SlideGroup #DemoContainer-1').to.not.be.present;
  },

  'Maximizes/minimizes the modal when selected within modal': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-manager-tests/demo`);

    browser.click('#root-component .disclose');

    browser.expect.element('.terra-SlideGroup #DemoContainer-1').to.be.present;
    browser.expect.element('#DemoContainer-1 .maximize').to.be.present;

    browser.click('#DemoContainer-1 .maximize');

    browser.expect.element('.terra-SlideGroup #DemoContainer-1').to.be.present;
    browser.expect.element('#DemoContainer-1 .maximize').to.not.be.present;
    browser.expect.element('#DemoContainer-1 .minimize').to.be.present;

    browser.click('#DemoContainer-1 .minimize');

    browser.expect.element('.terra-SlideGroup #DemoContainer-1').to.be.present;
    browser.expect.element('#DemoContainer-1 .maximize').to.be.present;
    browser.expect.element('#DemoContainer-1 .minimize').to.not.be.present;
  },

  'Discloses within the modal when modal is already presented': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-manager-tests/demo`);

    browser.click('#root-component .disclose');

    browser.expect.element('.terra-ModalManager-modal .terra-SlideGroup #DemoContainer-1').to.be.present;

    browser.click('#DemoContainer-1 .disclose');

    // Waiting here to ensure new component is presented and back button is clickable
    browser.waitForElementPresent('.terra-Slide:not(.terra-Slide-enter-active):nth-child(2)', 1000);

    browser.expect.element('.terra-ModalManager-modal .terra-SlideGroup #DemoContainer-1').to.be.present;
    browser.expect.element('.terra-ModalManager-modal .terra-SlideGroup #DemoContainer-2').to.be.present;
    browser.expect.element('.terra-SlideGroup #DemoContainer-2 button.go-back').to.be.present;

    browser.click('#DemoContainer-2 button.go-back');

    browser.waitForElementNotPresent('#DemoContainer-2', 1000);

    browser.expect.element('.terra-ModalManager-modal .terra-SlideGroup #DemoContainer-1').to.be.present;
    browser.expect.element('.terra-ModalManager-modal .terra-SlideGroup #DemoContainer-2').to.not.be.present;
  },
};
