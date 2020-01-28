import classNames from 'classnames';

const svgoConfig = (csvObject) => {
  const classes = classNames(
    { 'is-spin': csvObject.isSpin },
    { 'is-bidi': csvObject.isBidi },
  );
  const config = {
    plugins: [
      {
        mergePaths: false,
      },
      {
        removeTitle: true,
      },
      {
        removeViewBox: false,
      },
      {
        removeDimensions: true,
      },
      {
        removeScriptElement: true,
      },
    ],
  };

  // if is-spin or is-bidi exists, add to svg
  if (classes) {
    config.plugins.push({ addClassesToSVGElement: { className: classes } });
  }

  return config;
};

export default svgoConfig;
