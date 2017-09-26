// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

/* eslint-disable no-unused-expressions */
module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default grid': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/grid-tests/default`)
      .expect.element('#grid').to.be.present;

    browser.expect.element('#row').to.be.present;

    browser.expect.element('#column-1').to.have.attribute('class').which.contain('column-6');
    browser.expect.element('#column-2').to.have.attribute('class').which.contain('column-6');

    browser
      .assert.containsText('div#grid div#row div#column-1 div.terra-grid-example', 'First Column content')
      .assert.containsText('div#grid div#row div#column-2 div.terra-grid-example', 'Second Column content');
  },

  'Displays a responsive grid': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/grid-tests/responsive`);
    browser.expect.element('#grid').to.be.present;

    browser.expect.element('#column-1').to.have.attribute('class').which.contain('tiny-12');
    browser.expect.element('#column-1').to.have.attribute('class').which.contain('small-8');
    browser.expect.element('#column-1').to.have.attribute('class').which.contain('medium-4');
    browser.expect.element('#column-1').to.have.attribute('class').which.contain('large-6');
  },

  'Displays a nested grid': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/grid-tests/nested`)
      .expect.element('#grid').to.be.present;

    browser.expect.element('#nested-row').to.be.present;

    browser.expect.element('#nested-column-1').to.have.attribute('class').which.contain('column-5');
    browser.expect.element('#nested-column-2').to.have.attribute('class').which.contain('column-7');

    browser
      .assert.containsText('#nested-column-1-text', '5 Nested Columns')
      .assert.containsText('#nested-column-2-text', '7 Nested Columns');
  },
});
