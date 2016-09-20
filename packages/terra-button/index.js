// This file exports the variable includePaths.
// The webpack.config.js file in consuming applications uses this variable
var path = require('path');

module.exports = {
  includePaths: [
    path.join(__dirname, 'src'),
  ],
};
