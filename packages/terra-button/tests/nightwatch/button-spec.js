/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, done);
  },

  'Displays a default button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/default.html`)
      .assert.containsText('.terra-Button.terra-Button--default', 'Default');
  },

  'Wraps long text at smaller screen sizes': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/long-text.html`)
      .assert.containsText('.terra-Button.terra-Button--default', 'Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long');
  },

  'Displays a disabled button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/disabled.html`)
      .assert.containsText('.terra-Button.terra-Button--default.is-disabled', 'Disabled Button');
  },

  'Displays a disabled link with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/disabled-link.html`)
      .assert.containsText('.terra-Button.terra-Button--linkDefault.is-disabled', 'Disabled Link');
  },

  'Displays as a primary button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/primary.html`)
      .assert.containsText('.terra-Button.terra-Button--primary', 'Primary');
  },

  'Displays as a secondary button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/secondary.html`)
      .assert.containsText('.terra-Button.terra-Button--secondary', 'Secondary');
  },

  'Displays as a positive button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/positive.html`)
      .assert.containsText('.terra-Button.terra-Button--positive', 'Positive');
  },

  'Displays as a negative button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/negative.html`)
      .assert.containsText('.terra-Button.terra-Button--negative', 'Negative');
  },

  'Displays as a warning button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/warning.html`)
      .assert.containsText('.terra-Button.terra-Button--warning', 'Warning');
  },

  'Displays as an info button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/info.html`)
      .assert.containsText('.terra-Button.terra-Button--info', 'Info');
  },

  'Displays with a transparent background with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/outline.html`)
      .assert.containsText('.terra-Button.terra-Button--outlineDefault', 'Outline');
  },

  'Displays as a link with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/link.html`)
      .assert.containsText('.terra-Button.terra-Button--linkDefault', 'Link');
  },

  'Displays as a tiny button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/tiny.html`)
      .assert.containsText('.terra-Button.terra-Button--tiny', 'Tiny');
  },

  'Displays as a small button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/small.html`)
      .assert.containsText('.terra-Button.terra-Button--small', 'Small');
  },

  'Displays as a medium button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/medium.html`)
      .assert.containsText('.terra-Button.terra-Button--medium', 'Medium');
  },

  'Displays as a large button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/large.html`)
      .assert.containsText('.terra-Button.terra-Button--large', 'Large');
  },

  'Displays as a huge button with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/huge.html`)
      .assert.containsText('.terra-Button.terra-Button--huge', 'Huge');
  },

  'Displays an icon inline with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/icon-default.html`)
      .assert.containsText('.terra-Button.terra-Button--default', 'Button with Icon')
      .assert.elementPresent('.terra-Button.terra-Button--default > span');
  },

  'Displays an icon only': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/icon-only.html`)
      .assert.containsText('.terra-Button.terra-Button--default', '')
      .assert.elementPresent('.terra-Button.terra-Button--default > span');
  },

  // describe('Button Icons', () => {
  //   it('Displays an icon inline with the Button text', (done) => {
  //     jasmine.driver.get('http://localhost:8080/icon-default.html').then(() =>
  //       jasmine.driver.findElement(By.className('terra-Button')),
  //     ).then(done);
  //   });

  //   it('Displays an icon only', (done) => {
  //     jasmine.driver.get('http://localhost:8080/icon-only.html').then(() =>
  //       jasmine.driver.findElement(By.className('terra-Button')),
  //     ).then(done);
  //   });

  //   it('Displays an icon inline with Button text and reversed', (done) => {
  //     jasmine.driver.get('http://localhost:8080/icon-reversed.html').then(() =>
  //       jasmine.driver.findElement(By.className('terra-Button')),
  //     ).then(done);
  //   });
  // });
};
