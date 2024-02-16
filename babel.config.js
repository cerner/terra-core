module.exports = (api) => {
  api.cache(true);
  api.assertVersion('^7.4.4');

  const presets = [
    ['@babel/preset-env', { useBuiltIns: 'entry', corejs: { version: 3.6, proposals: true } }],
    '@babel/preset-react',
  ];
  return { presets };
};
