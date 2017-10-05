/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const capture = require('terra-toolkit/lib/nightwatch/storybook');

module.exports = capture('Badge', (story) => {
  story('Default');
  story('Icon');
  story('Intent');
  story('Size');
});
