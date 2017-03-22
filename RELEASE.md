# How to release

This project is hosted on NPM.  You can see it [here][project-url].

Releasing the project requires these steps:
- Remove the private attribute from the package.json. The private attribute has been set to true in order to prevent accidental publication.

- Verify that the version number in the package.json is correct.
  - If the package is new, confirm that the version is `0.0.0`.
  - If the package has been published before, confirm that the version matches the latest released version. The release script will update the version.

- Login to npm. You must have the credentials to the `cerner` account.
  - `npm login` - Make sure to use the `cerner` account.
  - `npm whoami` - This should return `cerner`.

- Execute a release script. Make sure to follow [semantic versioning][semantic-versioning].

  Each package should have the following scripts:
    - `npm run release:major`  x.0.0
    - `npm run release:minor`  0.x.0
    - `npm run release:patch`  0.0.x

  Each of these scripts will:
    1. Compile `src` to `lib`.
    2. Update the version in package.json.
    3. Add the commit message "Released version X.X.X".
    4. Publish the package to [npmjs][project-url]
    5. Push the changes to GitHub.

  For more information, the release script can be found [here][release-script].

If a major release is being done, be sure to update the version for all dependents.

[project-url]: https://www.npmjs.com/search?q=terra
[semantic-versioning]: http://semver.org/
[release-script]: https://github.com/cerner/terra-core/tree/master/scripts/release
