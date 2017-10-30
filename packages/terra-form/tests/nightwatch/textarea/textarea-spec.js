/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default Textarea with a number input': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-tests/textarea/default`);
    browser.expect.element('textarea').to.be.present;
  },
  'Displays a populated Textarea with correct name': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-tests/textarea/populated`);
    browser.expect.element('textarea[name="job_experience"]').to.be.present;
  },
  'Displays a small textarea with the correct rows': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-tests/textarea/small`);
    browser.expect.element('textarea').to.have.attribute('rows').equals('2');
  },
  'Displays a medium textarea with the correct rows': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-tests/textarea/medium`);
    browser.expect.element('textarea').to.have.attribute('rows').equals('5');
  },
  'Displays a large textarea with the correct rows': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-tests/textarea/large`);
    browser.expect.element('textarea').to.have.attribute('rows').equals('10');
  },
  'Displays a full size textarea at 100% height of the browser window': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-tests/textarea/full`);

    browser.windowSize('height', (result) => {
      browser.expect.element('textarea').to.have.css('height', `${result.value.height}px`);
    });
  },
  'Sets the rows attribute to the value of the passed in rows prop': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-tests/textarea/rows`);
    browser.expect.element('textarea').to.have.attribute('rows').equals('15');
  },
  'Resizes auto-resizable textareas appropriately when users add new lines': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-tests/textarea/auto-resizable`);
    browser.clearValue('textarea');
    browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');

    browser.expect.element('textarea').to.have.attribute('rows').equals('10');
  },
  'Does not auto-resize if the prop is not explicitly defined on the component': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-tests/textarea/medium`);
    browser.clearValue('textarea');
    browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');

    browser.expect.element('textarea').to.have.attribute('rows').equals('5');
  },
  'Displays an invalid textarea with the appropriate class': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-tests/textarea/invalid`);
    browser.expect.element('textarea').to.have.attribute('class').which.contains('form-error');
  },
});
