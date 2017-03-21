'use strict';

var _updateSauce = require('./update-sauce');

var _updateSauce2 = _interopRequireDefault(_updateSauce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  afterEach: function afterEach(browser, done) {
    function endBrowser() {
      browser.end(done);
    }

    if (process.env.REMOTE === 'true') {
      (0, _updateSauce2.default)(browser, endBrowser);
    } else {
      endBrowser();
    }
  }
};