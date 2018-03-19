/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['medium'], {
  'Displays a default Textarea': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-textarea/default-textarea`);
    browser.expect.element('textarea').to.be.present;

    // The -2 accounts for the border around the textarea
    browser.getElementSize('textarea', (result) => {
      browser.expect.element('textarea').to.have.css('min-height').which.equals(`${result.value.height - 2}px`);
    });
  },
  'Displays a populated Textarea with correct name': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-textarea/populated-textarea`);
    browser.expect.element('textarea[name="job_experience"]').to.be.present;
  },
  'Displays a small textarea with the correct rows and size': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-textarea/small-textarea`);

    browser.expect.element('textarea').to.have.attribute('rows').equals('2');

    // The -2 accounts for the border around the textarea
    browser.getElementSize('textarea', (result) => {
      browser.expect.element('textarea').to.have.css('min-height').which.equals(`${result.value.height - 2}px`);
    });
  },
  'Displays a medium textarea with the correct rows': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-textarea/medium-textarea`);

    browser.expect.element('textarea').to.have.attribute('rows').equals('5');

    // The -2 accounts for the border around the textarea
    browser.getElementSize('textarea', (result) => {
      browser.expect.element('textarea').to.have.css('min-height').which.equals(`${result.value.height - 2}px`);
    });
  },
  'Displays a large textarea with the correct rows': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-textarea/large-textarea`);
    browser.expect.element('textarea').to.have.attribute('rows').equals('10');

    // The -2 accounts for the border around the textarea
    browser.getElementSize('textarea', (result) => {
      browser.expect.element('textarea').to.have.css('min-height').which.equals(`${result.value.height - 2}px`);
    });
  },
  'Displays a full size textarea at 100% height of the browser window': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-textarea/full-textarea`);

    browser.windowSize('height', (result) => {
      browser.expect.element('textarea').to.have.css('height', `${result.value.height}px`);
    });
  },
  'Sets the rows attribute to the value of the passed in rows prop': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-textarea/rows-textarea`);
    browser.expect.element('textarea').to.have.attribute('rows').equals('15');
  },
  'Resizes auto-resizable textareas appropriately when users add new lines': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-textarea/auto-resizable-textarea`);
    browser.clearValue('textarea');
    browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');

    browser.expect.element('textarea').to.have.attribute('rows').equals('10');
  },
  'Does not auto-resize if the prop is not explicitly defined on the component': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-textarea/medium-textarea`);
    browser.clearValue('textarea');
    browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');

    browser.expect.element('textarea').to.have.attribute('rows').equals('5');
  },
  'Does not auto-resize textareas when ontouchstart exists and browser width < 1024': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-textarea/auto-resizable-textarea-mobile-on-touch-start`);
    browser.clearValue('textarea');
    browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');

    browser.windowSize('width', (result) => {
      if (result.value.width < 1024) {
        browser.expect.element('textarea').to.have.attribute('rows').equals('2');
      } else {
        browser.expect.element('textarea').to.have.attribute('rows').equals('10');
      }
    });
  },
  'Does not auto-resize textareas when DocumentTouch exists and browser width < 1024': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-textarea/auto-resizable-textarea-mobile-document-touch`);
    browser.clearValue('textarea');
    browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');

    browser.windowSize('width', (result) => {
      if (result.value.width < 1024) {
        browser.expect.element('textarea').to.have.attribute('rows').equals('2');
      } else {
        browser.expect.element('textarea').to.have.attribute('rows').equals('10');
      }
    });
  },
  'Does not auto-resize textareas when maxTouchPoints exists and browser width < 1024': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-textarea/auto-resizable-textarea-mobile-max-touch-points`);
    browser.clearValue('textarea');
    browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');

    browser.windowSize('width', (result) => {
      if (result.value.width < 1024) {
        browser.expect.element('textarea').to.have.attribute('rows').equals('2');
      } else {
        browser.expect.element('textarea').to.have.attribute('rows').equals('10');
      }
    });
  },
  'Does not auto-resize textareas when msMaxTouchPoints exists and browser width < 1024': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-textarea/auto-resizable-textarea-mobile-ms-max-touch-points`);
    browser.clearValue('textarea');
    browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');

    browser.windowSize('width', (result) => {
      if (result.value.width < 1024) {
        browser.expect.element('textarea').to.have.attribute('rows').equals('2');
      } else {
        browser.expect.element('textarea').to.have.attribute('rows').equals('10');
      }
    });
  },
  'Displays an invalid textarea with the appropriate class': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-textarea/invalid-textarea`);
    browser.expect.element('textarea').to.have.attribute('class').which.contains('form-error');
  },
});
