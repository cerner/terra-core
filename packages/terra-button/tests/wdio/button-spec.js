describe('Button', () => {
  before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

  describe('Neutral', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/variants/neutral-button');
      browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
    });

    Terra.should.beAccessible({ context: '#neutral' });
    Terra.should.matchScreenshot({ selector: '#neutral' });

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

      Terra.should.beAccessible({ context: '#neutral' });
      Terra.should.matchScreenshot({ selector: '#neutral' });

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

      Terra.should.beAccessible({ context: '#neutral' });
      Terra.should.matchScreenshot({ selector: '#neutral' });

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

      Terra.should.matchScreenshot('active', { selector: '#neutralActive' });
      Terra.should.matchScreenshot('active and focused', { selector: '#neutralActiveFocusSpan' });

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

    Terra.should.beAccessible({ context: '#emphasis' });
    Terra.should.matchScreenshot({ selector: '#emphasis' });

    describe('Emphasis-Hovered', () => {
      before(() => browser.moveToObject('#emphasisButton'));

      Terra.should.beAccessible({ context: '#emphasis' });
      Terra.should.matchScreenshot({ selector: '#emphasis' });

      after(() => browser.moveToObject('#root'));
    });

    describe('Emphasis-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.should.beAccessible({ context: '#emphasis' });
      Terra.should.matchScreenshot({ selector: '#emphasis' });
    });

    describe('Emphasis-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.should.beAccessible({ context: '#emphasisActive' });
      Terra.should.matchScreenshot('active', { selector: '#emphasisActive' });

      Terra.should.beAccessible({ context: '#emphasisActiveFocus' });
      Terra.should.matchScreenshot('active and focused', { selector: '#emphasisActiveFocusSpan' });
    });
  });

  describe('Ghost', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/ghost-button'));

    Terra.should.beAccessible({ context: '#ghost' });
    Terra.should.matchScreenshot({ selector: '#ghost' });

    describe('Ghost-Hovered', () => {
      before(() => browser.moveToObject('#ghostButton'));

      Terra.should.beAccessible({ context: '#ghost' });
      Terra.should.matchScreenshot({ selector: '#ghost' });

      after(() => browser.moveToObject('#root'));
    });

    describe('Ghost-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.should.beAccessible({ context: '#ghost' });
      Terra.should.matchScreenshot({ selector: '#ghost' });
    });

    describe('Ghost-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.should.beAccessible({ context: '#ghostActive' });
      Terra.should.matchScreenshot('active', { selector: '#ghostActive' });

      Terra.should.beAccessible({ context: '#ghostActiveFocus' });
      Terra.should.matchScreenshot('active and focused', { selector: '#ghostActiveFocusSpan' });
    });
  });

  describe('De-emphasis', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/deemphasis-button'));

    Terra.should.beAccessible({ context: '#de-emphasis' });
    Terra.should.matchScreenshot({ selector: '#de-emphasis' });

    describe('De-emphasis-Hovered', () => {
      before(() => browser.moveToObject('#de-emphasisButton'));

      Terra.should.beAccessible({ context: '#de-emphasis' });
      Terra.should.matchScreenshot({ selector: '#de-emphasis' });

      after(() => browser.moveToObject('#root'));
    });

    describe('De-emphasis-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.should.beAccessible({ context: '#de-emphasis' });
      Terra.should.matchScreenshot({ selector: '#de-emphasis' });
    });

    describe('De-emphasis-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.should.matchScreenshot('active', { selector: '#de-emphasisActive' });
      Terra.should.matchScreenshot('active and focused', { selector: '#de-emphasisActiveFocusSpan' });
    });
  });

  describe('Action', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/action-button'));

    Terra.should.beAccessible({ context: '#action' });
    Terra.should.matchScreenshot({ selector: '#action' });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-button-action-border-radius': '26px',
      },
      selector: '#action',
    });

    describe('Action-Hovered', () => {
      before(() => browser.moveToObject('#actionButton'));

      Terra.should.beAccessible({ context: '#action' });
      Terra.should.matchScreenshot({ selector: '#action' });

      after(() => browser.moveToObject('#root'));
    });

    describe('Action-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.should.beAccessible({ context: '#action' });
      Terra.should.matchScreenshot({ selector: '#action' });
    });

    describe('Action-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.should.matchScreenshot('active', { selector: '#actionActive' });
      Terra.should.matchScreenshot('active and focused', { selector: '#actionActiveFocusSpan' });
    });
  });

  describe('Utility', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/utility-button'));

    Terra.should.beAccessible({ context: '#utility' });
    Terra.should.matchScreenshot({ selector: '#utility' });

    describe('Utility-Hovered', () => {
      before(() => browser.moveToObject('#utilityButton'));

      Terra.should.beAccessible({ context: '#utility' });
      Terra.should.matchScreenshot({ selector: '#utility' });

      after(() => browser.moveToObject('#root'));
    });

    describe('Utility-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.should.beAccessible({ context: '#utility' });
      Terra.should.matchScreenshot({ selector: '#utility' });

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

      Terra.should.matchScreenshot('active', { selector: '#utilityActive' });
      Terra.should.matchScreenshot('active and focused', { selector: '#utilityActiveFocusSpan' });
    });
  });

  describe('Long Text', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/long-text-button');
      browser.moveToObject('#root');
    });

    Terra.should.beAccessible({ context: '#long-text' });
    Terra.should.matchScreenshot({ selector: '#long-text' });
  });

  describe('Block', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/long-text-button');
      browser.moveToObject('#root');
    });

    Terra.should.beAccessible({ context: '#long-text-block' });
    Terra.should.matchScreenshot({ selector: '#long-text-block' });
  });

  describe('Button Types', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/button-types');
      browser.moveToObject('#root');
    });

    Terra.should.beAccessible();

    describe('Type reset', () => {
      Terra.should.matchScreenshot({ selector: '#buttonWithTypeReset' });
    });

    describe('Type submit', () => {
      Terra.should.matchScreenshot({ selector: '#buttonWithTypeSubmit' });
    });

    describe('Type button', () => {
      Terra.should.matchScreenshot({ selector: '#buttonWithTypeButton' });

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

    Terra.should.beAccessible();

    describe('Icon and Text', () => {
      Terra.should.matchScreenshot({ selector: '#iconNeutralButton' });

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
      Terra.should.matchScreenshot({ selector: '#iconReversedButton' });
    });

    describe('Icon only', () => {
      Terra.should.matchScreenshot({ selector: '#iconOnlyButton' });

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

    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#compactButton' });
  });
});
