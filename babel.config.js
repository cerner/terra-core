module.exports = (api) => {
  api.cache(true);
  api.assertVersion('^7.4.4');

  const presets = [
    ['@babel/preset-env', { useBuiltIns: 'entry', corejs: { version: 3.6, proposals: true } }],
    '@babel/preset-react',
  ];
  const plugins = [
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-proposal-object-rest-spread',
  ];

  return {
    presets,
    plugins,
  };
};
