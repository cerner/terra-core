describe('Button', () => {
  before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

  describe('Neutral', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/variants/neutral-button');
      browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
    });

    Terra.it.isAccessible({ context: '#neutral' });
    Terra.it.matchesScreenshot({ selector: '#neutral' });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#neutral',
      properties: {
        // Button Vars that apply to all buttons
        '--terra-button-border-radius': '50px',
        '--terra-button-line-height': '20px',
        '--terra-button-padding-bottom': '20px',
        '--terra-button-padding-top': '20px',
        '--terra-button-top': '20px',
        '--terra-button-disabled-opacity': '.7',
        '--terra-button-font-size': '50px',

        // Neutral Button Vars for default state
        '--terra-button-background-color-neutral': 'purple',
        '--terra-button-border-color-neutral': 'purple',
        '--terra-button-box-shadow-neutral': '0 0 7px 4px purple',
        '--terra-button-color-neutral': 'purple',
        '--terra-button-font-weight-neutral': 'bold',
      },
    });

    describe('Neutral-Hovered', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-button/button/variants/neutral-button');
        browser.moveToObject('#neutralButton');
      });

      Terra.it.isAccessible({ context: '#neutral' });
      Terra.it.matchesScreenshot({ selector: '#neutral' });

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '#neutral',
        properties: {
          '--terra-button-hover-background-color-neutral': 'green',
          '--terra-button-hover-color-neutral': 'purple',
        },
      });

      after(() => browser.moveToObject('#root'));
    });

    describe('Neutral-Keyboard Focus', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-button/button/variants/neutral-button');
        browser.keys('Tab');
      });

      Terra.it.isAccessible({ context: '#neutral' });
      Terra.it.matchesScreenshot({ selector: '#neutral' });

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '#neutral',
        properties: {
          '--terra-button-focus-background-color-neutral': 'purple',
          '--terra-button-focus-border-color-neutral': 'red',
          '--terra-button-focus-box-shadow-neutral': '0 0 1px 3px rgba(76, 178, 233, 0.5)',
        },
      });
    });

    describe('Neutral-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.it.matchesScreenshot('active', { selector: '#neutralActive' });
      Terra.it.matchesScreenshot('active and focused', { selector: '#neutralActiveFocusSpan' });

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '#neutral',
        properties: {
          '--terra-button-active-and-focus-background-color-neutral': 'purple',
          '--terra-button-active-and-focus-border-color-neutral': 'purple',
          '--terra-button-active-and-focus-box-shadow-neutral': '0 0 7px 4px purple, 0 0 1px 3px rgba(76, 178, 233, 0.5)',
          '--terra-button-active-background-color-neutral': 'purple',
          '--terra-button-active-border-color-neutral': 'purple',
        },
      });
    });
  });

  describe('Emphasis', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/emphasis-button'));

    Terra.it.isAccessible({ context: '#emphasis' });
    Terra.it.matchesScreenshot({ selector: '#emphasis' });

    describe('Emphasis-Hovered', () => {
      before(() => browser.moveToObject('#emphasisButton'));

      Terra.it.isAccessible({ context: '#emphasis' });
      Terra.it.matchesScreenshot({ selector: '#emphasis' });

      after(() => browser.moveToObject('#root'));
    });

    describe('Emphasis-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.it.isAccessible({ context: '#emphasis' });
      Terra.it.matchesScreenshot({ selector: '#emphasis' });
    });

    describe('Emphasis-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.it.isAccessible({ context: '#emphasisActive' });
      Terra.it.matchesScreenshot('active', { selector: '#emphasisActive' });

      Terra.it.isAccessible({ context: '#emphasisActiveFocus' });
      Terra.it.matchesScreenshot('active and focused', { selector: '#emphasisActiveFocusSpan' });
    });
  });

  describe('Ghost', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/ghost-button'));

    Terra.it.isAccessible({ context: '#ghost' });
    Terra.it.matchesScreenshot({ selector: '#ghost' });

    describe('Ghost-Hovered', () => {
      before(() => browser.moveToObject('#ghostButton'));

      Terra.it.isAccessible({ context: '#ghost' });
      Terra.it.matchesScreenshot({ selector: '#ghost' });

      after(() => browser.moveToObject('#root'));
    });

    describe('Ghost-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.it.isAccessible({ context: '#ghost' });
      Terra.it.matchesScreenshot({ selector: '#ghost' });
    });

    describe('Ghost-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.it.isAccessible({ context: '#ghostActive' });
      Terra.it.matchesScreenshot('active', { selector: '#ghostActive' });

      Terra.it.isAccessible({ context: '#ghostActiveFocus' });
      Terra.it.matchesScreenshot('active and focused', { selector: '#ghostActiveFocusSpan' });
    });
  });

  describe('De-emphasis', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/deemphasis-button'));

    Terra.it.isAccessible({ context: '#de-emphasis' });
    Terra.it.matchesScreenshot({ selector: '#de-emphasis' });

    describe('De-emphasis-Hovered', () => {
      before(() => browser.moveToObject('#de-emphasisButton'));

      Terra.it.isAccessible({ context: '#de-emphasis' });
      Terra.it.matchesScreenshot({ selector: '#de-emphasis' });

      after(() => browser.moveToObject('#root'));
    });

    describe('De-emphasis-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.it.isAccessible({ context: '#de-emphasis' });
      Terra.it.matchesScreenshot({ selector: '#de-emphasis' });
    });

    describe('De-emphasis-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.it.matchesScreenshot('active', { selector: '#de-emphasisActive' });
      Terra.it.matchesScreenshot('active and focused', { selector: '#de-emphasisActiveFocusSpan' });
    });
  });

  describe('Action', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/action-button'));

    Terra.it.isAccessible({ context: '#action' });
    Terra.it.matchesScreenshot({ selector: '#action' });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-button-action-border-radius': '26px',
      },
      selector: '#action',
    });

    describe('Action-Hovered', () => {
      before(() => browser.moveToObject('#actionButton'));

      Terra.it.isAccessible({ context: '#action' });
      Terra.it.matchesScreenshot({ selector: '#action' });

      after(() => browser.moveToObject('#root'));
    });

    describe('Action-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.it.isAccessible({ context: '#action' });
      Terra.it.matchesScreenshot({ selector: '#action' });
    });

    describe('Action-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.it.matchesScreenshot('active', { selector: '#actionActive' });
      Terra.it.matchesScreenshot('active and focused', { selector: '#actionActiveFocusSpan' });
    });
  });

  describe('Utility', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/utility-button'));

    Terra.it.isAccessible({ context: '#utility' });
    Terra.it.matchesScreenshot({ selector: '#utility' });

    describe('Utility-Hovered', () => {
      before(() => browser.moveToObject('#utilityButton'));

      Terra.it.isAccessible({ context: '#utility' });
      Terra.it.matchesScreenshot({ selector: '#utility' });

      after(() => browser.moveToObject('#root'));
    });

    describe('Utility-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.it.isAccessible({ context: '#utility' });
      Terra.it.matchesScreenshot({ selector: '#utility' });

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-button-utility-border-radius': '50%',
        },
        selector: '#utility',
      });
    });

    describe('Utility-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.it.matchesScreenshot('active', { selector: '#utilityActive' });
      Terra.it.matchesScreenshot('active and focused', { selector: '#utilityActiveFocusSpan' });
    });
  });

  describe('Long Text', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/long-text-button');
      browser.moveToObject('#root');
    });

    Terra.it.isAccessible({ context: '#long-text' });
    Terra.it.matchesScreenshot({ selector: '#long-text' });
  });

  describe('Block', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/long-text-button');
      browser.moveToObject('#root');
    });

    Terra.it.isAccessible({ context: '#long-text-block' });
    Terra.it.matchesScreenshot({ selector: '#long-text-block' });
  });

  describe('Button Types', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/button-types');
      browser.moveToObject('#root');
    });

    Terra.it.isAccessible();

    describe('Type reset', () => {
      Terra.it.matchesScreenshot({ selector: '#buttonWithTypeReset' });
    });

    describe('Type submit', () => {
      Terra.it.matchesScreenshot({ selector: '#buttonWithTypeSubmit' });
    });

    describe('Type button', () => {
      Terra.it.matchesScreenshot({ selector: '#buttonWithTypeButton' });

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '#buttonWithTypeButton',
        properties: {
          '--terra-button-text-only-margin-left': '20px',
          '--terra-button-text-only-margin-right': '20px',
        },
      });
    });
  });

  describe('Button with Icon', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/icon-button');
      browser.moveToObject('#root');
    });

    Terra.it.isAccessible();

    describe('Icon and Text', () => {
      Terra.it.matchesScreenshot({ selector: '#iconNeutralButton' });

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '#iconNeutralButton',
        properties: {
          '--terra-button-text-and-icon-margin-left': '20px',
          '--terra-button-text-and-icon-margin-right': '20px',
          '--terra-button-text-first-margin-right': '20px',
          '--terra-button-icon-first-margin-right': '20px',
        },
      });
    });

    describe('Icon and Text Reversed', () => {
      Terra.it.matchesScreenshot({ selector: '#iconReversedButton' });
    });

    describe('Icon only', () => {
      Terra.it.matchesScreenshot({ selector: '#iconOnlyButton' });

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '#iconOnlyButton',
        properties: {
          '--terra-button-icon-only-margin-left': '20px',
          '--terra-button-icon-only-margin-right': '20px',
          '--terra-button-icon-height': '10px',
          '--terra-button-icon-width': '10px',
        },
      });
    });
  });

  describe('Compact Button', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/compact-button');
      browser.moveToObject('#root');
    });

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot({ selector: '#compactButton' });
  });
});
