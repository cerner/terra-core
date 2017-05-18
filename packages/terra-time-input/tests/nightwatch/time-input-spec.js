/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-time-input', done);
  },

  'Displays the time input with default props': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.expect.element('.terra-TimeInput-input').to.be.present;
    browser.expect.element('.terra-TimeInput-input').to.have.attribute('placeholder').equals('HH:mm');
  },

  'Displays the time input with a default time': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default-time`);

    browser.expect.element('.terra-TimeInput-input').to.be.present;
    browser.expect.element('.terra-TimeInput-input').to.have.attribute('placeholder').equals('HH:mm');
    browser.expect.element('.terra-TimeInput-input').to.have.attribute('value').equals('12:00');
  },

  'Time input accepts confirmed time entry': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('.terra-TimeInput-input');

    browser.keys('1234');
    browser.expect.element('.terra-TimeInput-input').to.have.attribute('value').equals('12:34');
  },

  'Time input blocks invalid time entry that is >= 3 for the 1st slot in hour': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('.terra-TimeInput-input');

    browser.keys('3456789');
    browser.expect.element('.terra-TimeInput-input').to.have.attribute('value').equals('');
  },

  'Time input blocks invalid time entry that is >= 4 for the 2nd slot in hour': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('.terra-TimeInput-input');

    browser.keys('2456789');
    browser.expect.element('.terra-TimeInput-input').to.have.attribute('value').equals('2 :  ');
  },

  'Time input blocks invalid time entry that is >= 6 for the 1st slot in minute': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('.terra-TimeInput-input');

    browser.keys('126789');
    browser.expect.element('.terra-TimeInput-input').to.have.attribute('value').equals('12:  ');
  },

  'When the time is valid, pressing the DOWN_ARROW key decrements the time by 1 minute': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default-time`);

    browser.click('.terra-TimeInput-input');

    browser.expect.element('.terra-TimeInput-input').to.have.attribute('value').equals('12:00');
    browser.keys(browser.Keys.DOWN_ARROW);
    browser.expect.element('.terra-TimeInput-input').to.have.attribute('value').equals('11:59');
  },

  'When the time is valid, pressing the UP_ARROW key increments the time by 1 minute': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default-time`);

    browser.click('.terra-TimeInput-input');

    browser.expect.element('.terra-TimeInput-input').to.have.attribute('value').equals('12:00');
    browser.keys(browser.Keys.UP_ARROW);
    browser.expect.element('.terra-TimeInput-input').to.have.attribute('value').equals('12:01');
  },

  'When the time is invalid, pressing the DOWN_ARROW key does not decrements the time': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('.terra-TimeInput-input');

    browser.expect.element('.terra-TimeInput-input').to.have.attribute('value').equals('');
    browser.keys(browser.Keys.DOWN_ARROW);
    browser.expect.element('.terra-TimeInput-input').to.have.attribute('value').equals('');
  },

  'When the time is invalid, pressing the UP_ARROW key does not increments the time': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('.terra-TimeInput-input');

    browser.expect.element('.terra-TimeInput-input').to.have.attribute('value').equals('');
    browser.keys(browser.Keys.UP_ARROW);
    browser.expect.element('.terra-TimeInput-input').to.have.attribute('value').equals('');
  },
};

