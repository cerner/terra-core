/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions */

const screenshot = require('terra-toolkit').screenshot;

const windowSizes = {
  default: [470, 768],
  tiny: [622, 768],
  small: [838, 768],
  medium: [1000, 768],
  large: [1300, 768],
  huge: [1500, 768],
};

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-demographics-banner', done);
  },

  'Displays a blank demographics banner with the empty text identifier': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/demographics-banner-tests/blank`);
    browser.expect.element('.terra-DemographicsBanner').to.be.present;
    browser.expect.element('.terra-DemographicsBanner-preferred-first-name').to.not.be.present;
    browser.expect.element('.terra-DemographicsBanner-person-name').text.to.contain('--');
    browser.expect.element('.terra-DemographicsBanner-person-details').text.to.contain('DOB:\n--');
  },

  'Displays all the content when it is provided to the banner': (browser) => {
    const width = browser.globals.width;

    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/demographics-banner-tests/populated`);

    browser.expect.element('.terra-DemographicsBanner').to.be.present;
    browser.expect.element('.terra-DemographicsBanner-preferred-first-name').to.be.present;
    browser.expect.element('.terra-DemographicsBanner-preferred-first-name').text.to.contain('John');

    browser
      .expect
      .element('.terra-DemographicsBanner-person-name')
      .text
      .to
      .contain('Johnathon Doe');

    browser
      .expect
      .element('.terra-DemographicsBanner-application-content')
      .text
      .to
      .contain('St. Johns West Wing Room Cardiac Unit 253');

    if (width < windowSizes.small[0]) {
      browser
        .expect
        .element('.terra-DemographicsBanner-person-details')
        .text
        .to
        .contain('25 Years\nMale\nDOB:\nMay 9, 1993\nGA:\nMay 11, 1993\nMRN:\n12343\nREA:\n3JSDA');
    } else {
      browser
        .expect
        .element('.terra-DemographicsBanner-identifiers')
        .text
        .to
        .contain('MRN:\n12343\nREA:\n3JSDA');

      browser
        .expect
        .element('.terra-DemographicsBanner .terra-DemographicsBanner-person-details')
        .text
        .to
        .contain('25 Years\nMale\nDOB:\nMay 9, 1993\nGA:\nMay 11, 1993');
    }
  },

  'Displays a deceased demographics banner': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/demographics-banner-tests/deceased`);
    browser.expect.element('.terra-DemographicsBanner--deceased').to.be.present;
  },

  'Displays a deceased demographics banner with a default label when one is not provided': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/demographics-banner-tests/deceased_no_label`);
    browser
      .expect
      .element('.terra-DemographicsBanner-person-details')
      .text
      .to
      .contain('Deceased:\nMarch 12, 2017');
  },

  'Displays post menstrural age with a default label when one is not provided': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/demographics-banner-tests/post_menstrual_age_no_label`);
    browser
      .expect
      .element('.terra-DemographicsBanner-person-details')
      .text
      .to
      .contain('PMA:\nApril 5, 2016');
  },

  'Displays gestational age with a default label when one is not provided': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/demographics-banner-tests/gestational_age_no_label`);
    browser
      .expect
      .element('.terra-DemographicsBanner-person-details')
      .text
      .to
      .contain('GA:\nApril 5, 2016');
  },
};
