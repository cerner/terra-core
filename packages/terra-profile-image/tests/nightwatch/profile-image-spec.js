// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['medium'], {
  'Displays a profile image': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/profile-image/profile-image-default`)
      .assert.elementPresent('#loadedImage');
  },

  'Displays the avatar image if the profile image was not found': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/profile-image/profile-image-default`)
      .assert.elementPresent('#errorImage');
  },

  'Displays a profile image with set attributes': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/profile-image/profile-image-default`);
    browser.assert.attributeEquals('#loadedImage', 'width', '75');
    browser.assert.attributeEquals('#loadedImage', 'height', '75');
  },
});
