import selenium from 'selenium-webdriver';

export default function (testRunners, customWindowSizes) {
  let windowSizes = {};
  if (!customWindowSizes) {
    windowSizes = {
      trvm_xxs: [400, 768],
      trvm_xs: [580, 768],
      trvm_sm: [760, 768],
      trvm_md: [1024, 768],
      desktop: [1276, 768],
      trvm_xl: [1540, 768],
      trvm_xxl: [2068, 768],
    };
  } else {
    windowSizes = customWindowSizes;
  }

  Object.keys(windowSizes).forEach((key) => {
    const sizeArray = windowSizes[key];
    const width = sizeArray[0];
    const height = sizeArray[1];

    const driverName = `phantomjs_${key}`;
    describe(`${driverName}`, () => {
      beforeAll((done) => {
        jasmine.driverName = driverName;
        jasmine.driver = new selenium.Builder().forBrowser('phantomjs').build();
        jasmine.driver.manage().window().setSize(width, height).then(() => {
          done();
        });
      });

      testRunners.forEach((testRunner) => {
        testRunner(key);
      });

      afterAll((done) => {
        jasmine.driver.quit().then(done);
      });
    });
  });
}
