// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Sets the rows attribute to the value of the passed in rows prop': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/textarea/rows`)
      .assert
      .attributeEquals('textarea', 'rows', '15');
  },
  'Displays a default Textarea with a number input': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/textarea/default`)
      .assert
      .elementPresent('textarea');
  },
  'Displays a populated Textarea with correct name': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/textarea/populated`)
      .assert
      .elementPresent('textarea[name="job_experience"]');
  },
  'Displays a small textarea with the correct rows': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/textarea/small`)
      .assert
      .attributeEquals('textarea', 'rows', '2');
  },
  'Displays a medium textarea with the correct rows': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/textarea/medium`)
      .assert
      .attributeEquals('textarea', 'rows', '5');
  },
  'Displays a large textarea with the correct rows': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/textarea/large`)
      .assert
      .attributeEquals('textarea', 'rows', '10');
  },
  'Displays a full size textarea at 100% height of the browser window': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-tests/textarea/full`);

    browser.windowSize('height', (result) => {
      browser.assert.cssProperty('textarea', 'height', `${result.value.height}px`);
    });
  },
  'Resizes auto-resizable textareas appropriately when users add new lines': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/textarea/auto-resizable`)
      .clearValue('#auto-resizable')
      .setValue('#auto-resizable', 'New input New Input\n \n \n \n \n \n \n \n \n')
      .assert
      .attributeEquals('textarea', 'rows', '10');
  },
  'Displays an invalid textarea with the appropriate class': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/textarea/invalid`)
      .assert
      .attributeContains('textarea', 'class', 'form-error');
  },
});
