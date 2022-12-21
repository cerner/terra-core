// Configuration object for svgo. Used in optimizeSvg.js
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

export default config;
