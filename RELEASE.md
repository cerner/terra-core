# How to release

This project is hosted on NPM.  You can find the terra packages [here][project-url].

Below is a guide for releasing packages:
- Checkout the master branch and run `git pull` to ensure you have the latest changes in master.
- Run `npm run clean:install` to ensure you have npm packages updated for the master branch.
- Run `lerna updated` to view all packages that have updates to be released.
- Be sure to check the changelogs of all packages that have updates and ensure the changelogs are updated accordingly.

- Verify that the version number in the package.json is correct.
  - If the package is new, confirm that the version is `0.0.0`.
  - If the package has been published before, confirm that the version matches the latest released version. The publish script will update the version.

- Login to npm. Use your personal npm account.
  - `npm login` - CLI command to log into npm.
  - `npm whoami` - CLI command to confirm who you are logged in as.

- Run the `npm run publish` script from the root directory.

When run, this command does the following:

- Creates a new release of the packages that have been updated.
- Prompts for a new version.
- Creates a new git commit/tag in the process of publishing to npm.

More specifically, this command will:

- Check if the currently installed packages match the versions in the package.json
- Run each package's `compile` command to generate the distributed code
- Run tests for each package
- Run the equivalent of `lerna updated` to determine which packages need to be published
- Prompt for a new version for each updated package
- Update the package.json of all updated packages to their new versions
- Update all dependencies of the updated packages with the new versions, specified with a caret (^)
- Create a new git commit and tag for the new version
- Publish updated packages to npm

## Releasing a new package
If you are publishing a new package, e.g. a v1.0.0 release, the package will be listed with only you as the collaborator.
You'll need to move the package into the terra-ui team under the Cerner org on npm.
- Log into npm's website 
- Navigate to the terra-ui package page: https://www.npmjs.com/settings/cerner/teams/team/terra-ui/access
- At the top of this page, there should be an input labeled, "Package". Type in the full package name and press enter.
- This will add the package to ther terra-ui team's packages under the Cerner org on npm and then all team members on the terra-ui team in npm will have access to publish in future releases.

## Releasing a major version bump

### Terra Base Peer Dependency Manual Update
When releasing a package (package A) with lerna, lerna will go into the package.json of other projects (package B and package C) that depend on package A which you are releasing and update the dependency version of package A to the new release automatically.

The auto dependency version bump feature happens with lerna when you have package A listed as a `dependency` or `devDependency`, but not when package A is listed as `peerDependency`. Terra peerDependencies need to be update manually.

**When doing a major release on terra-base, packages that have a peerDependency on terra-base need to be updated manually in a commit prior doing the lerna release. Lerna will not handle updating terra-base when it is listed as a peerDependency.**

### Upgrade Guides
When developing a feature that will be a breaking change, documentation should be added to the upgrade guide for the component to document to users what steps are needed to upgrade to the new major version

### Dependency Flow
Check that dependencies flow one direction from terra-core to terra-framework to terra-clinical.
We don't want to be in a position where we need to cut a release in terra-core, then consume it in terra-framework. Cut a release in terra-framework and consume that back in terra-core to unblock cutting a final release in terra-core. It is better to group shared dependencies have them flow one direction so we can cut one major release for terra-core, one major release for framework and one major release for terra-clinical.

If we have dependencies that circle back, e.g. we have terra-clincal packages listed as dependencies in terra-core packages, it creates cyclical depdencies that are more tedious to release.

[project-url]: https://www.npmjs.com/org/cerner/team/terra-ui
