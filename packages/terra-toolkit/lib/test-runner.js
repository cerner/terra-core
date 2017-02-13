'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (testRunners, customWindowSizes) {
  let windowSizes = {};
  if (!customWindowSizes) {
    windowSizes = {
      tiny: [470, 768],
      small: [622, 768],
      medium: [838, 768],
      large: [1000, 768],
      huge: [1210, 768],
      enormous: [1300, 768]
    };
  } else {
    windowSizes = customWindowSizes;
  }

  Object.keys(windowSizes).forEach(key => {
    const sizeArray = windowSizes[key];
    const width = sizeArray[0];
    const height = sizeArray[1];

    const driverName = `phantomjs_${key}`;
    describe(`${driverName}`, () => {
      beforeAll(done => {
        jasmine.driverName = driverName;
        jasmine.driver = new _seleniumWebdriver2.default.Builder().forBrowser('phantomjs').build();
        jasmine.driver.manage().window().setSize(width, height).then(() => {
          done();
        });
      });

      testRunners.forEach(testRunner => {
        testRunner(key);
      });

      afterAll(done => {
        jasmine.driver.quit().then(done);
      });
    });
  });
};

var _seleniumWebdriver = require('selenium-webdriver');

var _seleniumWebdriver2 = _interopRequireDefault(_seleniumWebdriver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }