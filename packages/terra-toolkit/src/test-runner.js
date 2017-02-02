import selenium from 'selenium-webdriver';

export default function (testRunners, customWindowSizes) {
  let windowSizes = {};
  if (!customWindowSizes) {
    windowSizes = {
      tiny: [470, 768],
      small: [622, 768],
      medium: [838, 768],
      large: [1000, 768],
      huge: [1210, 768],
      enormous: [1300, 768],
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
