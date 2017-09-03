// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default SlideGroup with the a few items': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/slide-group-tests/default`);

    browser.expect.element('#SlideGroup > span > div[class*="slide"]:nth-child(1)').to.have.attribute('aria-hidden');
    browser.expect.element('#SlideGroup > span > div[class*="slide"]:nth-child(1)').text.to.equal('Slide 1');
    browser.expect.element('#SlideGroup > span > div[class*="slide"]:nth-child(2)').to.not.have.attribute('aria-hidden');
    browser.expect.element('#SlideGroup > span > div[class*="slide"]:nth-child(2)').text.to.equal('Slide 2');
  },
});
