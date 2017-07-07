/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
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
        '#defaultAlert',
        'Check the default Alert exists')
      .assert.attributeContains(
        '#defaultAlert',
        'class',
        'alertType',
        'Check that the default Alert is of type alert')
      .assert.elementPresent(
        '#defaultAlert > div[class*="body"] > div[class*="icon"] > svg',
        'Check that the default Alert has an icon')
      .assert.elementPresent(
        '#defaultAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        'Check default Alert title structure')
      .assert.containsText(
        '#defaultAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        'Alert.',
        'Check default Alert has default title for Alert of type alert')
      .assert.elementPresent(
        '#defaultAlert > div[class*="body"] > div[class*="section"]  div[class*="content"]',
        'Check default Alert content structure')
      .assert.containsText(
        '#defaultAlert > div[class*="body"] > div[class*="section"]  div[class*="content"]',
        'Default Alert',
        'Check text content provided to default Alert');
  },

  'Type attribute tests - Displays a basic alert of each type with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/alert-tests/type`);
  },

  'Type attribute tests - Check Alert of type alert': (browser) => {
    browser
       .assert.attributeContains(
        '#alertAlert',
        'class',
        'alertType',
        'Check that the Alert of type alert exists')
      .assert.containsText(
        '#alertAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        'Alert.',
        'Check default title for Alert of type alert')
      .assert.containsText(
        '#alertAlert > div[class*="body"] > div[class*="section"]  div[class*="content"]',
        'Alert of type Alert',
        'Check text content provided to Alert of type alert');
  },

  'Type attribute tests - Check Alert of type error': (browser) => {
    browser
        .assert.attributeContains(
        '#errorAlert',
        'class',
        'errorType',
        'Check that Alert of type error exists')
      .assert.containsText(
        '#errorAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        'Error.',
        'Check default title for Alert of type error')
      .assert.containsText(
        '#errorAlert > div[class*="body"] > div[class*="section"]  div[class*="content"]',
        'Alert of type Error',
        'Check text content provided to Alert of type error');
  },

  'Type attribute tests - Check Alert of type warning': (browser) => {
    browser
      .assert.attributeContains(
        '#warningAlert',
        'class',
        'warningType',
        'Check that Alert of type warning exists')
      .assert.containsText(
        '#warningAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        'Warning.',
        'Check default title for Alert of type warning')
      .assert.containsText(
        '#warningAlert > div[class*="body"] > div[class*="section"]  div[class*="content"]',
        'Alert of type Warning',
        'Check text content provided to Alert of type warning');
  },

  'Type attribute tests - Check Alert of type advisory': (browser) => {
    browser
      .assert.attributeContains(
        '#advisoryAlert',
        'class',
        'advisoryType',
        'Check that Alert of type advisory exists')
      .assert.containsText(
        '#advisoryAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        'Advisory.',
        'Check default title for Alert of type advisory')
      .assert.containsText(
        '#advisoryAlert > div[class*="body"] > div[class*="section"]  div[class*="content"]',
        'Alert of type Advisory',
        'Check text content provided to Alert of type advisory');
  },

  'Type attribute tests - Check Alert of type info': (browser) => {
    browser
      .assert.attributeContains(
        '#infoAlert',
        'class',
        'infoType',
        'Check that Alert of type info exists')
      .assert.containsText(
        '#infoAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        'Information.',
        'Check default title for Alert of type info')
      .assert.containsText(
        '#infoAlert > div[class*="body"] > div[class*="section"]  div[class*="content"]',
        'Alert of type Info',
        'Check text content provided to Alert of type info');
  },

  'Type attribute tests - Check Alert of type success': (browser) => {
    browser
      .assert.attributeContains(
        '#successAlert',
        'class',
        'successType',
        'Check that Alert of type success exists')
      .assert.containsText(
        '#successAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        'Success.',
        'Check default title for Alert of type success')
      .assert.containsText(
        '#successAlert > div[class*="body"] > div[class*="section"]  div[class*="content"]',
        'Alert of type Success',
        'Check text content provided to Alert of type success');
  },

  'Type attribute tests - Check Alert of type gap checking': (browser) => {
    browser
      .assert.attributeContains(
        '#gapCheckingAlert',
        'class',
        'gapCheckingType',
        'Check that Alert of type gap-checking exists')
      .assert.containsText(
        '#gapCheckingAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        'Required Action.',
        'Check default title for Alert of type gap-checking')
      .assert.containsText(
        '#gapCheckingAlert > div[class*="body"] > div[class*="section"]  div[class*="content"]',
        'Alert of type Gap Checking',
        'Check text content provided to Alert of type gap-checking');
  },

  'Type attribute tests - Check Alert of type outside records': (browser) => {
    browser
      .assert.attributeContains(
        '#outsideRecordsAlert',
        'class',
        'outsideRecordsType',
        'Check that Alert of type outside-records exists')
      .assert.containsText(
        '#outsideRecordsAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        'Outside Records.',
        'Check default title for Alert of type outside-records')
      .assert.containsText(
        '#outsideRecordsAlert > div[class*="body"] > div[class*="section"]  div[class*="content"]',
        'Alert of type Outside Records',
        'Check text content provided to Alert of type outside-records');
  },

  'Title attribute tests - Displays an alert of each type with a custom title': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/alert-tests/title`)
      .assert.containsText(
        '#alertAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        'Alert_Alert:',
        'Check custom title for Alert of type alert')
      .assert.containsText(
        '#errorAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        'Error_Alert:',
        'Check custom title for Alert of type error')
      .assert.containsText(
        '#warningAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        'Warning_Alert:',
        'Check custom title for Alert of type warning')
      .assert.containsText(
        '#advisoryAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        'Advisory_Alert:',
        'Check custom title for Alert of type advisory')
      .assert.containsText(
        '#infoAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        'Info_Alert:',
        'Check custom title for Alert of type info')
      .assert.containsText(
        '#successAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        'Success_Alert:',
        'Check custom title for Alert of type success')
      .assert.containsText(
        '#gapCheckingAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        'Gap_Checking_Alert:',
        'Check custom title for Alert of type gap checking')
      .assert.containsText(
        '#outsideRecordsAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        'Outside_Records_Alert:',
        'Check custom title for Alert of type outside records');
  },

  'Custom Alert Tests - Displays custom alerts with varying permutations of title, custom icon and custom status color parameters': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/alert-tests/custom`);
  },

  'Custom Alert Tests - Check first custom Alert with no icon, title or custom color': (browser) => {
    browser
      .assert.attributeContains(
        '#custom1',
        'class',
        'customType',
        'Checking that the first custom Alert exists')
      .assert.cssProperty(
        '#custom1',
        'color',
        'rgba(155, 159, 161, 1)',
        'Checking that the first custom Alert has default status bar color')
      .assert.elementNotPresent(
        '#custom1 > div[class*="body"] > div[class*="icon"] > svg',
        'Checking that the first custom Alert does not have an icon')
      .assert.containsText(
        '#custom1 > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        '',
        'Checking that the first custom Alert does not have a title')
      .assert.containsText(
        '#custom1 > div[class*="body"] > div[class*="section"]  div[class*="content"]',
        'Custom Alert with no icon, title or custom color',
        'Checking the text content for the first custom Alert');
  },

  'Custom Alert Tests - Check second custom Alert with title but no icon or custom color': (browser) => {
    browser
      .assert.attributeContains(
        '#custom2',
        'class',
        'customType',
        'Checking that the second custom Alert exists')
      .assert.cssProperty(
        '#custom2',
        'color',
        'rgba(155, 159, 161, 1)',
        'Checking that the second custom Alert has default status bar color')
      .assert.elementNotPresent(
        '#custom2 > div[class*="body"] > div[class*="icon"] > svg',
        'Checking that the second custom Alert does not have an icon')
      .assert.containsText(
        '#custom2 > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        'Custom_Alert:',
        'Checking that the second custom Alert has a title')
      .assert.containsText(
        '#custom2 > div[class*="body"] > div[class*="section"]  div[class*="content"]',
        'Custom Alert with title but no icon or custom color',
        'Checking the text content for the second custom Alert');
  },

  'Custom Alert Tests - Check third custom Alert with icon but no title or custom color': (browser) => {
    browser
      .assert.attributeContains(
        '#custom3',
        'class',
        'customType',
        'Checking that the third custom Alert exists')
      .assert.cssProperty(
        '#custom3',
        'color',
        'rgba(155, 159, 161, 1)',
        'Checking that the third custom Alert has default status bar color')
      .assert.elementPresent(
        '#custom3 > div[class*="body"] > div[class*="icon"] > svg',
        'Checking that the third custom Alert has an icon')
      .assert.containsText(
        '#custom3 > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        '',
        'Checking that the third custom Alert does not have a title')
      .assert.containsText(
        '#custom3 > div[class*="body"] > div[class*="section"]  div[class*="content"]',
        'Custom Alert with icon but no title or custom color',
        'Checking the text content for the third custom Alert');
  },

  'Custom Alert Tests - Check fourth custom Alert with custom color but no title or icon': (browser) => {
    browser
      .assert.attributeContains(
        '#custom4',
        'class',
        'customType',
        'Checking that the fourth custom Alert exists')
      .assert.cssProperty(
        '#custom4',
        'color',
        'rgba(255, 165, 0, 1)',
        'Checking that the fourth custom Alert has custom orange status bar color')
      .assert.elementNotPresent(
        '#custom4 > div[class*="body"] > div[class*="icon"] > svg',
        'Checking that the fourth custom Alert does not have an icon')
      .assert.containsText(
        '#custom4 > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        '',
        'Checking that the fourth custom Alert does not have a title')
      .assert.containsText(
        '#custom4 > div[class*="body"] > div[class*="section"]  div[class*="content"]',
        'Custom Alert with custom color but no title or icon',
        'Checking the text content for the fourth custom Alert');
  },

  'Custom Alert Tests - Check fifth custom Alert with custom color and title but no icon': (browser) => {
    browser
      .assert.attributeContains(
        '#custom5',
        'class',
        'customType',
        'Checking that the fifth custom Alert exists')
      .assert.cssProperty(
        '#custom5',
        'color',
        'rgba(255, 165, 0, 1)',
        'Checking that the fifth custom Alert has custom orange status bar color')
      .assert.elementNotPresent(
        '#custom5 > div[class*="body"] > div[class*="icon"] > svg',
        'Checking that the fifth custom Alert does not have an icon')
      .assert.containsText(
        '#custom5 > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        'Custom_Alert:',
        'Checking that the fifth custom Alert has a title')
      .assert.containsText(
        '#custom5 > div[class*="body"] > div[class*="section"]  div[class*="content"]',
        'Custom Alert with custom color and title but no icon',
        'Checking the text content for the fifth custom Alert');
  },

  'Custom Alert Tests - Check sixth custom Alert with title and icon but no custom color': (browser) => {
    browser
      .assert.attributeContains(
        '#custom6',
        'class',
        'customType',
        'Checking that the sixth custom Alert exists')
      .assert.cssProperty(
        '#custom6',
        'color',
        'rgba(155, 159, 161, 1)',
        'Checking that the sixth custom Alert has default status bar color')
      .assert.elementPresent(
        '#custom6 > div[class*="body"] > div[class*="icon"] > svg',
        'Checking that the sixth custom Alert has an icon')
      .assert.containsText(
        '#custom6 > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        'Custom_Alert:',
        'Checking that the sixth custom Alert has a title')
      .assert.containsText(
        '#custom6 > div[class*="body"] > div[class*="section"]  div[class*="content"]',
        'Custom Alert with title and icon but no custom color',
        'Checking the text content for the sixth custom Alert');
  },

  'Custom Alert Tests - Check seventh custom Alert with custom color and icon but no title': (browser) => {
    browser
      .assert.attributeContains(
        '#custom7',
        'class',
        'customType',
        'Checking that the seventh custom Alert exists')
      .assert.cssProperty(
        '#custom7',
        'color',
        'rgba(255, 165, 0, 1)',
        'Checking that the seventh custom Alert has custom orange status bar color')
      .assert.elementPresent(
        '#custom7 > div[class*="body"] > div[class*="icon"] > svg',
        'Checking that the seventh custom Alert has an icon')
      .assert.containsText(
        '#custom7 > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        '',
        'Checking that the seventh custom Alert does not have a title')
      .assert.containsText(
        '#custom7 > div[class*="body"] > div[class*="section"]  div[class*="content"]',
        'Custom Alert with custom color and icon but no title',
        'Checking the text content for the seventh custom Alert');
  },

  'Custom Alert Tests - Check eighth custom Alert with title, custom color and icon': (browser) => {
    browser
      .assert.attributeContains(
        '#custom8',
        'class',
        'customType',
        'Checking that the eighth custom Alert exists')
      .assert.cssProperty(
        '#custom8',
        'color',
        'rgba(255, 165, 0, 1)',
        'Checking that the eighth custom Alert has custom orange status bar color')
      .assert.elementPresent(
        '#custom8 > div[class*="body"] > div[class*="icon"] > svg',
        'Checking that the eighth custom Alert has an icon')
      .assert.containsText(
        '#custom8 > div[class*="body"] > div[class*="section"] > strong[class*="title"]',
        'Custom_Alert:',
        'Checking that the eighth custom Alert has a title')
      .assert.containsText(
        '#custom8 > div[class*="body"] > div[class*="section"]  div[class*="content"]',
        'Custom Alert with title, custom color and icon',
        'Checking the text content for the eighth custom Alert');
  },

  'Action Tests - Displays an Alert of type warning with an action button set via the alertAction prop': (browser) => {
    const width = browser.globals.width;
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/alert-tests/actionButton`)
      .assert.elementPresent(
        '#actionAlert > div[class*="actions"] > button',
        'Check Alert actions structure contains Button');

    if (width < windowSizes.tiny[0]) {
      browser
        .assert.attributeContains(
          '#actionAlert',
          'class',
          'narrow',
          'Check that the narrow alert className is used when width less than tiny breakpoint')
       .assert.attributeContains(
          '#actionAlert > div[class*="body"]',
          'class',
          'bodyNarrow',
          'Check that the narrow body className is used when width less than tiny breakpoint');
    } else {
      browser
        .assert.attributeContains(
          '#actionAlert',
          'class',
          'wide',
          'Check that the wide alert className is used when width greater than or equal to tiny breakpoint')
       .assert.attributeContains(
          '#actionAlert > div[class*="body"]',
          'class',
          'bodyWide',
          'Check that the wide body className is used when width greater than or equal to tiny breakpoint');
    }
  },

  'Dismiss Tests - Displays an Alert of type success with a dismiss button set via the onDismiss prop': (browser) => {
    const width = browser.globals.width;
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/alert-tests/dismissible`)
      .assert.elementPresent(
        '#dismissibleAlert > div[class*="actions"] > button',
        'Check Alert actions structure contains Button');

    if (width < windowSizes.tiny[0]) {
      browser
        .assert.attributeContains(
          '#dismissibleAlert',
          'class',
          'narrow',
          'Check that the narrow alert className is used when width less than tiny breakpoint')
       .assert.attributeContains(
          '#dismissibleAlert > div[class*="body"]',
          'class',
          'bodyNarrow',
          'Check that the narrow body className is used when width less than tiny breakpoint');
    } else {
      browser
        .assert.attributeContains(
          '#dismissibleAlert',
          'class',
          'wide',
          'Check that the wide alert className is used when width greater than or equal to tiny breakpoint')
       .assert.attributeContains(
          '#dismissibleAlert > div[class*="body"]',
          'class',
          'bodyWide',
          'Check that the wide body className is used when width greater than or equal to tiny breakpoint');
    }

    browser
      .waitForElementVisible('#dismissibleAlert', 1000)
      .click('#dismissibleAlert > div[class*="actions"] > button')
      .pause(1000)
      .assert.elementNotPresent('#dismissibleAlert', 'Check that the test page dismissed the Alert when re-rendered');
  },

  'Responsive to Parent Tests - Displays alerts with actions in small container': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/alert-tests/responsive`)
      .assert.elementPresent(
        '#actionAlert > div[class*="actions"] > button',
        'Check Alert action button rendered on warning alert')
      .assert.elementPresent(
        '#dismissibleAlert > div[class*="actions"] > button',
        'Check Alert dismiss button rendered on success alert')
      .assert.attributeContains(
        '#actionAlert',
        'class',
        'narrow',
        'Check that the narrow alert className is used for Alert with action regardless of window size')
      .assert.attributeContains(
        '#actionAlert > div[class*="body"]',
        'class',
        'bodyNarrow',
        'Check that the narrow body className is used for Alert with action regardless of window size')
      .assert.attributeContains(
        '#dismissibleAlert',
        'class',
        'narrow',
        'Check that the narrow alert className is used for dismissible alert regardless of window size')
      .assert.attributeContains(
        '#dismissibleAlert > div[class*="body"]',
        'class',
        'bodyNarrow',
        'Check that the narrow body className is used for dismissible alert regardless of window size');
  },
};
