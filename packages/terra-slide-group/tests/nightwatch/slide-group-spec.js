/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'huge'], {
  'Displays a default SlideGroup with the a few items': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/slide-group-tests/default`);

    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(1)').to.have.attribute('aria-hidden');
    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(1)').to.have.css('visibility').which.equals('hidden');
    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(2)').to.not.have.attribute('aria-hidden');
    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(2)').text.to.equal('Slide 2');
  },

  'Displays a SlideGroup with one item': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/slide-group-tests/one-item`);

    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(1)').to.not.have.attribute('aria-hidden');
    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(1)').text.to.equal('Slide 1');
  },

  'Increments a non-animated SlideGroup': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/slide-group-tests/non-animated`);

    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(1)').to.not.have.attribute('aria-hidden');
    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(1)').text.to.contain('Slide 1');

    browser.click('#increment-1');

    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(1)').to.have.attribute('aria-hidden');
    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(2)').to.have.not.attribute('aria-hidden');
    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(2)').text.to.contain('Slide 2');
  },

  'Decrements a non-animated SlideGroup': (browser) => {
    browser.click('#decrement-2');

    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(2)').to.not.be.present;
    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(1)').to.not.have.attribute('aria-hidden');
    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(1)').text.to.contain('Slide 1');
  },

  'Increments an animated SlideGroup': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/slide-group-tests/animated`);

    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(1)').to.not.have.attribute('aria-hidden');
    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(1)').text.to.contain('Slide 1');

    browser.click('#increment-1');
    // Waiting here to ensure new component is presented
    browser.waitForElementPresent('#SlideGroup > div > div[class*="slide"]:not([class*="enter-active"]):nth-child(2)', 2000);

    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(1)').to.have.attribute('aria-hidden');
    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(2)').to.have.not.attribute('aria-hidden');
    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(2)').text.to.contain('Slide 2');
  },

  'Decrements an animated SlideGroup': (browser) => {
    // Pause is needed to ensure second slide panel is completely transitioned on the page. Chromedrive is unable to click
    // a moving element (see https://sites.google.com/a/chromium.org/chromedriver/help/clicking-issues)
    browser.pause(1000);
    browser.click('#decrement-2');

    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(2)').to.not.be.present.before(2000);
    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(1)').to.not.have.attribute('aria-hidden');
    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(1)').text.to.contain('Slide 1');
  },

  'Disables content on hidden slides for a SlideGroup': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/slide-group-tests/non-animated`);
    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(1)').to.not.have.attribute('aria-hidden');
    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(1)').text.to.contain('Slide 1');

    browser.sendKeys('#increment-1', browser.Keys.ENTER);
    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(1)').to.have.attribute('aria-hidden');
    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(1)').to.have.css('visibility').which.equals('hidden');
    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(2)').to.have.not.attribute('aria-hidden');
    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(2)').text.to.contain('Slide 2');

    browser.sendKeys('#increment-1', browser.Keys.ENTER);
    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(2)').to.have.not.attribute('aria-hidden');
    browser.expect.element('#SlideGroup > div > div[class*="slide"]:nth-child(3)').to.not.be.present;
  },
});
