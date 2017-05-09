/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const shell = require('shelljs');

const app = express();
const port = process.env.PORT || 8081;
// npm script to build assets by webpack
const buildCommand = 'npm run compile:prod';
// path to webpack built path
const buildPath = path.join(__dirname, '../../packages/terra-site/build');

// listen to PORT to avoid Heroku error: R10 boot timeout
app.listen(port);
console.log(`Listening ${port}`);

app.use('/static', express.static(buildPath));
app.get('/', (req, res) => res.redirect('/static'));
console.log('Switched to built assets.');
