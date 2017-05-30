# How to release

This project is hosted on NPM.  You can find the terra packages [here][project-url].

Releasing the project requires these steps:
- If the package has not been released before, remove the private attribute from the package.json. The private attribute has been set to true in order to prevent accidental publication.

- Verify that the version number in the package.json is correct.
  - If the package is new, confirm that the version is `0.0.0`.
  - If the package has been published before, confirm that the version matches the latest released version. The publish script will update the version.

- Login to npm. You must have the credentials to the `cerner-oss` account.
  - `npm login` - Make sure to use the `cerner-oss` account.
  - `npm whoami` - This should return `cerner-oss`.

- Execute the npm publish script from the root directory. Make sure to follow [semantic versioning][semantic-versioning].

When run, this command does the following:

- Creates a new release of the packages that have been updated.
- Prompts for a new version.
- Creates a new git commit/tag in the process of publishing to npm.

More specifically, this command will:

1. Check if the currently installed packages match package.json
2. Compile `src` to `lib`.
3. Run the test suite.
4. Publish each module in `packages` directory that has been updated since the last version to npm with the dist-tag lerna-temp.
5. Run lerna updated to determine which packages need to be published.
6. Update the package.json of all updated packages to their new versions.
7. Update all dependencies of the updated packages with the new versions, specified with a caret (^).
8. Create a new git commit and tag for the new version.
9. Publish updated packages to npm.
10. Once all packages have been published, remove the lerna-temp tags and add the tags to latest.

[project-url]: https://www.npmjs.com/org/cerner
[semantic-versioning]: http://semver.org/
