describe('Button', () => {
  before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

  describe('Neutral', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/neutral-button'));

    Terra.should.beAccessible({ context: '#neutral' });
    Terra.should.matchScreenshot({ selector: '#neutral' });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#neutral',
      properties: {
        // Button Vars that apply to all buttons
        '--terra-button-border-radius': '50px',
        '--terra-button-line-height': '20px',
        '--terra-button-vertical-padding-bottom': '20px',
        '--terra-button-vertical-padding-top': '20px',
        '--terra-button-top': '20px',
        '--terra-button-disabled-opacity': '.7',
        '--terra-button-font-size': '50px',

        // Netural Button Vars for default state
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

  describe('De-emphasis', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/deemphasis-button'));

    Terra.should.beAccessible({ context: '#de-emphasis' });
    Terra.should.matchScreenshot({ selector: '#de-emphasis' });

    describe('De-emphasis-Hovered', () => {
      before(() => browser.moveToObject('#de-emphasisButton'));

      Terra.should.beAccessible({ context: '#de-emphasis' });
      Terra.should.matchScreenshot({ selector: '#de-emphasis' });
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

    Terra.should.themeEachCustomProperty('#action', {
      '--terra-button-action-border-radius': '26px',
    });

    describe('Action-Hovered', () => {
      before(() => browser.moveToObject('#actionButton'));

      Terra.should.beAccessible({ context: '#action' });
      Terra.should.matchScreenshot({ selector: '#action' });
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
    });

    describe('Utility-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.should.beAccessible({ context: '#utility' });
      Terra.should.matchScreenshot({ selector: '#utility' });

      Terra.should.themeEachCustomProperty('#utility', {
        '--terra-button-utility-border-radius': '50%',
      });
    });

    describe('Utility-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.should.matchScreenshot('active', { selector: '#utilityActive' });
      Terra.should.matchScreenshot('active and focused', { selector: '#utilityActiveFocusSpan' });
    });
  });

  describe('Long Text', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/long-text-button'));

    Terra.should.beAccessible({ context: '#long-text' });
    Terra.should.matchScreenshot({ selector: '#long-text' });
  });

  describe('Block', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/long-text-button'));

    Terra.should.beAccessible({ context: '#long-text-block' });
    Terra.should.matchScreenshot({ selector: '#long-text-block' });
  });

  describe('Button Types', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/button-types'));

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
          '--terra-button-text-only-horizontal-margin-left': '20px',
          '--terra-button-text-only-horizontal-margin-right': '20px',
        },
      });
    });
  });

  describe('Button with Icon', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/icon-button'));

    Terra.should.beAccessible();

    describe('Icon and Text', () => {
      Terra.should.matchScreenshot({ selector: '#iconNeutralButton' });

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '#iconNeutralButton',
        properties: {
          '--terra-button-text-and-icon-horizontal-margin-left': '20px',
          '--terra-button-text-and-icon-horizontal-margin-right': '20px',
          '--terra-button-text-and-icon-margin-right': '20px',
        },
      });
    });

    describe('Icon and Text Reversed', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/icon-button'));

      Terra.should.matchScreenshot({ selector: '#iconReversedButton' });
    });

    describe('Icon only', () => {
      Terra.should.matchScreenshot({ selector: '#iconOnlyButton' });

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '#iconOnlyButton',
        properties: {
          '--terra-button-icon-only-horizontal-margin-left': '20px',
          '--terra-button-icon-only-horizontal-margin-right': '20px',
          '--terra-button-icon-height': '10px',
          '--terra-button-icon-width': '10px',
        },
      });
    });
  });

  describe('Compact Button', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/compact-button'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#compactButton' });
  });
});
