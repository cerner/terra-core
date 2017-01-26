const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass',
      },
    ],
  },
  sassLoader: {
    data: `@import "${path.resolve('node_modules/terra-legacy-theme/src/terra-legacy-theme.scss')}"; @import "${path.resolve('node_modules/terra-application/src/terra-application.scss')}"; $terra-bidi: true;`,
  },
  postcss: [
    autoprefixer({
      browsers: [
        'ie >= 10',
        'last 2 versions',
        'last 2 android versions',
        'last 2 and_chr versions',
        'iOS >= 8',
      ],
    }),
  ],
};
