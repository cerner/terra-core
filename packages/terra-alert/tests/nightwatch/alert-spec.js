/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const assert = require('assert');

const screenshot = require('terra-toolkit').screenshot;

const windowSizes = {
  default: [470, 768],
  tiny: [622, 768],
  small: [838, 768],
  medium: [1000, 768],
  large: [1300, 768],
  huge: [1500, 768],
};

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-alert', done);
  },

  'Default alert test - Displays a default alert with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/alert-tests/default`)
      .assert.elementPresent(
        '.terra-Alert',
        'Check the default Alert exists')
      .assert.cssClassPresent(
        '.terra-Alert',
        'terra-Alert--alert',
        'Check that the default Alert is of type alert')
      .assert.elementPresent(
        '.terra-Alert .terra-Alert-body .terra-Alert-icon .terra-Icon',
        'Check that the default Alert has an icon')
      .assert.elementPresent(
        '.terra-Alert .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        'Check default Alert title structure')
      .assert.containsText(
        '.terra-Alert .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        'Alert.',
        'Check default Alert has default title for Alert of type alert')
      .assert.elementPresent(
        '.terra-Alert .terra-Alert-body .terra-Alert-section .terra-Alert-content',
        'Check default Alert content structure')
      .assert.containsText(
        '.terra-Alert .terra-Alert-body .terra-Alert-section .terra-Alert-content',
        'Default Alert',
        'Check text content provided to default Alert');
  },

  'Type attribute tests - Displays a basic alert of each type with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/alert-tests/type`);
  },

  'Type attribute tests - Check Alert of type alert': (browser) => {
    browser
      .assert.elementPresent(
        '.terra-Alert--alert',
        'Check that Alert of type alert exists')
      .assert.containsText(
        '.terra-Alert--alert .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        'Alert.',
        'Check default title for Alert of type alert')
      .assert.containsText(
        '.terra-Alert--alert .terra-Alert-body .terra-Alert-section .terra-Alert-content',
        'Alert of type Alert',
        'Check text content provided to Alert of type alert');
  },

  'Type attribute tests - Check Alert of type error': (browser) => {
    browser
      .assert.elementPresent(
        '.terra-Alert--error',
        'Check that Alert of type error exists')
      .assert.containsText(
        '.terra-Alert--error .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        'Error.',
        'Check default title for Alert of type error')
      .assert.containsText(
        '.terra-Alert--error .terra-Alert-body .terra-Alert-section .terra-Alert-content',
        'Alert of type Error',
        'Check text content provided to Alert of type error');
  },

  'Type attribute tests - Check Alert of type warning': (browser) => {
    browser
      .assert.elementPresent(
        '.terra-Alert--warning',
        'Check that Alert of type warning exists')
      .assert.containsText(
        '.terra-Alert--warning .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        'Warning.',
        'Check default title for Alert of type warning')
      .assert.containsText(
        '.terra-Alert--warning .terra-Alert-body .terra-Alert-section .terra-Alert-content',
        'Alert of type Warning',
        'Check text content provided to Alert of type warning');
  },

  'Type attribute tests - Check Alert of type advisory': (browser) => {
    browser
      .assert.elementPresent(
        '.terra-Alert--advisory',
        'Check that Alert of type warning exists')
      .assert.containsText(
        '.terra-Alert--advisory .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        'Advisory.',
        'Check default title for Alert of type warning')
      .assert.containsText(
        '.terra-Alert--advisory .terra-Alert-body .terra-Alert-section .terra-Alert-content',
        'Alert of type Advisory',
        'Check text content provided to Alert of type warning');
  },

  'Type attribute tests - Check Alert of type info': (browser) => {
    browser
      .assert.elementPresent(
        '.terra-Alert--info',
        'Check that Alert of type info exists')
      .assert.containsText(
        '.terra-Alert--info .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        'Information.',
        'Check default title for Alert of type info')
      .assert.containsText(
        '.terra-Alert--info .terra-Alert-body .terra-Alert-section .terra-Alert-content',
        'Alert of type Info',
        'Check text content provided to Alert of type info');
  },

  'Type attribute tests - Check Alert of type success': (browser) => {
    browser
      .assert.elementPresent(
        '.terra-Alert--success',
        'Check that Alert of type success exists')
      .assert.containsText(
        '.terra-Alert--success .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        'Success.',
        'Check default title for Alert of type success')
      .assert.containsText(
        '.terra-Alert--success .terra-Alert-body .terra-Alert-section .terra-Alert-content',
        'Alert of type Success',
        'Check text content provided to Alert of type success');
  },

  'Type attribute tests - Check Alert of type gap checking': (browser) => {
    browser
      .assert.elementPresent(
        '.terra-Alert--gap-checking',
        'Check that Alert of type gap-checking exists')
      .assert.containsText(
        '.terra-Alert--gap-checking .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        'Required Action.',
        'Check default title for Alert of type gap-checking')
      .assert.containsText(
        '.terra-Alert--gap-checking .terra-Alert-body .terra-Alert-section .terra-Alert-content',
        'Alert of type Gap Checking',
        'Check text content provided to Alert of type gap-checking');
  },

  'Type attribute tests - Check Alert of type outside records': (browser) => {
    browser
      .assert.elementPresent(
        '.terra-Alert--outside-records',
        'Check that Alert of type outside-records exists')
      .assert.containsText(
        '.terra-Alert--outside-records .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        'Outside Records.',
        'Check default title for Alert of type outside-records')
      .assert.containsText(
        '.terra-Alert--outside-records .terra-Alert-body .terra-Alert-section .terra-Alert-content',
        'Alert of type Outside Records',
        'Check text content provided to Alert of type outside-records');
  },

  'Title attribute tests - Displays an alert of each type with a custom title': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/alert-tests/title`)
      .assert.containsText(
        '.terra-Alert--alert .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        'Alert_Alert:',
        'Check custom title for Alert of type alert')
      .assert.containsText(
        '.terra-Alert--error .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        'Error_Alert:',
        'Check custom title for Alert of type error')
      .assert.containsText(
        '.terra-Alert--warning .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        'Warning_Alert:',
        'Check custom title for Alert of type warning')
      .assert.containsText(
        '.terra-Alert--advisory .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        'Advisory_Alert:',
        'Check custom title for Alert of type advisory')
      .assert.containsText(
        '.terra-Alert--info .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        'Info_Alert:',
        'Check custom title for Alert of type info')
      .assert.containsText(
        '.terra-Alert--success .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        'Success_Alert:',
        'Check custom title for Alert of type success')
      .assert.containsText(
        '.terra-Alert--gap-checking .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        'Gap_Checking_Alert:',
        'Check custom title for Alert of type gap checking')
      .assert.containsText(
        '.terra-Alert--outside-records .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        'Outside_Records_Alert:',
        'Check custom title for Alert of type outside records');
  },

  'Custom Alert Tests - Displays custom alerts with varying permutations of title, custom icon and custom status color parameters': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/alert-tests/custom`);
  },

  'Custom Alert Tests - Check first custom Alert with no icon, title or custom color': (browser) => {
    browser
      .assert.elementPresent(
        '#custom1 .terra-Alert--custom',
        'Checking that the first custom Alert exists')
      .assert.cssProperty(
        '#custom1 .terra-Alert--custom',
        'color',
        'rgba(155, 159, 161, 1)',
        'Checking that the first custom Alert has default status bar color')
      .assert.elementNotPresent(
        '#custom1 .terra-Alert--custom .terra-Alert-body .terra-Alert-icon .terra-Icon',
        'Checking that the first custom Alert does not have an icon')
      .assert.containsText(
        '#custom1 .terra-Alert--custom .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        '',
        'Checking that the first custom Alert does not have a title')
      .assert.containsText(
        '#custom1 .terra-Alert--custom .terra-Alert-body .terra-Alert-section .terra-Alert-content',
        'Custom Alert with no icon, title or custom color',
        'Checking the text content for the first custom Alert');
  },

  'Custom Alert Tests - Check second custom Alert with title but no icon or custom color': (browser) => {
    browser
      .assert.elementPresent(
        '#custom2 .terra-Alert--custom',
        'Checking that the second custom Alert exists')
      .assert.cssProperty(
        '#custom2 .terra-Alert--custom',
        'color',
        'rgba(155, 159, 161, 1)',
        'Checking that the second custom Alert has default status bar color')
      .assert.elementNotPresent(
        '#custom2 .terra-Alert--custom .terra-Alert-body .terra-Alert-icon .terra-Icon',
        'Checking that the second custom Alert does not have an icon')
      .assert.containsText(
        '#custom2 .terra-Alert--custom .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        'Custom_Alert:',
        'Checking that the second custom Alert has a title')
      .assert.containsText(
        '#custom2 .terra-Alert--custom .terra-Alert-body .terra-Alert-section .terra-Alert-content',
        'Custom Alert with title but no icon or custom color',
        'Checking the text content for the second custom Alert');
  },

  'Custom Alert Tests - Check third custom Alert with icon but no title or custom color': (browser) => {
    browser
      .assert.elementPresent(
        '#custom3 .terra-Alert--custom',
        'Checking that the third custom Alert exists')
      .assert.cssProperty(
        '#custom3 .terra-Alert--custom',
        'color',
        'rgba(155, 159, 161, 1)',
        'Checking that the third custom Alert has default status bar color')
      .assert.elementPresent(
        '#custom3 .terra-Alert--custom .terra-Alert-body .terra-Alert-icon .terra-Icon',
        'Checking that the third custom Alert has an icon')
      .assert.containsText(
        '#custom3 .terra-Alert--custom .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        '',
        'Checking that the third custom Alert does not have a title')
      .assert.containsText(
        '#custom3 .terra-Alert--custom .terra-Alert-body .terra-Alert-section .terra-Alert-content',
        'Custom Alert with icon but no title or custom color',
        'Checking the text content for the third custom Alert');
  },

  'Custom Alert Tests - Check fourth custom Alert with custom color but no title or icon': (browser) => {
    browser
      .assert.elementPresent(
        '#custom4 .terra-Alert--custom',
        'Checking that the fourth custom Alert exists')
      .assert.cssProperty(
        '#custom4 .terra-Alert--custom',
        'color',
        'rgba(255, 165, 0, 1)',
        'Checking that the fourth custom Alert has custom orange status bar color')
      .assert.elementNotPresent(
        '#custom4 .terra-Alert--custom .terra-Alert-body .terra-Alert-icon .terra-Icon',
        'Checking that the fourth custom Alert does not have an icon')
      .assert.containsText(
        '#custom4 .terra-Alert--custom .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        '',
        'Checking that the fourth custom Alert does not have a title')
      .assert.containsText(
        '#custom4 .terra-Alert--custom .terra-Alert-body .terra-Alert-section .terra-Alert-content',
        'Custom Alert with custom color but no title or icon',
        'Checking the text content for the fourth custom Alert');
  },

  'Custom Alert Tests - Check fifth custom Alert with custom color and title but no icon': (browser) => {
    browser
      .assert.elementPresent(
        '#custom5 .terra-Alert--custom',
        'Checking that the fifth custom Alert exists')
      .assert.cssProperty(
        '#custom5 .terra-Alert--custom',
        'color',
        'rgba(255, 165, 0, 1)',
        'Checking that the fifth custom Alert has custom orange status bar color')
      .assert.elementNotPresent(
        '#custom5 .terra-Alert--custom .terra-Alert-body .terra-Alert-icon .terra-Icon',
        'Checking that the fifth custom Alert does not have an icon')
      .assert.containsText(
        '#custom5 .terra-Alert--custom .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        'Custom_Alert:',
        'Checking that the fifth custom Alert has a title')
      .assert.containsText(
        '#custom5 .terra-Alert--custom .terra-Alert-body .terra-Alert-section .terra-Alert-content',
        'Custom Alert with custom color and title but no icon',
        'Checking the text content for the fifth custom Alert');
  },

  'Custom Alert Tests - Check sixth custom Alert with title and icon but no custom color': (browser) => {
    browser
      .assert.elementPresent(
        '#custom6 .terra-Alert--custom',
        'Checking that the sixth custom Alert exists')
      .assert.cssProperty(
        '#custom6 .terra-Alert--custom',
        'color',
        'rgba(155, 159, 161, 1)',
        'Checking that the sixth custom Alert has default status bar color')
      .assert.elementPresent(
        '#custom6 .terra-Alert--custom .terra-Alert-body .terra-Alert-icon .terra-Icon',
        'Checking that the sixth custom Alert has an icon')
      .assert.containsText(
        '#custom6 .terra-Alert--custom .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        'Custom_Alert:',
        'Checking that the sixth custom Alert has a title')
      .assert.containsText(
        '#custom6 .terra-Alert--custom .terra-Alert-body .terra-Alert-section .terra-Alert-content',
        'Custom Alert with title and icon but no custom color',
        'Checking the text content for the sixth custom Alert');
  },

  'Custom Alert Tests - Check seventh custom Alert with custom color and icon but no title': (browser) => {
    browser
      .assert.elementPresent(
        '#custom7 .terra-Alert--custom',
        'Checking that the seventh custom Alert exists')
      .assert.cssProperty(
        '#custom7 .terra-Alert--custom',
        'color',
        'rgba(255, 165, 0, 1)',
        'Checking that the seventh custom Alert has custom orange status bar color')
      .assert.elementPresent(
        '#custom7 .terra-Alert--custom .terra-Alert-body .terra-Alert-icon .terra-Icon',
        'Checking that the seventh custom Alert has an icon')
      .assert.containsText(
        '#custom7 .terra-Alert--custom .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        '',
        'Checking that the seventh custom Alert does not have a title')
      .assert.containsText(
        '#custom7 .terra-Alert--custom .terra-Alert-body .terra-Alert-section .terra-Alert-content',
        'Custom Alert with custom color and icon but no title',
        'Checking the text content for the seventh custom Alert');
  },

  'Custom Alert Tests - Check eighth custom Alert with title, custom color and icon': (browser) => {
    browser
      .assert.elementPresent(
        '#custom8 .terra-Alert--custom',
        'Checking that the eighth custom Alert exists')
      .assert.cssProperty(
        '#custom8 .terra-Alert--custom',
        'color',
        'rgba(255, 165, 0, 1)',
        'Checking that the eighth custom Alert has custom orange status bar color')
      .assert.elementPresent(
        '#custom8 .terra-Alert--custom .terra-Alert-body .terra-Alert-icon .terra-Icon',
        'Checking that the eighth custom Alert has an icon')
      .assert.containsText(
        '#custom8 .terra-Alert--custom .terra-Alert-body .terra-Alert-section .terra-Alert-title',
        'Custom_Alert:',
        'Checking that the eighth custom Alert has a title')
      .assert.containsText(
        '#custom8 .terra-Alert--custom .terra-Alert-body .terra-Alert-section .terra-Alert-content',
        'Custom Alert with title, custom color and icon',
        'Checking the text content for the eighth custom Alert');
  },

  'Action Tests - Displays an Alert of type warning with an action button set via the alertAction prop': (browser) => {
    const width = browser.globals.width;
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/alert-tests/actionButton`)
      .assert.elementPresent(
        '.terra-Alert .terra-Alert-actions .terra-Button',
        'Check Alert actions structure contains Button');

    if (width < windowSizes.tiny[0]) {
      browser
        .assert.cssClassPresent(
          '.terra-Alert',
          'terra-Alert--narrow',
          'Check that the narrow alert className is used when width less than tiny breakpoint')
        .assert.cssClassPresent(
          '.terra-Alert .terra-Alert-body',
          'terra-Alert-body-narrow',
          'Check that the narrow body className is used when width less than tiny breakpoint');
    } else {
      browser
        .assert.cssClassPresent(
          '.terra-Alert',
          'terra-Alert--wide',
          'Check that the wide alert className is used when width greater than or equal to tiny breakpoint')
        .assert.cssClassPresent(
          '.terra-Alert .terra-Alert-body',
          'terra-Alert-body-wide',
          'Check that the wide body className is used when width greater than or equal to tiny breakpoint');
    }
  },

  'Dismiss Tests - Displays an Alert of type success with a dismiss button set via the onDismiss prop': (browser) => {
    const width = browser.globals.width;
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/alert-tests/dismissible`)
      .assert.elementPresent(
        '.terra-Alert .terra-Alert-actions .terra-Button',
        'Check Alert actions structure contains Button');

    if (width < windowSizes.tiny[0]) {
      browser
        .assert.cssClassPresent(
          '.terra-Alert',
          'terra-Alert--narrow',
          'Check that the narrow alert className is used when width less than tiny breakpoint')
        .assert.cssClassPresent(
          '.terra-Alert .terra-Alert-body',
          'terra-Alert-body-narrow',
          'Check that the narrow body className is used when width less than tiny breakpoint');
    } else {
      browser
        .assert.cssClassPresent(
          '.terra-Alert',
          'terra-Alert--wide',
          'Check that the wide alert className is used when width greater than or equal to tiny breakpoint')
        .assert.cssClassPresent(
          '.terra-Alert .terra-Alert-body',
          'terra-Alert-body-wide',
          'Check that the wide body className is used when width greater than or equal to tiny breakpoint');
    }

    browser
      .waitForElementVisible('.terra-Alert', 1000)
      .click('.terra-Alert .terra-Alert-actions .terra-Button')
      .pause(1000)
      .assert.elementNotPresent('.terra-Alert', 'Check that the test page dismissed the Alert when re-rendered');
  },

  'Responsive to Parent Tests - Displays alerts with actions in small container': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/alert-tests/responsive`)
      .assert.elementPresent(
        '.terra-Alert--warning .terra-Alert-actions .terra-Button',
        'Check Alert action button rendered on warning alert')
      .assert.elementPresent(
        '.terra-Alert--success .terra-Alert-actions .terra-Button',
        'Check Alert dismiss button rendered on success alert')
      .assert.cssClassPresent(
        '.terra-Alert--warning',
        'terra-Alert--narrow',
        'Check that the narrow alert className is used for Alert with action regardless of window size')
      .assert.cssClassPresent(
        '.terra-Alert--warning .terra-Alert-body',
        'terra-Alert-body-narrow',
        'Check that the narrow body className is used for Alert with action regardless of window size')
      .assert.cssClassPresent(
        '.terra-Alert--success',
        'terra-Alert--narrow',
        'Check that the narrow alert className is used for dismissible alert regardless of window size')
      .assert.cssClassPresent(
        '.terra-Alert--success .terra-Alert-body',
        'terra-Alert-body-narrow',
        'Check that the narrow body className is used for dismissible alert regardless of window size');
  },
};
