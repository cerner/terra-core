const express = require('express');
const path = require('path');
const shelljs = require('shelljs');

const app = express();
const port = process.env.PORT || 8081;
// npm script to build assets by webpack
const buildCommand = 'npm run compile:prod';

// listen to PORT to avoid Heroku error: R10 boot timeout
app.listen(port);
console.log('Listening ' + port);

if (shelljs.exec(buildCommand).code !== 0) {
  console.log('Errors in command: ' + buildCommand);
} else {
  console.log('Finished command: ' + buildCommand);

  // path to webpack built path
  const buildPath = path.join(__dirname, '../../packages/terra-site/build');
  app.use('/static', express.static(buildPath));
  app.get('/', function(req, res) {
    res.redirect('/static');
  });
  console.log('Switched to built assets.');
}
