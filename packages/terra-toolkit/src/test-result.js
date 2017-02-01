import sha1 from 'sha1';
import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';

export const resultPath = path.join('target', 'features');

class TestResult {
  constructor(example) {
    this.id = sha1(example.fullName);
    this.example = example;
    this.screenshots = [];
  }

  addScreenshot(screenshotName, description) {
    this.screenshots.push({ imageLocation: screenshotName, imageDescription: description });
  }

  screenshotPath() {
    this.driverName = jasmine.driverName;
    return path.join(resultPath, this.driverName);
  }

  nextScreenshotFileName() {
    return path.join(this.screenshotPath(), `${this.id}_${this.screenshots.length + 1}.png`);
  }

  takeScreenshot(description) {
    const screenshotFileName = this.nextScreenshotFileName();
    mkdirp.mkdirp(this.screenshotPath());
    jasmine.driver.takeScreenshot().then((data) => {
      fs.writeFile(screenshotFileName, data, 'base64');
    });
    this.addScreenshot(screenshotFileName, description);
  }

  toObject() {
    return {
      id: this.id,
      fullName: this.example.fullName,
      driverName: this.driverName,
      screenshots: this.screenshots,
    };
  }
}

export default TestResult;
