const pkg = require('../package.json');
require('./scss/scoped-theme.scss');

module.exports = {
  themeName: `${pkg.name}`,
};
