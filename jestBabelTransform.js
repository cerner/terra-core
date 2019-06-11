/* eslint-disable import/no-extraneous-dependencies */
const babelJest = require('babel-jest');

/**
 * Jest uses babel.config.js to compile during the test runs. To correctly resolve babel's config root
 * (because terra-core is a mono-repo), a custom transformer is needed for jest.
 * See: https://babeljs.io/docs/en/config-files#jest
 */
const customTransformer = babelJest.createTransformer({
  rootMode: 'upward-optional',
});

module.exports = customTransformer;
