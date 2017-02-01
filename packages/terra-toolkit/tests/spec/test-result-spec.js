import sha1 from 'sha1';
import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';
import TestResult from '../../src/test-result';

class Example {
  constructor(name) {
    this.fullName = name;
  }
}

describe('Test Result', () => {
  it('Is constructed with the appropriate values', () => {
    const example = new Example('Full Name');
    const testResult = new TestResult(example);

    expect(testResult.id).toEqual(sha1('Full Name'));
    expect(testResult.example).toBe(example);
    expect(testResult.screenshots).toEqual([]);
  });

  it('Adds a screenshot', () => {
    const example = new Example('Full Name');
    const testResult = new TestResult(example);

    expect(testResult.screenshots).toEqual([]);

    testResult.addScreenshot('Name', 'Description');

    expect(testResult.screenshots.length).toBe(1);
    expect(testResult.screenshots[0]).toEqual({ imageLocation: 'Name', imageDescription: 'Description' });
  });

  it('Creates the correct screenshot directory', () => {
    const example = new Example('Full Name');
    const testResult = new TestResult(example);

    jasmine.driverName = 'driverName';

    expect(testResult.screenshotPath()).toBe(path.join('target', 'features', 'driverName'));
    expect(testResult.driverName).toBe('driverName');
  });

  it('Creates the correct full screenshot path', () => {
    const example = new Example('Full Name');
    const testResult = new TestResult(example);

    spyOn(testResult, 'screenshotPath').and.returnValue('path');

    expect(testResult.nextScreenshotFileName()).toBe(path.join('path', `${testResult.id}_1.png`));
  });

  it('Takes a screenshot', () => {
    const example = new Example('Full Name');
    const testResult = new TestResult(example);
    const mockData = { data: 'test' };

    class Thenable {
      then(mockFunction) {
        this.noop = 1;
        mockFunction(mockData);
      }
    }

    const mockThenable = new Thenable();

    class Driver {
      takeScreenshot() {
        this.noop = 1;
      }
    }

    jasmine.driver = new Driver();

    spyOn(testResult, 'nextScreenshotFileName').and.returnValue('screenshot.png');
    spyOn(testResult, 'screenshotPath').and.returnValue('path');
    spyOn(mkdirp, 'mkdirp');
    spyOn(jasmine.driver, 'takeScreenshot').and.returnValue(mockThenable);
    spyOn(fs, 'writeFile');
    spyOn(testResult, 'addScreenshot');

    testResult.takeScreenshot('description');

    expect(mkdirp.mkdirp).toHaveBeenCalledWith('path');
    expect(fs.writeFile).toHaveBeenCalledWith('screenshot.png', mockData, 'base64');
    expect(testResult.addScreenshot).toHaveBeenCalledWith('screenshot.png', 'description');
  });

  it('Converts the test result to an object representation', () => {
    const example = new Example('Full Name');
    const testResult = new TestResult(example);
    testResult.driverName = 'Driver Name';
    testResult.addScreenshot('screenshot', 'description');

    expect(testResult.toObject()).toEqual({
      id: sha1('Full Name'),
      fullName: 'Full Name',
      driverName: 'Driver Name',
      screenshots: [{ imageLocation: 'screenshot', imageDescription: 'description' }] });
  });
});
