// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a search field with search button': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/search-field-tests/default`)
      .assert.elementPresent('#searchfield')
      .assert.elementPresent('#searchfield button')
      .assert.attributeEquals('#searchfield input', 'placeholder', '');
  },

  'Displays a search field with a placeholder value of "Search Text"': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/search-field-tests/placeholder`)
      .assert.elementPresent('#searchfield')
      .assert.elementPresent('#searchfield button')
      .assert.attributeEquals('#searchfield input', 'placeholder', 'Search Text');
  },

  'Displays a search field that handles search callbacks': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/search-field-tests/callback`);

    browser
      .setValue('input[type=search]', 'S')
      .expect.element('#search-callback-text').text.to.equal('INVALID Search Text: S').after(250);

    browser
      .setValue('input[type=search]', 'e')
      .expect.element('#search-callback-text').text.to.equal('INVALID Search Text: Se').after(250);

    browser
      .setValue('input[type=search]', 'a')
      .click('#searchfield button')
      .expect.element('#search-callback-text').text.to.equal('Search Text: Sea').before(250);
  },

  'Displays a search field with a search delay of 1000': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/search-field-tests/delayed`);

    browser
      .setValue('input[type=search]', 'Test')
      .expect.element('#search-callback-text').text.to.equal('Search Text:').after(250).before(1000);

    browser
      .expect.element('#search-callback-text').text.to.equal('Search Text: Test').after(1000);
  },

  'Displays a search field with a minimum search text length of 5 characters': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/search-field-tests/minimum-length`);

    browser
      .setValue('input[type=search]', 'Test')
      .click('#searchfieldWithMinimumLength button')
      .expect.element('#search-callback-text').text.to.equal('Search Text:');

    browser
      .setValue('input[type=search]', 's')
      .click('#searchfieldWithMinimumLength button')
      .expect.element('#search-callback-text').text.to.equal('Search Text: Tests');
  },

  'Displays the search button with a height that matches the input ': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/search-field-tests/default`);

    browser
      .assert.elementPresent('#searchfield')
      .assert.elementPresent('#searchfield button')
      .assert.attributeEquals('#searchfield input', 'placeholder', '');

    browser.getCssProperty('#searchfield input', 'height', (inputResult) => {
      browser.getCssProperty('#searchfield button', 'height', (buttonResult) => {
        browser.assert.equal(Math.round(parseFloat(inputResult.value)), Math.round(parseFloat(buttonResult.value)));
      });
    });
  },

  'Displays the search field and disables the auto searching ': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/search-field-tests/disable-auto-search`);

    browser
      .setValue('input[type=search]', 'S')
      .expect.element('#search-callback-text').text.to.equal('').after(250);
    browser
      .setValue('input[type=search]', 'e')
      .expect.element('#search-callback-text').text.to.equal('').after(250);
    browser
      .setValue('input[type=search]', 'a')
      .expect.element('#search-callback-text').text.to.equal('').after(250);
  },

  'Displays the search field with auto searching on and handles ENTER keypress to search ': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/search-field-tests/enter`);

    browser
      .setValue('input[type=search]', 'S')
      .expect.element('#search-callback-text').text.to.equal('').after(250);
    browser.expect.element('#search-count').text.to.equal('Search Count: 0');

    browser.sendKeys('input[type=search]', [browser.Keys.ENTER]);
    browser.expect.element('#search-callback-text').text.to.equal('INVALID Search Text: S').after(250);
    browser.expect.element('#search-count').text.to.equal('Search Count: 1');

    browser
      .setValue('input[type=search]', 'e')
      .expect.element('#search-callback-text').text.to.equal('Search Text: Se').after(250);
    browser.expect.element('#search-count').text.to.equal('Search Count: 2');

    browser.sendKeys('input[type=search]', [browser.Keys.ENTER]);
    browser.expect.element('#search-callback-text').text.to.equal('Search Text: Se').after(250);
    browser.expect.element('#search-count').text.to.equal('Search Count: 3');
  },

  'Displays the search field with auto searching off and handles ENTER keypress to search ': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/search-field-tests/disable-auto-search`);

    browser
      .setValue('input[type=search]', 'S')
      .expect.element('#search-callback-text').text.to.equal('').after(250);
    browser.sendKeys('input[type=search]', [browser.Keys.ENTER]);
    browser.expect.element('#search-callback-text').text.to.equal('INVALID Search Text: S').after(250);

    browser
      .setValue('input[type=search]', 'e')
      .expect.element('#search-callback-text').text.to.equal('INVALID Search Text: S').after(250);
    browser
      .setValue('input[type=search]', 'a')
      .expect.element('#search-callback-text').text.to.equal('INVALID Search Text: S').after(250);

    browser.sendKeys('input[type=search]', [browser.Keys.ENTER]);
    browser.expect.element('#search-callback-text').text.to.equal('Search Text: Sea').after(250);
  },
});
