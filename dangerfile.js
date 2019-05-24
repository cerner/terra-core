// eslint-disable-next-line import/no-extraneous-dependencies
import { danger, warn, fail } from 'danger';

const determinePackages = (changedList, path) => {
  const path1 = path.split('packages/')[1];
  const packageName = path1.split('/')[0];
  return changedList.includes(packageName) ? changedList : changedList.concat([packageName]);
};

const changedFiles = danger.git.created_files.concat(danger.git.modified_files);
const changelogPattern = /^packages\/terra-([a-z-])*\/CHANGELOG.md/i;
const packageSourcePattern = /^packages\/terra-([a-z-])*\/src/i;

const changedChangelogs = changedFiles.filter(filePath => changelogPattern.test(filePath))
  .reduce(determinePackages, []);

const changedSourceFiles = changedFiles.filter(
  filePath => packageSourcePattern.test(filePath) && !changelogPattern.test(filePath),
).reduce(determinePackages, []);

const missingChangelogs = changedSourceFiles.filter(packageName => !changedChangelogs.includes(packageName));

// Fail if there are package changes without a CHANGELOG update
if (missingChangelogs.length > 0) {
  fail(`Please include a CHANGELOG entry for each changed package this PR. Looks like a CHANGELOG is missing for: \n - ${missingChangelogs.join('\n - ')}`);
}

// Warn when there is a big PR
const bigPRThreshold = 1000;
if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
  warn(':exclamation: Big PR. Consider breaking this into smaller PRs if applicable');
}
