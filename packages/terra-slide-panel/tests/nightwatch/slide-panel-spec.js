// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['medium'], {
  'Displays a the SlidePanel with defaulted props': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/slide-panel/slide-panel-default`);

    browser.expect.element('#test-example').to.have.attribute('data-slide-panel-panel-behavior').equals('overlay');
    browser.expect.element('#test-example').to.have.attribute('data-slide-panel-panel-position').equals('end');
    browser.expect.element('#test-example').to.have.attribute('data-slide-panel-panel-size').equals('small');

    browser.expect.element('#test-example').to.have.attribute('class').which.not.contains('is-open');
    browser.expect.element('#test-example').to.have.attribute('class').which.not.contains('is-fullscreen');
    browser.expect.element('#test-example').to.have.attribute('class').which.not.contains('fill');

    browser.expect.element('#test-example > div[class*="panel"]:first-child').to.have.attribute('aria-hidden').equals('true');
  },

  'Displays a the SlidePanel with behavior of "overlay"': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/slide-panel/slide-panel-overlay`);
    browser.expect.element('#test-example').to.have.attribute('data-slide-panel-panel-behavior').equals('overlay');
  },

  'Displays a the SlidePanel with behavior of "squish"': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/slide-panel/slide-panel-squish`);
    browser.expect.element('#test-example').to.have.attribute('data-slide-panel-panel-behavior').equals('squish');
  },

  'Displays a the SlidePanel with position of "start"': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/slide-panel/slide-panel-start`);
    browser.expect.element('#test-example').to.have.attribute('data-slide-panel-panel-position').equals('start');
  },

  'Displays a the SlidePanel with position of "end"': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/slide-panel/slide-panel-end`);
    browser.expect.element('#test-example').to.have.attribute('data-slide-panel-panel-position').equals('end');
  },

  'Displays a the SlidePanel with size of "small"': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/slide-panel/slide-panel-small`);
    browser.expect.element('#test-example').to.have.attribute('data-slide-panel-panel-size').equals('small');
  },

  'Displays a the SlidePanel with size of "large"': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/slide-panel/slide-panel-large`);
    browser.expect.element('#test-example').to.have.attribute('data-slide-panel-panel-size').equals('large');
  },

  'Displays a the SlidePanel with isOpen prop set': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/slide-panel/slide-panel-open`);
    browser.expect.element('#test-example').to.have.attribute('class').which.contains('is-open');
    browser.expect.element('#test-example > div[class*="panel"]:first-child').to.have.attribute('aria-hidden').equals('false');
  },

  'Displays a the SlidePanel with isFullscreen prop set': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/slide-panel/slide-panel-fullscreen`);
    browser.expect.element('#test-example').to.have.attribute('class').which.contains('is-fullscreen');
  },

  'Displays a the SlidePanel with fill prop set': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/slide-panel/slide-panel-fill`);
    browser.expect.element('#test-example').to.have.attribute('class').which.contains('fill');
  },
});
