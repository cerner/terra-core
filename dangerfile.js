import { danger, warn, fail } from 'danger';

const jsModifiedFiles = danger.git.modified_files.filter(path => path.startsWith('src') && path.endsWith('js'));

const hasAppChanges = jsModifiedFiles.length > 0;


// Warn when there is a big PR
const bigPRThreshold = 3;
if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
  warn(':exclamation: Big PR');
}

// Fail if there are app changes without a CHANGELOG
if (!danger.git.modified_files.includes('CHANGELOG.md') && hasAppChanges) {
  fail('Please include a CHANGELOG entry.');
}
