const fs = require('fs');
const path = require('path');
/* eslint-disable import/no-extraneous-dependencies */
const shell = require('shelljs');

// If postinstall is run in monorepo, do postinstall, otherwise don't run postinstall scripts
if (fs.existsSync(path.resolve(__dirname, '../../lerna.json'))) {
  shell.exec('npm run link-parent-bin && npm run compile && npm run bootstrap');
  process.exit(0);
}
