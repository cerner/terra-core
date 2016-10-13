# How to release

This project is hosted on NPM.  You can see it [here][project-url].

Releasing the project requires these steps:

0. Verify the version number in `package.json`
1. Check for lint: `npm run lint`
2. Use a GitHub [project release][github-release-url] to release the project and tag (be sure it follows [semver][semantic-versioning])
3. `npm publish` (make sure it's uploaded to [npm][project-url])
4. Update to the next minor version in `package.json`

[project-url]: https://www.npmjs.com/package/terra-mixins/
[semantic-versioning]: http://semver.org/
[github-release-url]: https://help.github.com/articles/creating-releases/
