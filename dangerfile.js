// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars, object-curly-newline
import { danger, warn, fail } from 'danger';

const determinePackages = (changedList, path) => {
  const path1 = path.split('packages/')[1];
  const packageName = path1.split('/')[0];
  return changedList.includes(packageName) ? changedList : changedList.concat([packageName]);
};

const newChangelogs = danger.git.created_files.filter((filePath) => {
  const changelogPattern = /^packages\/terra-([a-z-])*\/CHANGELOG.md/i;
  return changelogPattern.test(filePath);
}).reduce(determinePackages, []);

const modifiedChangelogs = danger.git.modified_files.filter((filePath) => {
  const changelogPattern = /^packages\/terra-([a-z-])*\/CHANGELOG.md/i;
  return changelogPattern.test(filePath);
}).reduce(determinePackages, []);

const modifiedPackages = danger.git.modified_files.filter((filePath) => {
  const changelogPattern = /^packages\/terra-([a-z-])*\/CHANGELOG.md/i;
  const packagePattern = /^packages\/terra-([a-z-])*\//i;
  return packagePattern.test(filePath) && !changelogPattern.test(filePath);
}).reduce(determinePackages, []);

const missingChangelogs = modifiedPackages.filter(packageName => !modifiedChangelogs.includes(packageName) || newChangelogs.includes(packageName));

// Fail if there are package changes without a CHANGELOG update
if (missingChangelogs.length > 0) {
  fail(`Please include a CHANGELOG entry for each changed package this PR. Looks like a CHANGELOG is missing for: \n - ${missingChangelogs.join('\n - ')}`);
}

// Warn when there is a big PR
const bigPRThreshold = 1000;
if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
  warn(':exclamation: Big PR. Consider breaking this into smaller PRs if applicable');
}
