const defaultConfig = require('../../../node_modules/terra-toolkit/config/wdio/wdio.conf');

const config = {
  ...defaultConfig.config,
  axe: {
    inject: true,
    options: {
      rules: [
        { id: 'color-contrast', enabled: false },
      ],
    },
  },
};

exports.config = config;
