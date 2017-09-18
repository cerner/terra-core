// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays an arrange with fitStart, fill, and fitEnd content aligned together': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-all-arrange`);

    browser.expect.element('#default div:nth-child(1) img').to.have.attribute('alt').equals('a happy panda');
    browser.expect.element('#default div:nth-child(2)').text.to.contain('Lorem ipsum');
    browser.expect.element('#default div:nth-child(3) svg').to.have.attribute('class').equals('terra-Icon');

    browser.expect.element('#center div:nth-child(1)').to.have.css('align-self').which.equals('center');
    browser.expect.element('#center div:nth-child(2)').to.have.css('align-self').which.equals('center');
    browser.expect.element('#center div:nth-child(3)').to.have.css('align-self').which.equals('center');

    browser.expect.element('#bottom div:nth-child(1)').to.have.css('align-self').which.equals('flex-end');
    browser.expect.element('#bottom div:nth-child(2)').to.have.css('align-self').which.equals('flex-end');
    browser.expect.element('#bottom div:nth-child(3)').to.have.css('align-self').which.equals('flex-end');

    browser.expect.element('#stretch div:nth-child(1)').to.have.css('align-self').which.equals('stretch');
    browser.expect.element('#stretch div:nth-child(2)').to.have.css('align-self').which.equals('stretch');
    browser.expect.element('#stretch div:nth-child(3)').to.have.css('align-self').which.equals('stretch');

    browser.expect.element('#icon-stretch div:nth-child(1) svg').to.have.attribute('class').equals('terra-Icon');
    browser.expect.element('#icon-stretch div:nth-child(2)').text.to.contain('Lorem ipsum');
    browser.expect.element('#icon-stretch div:nth-child(3) svg').to.have.attribute('class').equals('terra-Icon');
  },

  'Displays an arrange with fill and fitEnd content aligned together': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-all-arrange-fit-end-fill`);

    browser.expect.element('#default div:nth-child(1)').text.to.equal('');
    browser.expect.element('#default div:nth-child(2)').text.to.contain('Lorem ipsum');
    browser.expect.element('#default div:nth-child(3) svg').to.have.attribute('class').equals('terra-Icon');

    browser.expect.element('#center div:nth-child(1)').to.have.css('align-self').which.equals('center');
    browser.expect.element('#center div:nth-child(2)').to.have.css('align-self').which.equals('center');
    browser.expect.element('#center div:nth-child(3)').to.have.css('align-self').which.equals('center');

    browser.expect.element('#bottom div:nth-child(1)').to.have.css('align-self').which.equals('flex-end');
    browser.expect.element('#bottom div:nth-child(2)').to.have.css('align-self').which.equals('flex-end');
    browser.expect.element('#bottom div:nth-child(3)').to.have.css('align-self').which.equals('flex-end');

    browser.expect.element('#stretch div:nth-child(1)').to.have.css('align-self').which.equals('stretch');
    browser.expect.element('#stretch div:nth-child(2)').to.have.css('align-self').which.equals('stretch');
    browser.expect.element('#stretch div:nth-child(3)').to.have.css('align-self').which.equals('stretch');
  },

  'Displays an arrange with fitStart and fill content aligned together': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-all-arrange-fit-start-fill`);

    browser.expect.element('#default div:nth-child(1) img').to.have.attribute('alt').equals('a happy panda');
    browser.expect.element('#default div:nth-child(2)').text.to.contain('Lorem ipsum');
    browser.expect.element('#default div:nth-child(3)').text.to.equal('');

    browser.expect.element('#center div:nth-child(1)').to.have.css('align-self').which.equals('center');
    browser.expect.element('#center div:nth-child(2)').to.have.css('align-self').which.equals('center');
    browser.expect.element('#center div:nth-child(3)').to.have.css('align-self').which.equals('center');

    browser.expect.element('#bottom div:nth-child(1)').to.have.css('align-self').which.equals('flex-end');
    browser.expect.element('#bottom div:nth-child(2)').to.have.css('align-self').which.equals('flex-end');
    browser.expect.element('#bottom div:nth-child(3)').to.have.css('align-self').which.equals('flex-end');

    browser.expect.element('#stretch div:nth-child(1)').to.have.css('align-self').which.equals('stretch');
    browser.expect.element('#stretch div:nth-child(2)').to.have.css('align-self').which.equals('stretch');
    browser.expect.element('#stretch div:nth-child(3)').to.have.css('align-self').which.equals('stretch');
  },

  'Displays an arrange with fitStart aligned individually': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-individually-fit-start`);

    browser.expect.element('#default div:nth-child(1) img').to.have.attribute('alt').equals('a happy panda');
    browser.expect.element('#default div:nth-child(2)').text.to.contain('Lorem ipsum');
    browser.expect.element('#default div:nth-child(3) svg').to.have.attribute('class').equals('terra-Icon');

    browser.expect.element('#center div:nth-child(1)').to.have.css('align-self').which.equals('center');
    browser.expect.element('#center div:nth-child(2)').to.have.css('align-self').which.equals('auto');
    browser.expect.element('#center div:nth-child(3)').to.have.css('align-self').which.equals('flex-start');

    browser.expect.element('#bottom div:nth-child(1)').to.have.css('align-self').which.equals('flex-end');
    browser.expect.element('#bottom div:nth-child(2)').to.have.css('align-self').which.equals('auto');
    browser.expect.element('#bottom div:nth-child(3)').to.have.css('align-self').which.equals('flex-start');

    browser.expect.element('#stretch div:nth-child(1)').to.have.css('align-self').which.equals('stretch');
    browser.expect.element('#stretch div:nth-child(2)').to.have.css('align-self').which.equals('auto');
    browser.expect.element('#stretch div:nth-child(3)').to.have.css('align-self').which.equals('flex-start');
  },

  'Displays an arrange with fill aligned individually': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-individually-fill`);

    browser.expect.element('#default div:nth-child(1) img').to.have.attribute('alt').equals('a happy panda');
    browser.expect.element('#default div:nth-child(2)').text.to.contain('Lorem ipsum');
    browser.expect.element('#default div:nth-child(3) svg').to.have.attribute('class').equals('terra-Icon');

    browser.expect.element('#center div:nth-child(1)').to.have.css('align-self').which.equals('flex-start');
    browser.expect.element('#center div:nth-child(2)').to.have.css('align-self').which.equals('center');
    browser.expect.element('#center div:nth-child(3)').to.have.css('align-self').which.equals('flex-start');

    browser.expect.element('#bottom div:nth-child(1)').to.have.css('align-self').which.equals('flex-start');
    browser.expect.element('#bottom div:nth-child(2)').to.have.css('align-self').which.equals('flex-end');
    browser.expect.element('#bottom div:nth-child(3)').to.have.css('align-self').which.equals('flex-start');

    browser.expect.element('#stretch div:nth-child(1)').to.have.css('align-self').which.equals('flex-start');
    browser.expect.element('#stretch div:nth-child(2)').to.have.css('align-self').which.equals('stretch');
    browser.expect.element('#stretch div:nth-child(3)').to.have.css('align-self').which.equals('flex-start');
  },

  'Displays an arrange with fitEnd aligned individually': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-individually-fit-end`);

    browser.expect.element('#default div:nth-child(1) img').to.have.attribute('alt').equals('a happy panda');
    browser.expect.element('#default div:nth-child(2)').text.to.contain('Lorem ipsum');
    browser.expect.element('#default div:nth-child(3) svg').to.have.attribute('class').equals('terra-Icon');

    browser.expect.element('#center div:nth-child(1)').to.have.css('align-self').which.equals('flex-start');
    browser.expect.element('#center div:nth-child(2)').to.have.css('align-self').which.equals('auto');
    browser.expect.element('#center div:nth-child(3)').to.have.css('align-self').which.equals('center');

    browser.expect.element('#bottom div:nth-child(1)').to.have.css('align-self').which.equals('flex-start');
    browser.expect.element('#bottom div:nth-child(2)').to.have.css('align-self').which.equals('auto');
    browser.expect.element('#bottom div:nth-child(3)').to.have.css('align-self').which.equals('flex-end');

    browser.expect.element('#stretch div:nth-child(1)').to.have.css('align-self').which.equals('flex-start');
    browser.expect.element('#stretch div:nth-child(2)').to.have.css('align-self').which.equals('auto');
    browser.expect.element('#stretch div:nth-child(3)').to.have.css('align-self').which.equals('stretch');
  },
});
