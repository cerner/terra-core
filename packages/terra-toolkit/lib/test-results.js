'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonfile = require('jsonfile');

var _jsonfile2 = _interopRequireDefault(_jsonfile);

var _testResult = require('./test-result');

var _testResult2 = _interopRequireDefault(_testResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestResults = function () {
  function TestResults() {
    _classCallCheck(this, TestResults);

    this.tests = [];
    this.currentTest = null;
  }

  _createClass(TestResults, [{
    key: 'start',
    value: function start(testExample) {
      this.currentTest = new _testResult2.default(testExample);
      this.tests.push(this.currentTest);
    }
  }, {
    key: 'finish',
    value: function finish() {
      this.takeScreenshot('Auto generated');
      this.currentTest = null;
    }
  }, {
    key: 'takeScreenshot',
    value: function takeScreenshot(description) {
      this.currentTest.takeScreenshot(description);
    }
  }, {
    key: 'toObject',
    value: function toObject() {
      var returnObject = {};
      this.tests.forEach(function (test) {
        if (!returnObject[test.driverName]) {
          returnObject[test.driverName] = { tests: [test.toObject()] };
        } else {
          returnObject[test.driverName].tests.push(test.toObject());
        }
      });
      return returnObject;
    }
  }, {
    key: 'save',
    value: function save() {
      var testResultsObject = this.toObject();
      _jsonfile2.default.writeFileSync(_testResult.resultPath + '/results.json', testResultsObject);

      Object.keys(testResultsObject).forEach(function (key) {
        var fileName = _testResult.resultPath + '/' + key + '/results.json';
        var objectToWrite = {};
        objectToWrite[key] = testResultsObject[key];
        _jsonfile2.default.writeFileSync(fileName, objectToWrite);
      });
    }
  }]);

  return TestResults;
}();

exports.default = TestResults;