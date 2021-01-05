# How to release

This project is hosted on NPM.  You can find the terra packages [here][project-url].

Below is a guide for releasing packages:
1. Update the versions of the components and changelogs via `npm run prepare-for-release`
2. Create a Release PR, Get approvals
3. Merge PR to `main`
4. Watch main to ensure releases get pushed to npm and tagged in github appropriately

## Releasing a new package
If you are publishing a new package, e.g. a v1.0.0 release, the package will be listed with only you as the collaborator.
You'll need to move the package into the terra-ui team under the Cerner org on npm.
- Log into npm's website
- Navigate to the terra-ui package page: https://www.npmjs.com/settings/cerner/teams/team/terra-ui/access
- At the top of this page, there should be an input labeled, "Package". Type in the full package name and press enter.
- This will add the package to ther terra-ui team's packages under the Cerner org on npm and then all team members on the terra-ui team in npm will have access to publish in future releases.

## Releasing a major version bump

### Upgrade Guides
When developing a feature that will be a breaking change, documentation should be added to the upgrade guide for the component to document to users what steps are needed to upgrade to the new major version

### Dependency Flow
Check that dependencies flow one direction from terra-core to terra-framework to terra-clinical.
We don't want to be in a position where we need to cut a release in terra-core, then consume it in terra-framework. Cut a release in terra-framework and consume that back in terra-core to unblock cutting a final release in terra-core. It is better to group shared dependencies have them flow one direction so we can cut one major release for terra-core, one major release for framework and one major release for terra-clinical.

If we have dependencies that circle back, e.g. we have terra-clincal packages listed as dependencies in terra-core packages, it creates cyclical depdencies that are more tedious to release.

[project-url]: https://www.npmjs.com/org/cerner
