const path = require('path');
const merge = require('webpack-merge');
const {
  TerraDevSite,
  TerraDevSiteEntrypoints,
  DirectorySwitcherPlugin,
  LocalPackageAliasPlugin,
} = require('terra-dev-site');

const WebpackConfigTerra = require('@cerner/webpack-config-terra');

const coreConfig = (env = {}, argv = { p: false }) => {
  const production = argv.p;
  const processPath = process.cwd();
  const rootPath = processPath.includes('packages') ? processPath.split('packages')[0] : processPath;

  const i18nAlias = path.resolve(path.join(rootPath, 'packages', 'terra-i18n'));
  return {
    entry: TerraDevSiteEntrypoints,
    plugins: [
      new TerraDevSite({ env }),
    ],
    resolve: {
      plugins: [
        new DirectorySwitcherPlugin({
          shouldSwitch: !production,
          rootDirectories: [
            processPath,
            path.resolve(processPath, 'packages', '*'),
          ],
        }),
        new LocalPackageAliasPlugin({
          rootDirectories: [
            processPath,
            path.resolve(processPath, 'packages', '*'),
          ],
        }),
      ],
      alias: {
        'terra-i18n': i18nAlias,
      },
    },
  };
};

const mergedConfig = (env, argv) => (
  merge(WebpackConfigTerra(env, argv), coreConfig())
);

module.exports = mergedConfig;
