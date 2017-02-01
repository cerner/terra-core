'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resultPath = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sha = require('sha1');

var _sha2 = _interopRequireDefault(_sha);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var resultPath = exports.resultPath = _path2.default.join('target', 'features');

var TestResult = function () {
  function TestResult(example) {
    _classCallCheck(this, TestResult);

    this.id = (0, _sha2.default)(example.fullName);
    this.example = example;
    this.screenshots = [];
  }

  _createClass(TestResult, [{
    key: 'addScreenshot',
    value: function addScreenshot(screenshotName, description) {
      this.screenshots.push({ imageLocation: screenshotName, imageDescription: description });
    }
  }, {
    key: 'screenshotPath',
    value: function screenshotPath() {
      this.driverName = jasmine.driverName;
      return _path2.default.join(resultPath, this.driverName);
    }
  }, {
    key: 'nextScreenshotFileName',
    value: function nextScreenshotFileName() {
      return _path2.default.join(this.screenshotPath(), this.id + '_' + (this.screenshots.length + 1) + '.png');
    }
  }, {
    key: 'takeScreenshot',
    value: function takeScreenshot(description) {
      var screenshotFileName = this.nextScreenshotFileName();
      _mkdirp2.default.mkdirp(this.screenshotPath());
      jasmine.driver.takeScreenshot().then(function (data) {
        _fs2.default.writeFile(screenshotFileName, data, 'base64');
      });
      this.addScreenshot(screenshotFileName, description);
    }
  }, {
    key: 'toObject',
    value: function toObject() {
      return {
        id: this.id,
        fullName: this.example.fullName,
        driverName: this.driverName,
        screenshots: this.screenshots
      };
    }
  }]);

  return TestResult;
}();

exports.default = TestResult;