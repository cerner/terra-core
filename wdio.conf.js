const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultWdioConfig = require('terra-toolkit/config/wdio/wdio.conf');

const wdioConfig = defaultWdioConfig.config;

if (process.env.THEME === 'clinical-lowlight-theme') {
  // Disabling color contrast rule for clinical-lowlight-theme. May not be addressed, since these rules
  // are designed for normal lighting situations and NOT for specialized lighting situations (lowlight)
  wdioConfig.axe.options = {
    rules: [
      { id: 'color-contrast', enabled: false },
    ],
  };
}

if (process.env.npm_package_name !== 'terra-core') {
  wdioConfig.specs = [path.join(__dirname, 'packages', process.env.npm_package_name, 'tests', 'wdio', '**', '*-spec.js')];
}

exports.config = wdioConfig;