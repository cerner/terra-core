# Terra Toolkit Documentation

Two testing utilities are exported from this module: testHelper and testRunner.

## Test Helper

testHelper sets up the testing environment using a passed in webpack configuration:

```javascript
import testHelper from '../../src/test-helper';
import config from './test.config';

testHelper(config);
```

## Test Runner

testRunner is passed an array of test functions and an optional set of window sizes on which to run the tests.  If no set of window sizes is passed in, a default set is used:

```javascript
import { By } from 'selenium-webdriver';
import testRunner from '../../src/test-runner';

function tests() {
  describe('TestHelper and TestRunner', () => {
    it('Runs the test suite correctly', (done) => {
      jasmine.driver.get('http://localhost:8080/').then(() =>
        jasmine.driver.findElement(By.className('test')).getText(),
      )
      .then((text) => {
        expect(text).toBe('Test');
        done();
      });
    });
  });
}

testRunner([tests], { test: [580, 768] });
```

Screenshots will be generated automatically at the end of each test run unless the `SKIP_SCREENSHOTS` environment variable is set to true.
