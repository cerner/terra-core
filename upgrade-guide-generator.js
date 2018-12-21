const fs = require('fs');
const glob = require('glob');
const shell = require('shelljs');
const postcss = require('postcss');
const valueParser = require('postcss-value-parser');
const LazyResult = require('postcss/lib/lazy-result');

// This is magic.
const importLazy = require('import-lazy')(require);

/**
 * @author StephenEsser
 * The Upgrade Generator will compare a branch against master and diff all changes to
 * custom properties between the two branches.
 *
 * To run this script:
 * 1. Add it to the root directory of a monorepo.
 * 2. Run the script from the command line and specify the branch name you want to diff against master.
 *    node ./upgrade-guide-generator.js branch_name
 *
 */
class UpgradeGenerator {
  /**
   * Checkouts the local target branch.
   * @param {string} branch - The branch name.
   */
  static checkout(branch) {
    // Checkout the target branch.
    const { code } = shell.exec(`git checkout ${branch}`);
    if (code !== 0) {
      shell.exit();
    }

    // Ensure the branch is up to date.
    const { code: pullCode } = shell.exec('git pull');
    if (pullCode !== 0) {
      shell.exit();
    }
  }

  /**
   * Recursively traverses the css tree and returns the full selector of a node.
   * @param {PostCSS Node} node - The post css node.
   * @param {string} [path=''] - The accumulated selector.
   * @return {string} - The full selector path to the node.
   */
  static selector(node, path = '') {
    const { parent, selector, type } = node;

    if (!parent || !selector || type === 'root') {
      return path;
    }

    return UpgradeGenerator.selector(parent, `${selector} ${path}`);
  }

  /**
   * Process custom properties within a file and stores their value.
   * @param {PostCSS Processor} processor - Post CSS Processor.
   * @param {string} fileName - The file name.
   * @return {Object} - An Object containing all custom property mappings for a file.
   */
  static processFile(processor, fileName) {
    const options = { syntax: importLazy('postcss-scss') };
    const { result } = new LazyResult(processor, fs.readFileSync(fileName, 'utf8'), options);
    const { root } = result;

    const map = {};

    root.walkDecls((decl) => {
      valueParser(decl.value).nodes.forEach((node) => {
        if (node.type !== 'function' || node.value !== 'var') {
          return;
        }

        const { type, value } = node.nodes[0];
        if (type === 'word' || value.slice(0, 2) === '--') {
          map[`${UpgradeGenerator.selector(decl.parent)}-${decl.prop}`] = value;
        }
      });
    });

    return map;
  }

  /**
   * Process all files within a package and stores the found custom properties.
   * @param {PostCSS Processor} processor - Post CSS Processor.
   * @param {string} packageName - The package name.
   * @return {Object} - An Object containing all custom property mappings for a package.
   */
  static processPackage(processor, packageName) {
    const map = {};

    const files = glob.sync(`./packages/${packageName}/src/**/*.scss`);
    files.forEach((file) => {
      Object.assign(map, UpgradeGenerator.processFile(processor, file));
    });

    return map;
  }

  /**
   * Processes all custom properties contained within the packages of a monorepo.
   * @param {PostCSS Processor} processor - Post CSS Processor.
   * @return {Object} - An Object containing all custom property mappings.
   */
  static processPackages(processor) {
    const map = {};
    const packages = fs.readdirSync('./packages/');

    packages.forEach((packageName) => {
      map[packageName] = UpgradeGenerator.processPackage(processor, packageName);
    });

    return map;
  }

  /**
   * Diffs the two branches for all added, removed, and changed custom properties in a package.
   * @param {string} master - The master branch
   * @param {string} branch - The branch name.
   * @return {Object} - An Object containing the custom property diffs for the package.
   */
  static diffPackage(master, branch) {
    const added = [];
    const changed = [];
    const removed = [];

    Object.keys(branch).forEach((key) => {
      const masterValue = master[key];
      const branchValue = branch[key];

      if (!masterValue) {
        added.push(branchValue);
      } else if (masterValue !== branchValue) {
        changed.push({ current: branchValue, previous: masterValue });
      }
    });

    // Only diff the package if it still exists.
    if (branch) {
      Object.keys(master).forEach((key) => {
        const masterValue = master[key];
        const branchValue = branch[key];

        if (!branchValue) {
          removed.push(masterValue);
        }
      });
    }

    return {
      added: added.filter(variable => removed.indexOf(variable) === -1),
      changed,
      removed: removed.filter(variable => added.indexOf(variable) === -1),
    };
  }

  /**
   * Diffs the two branches for all added, removed, and changed custom properties.
   * @param {string} master - The master branch
   * @param {string} branch - The branch name.
   * @return {Object} - An Object containing the custom property diffs for each package.
   */
  static diffBranches(master, branch) {
    const map = {};

    Object.keys(branch).forEach((packageName) => {
      map[packageName] = UpgradeGenerator.diffPackage(master[packageName], branch[packageName]);
    });

    return map;
  }

  /**
   * Generates upgrade guides for custom property variable.
   * @param {PostCSS Processor} processor - Post CSS Processor.
   * @param {string} branch - The branch name.
   */
  static generate(processor, branch) {
    if (!branch) {
      console.log('No branch name provided.');
      shell.exit();
    }

    UpgradeGenerator.checkout('master');
    const masterCustomProperties = UpgradeGenerator.processPackages(processor);

    UpgradeGenerator.checkout(branch);
    const branchCustomProperties = UpgradeGenerator.processPackages(processor);

    const diff = UpgradeGenerator.diffBranches(masterCustomProperties, branchCustomProperties);
    UpgradeGenerator.generateGuides(diff);
  }

  /**
   * Generates a custom property upgrade guide for each package.
   * @param {Object} diff - An Object containing the custom property diff between two branches.
   */
  static generateGuides(diff) {
    Object.keys(diff).forEach((packageName) => {
      UpgradeGenerator.generateGuide(packageName, diff[packageName]);
    });
  }

  /**
   * Generates a custom property upgrade guide for a package.
   * @param {string} packageName - The package name.
   * @param {Object} diff - An Object containing the custom property diff between two branches.
   */
  static generateGuide(packageName, diff) {
    const { added, changed, removed } = diff;

    // Do not generate an upgrade guide if the package had no changes.
    if (!added.length && !changed.length && !removed.length) {
      return;
    }

    const version = JSON.parse(fs.readFileSync(`./packages/${packageName}/package.json`)).version.split('.')[0];

    let markdown = `# ${packageName.split('-').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' ')} Upgrade Guide

      ## Changes from version ${version} to version ${parseInt(version, 10) + 1}

      ### Changes to CSS Custom Properties
    `;

    if (changed.length > 0) {
      markdown += `
        #### Renamed
        | Previous | New |
        |-|-|
        ${changed.map(({ current, previous }) => `| ${previous} | ${current} |`).join('\n')}
      `;
    }

    if (added.length > 0) {
      markdown += `
        #### Added
        ${added.map(value => `* ${value}`).join('\n')}
      `;
    }

    if (removed.length > 0) {
      markdown += `
        #### Removed
        ${removed.map(value => `* ${value}`).join('\n')}
      `;
    }

    // Remove all leading whitespace caused by formatting indentations inside of backticks.
    markdown = markdown.split('\n').map(line => line.trim()).join('\n');

    fs.writeFileSync(`./packages/${packageName}/docs/UPGRADEGUIDE.md`, markdown);
  }
}

UpgradeGenerator.generate(postcss(), process.argv.slice(2)[0]);
