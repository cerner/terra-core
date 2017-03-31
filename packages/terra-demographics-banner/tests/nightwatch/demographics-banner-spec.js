/* eslint-disable no-unused-expressions */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, done);
  },
  'Displays a blank demographics banner with the empty text identifier': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/demographics-banner-tests/blank`);
    browser.expect.element('.terra-DemographicsBanner').to.be.present;
    browser.expect.element('.terra-DemographicsBanner--preferred-first-name').to.not.be.present;
    browser.expect.element('.terra-DemographicsBanner .terra-DemographicsBanner--row h1').text.to.contain('--');
    browser.expect.element('.terra-DemographicsBanner .terra-DemographicsBanner--person-details').text.to.contain('DOB: --');
  },
  'Displays all the content when it is provided to the banner': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/demographics-banner-tests/populated`);
    browser.expect.element('.terra-DemographicsBanner').to.be.present;
    browser.expect.element('.terra-DemographicsBanner--preferred-first-name').to.be.present;

    browser.expect.element('.terra-DemographicsBanner--preferred-first-name').text.to.contain('John');

    browser
      .expect
      .element('.terra-DemographicsBanner .terra-DemographicsBanner--row h1')
      .text
      .to
      .contain('Johnathon Doe');

    browser
      .expect
      .element('.terra-DemographicsBanner .terra-DemographicsBanner--person-details')
      .text
      .to
      .contain('25 YearsMaleDOB: May 9, 1993');

    browser
      .expect
      .element('.terra-DemographicsBanner--application-content')
      .text
      .to
      .contain('5%');

    browser
      .expect
      .element('.terra-DemographicsBanner--identifiers')
      .text
      .to
      .contain('MRN: 12343REA: 3JSDA');

    browser
      .expect
      .element('.terra-DemographicsBanner .terra-DemographicsBanner--row:nth-child(3) span:nth-child(1)')
      .text
      .to
      .contain('Address: 1501 Walnut St. Apt #123');

    browser
      .expect
      .element('.terra-DemographicsBanner .terra-DemographicsBanner--row:nth-child(3) span:nth-child(2)')
      .text
      .to
      .contain('City: Kansas City MO');

    browser
      .expect
      .element('.terra-DemographicsBanner .terra-DemographicsBanner--row:nth-child(4)')
      .text
      .to
      .contain('ZIP: 64108');
  },
  'Displays a deceased demographics banner': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/demographics-banner-tests/deceased`);
    browser.expect.element('.terra-DemographicsBanner--deceased').to.be.present;
  },
};
