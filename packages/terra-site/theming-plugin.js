const postcss = require('postcss');
const fs = require('fs');
const path = require('path');

const sortHash = data =>
  Object.keys(data).sort().reduce((a, b) => {
    // eslint-disable-next-line no-param-reassign
    a[b] = data[b];
    return a;
  }, {});

module.exports = postcss.plugin('theming-plugin', () => {
  const variables = {};

  /**
   * Extract all terra themeable variables used in PostCSS files.
   *
   * root - Parsed PostCSS Object containing application styles.
   *
   * @returns JSON file containing all the Terra themable variables.
   */
  return function getThemedVariables(root) {
    const source = (root.source && root.source.input && root.source.input.file) || 'miscellaneous';
    const component =
      source === 'miscellaneous' ? source : source.substr(source.lastIndexOf('/') + 1, source.lastIndexOf('.scss') - source.lastIndexOf('/') - 1);

    root.walkDecls((decl) => {
      // All of Terra's themed variables are in the syntax of var(<variable>, <value>);
      const matches = decl.value.match(/^var\(\s*(--terra[\w-]*),\s*(.*)\)/);

      if (matches) {
        variables[component] = variables[component] || {};
        variables[component][matches[1]] = matches[2];
      }
    });
    return fs.writeFileSync(path.resolve(__dirname, 'themeable-variables.json'), JSON.stringify(sortHash(variables), null, 2), 'utf8');
  };
});
