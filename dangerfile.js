// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars, object-curly-newline
import { danger, warn, fail, message } from 'danger';
import path from 'path';

const newChangelog = danger.git.created_files.filter((filePath) => {
  const srcFilePattern = /^packages\/terra-([a-z-])*\/CHANGELOG.md/i;
  return srcFilePattern.test(filePath);
});

const modifiedChangelog = danger.git.modified_files.filter((filePath) => {
  const srcFilePattern = /^packages\/terra-([a-z-])*\/CHANGELOG.md/i;
  return srcFilePattern.test(filePath);
});

const modifiedPackageFiles = danger.git.modified_files.filter((filePath) => {
  const packagePattern = /^packages\/terra-([a-z-])*\//;
  return packagePattern.test(filePath);
});

console.log()

const hasCHANGELOGChanges = modifiedChangelog.length > 0 || newChangelog.length > 0;
const hasModifiedPackages = modifiedPackages.length > 0;

modifiedPackages.forEach((package) => {

})

// Fail if there are src code changes without a CHANGELOG update
if (hasModifiedPackages && !hasCHANGELOGChanges) {
  fail('Please include a CHANGELOG entry with this PR.');
}

// Warn when there is a big PR
// const bigPRThreshold = 1000;
// if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
//   warn(':exclamation: Big PR. Consider breaking this into smaller PRs if applicable');
// }
