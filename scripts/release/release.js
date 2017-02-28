/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const shell = require('shelljs');

const releaseType = process.argv[2] || 'patch';

if (shell.exec(`npm run compile && npm version ${releaseType} -m "Released version %s" && npm publish && git push`).code !== 0) {
  shell.exit(1);
}

shell.exit(0);
