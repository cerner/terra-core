// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

/* eslint-disable no-unused-expressions */
module.exports = resizeTo(['medium'], {
  'Displays a default grid': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/grid/grid-default`)
      .expect.element('#grid').to.be.present;

    browser.expect.element('#row').to.be.present;

    browser.expect.element('#column-1').to.have.attribute('class').which.contain('column-6');
    browser.expect.element('#column-2').to.have.attribute('class').which.contain('column-6');

    browser.expect.element('div#grid div#row div#column-1 div.terra-grid-example').text.to.equal('First Column content');
    browser.expect.element('div#grid div#row div#column-2 div.terra-grid-example').text.to.equal('Second Column content');
  },

  'Displays a responsive grid': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/grid/grid-responsive`);
    browser.expect.element('#grid').to.be.present;

    browser.expect.element('#column-1').to.have.attribute('class').which.contain('tiny-12');
    browser.expect.element('#column-1').to.have.attribute('class').which.contain('small-8');
    browser.expect.element('#column-1').to.have.attribute('class').which.contain('medium-4');
    browser.expect.element('#column-1').to.have.attribute('class').which.contain('large-6');
  },

  'Displays a nested grid': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/grid/grid-nested`)
      .expect.element('#grid').to.be.present;

    browser.expect.element('#nested-row').to.be.present;

    browser.expect.element('#nested-column-1').to.have.attribute('class').which.contain('column-5');
    browser.expect.element('#nested-column-2').to.have.attribute('class').which.contain('column-7');

    browser.expect.element('#nested-column-1-text').text.to.equal('5 Nested Columns');
    browser.expect.element('#nested-column-2-text').text.to.equal('7 Nested Columns');
  },
});
