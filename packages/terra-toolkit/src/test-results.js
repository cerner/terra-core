import jsonfile from 'jsonfile';
import TestResult, { resultPath } from './test-result';

class TestResults {
  constructor() {
    this.tests = [];
    this.currentTest = null;
  }

  start(testExample) {
    this.currentTest = new TestResult(testExample);
    this.tests.push(this.currentTest);
  }

  finish() {
    this.takeScreenshot('Auto generated');
    this.currentTest = null;
  }

  takeScreenshot(description) {
    this.currentTest.takeScreenshot(description);
  }

  toObject() {
    const returnObject = {};
    this.tests.forEach((test) => {
      if (!returnObject[test.driverName]) {
        returnObject[test.driverName] = { tests: [test.toObject()] };
      } else {
        returnObject[test.driverName].tests.push(test.toObject());
      }
    });
    return returnObject;
  }

  save() {
    const testResultsObject = this.toObject();
    jsonfile.writeFileSync(`${resultPath}/results.json`, testResultsObject);

    Object.keys(testResultsObject).forEach((key) => {
      const fileName = `${resultPath}/${key}/results.json`;
      const objectToWrite = { };
      objectToWrite[key] = testResultsObject[key];
      jsonfile.writeFileSync(fileName, objectToWrite);
    });
  }
}

export default TestResults;
