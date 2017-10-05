module.exports = {
  plugins: {
    autoprefixer: {
      browsers: [
        'ie >= 10',
        'last 2 versions',
        'last 2 android versions',
        'last 2 and_chr versions',
        'iOS >= 8',
      ],
    },
    'postcss-custom-properties': {
      preserve: true, warnings: false,
    },
  },
};
