'use strict';

var _spectre = require('./spectre');

var _updateSauce = require('./update-sauce');

var _updateSauce2 = _interopRequireDefault(_updateSauce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  beforeEach: function beforeEach(browser, done) {
    (0, _spectre.createSpectreRun)(browser, done);
  },
  afterEach: function afterEach(browser, done) {
    function endBrowser() {
      browser.end(function () {
        console.log('After each done is being called');
        done();
      });
    }

    if (process.env.REMOTE === 'true') {
      (0, _updateSauce2.default)(browser, endBrowser);
    } else {
      endBrowser();
    }
    console.log('After each is done being called');
  }
};