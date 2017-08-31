/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a blank demographics banner with the empty text identifier': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/demographics-banner-tests/blank`)
      .expect.element('#blank-demographics-banner').text.to.contain('--\n--\nDOB:\n--');
  },

  'Displays all the content when it is provided to the banner': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/demographics-banner-tests/populated`);
    browser.expect.element('#populated-demographics h1').text.to.contain('John');
    browser.expect.element('#populated-demographics h1').text.to.contain('Johnathon Doe');

    browser.windowSize('width', (result) => {
      if (result.value.width < browser.globals.breakpoints.medium[0]) {
        browser
          .expect.element('#populated-demographics div:nth-child(2)')
            .text.to.contain('25 Years\nMale\nDOB:\nMay 9, 1993\nGA:\nMay 11, 1993\nPMA:\nMay 13, 1993\nMRN:\n12343\nREA:\n3JSDA');
      } else {
        browser
          .expect.element('#populated-demographics div:nth-child(2) > div:nth-child(2) > div:nth-child(1)')
            .text.to.contain('25 Years\nMale\nDOB:\nMay 9, 1993\nGA:\nMay 11, 1993\nPMA:\nMay 13, 1993');

        browser
          .expect.element('#populated-demographics div:nth-child(2) > div:nth-child(2) > div:nth-child(2)')
            .text.to.contain('MRN:\n12343\nREA:\n3JSDA');
      }
    });
  },

  'Displays a deceased demographics banner': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/demographics-banner-tests/deceased`)
      .expect.element('#deceased-demographics').text.to.contain('Deceased:\nMarch 12, 2017');
  },

  'Displays a deceased demographics banner with a default label when one is not provided': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/demographics-banner-tests/deceased_no_label`)
      .expect.element('#deceased-demographics-no-label').text.to.contain('Deceased:\nMarch 12, 2017');
  },

  'Displays post menstrural age with a default label when one is not provided': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/demographics-banner-tests/post_menstrual_age_no_label`)
      .expect.element('#post-menstrual-no-label').text.to.contain('PMA:\nApril 5, 2016');
  },

  'Displays gestational age with a default label when one is not provided': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/demographics-banner-tests/gestational_age_no_label`)
      .expect.element('#gestational-age-no-label').text.to.contain('GA:\nApril 5, 2016');
  },
});
