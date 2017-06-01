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

    browser.expect.element('.terra-TimeInput').to.be.present;
    browser.expect.element('.terra-TimeInput-hour').to.be.present;
    browser.expect.element('.terra-TimeInput-minute').to.be.present;
    browser.expect.element('.terra-TimeInput-hour').to.have.attribute('placeholder').equals('hh');
    browser.expect.element('.terra-TimeInput-minute').to.have.attribute('placeholder').equals('mm');
  },

  'Displays the time input with a default time': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default-time`);

    browser.expect.element('.terra-TimeInput-hour').to.be.present;
    browser.expect.element('.terra-TimeInput-hour').to.have.attribute('value').equals('12');
    browser.expect.element('.terra-TimeInput-minute').to.be.present;
    browser.expect.element('.terra-TimeInput-minute').to.have.attribute('value').equals('00');
  },

  'Time input accepts valid time entry and jumps to the minute input when the hour input has a valid entry': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('.terra-TimeInput-hour');

    browser.keys('1234');
    browser.expect.element('.terra-TimeInput-hour').to.have.attribute('value').equals('12');
    browser.expect.element('.terra-TimeInput-minute').to.have.attribute('value').equals('34');
  },

  'Prepends 0 on deblur when the value in the hour input is a single digit': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('.terra-TimeInput-hour');
    browser.keys('2');
    browser.click('.terra-TimeInput-minute');
    browser.expect.element('.terra-TimeInput-hour').to.have.attribute('value').equals('02');
  },

  'Prepends 0 on deblur when the value in the minute input is a single digit': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('.terra-TimeInput-minute');
    browser.keys('2');
    browser.click('.terra-TimeInput-hour');
    browser.expect.element('.terra-TimeInput-minute').to.have.attribute('value').equals('02');
  },

  'Hour input prepends 0 to the hour if the entered hour is >= 3': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('.terra-TimeInput-hour');

    browser.keys('3');
    browser.expect.element('.terra-TimeInput-hour').to.have.attribute('value').equals('03');
  },

  'Hour input does not prepends 0 to the hour if the entered hour is < 3': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('.terra-TimeInput-hour');

    browser.keys('2');
    browser.expect.element('.terra-TimeInput-hour').to.have.attribute('value').equals('2');
  },

  'Hour input does not accept entered hour is > 23': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('.terra-TimeInput-hour');

    browser.keys('24');
    browser.expect.element('.terra-TimeInput-hour').to.have.attribute('value').equals('2');
  },

  'Minute input prepends 0 to the minute if the entered minute is >= 6': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('.terra-TimeInput-minute');

    browser.keys('6');
    browser.expect.element('.terra-TimeInput-minute').to.have.attribute('value').equals('06');
  },

  'Minute input does not prepends 0 to the minute if the entered minute is < 6': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('.terra-TimeInput-minute');

    browser.keys('5');
    browser.expect.element('.terra-TimeInput-minute').to.have.attribute('value').equals('5');
  },

  'Minute input does not accept entered minute is > 59': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('.terra-TimeInput-minute');

    browser.keys('66');
    browser.expect.element('.terra-TimeInput-minute').to.have.attribute('value').equals('06');
  },

  'Pressing the DOWN_ARROW key decrements the hour by 1 hour': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default-time`);

    browser.click('.terra-TimeInput-hour');

    browser.expect.element('.terra-TimeInput-hour').to.have.attribute('value').equals('12');
    browser.keys(browser.Keys.DOWN_ARROW);
    browser.expect.element('.terra-TimeInput-hour').to.have.attribute('value').equals('11');
  },

  'Pressing the UP_ARROW key increments the hour by 1 hour': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default-time`);

    browser.click('.terra-TimeInput-hour');

    browser.expect.element('.terra-TimeInput-hour').to.have.attribute('value').equals('12');
    browser.keys(browser.Keys.UP_ARROW);
    browser.expect.element('.terra-TimeInput-hour').to.have.attribute('value').equals('13');
  },

  'Pressing the UP_ARROW key is ignored when the hour has reached 23': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('.terra-TimeInput-hour');

    browser.keys('23');
    browser.keys(browser.Keys.UP_ARROW);
    browser.keys(browser.Keys.UP_ARROW);
    browser.expect.element('.terra-TimeInput-hour').to.have.attribute('value').equals('23');
  },

  'Pressing the DOWN_ARROW key is ignored when the hour is 00': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('.terra-TimeInput-hour');

    browser.keys(browser.Keys.DOWN_ARROW);
    browser.keys(browser.Keys.DOWN_ARROW);
    browser.expect.element('.terra-TimeInput-hour').to.have.attribute('value').equals('00');
  },

  'Pressing the DOWN_ARROW key decrements the minute by 1 minute': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('.terra-TimeInput-minute');
    browser.keys('30');

    browser.expect.element('.terra-TimeInput-minute').to.have.attribute('value').equals('30');
    browser.keys(browser.Keys.DOWN_ARROW);
    browser.expect.element('.terra-TimeInput-minute').to.have.attribute('value').equals('29');
  },

  'Pressing the UP_ARROW key increments the minute by 1 minute': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('.terra-TimeInput-minute');
    browser.keys('30');

    browser.expect.element('.terra-TimeInput-minute').to.have.attribute('value').equals('30');
    browser.keys(browser.Keys.UP_ARROW);
    browser.expect.element('.terra-TimeInput-minute').to.have.attribute('value').equals('31');
  },

  'Pressing the UP_ARROW key is ignored when the minute has reached 59': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('.terra-TimeInput-minute');

    browser.keys('59');
    browser.keys(browser.Keys.UP_ARROW);
    browser.keys(browser.Keys.UP_ARROW);
    browser.expect.element('.terra-TimeInput-minute').to.have.attribute('value').equals('59');
  },

  'Pressing the DOWN_ARROW key is ignored when the minute is 00': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('.terra-TimeInput-minute');

    browser.keys(browser.Keys.DOWN_ARROW);
    browser.keys(browser.Keys.DOWN_ARROW);
    browser.expect.element('.terra-TimeInput-minute').to.have.attribute('value').equals('00');
  },

  'Pressing the DELETE key in the minute input when there is no value will move focus to the hour input': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default-time`);

    browser.click('.terra-TimeInput-minute');

    browser.keys(browser.Keys.DELETE);
    browser.expect.element('.terra-TimeInput-minute').to.have.attribute('value').equals('00');
  },
};

