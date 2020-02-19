const defaultConfig = require('../../../node_modules/terra-toolkit/config/wdio/wdio.conf');

// Disabling color contrast rule for clinical-lowlight-theme. May not be addressed, since these rules
// are designed for normal lighting situations and NOT for specialized lighting situations (lowlight)
const config = {
  ...defaultConfig.config,
  axe: {
    ...defaultConfig.config.axe,
    options: {
      rules: [
        { id: 'color-contrast', enabled: false },
      ],
    },
  },
};

exports.config = config;
