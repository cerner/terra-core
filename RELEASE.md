# How to release

This project is hosted on NPM.  You can find the terra packages [here][project-url].

Below is a guide for releasing packages:
- Checkout the master branch and run `git pull` to ensure you have the latest changes in master.
- Run `npm run clean:install` to ensure you have npm packages updated for the master branch.
- Run `lerna updated` to view all packages that have updates to be released.
- Be sure to check the changelogs of all packages that have updates and ensure the changelogs are updated accordingly.
- If a package has not been released before, remove the private attribute from the package.json. The private attribute has been set to true in order to prevent accidental publication.

- Verify that the version number in the package.json is correct.
  - If the package is new, confirm that the version is `0.0.0`.
  - If the package has been published before, confirm that the version matches the latest released version. The publish script will update the version.

- Login to npm. You must have the credentials to the `cerner-oss` account.
  - `npm login` - Make sure to use the `cerner-oss` account.
  - `npm whoami` - This should return `cerner-oss`.

- Run the `npm run publish` script from the root directory.

When run, this command does the following:

- Creates a new release of the packages that have been updated.
- Prompts for a new version.
- Creates a new git commit/tag in the process of publishing to npm.

More specifically, this command will:

- Check if the currently installed packages match the versions in the package.json
- Run each package's `compile` command to generate the distributed code
- Run tests for each package
- Run each package's `props-table` command to generate the props-table documentation as a markdown file
- Run the equivalent of `lerna updated` to determine which packages need to be published
- Prompt for a new version for each updated package
- Update the package.json of all updated packages to their new versions
- Update all dependencies of the updated packages with the new versions, specified with a caret (^)
- Create a new git commit and tag for the new version
- Publish updated packages to npm

[project-url]: https://www.npmjs.com/org/cerner/team/terra-ui
