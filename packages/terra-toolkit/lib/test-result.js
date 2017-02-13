'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resultPath = undefined;

var _sha = require('sha1');

var _sha2 = _interopRequireDefault(_sha);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const resultPath = exports.resultPath = _path2.default.join('target', 'features');

class TestResult {
  constructor(example) {
    this.id = (0, _sha2.default)(example.fullName);
    this.example = example;
    this.screenshots = [];
  }

  addScreenshot(screenshotName, description) {
    this.screenshots.push({ imageLocation: screenshotName, imageDescription: description });
  }

  screenshotPath() {
    this.driverName = jasmine.driverName;
    return _path2.default.join(resultPath, this.driverName);
  }

  nextScreenshotFileName() {
    return _path2.default.join(this.screenshotPath(), `${this.id}_${this.screenshots.length + 1}.png`);
  }

  takeScreenshot(description) {
    const screenshotFileName = this.nextScreenshotFileName();
    _mkdirp2.default.mkdirp(this.screenshotPath());
    jasmine.driver.takeScreenshot().then(data => {
      _fs2.default.writeFile(screenshotFileName, data, 'base64');
    });
    this.addScreenshot(screenshotFileName, description);
  }

  toObject() {
    return {
      id: this.id,
      fullName: this.example.fullName,
      driverName: this.driverName,
      screenshots: this.screenshots
    };
  }
}

exports.default = TestResult;