// eslint-disable-next-line import/no-extraneous-dependencies
import { danger, warn, fail } from 'danger';

const BIG_PR_THRESHOLD = 1000;
const CHANGELOG_PATTERN = /^packages\/terra-([a-z-])*\/CHANGELOG\.md/i;
const PACKAGE_SOURCE_PATTERN = /^packages\/terra-([a-z-])*\/src/i;

const changedFiles = danger.git.created_files.concat(danger.git.modified_files);

const changedChangelogs = new Set();
const changedSourceFiles = new Set();

changedFiles.forEach((file) => {
  // file isn't in a package so it has no changelog, skip further processing
  if (!file.includes('packages')) {
    return;
  }

  const packageName = file.split('packages/')[1].split('/')[0];

  if (CHANGELOG_PATTERN.test(file)) {
    changedChangelogs.add(packageName);
  } else if (PACKAGE_SOURCE_PATTERN.test(file)) {
    changedSourceFiles.add(packageName);
  }
});

const missingChangelogs = [...changedSourceFiles].filter(packageName => !changedChangelogs.has(packageName));

// Fail if there are package changes without a CHANGELOG update
if (missingChangelogs.length > 0) {
  fail(`Please include a CHANGELOG entry for each changed package this PR. Looks like a CHANGELOG is missing for: \n - ${missingChangelogs.join('\n - ')}`);
}

// Warn when there is a big PR
if (danger.github.pr.additions + danger.github.pr.deletions > BIG_PR_THRESHOLD) {
  warn(':exclamation: Big PR. Consider breaking this into smaller PRs if applicable');
}
