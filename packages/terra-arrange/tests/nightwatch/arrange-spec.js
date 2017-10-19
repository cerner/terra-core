// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays an arrange with fitStart, fill, and fitEnd without align set': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-all-arrange`);

    browser.expect.element('#default div:nth-child(1) img').to.have.attribute('alt').equals('a happy panda');
    browser.expect.element('#default div:nth-child(2)').text.to.contain('Lorem ipsum');
    browser.expect.element('#default div:nth-child(3) svg').to.have.attribute('class').equals('terra-Icon');

    browser.expect.element('#default div:nth-child(1)').to.have.attribute('class').which.contains('fit');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('fit');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('center');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('bottom');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('stretch');
    browser.expect.element('#default div:nth-child(3)').to.have.attribute('class').which.contains('fit');
  },

  'Displays an arrange with fitStart, fill, and fitEnd content aligned center': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-all-arrange`);

    browser.expect.element('#center div:nth-child(1)').to.have.attribute('class').which.contains('center');
    browser.expect.element('#center div:nth-child(2)').to.have.attribute('class').which.contains('center');
    browser.expect.element('#center div:nth-child(3)').to.have.attribute('class').which.contains('center');
  },

  'Displays an arrange with fitStart, fill, and fitEnd content aligned bottom': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-all-arrange`);

    browser.expect.element('#bottom div:nth-child(1)').to.have.attribute('class').which.contains('bottom');
    browser.expect.element('#bottom div:nth-child(2)').to.have.attribute('class').which.contains('bottom');
    browser.expect.element('#bottom div:nth-child(3)').to.have.attribute('class').which.contains('bottom');
  },

  'Displays an arrange with fitStart, fill, and fitEnd content aligned stretch': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-all-arrange`);

    browser.expect.element('#stretch div:nth-child(1)').to.have.attribute('class').which.contains('stretch');
    browser.expect.element('#stretch div:nth-child(2)').to.have.attribute('class').which.contains('stretch');
    browser.expect.element('#stretch div:nth-child(3)').to.have.attribute('class').which.contains('stretch');
  },

  'Displays an arrange with fill and fitEnd content aligned center': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-all-arrange-fit-end-fill`);

    browser.expect.element('#center div:nth-child(1)').to.have.attribute('class').which.contains('center');
    browser.expect.element('#center div:nth-child(2)').to.have.attribute('class').which.contains('center');
    browser.expect.element('#center div:nth-child(3)').to.have.attribute('class').which.contains('center');
  },

  'Displays an arrange with fill and fitEnd content aligned bottom': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-all-arrange-fit-end-fill`);

    browser.expect.element('#bottom div:nth-child(1)').to.have.attribute('class').which.contains('bottom');
    browser.expect.element('#bottom div:nth-child(2)').to.have.attribute('class').which.contains('bottom');
    browser.expect.element('#bottom div:nth-child(3)').to.have.attribute('class').which.contains('bottom');
  },

  'Displays an arrange with fill and fitEnd content aligned stretch': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-all-arrange-fit-end-fill`);

    browser.expect.element('#stretch div:nth-child(1)').to.have.attribute('class').which.contains('stretch');
    browser.expect.element('#stretch div:nth-child(2)').to.have.attribute('class').which.contains('stretch');
    browser.expect.element('#stretch div:nth-child(3)').to.have.attribute('class').which.contains('stretch');
  },

  'Displays an arrange with fitStart and fill content aligned center': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-all-arrange-fit-start-fill`);

    browser.expect.element('#center div:nth-child(1)').to.have.attribute('class').which.contains('center');
    browser.expect.element('#center div:nth-child(2)').to.have.attribute('class').which.contains('center');
    browser.expect.element('#center div:nth-child(3)').to.have.attribute('class').which.contains('center');
  },

  'Displays an arrange with fitStart and fill content aligned bottom': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-all-arrange-fit-start-fill`);

    browser.expect.element('#bottom div:nth-child(1)').to.have.attribute('class').which.contains('bottom');
    browser.expect.element('#bottom div:nth-child(2)').to.have.attribute('class').which.contains('bottom');
    browser.expect.element('#bottom div:nth-child(3)').to.have.attribute('class').which.contains('bottom');
  },

  'Displays an arrange with fitStart and fill content aligned stretch': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-all-arrange-fit-start-fill`);

    browser.expect.element('#stretch div:nth-child(1)').to.have.attribute('class').which.contains('stretch');
    browser.expect.element('#stretch div:nth-child(2)').to.have.attribute('class').which.contains('stretch');
    browser.expect.element('#stretch div:nth-child(3)').to.have.attribute('class').which.contains('stretch');
  },

  'Displays an arrange with fitStart aligned center individually': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-individually-fit-start`);

    browser.expect.element('#center div:nth-child(1)').to.have.attribute('class').which.contains('center');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('fit');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('center');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('bottom');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('stretch');
    browser.expect.element('#center div:nth-child(3)').to.have.attribute('class').which.contains('fit');
  },

  'Displays an arrange with fitStart aligned bottom individually': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-individually-fit-start`);

    browser.expect.element('#bottom div:nth-child(1)').to.have.attribute('class').which.contains('bottom');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('fit');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('center');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('bottom');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('stretch');
    browser.expect.element('#bottom div:nth-child(3)').to.have.attribute('class').which.contains('fit');
  },

  'Displays an arrange with fitStart aligned stretch individually': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-individually-fit-start`);

    browser.expect.element('#stretch div:nth-child(1)').to.have.attribute('class').which.contains('stretch');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('fit');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('center');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('bottom');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('stretch');
    browser.expect.element('#stretch div:nth-child(3)').to.have.attribute('class').which.contains('fit');
  },

  'Displays an arrange with fill aligned center individually': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-individually-fill`);

    browser.expect.element('#center div:nth-child(1)').to.have.attribute('class').which.contains('fit');
    browser.expect.element('#center div:nth-child(2)').to.have.attribute('class').which.contains('center');
    browser.expect.element('#center div:nth-child(3)').to.have.attribute('class').which.contains('fit');
  },

  'Displays an arrange with fill aligned bottom individually': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-individually-fill`);

    browser.expect.element('#bottom div:nth-child(1)').to.have.attribute('class').which.contains('fit');
    browser.expect.element('#bottom div:nth-child(2)').to.have.attribute('class').which.contains('bottom');
    browser.expect.element('#bottom div:nth-child(3)').to.have.attribute('class').which.contains('fit');
  },

  'Displays an arrange with fill aligned stretch individually': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-individually-fill`);

    browser.expect.element('#stretch div:nth-child(1)').to.have.attribute('class').which.contains('fit');
    browser.expect.element('#stretch div:nth-child(2)').to.have.attribute('class').which.contains('stretch');
    browser.expect.element('#stretch div:nth-child(3)').to.have.attribute('class').which.contains('fit');
  },

  'Displays an arrange with fitEnd aligned center individually': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-individually-fit-end`);

    browser.expect.element('#center div:nth-child(1)').to.have.attribute('class').which.contains('fit');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('fit');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('center');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('bottom');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('stretch');
    browser.expect.element('#center div:nth-child(3)').to.have.attribute('class').which.contains('center');
  },

  'Displays an arrange with fitEnd aligned bottom individually': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-individually-fit-end`);

    browser.expect.element('#bottom div:nth-child(1)').to.have.attribute('class').which.contains('fit');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('fit');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('center');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('bottom');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('stretch');
    browser.expect.element('#bottom div:nth-child(3)').to.have.attribute('class').which.contains('bottom');
  },

  'Displays an arrange with fitEnd aligned stretch individually': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-individually-fit-end`);

    browser.expect.element('#stretch div:nth-child(1)').to.have.attribute('class').which.contains('fit');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('fit');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('center');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('bottom');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('stretch');
    browser.expect.element('#stretch div:nth-child(3)').to.have.attribute('class').which.contains('stretch');
  },

  'Displays an arrange with fitStart, fill, and fitEnd with long texts consisting of all one word': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/arrange-tests/aligned-all-long-words`);

    browser.expect.element('#default div:nth-child(1)').text.to.contain('Thisisareallyreallylongword');
    browser.expect.element('#default div:nth-child(2)').text.to.contain('Thisisareallyreallylongword');
    browser.expect.element('#default div:nth-child(3)').text.to.contain('Thisisareallyreallylongword');

    browser.expect.element('#default div:nth-child(1)').to.have.attribute('class').which.contains('fit');
    browser.expect.element('#default div:nth-child(1)').to.have.attribute('class').which.contains('test1');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('fit');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('center');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('bottom');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').to.not.contain('stretch');
    browser.expect.element('#default div:nth-child(2)').to.have.attribute('class').which.contains('test2');
    browser.expect.element('#default div:nth-child(3)').to.have.attribute('class').which.contains('fit');
    browser.expect.element('#default div:nth-child(3)').to.have.attribute('class').which.contains('test3');

    browser.expect.element('#default div:nth-child(1)').to.have.css('maxWidth').which.equals('10px');
    browser.expect.element('#default div:nth-child(2)').to.have.css('maxWidth').which.equals('20px');
    browser.expect.element('#default div:nth-child(3)').to.have.css('maxWidth').which.equals('30px');
    browser.expect.element('#default div:nth-child(1)').to.have.css('wordWrap').which.equals('break-word');
    browser.expect.element('#default div:nth-child(2)').to.have.css('wordWrap').which.equals('break-word');
    browser.expect.element('#default div:nth-child(3)').to.have.css('wordWrap').which.equals('break-word');
  },
});
