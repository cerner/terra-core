/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
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

    browser.expect.element('#timeInput').to.be.present;
    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.be.present;
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.be.present;
    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('placeholder').equals('hh');
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('placeholder').equals('mm');
  },

  'Displays the time input with a default time': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default-time`);

    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.be.present;
    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('12');
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.be.present;
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('value').equals('00');
  },

  'Time input accepts valid time entry and jumps to the minute input when the hour input has a valid entry': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');

    browser.keys('1234');
    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('12');
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('value').equals('34');
  },

  'Prepends 0 on deblur when the value in the hour input is a single digit': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    browser.keys('2');
    browser.click('#timeInput input[name="terra-time-minute-time-input"]');
    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('02');
  },

  'Prepends 0 on deblur when the value in the minute input is a single digit': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('#timeInput input[name="terra-time-minute-time-input"]');
    browser.keys('2');
    browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('value').equals('02');
  },

  'Hour input prepends 0 to the hour if the entered hour is >= 3': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');

    browser.keys('3');
    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('03');
  },

  'Hour input does not prepends 0 to the hour if the entered hour is < 3': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');

    browser.keys('2');
    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('2');
  },

  'Hour input does not accept entered hour is > 23': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');

    browser.keys('24');
    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('2');
  },

  'Minute input prepends 0 to the minute if the entered minute is >= 6': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('#timeInput input[name="terra-time-minute-time-input"]');

    browser.keys('6');
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('value').equals('06');
  },

  'Minute input does not prepends 0 to the minute if the entered minute is < 6': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('#timeInput input[name="terra-time-minute-time-input"]');

    browser.keys('5');
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('value').equals('5');
  },

  'Minute input does not accept entered minute is > 59': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('#timeInput input[name="terra-time-minute-time-input"]');

    browser.keys('66');
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('value').equals('06');
  },

  'Pressing the DOWN_ARROW key decrements the hour by 1 hour': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default-time`);

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');

    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('12');
    browser.keys(browser.Keys.DOWN_ARROW);
    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('11');
  },

  'Pressing the UP_ARROW key increments the hour by 1 hour': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default-time`);

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');

    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('12');
    browser.keys(browser.Keys.UP_ARROW);
    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('13');
  },

  'Pressing the UP_ARROW key is ignored when the hour has reached 23': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');

    browser.keys('23');
    browser.keys(browser.Keys.UP_ARROW);
    browser.keys(browser.Keys.UP_ARROW);
    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('23');
  },

  'Pressing the DOWN_ARROW key is ignored when the hour is 00': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');

    browser.keys(browser.Keys.DOWN_ARROW);
    browser.keys(browser.Keys.DOWN_ARROW);
    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('00');
  },

  'Pressing the DOWN_ARROW key decrements the minute by 1 minute': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('#timeInput input[name="terra-time-minute-time-input"]');
    browser.keys('30');

    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('value').equals('30');
    browser.keys(browser.Keys.DOWN_ARROW);
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('value').equals('29');
  },

  'Pressing the UP_ARROW key increments the minute by 1 minute': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('#timeInput input[name="terra-time-minute-time-input"]');
    browser.keys('30');

    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('value').equals('30');
    browser.keys(browser.Keys.UP_ARROW);
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('value').equals('31');
  },

  'Pressing the UP_ARROW key is ignored when the minute has reached 59': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('#timeInput input[name="terra-time-minute-time-input"]');

    browser.keys('59');
    browser.keys(browser.Keys.UP_ARROW);
    browser.keys(browser.Keys.UP_ARROW);
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('value').equals('59');
  },

  'Pressing the DOWN_ARROW key is ignored when the minute is 00': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.click('#timeInput input[name="terra-time-minute-time-input"]');

    browser.keys(browser.Keys.DOWN_ARROW);
    browser.keys(browser.Keys.DOWN_ARROW);
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('value').equals('00');
  },

  'Pressing the DELETE key in the minute input when there is no value will move focus to the hour input': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default-time`);

    browser.click('#timeInput input[name="terra-time-minute-time-input"]');

    browser.keys(browser.Keys.DELETE);
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('value').equals('00');
  },

  'Creates a hidden input with a name atribute of "time-input" and an empty value attribute when no time is entered': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default`);

    browser.expect.element('#timeInput input[type="hidden"]').to.have.attribute('name').which.equals('time-input');
    browser.expect.element('#timeInput input[type="hidden"]').to.have.attribute('value').which.equals('');
  },

  'Creates a hidden input with a name atribute of "time-input" and sets the time in the value attribute.': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/default-time`);

    browser.expect.element('#timeInput input[type="hidden"]').to.have.attribute('name').which.equals('time-input');
    browser.expect.element('#timeInput input[type="hidden"]').to.have.attribute('value').which.equals('T12:00');
  },

  'Triggers onChange for time-input for key entry': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/on-change`);
    browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    browser.keys('1023');
    browser.assert.containsText('#time-input-value', '10:23');
  },

  'Triggers onChange for time-input for arrow entry': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/on-change`);
    browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    browser.keys('1023');

    browser.keys(browser.Keys.UP_ARROW);
    browser.assert.containsText('#time-input-value', '10:24');

    browser.keys(browser.Keys.DOWN_ARROW);
    browser.assert.containsText('#time-input-value', '10:23');
  },

  'Triggers onChange for time-input for onBlur focus change': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/time-input-tests/on-change`);
    browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    browser.keys('7');
    browser.assert.containsText('#time-input-value', '07:');

    browser.keys('47');
    browser.assert.containsText('#time-input-value', '07:47');
  },
};
