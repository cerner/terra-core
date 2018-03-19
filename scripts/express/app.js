/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8081;
// path to webpack built path
const buildPath = path.join(__dirname, '../../build');

app.use('/static', express.static(buildPath));
app.get('/', (req, res) => res.redirect('/static'));
app.listen(port);
console.log(`Listening ${port}`);
console.log(`Production Environment: ${process.env.NODE_ENV === 'production'}`);
