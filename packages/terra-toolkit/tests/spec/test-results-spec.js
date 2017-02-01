import jsonfile from 'jsonfile';
import TestResults from '../../src/test-results';
import TestResult from '../../src/test-result';

class Example {
  constructor(name) {
    this.fullName = name;
  }
}

describe('Test Results', () => {
  it('Is constructed with the appropriate values', () => {
    const testResults = new TestResults();

    expect(testResults.tests).toEqual([]);
    expect(testResults.currentTest).toBeNull();
  });

  it('Starts a test', () => {
    const testResults = new TestResults();
    const example = new Example('Test Name');

    testResults.start(example);

    expect(testResults.tests.length).toBe(1);
    expect(testResults.tests[0].example).toBe(example);
  });

  it('Finishes a test', () => {
    const testResults = new TestResults();
    testResults.currentTest = new TestResult(new Example('Full Name'));

    spyOn(testResults, 'takeScreenshot');

    testResults.finish();

    expect(testResults.takeScreenshot).toHaveBeenCalledWith('Auto generated');
    expect(testResults.currentTest).toBeNull();
  });

  it('Takes a screenshot', () => {
    const testResults = new TestResults();
    testResults.currentTest = new TestResult(new Example('Full Name'));

    spyOn(testResults.currentTest, 'takeScreenshot');

    testResults.takeScreenshot('description');

    expect(testResults.currentTest.takeScreenshot).toHaveBeenCalledWith('description');
  });

  it('Converts the test results to an object representation', () => {
    const testResults = new TestResults();

    const testResult1 = new TestResults(new Example('Test Result1'));
    testResult1.driverName = 'Driver 1';

    const testResult2 = new TestResults(new Example('Test Result2'));
    testResult2.driverName = 'Driver 1';

    const testResult3 = new TestResults(new Example('Test Result3'));
    testResult3.driverName = 'Driver 2';

    const testResult4 = new TestResults(new Example('Test Result4'));
    testResult4.driverName = 'Driver 2';

    testResults.tests = [testResult1, testResult2, testResult3, testResult4];

    expect(testResults.toObject()).toEqual({
      'Driver 1': { tests: [testResult1.toObject(), testResult2.toObject()] },
      'Driver 2': { tests: [testResult3.toObject(), testResult4.toObject()] },
    });
  });

  it('Saves the test results to a file', () => {
    const testResults = new TestResults();
    const objectRepresentation = { test1: 'Test 1', test2: 'Test 2' };

    spyOn(testResults, 'toObject').and.returnValue(objectRepresentation);
    spyOn(jsonfile, 'writeFileSync');

    testResults.save();

    expect(jsonfile.writeFileSync).toHaveBeenCalledWith('target/features/results.json', objectRepresentation);
    expect(jsonfile.writeFileSync).toHaveBeenCalledWith('target/features/test1/results.json', { test1: 'Test 1' });
    expect(jsonfile.writeFileSync).toHaveBeenCalledWith('target/features/test2/results.json', { test2: 'Test 2' });
  });
});
