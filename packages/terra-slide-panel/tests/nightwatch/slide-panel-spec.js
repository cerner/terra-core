// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'huge'], {
  'Displays a the SlidePanel with defaulted props': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/slide-panel/components/slide-panel-default`);

    browser.expect.element('[class*="slide-panel"]').to.have.attribute('data-slide-panel-panel-behavior').equals('overlay');
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('data-slide-panel-panel-position').equals('end');
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('data-slide-panel-panel-size').equals('small');

    browser.expect.element('[class*="slide-panel"]').to.have.attribute('class').which.not.contains('is-open');
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('class').which.not.contains('is-fullscreen');
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('class').which.not.contains('fill');

    browser.expect.element('[class*="slide-panel"] > div[class*="panel"]:first-child').to.have.attribute('aria-hidden').equals('true');
  },

  'Displays a the SlidePanel with behavior of "overlay"': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/slide-panel/components/slide-panel-overlay`);
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('data-slide-panel-panel-behavior').equals('overlay');
  },

  'Displays a the SlidePanel with behavior of "squish"': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/slide-panel/components/slide-panel-squish`);
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('data-slide-panel-panel-behavior').equals('squish');
  },

  'Displays a the SlidePanel with position of "start"': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/slide-panel/components/slide-panel-start`);
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('data-slide-panel-panel-position').equals('start');
  },

  'Displays a the SlidePanel with position of "end"': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/slide-panel/components/slide-panel-end`);
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('data-slide-panel-panel-position').equals('end');
  },

  'Displays a the SlidePanel with size of "small"': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/slide-panel/components/slide-panel-small`);
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('data-slide-panel-panel-size').equals('small');
  },

  'Displays a the SlidePanel with size of "large"': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/slide-panel/components/slide-panel-large`);
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('data-slide-panel-panel-size').equals('large');
  },

  'Displays a the SlidePanel with isOpen prop set': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/slide-panel/components/slide-panel-open`);
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('class').which.contains('is-open');
    browser.expect.element('[class*="slide-panel"] > div[class*="panel"]:first-child').to.not.have.attribute('aria-hidden');
  },

  'Displays a the SlidePanel with isFullscreen prop set': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/slide-panel/components/slide-panel-fullscreen`);
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('class').which.contains('is-fullscreen');
  },

  'Displays a the SlidePanel with fill prop set': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/slide-panel/components/slide-panel-fill`);
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('class').which.contains('fill');
  },
});
