const wdioConf = require('terra-dev-site/config/wdio/wdio.conf');

const config = {
  site: './build',
  ...wdioConf.config,
  suites: {
    a: [
      'packages/terra-a*/**/**-spec.js',
      'packages/terra-b*/**/**-spec.js',
    ],
    conf: [
      'packages/terra-c*/**/**-spec.js',
    ],
    d: [
      'packages/terra-d*/**/**-spec.js',
    ],
    f: [
      'packages/terra-f*/**/**-spec.js',
    ],
    h: [
      'packages/terra-h*/**/**-spec.js',
    ],
    o: [
      'packages/terra-o*/**/**-spec.js',
    ],
    t: [
      'packages/terra-table/**/**-spec.js',
      'packages/terra-tag/**/**-spec.js',
      'packages/terra-text/**/**-spec.js',
    ],
    toggle: [
      'packages/terra-tog*/**/**-spec.js',
    ],
    v: [
      'packages/terra-v*/**/**-spec.js',
    ],
  },
};

exports.config = config;
