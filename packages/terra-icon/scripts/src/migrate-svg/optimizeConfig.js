import classNames from 'classnames';

const svgoConfig = (csvObject) => {

  const classes = classNames({ 'is-static': !csvObject.isThemeable },
                             { 'is-themeable': csvObject.isThemeable },
                             { 'is-spin': csvObject.isSpin },
                             { 'is-bidi': csvObject.isBidi });
  console.log(classes);
  return {
    plugins: [
      {
        mergePaths: false,
      },
      {
        removeTitle: true,
      },
      {
        addClassesToSVGElement: {
          className: classes,
        },
      },
    ],
  };

};

module.exports = svgoConfig;
