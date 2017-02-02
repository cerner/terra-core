import selenium from 'selenium-webdriver';
import testRunner from '../../src/test-runner';

function tests() {
  describe('TestHelper and TestRunner', () => {
    it('Runs the test suite correctly', (done) => {
      jasmine.driver.get('http://localhost:18080/').then(() =>
        jasmine.driver.findElement(selenium.By.className('test')).getText(),
      )
      .then((text) => {
        expect(text).toBe('Test');
        done();
      });
    });
  });
}

testRunner([tests]);

testRunner([tests], { test: [580, 768] });
