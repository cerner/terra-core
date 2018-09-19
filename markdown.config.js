const path = require('path');
const fs = require('fs');
const markdownMagic = require('markdown-magic'); // eslint-disable-line import/no-extraneous-dependencies

const defaults = {
  dir: './packages',
  verbose: false,
  bullet: '*',
};

const header = `| Terra Package      | Version | Status | Dependencies |
|--------------------|---------|--------|--------------|
`;

const config = {
  transforms: {
    // see: https://github.com/camacho/markdown-magic-subpackage-list
    SUBPACKAGELIST(content, _options, configuration) {
      const options = Object.assign({}, defaults, _options);

      const packagesDir = path.resolve(
        path.dirname(configuration.originalPath), options.dir,
      );

      return header + fs
        .readdirSync(packagesDir)
        .map(filename => path.join(packagesDir, filename))
        .filter(filePath => fs.statSync(filePath).isDirectory())
        .filter(dirPath => fs.existsSync(path.join(dirPath, 'package.json')))
        .map(dirPath => [
          path.relative(path.dirname(configuration.originalPath), dirPath),
          JSON.parse(fs.readFileSync(path.resolve(dirPath, 'package.json'))),
        ])
        .map(([link, packages]) => {
          let entry = `| [${packages.name}](https://github.com/cerner/terra-core/tree/master/${link}) | [![NPM version](https://badgen.net/npm/v/${packages.name})](https://www.npmjs.org/package/${packages.name}) | ![Stable](https://badgen.net/badge/status/Stable/green) | [![${packages.name}](https://badgen.net/david/dep/cerner/terra-core/packages/${packages.name})](https://david-dm.org/cerner/terra-core?path=packages/${packages.name}) |`;
          if (options.verbose === 'true' && packages.description.trim().length) {
            entry += ` - ${packages.description.trim()}`;
          }
          return entry;
        })
        .join('\n');
    },
  },
};

const markdownPath = path.join(__dirname, 'README.md');
markdownMagic(markdownPath, config);
