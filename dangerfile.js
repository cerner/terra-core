// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
import { danger, warn, fail, message } from 'danger';


const hasCHANGELOGChanges = danger.git.modified_files.includes('CHANGELOG.md');
const modifiedSrcFiles = danger.git.modified_files.filter((filePath) => {
  const srcFilePattern = /^packages\/([a-z-])*\/src/i;
  return srcFilePattern.test(filePath);
})

const hasModifiedSrcFiles = modifiedSrcFiles.length > 0;

// danger.git.modified_files.forEach((path) => {
//   console.log(path);
//   // var pattern = /^packages\/([a-z-])*\/src/i
//   //  var result = pattern.test(path);
//   //  if (result === true) {
//   //      console.log(pattern, "pattern did match !");
//   //  } else {
//   //      console.log(pattern, " pattern did NOT match");
//   //  }
// });

// Fail if there are src code changes without a CHANGELOG
if (hasModifiedSrcFiles && !hasCHANGELOGChanges) {
  fail('Please include a CHANGELOG entry with this PR.');
}

// Warn when there is a big PR
const bigPRThreshold = 100;
if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
  warn(':exclamation: Big PR. Consider breaking this into smaller PRs if applicaple');
}
