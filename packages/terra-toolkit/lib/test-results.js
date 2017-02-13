'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonfile = require('jsonfile');

var _jsonfile2 = _interopRequireDefault(_jsonfile);

var _testResult = require('./test-result');

var _testResult2 = _interopRequireDefault(_testResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TestResults {
  constructor() {
    this.tests = [];
    this.currentTest = null;
  }

  start(testExample) {
    this.currentTest = new _testResult2.default(testExample);
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
    this.tests.forEach(test => {
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
    _jsonfile2.default.writeFileSync(`${_testResult.resultPath}/results.json`, testResultsObject);

    Object.keys(testResultsObject).forEach(key => {
      const fileName = `${_testResult.resultPath}/${key}/results.json`;
      const objectToWrite = {};
      objectToWrite[key] = testResultsObject[key];
      _jsonfile2.default.writeFileSync(fileName, objectToWrite);
    });
  }
}

exports.default = TestResults;