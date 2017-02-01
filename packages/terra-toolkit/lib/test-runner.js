'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (testRunners, customWindowSizes) {
  var windowSizes = {};
  if (!customWindowSizes) {
    windowSizes = {
      trvm_xxs: [400, 768],
      trvm_xs: [580, 768],
      trvm_sm: [760, 768],
      trvm_md: [1024, 768],
      desktop: [1276, 768],
      trvm_xl: [1540, 768],
      trvm_xxl: [2068, 768]
    };
  } else {
    windowSizes = customWindowSizes;
  }

  Object.keys(windowSizes).forEach(function (key) {
    var sizeArray = windowSizes[key];
    var width = sizeArray[0];
    var height = sizeArray[1];

    var driverName = 'phantomjs_' + key;
    describe('' + driverName, function () {
      beforeAll(function (done) {
        jasmine.driverName = driverName;
        jasmine.driver = new _seleniumWebdriver2.default.Builder().forBrowser('phantomjs').build();
        jasmine.driver.manage().window().setSize(width, height).then(function () {
          done();
        });
      });

      testRunners.forEach(function (testRunner) {
        testRunner(key);
      });

      afterAll(function (done) {
        jasmine.driver.quit().then(done);
      });
    });
  });
};

var _seleniumWebdriver = require('selenium-webdriver');

var _seleniumWebdriver2 = _interopRequireDefault(_seleniumWebdriver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }