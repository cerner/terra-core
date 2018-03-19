/* global browser, Terra, before */
describe('Button', () => {
  before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

  describe('Neutral', () => {
    beforeEach(() => browser.url('/#/raw/tests/button/variants/neutral-button'));

    Terra.should.beAccessible({ context: '#neutral' });
    Terra.should.matchScreenshot({ selector: '#neutral' });

    Terra.should.themeEachCustomProperty('#neutral', {
      // Button Vars that apply to all buttons
      '--terra-button-border-radius': '50px',
      '--terra-button-line-height': '20px',
      '--terra-button-vertical-padding': '20px',
      '--terra-button-disabled-opacity': '.7',
      '--terra-button-font-size': '50px',

      // Netural Button Vars for default state
      '--terra-button-background-color-neutral': 'purple',
      '--terra-button-border-color-neutral': 'purple',
      '--terra-button-box-shadow-neutral': '0 0 7px 4px purple',
      '--terra-button-color-neutral': 'purple',
      '--terra-button-font-weight-neutral': 'bold',
    });

    describe('Neutral-Hovered', () => {
      beforeEach(() => browser.moveToObject('#neutralButton'));

      Terra.should.beAccessible({ context: '#neutral' });
      Terra.should.matchScreenshot({ selector: '#neutral' });

      Terra.should.themeEachCustomProperty('#neutral', {
        '--terra-button-hover-background-color-neutral': 'green',
        '--terra-button-hover-color-neutral': 'purple',
      });
    });

    describe('Neutral-Keyboard Focus', () => {
      beforeEach(() => browser.keys('Tab'));

      Terra.should.beAccessible({ context: '#neutral' });
      Terra.should.matchScreenshot({ selector: '#neutral' });

      Terra.should.themeEachCustomProperty('#neutral', {
        '--terra-button-focus-background-color-neutral': 'purple',
        '--terra-button-focus-border-color-neutral': 'red',
        '--terra-button-focus-box-shadow-neutral': '0 0 1px 3px rgba(76, 178, 233, 0.5)',
      });
    });

    describe('Neutral-Active', () => {
      beforeEach(() => browser.url('/#/raw/tests/button/active-variant-buttons'));

      Terra.should.themeEachCustomProperty('#neutral', {
        '--terra-button-active-and-focus-background-color-neutral': 'purple',
        '--terra-button-active-and-focus-border-color-neutral': 'purple',
        '--terra-button-active-and-focus-box-shadow-neutral': '0 0 7px 4px purple, 0 0 1px 3px rgba(76, 178, 233, 0.5)',
        '--terra-button-active-background-color-neutral': 'purple',
        '--terra-button-active-border-color-neutral': 'purple',
      });

      Terra.should.matchScreenshot('active', { selector: '#neutralActive' });
      Terra.should.matchScreenshot('active and focused', { selector: '#neutralActiveFocusSpan' });
    });
  });

  describe('Emphasis', () => {
    before(() => browser.url('/#/raw/tests/button/variants/emphasis-button'));

    Terra.should.beAccessible({ context: '#emphasis' });
    Terra.should.matchScreenshot({ selector: '#emphasis' });

    describe('Emphasis-Hovered', () => {
      beforeEach(() => browser.moveToObject('#emphasisButton'));

      Terra.should.beAccessible({ context: '#emphasis' });
      Terra.should.matchScreenshot({ selector: '#emphasis' });
    });

    describe('Emphasis-Keyboard Focus', () => {
      beforeEach(() => browser.keys('Tab'));

      Terra.should.beAccessible({ context: '#emphasis' });
      Terra.should.matchScreenshot({ selector: '#emphasis' });
    });

    describe('Emphasis-Active', () => {
      beforeEach(() => browser.url('/#/raw/tests/button/active-variant-buttons'));

      Terra.should.beAccessible({ context: '#emphasisActive' });
      Terra.should.matchScreenshot('active', { selector: '#emphasisActive' });

      Terra.should.beAccessible({ context: '#emphasisActiveFocus' });
      Terra.should.matchScreenshot('active and focused', { selector: '#emphasisActiveFocusSpan' });
    });
  });

  describe('De-emphasis', () => {
    beforeEach(() => browser.url('/#/raw/tests/button/variants/deemphasis-button'));

    Terra.should.beAccessible({ context: '#de-emphasis' });
    Terra.should.matchScreenshot({ selector: '#de-emphasis' });

    describe('De-emphasis-Hovered', () => {
      beforeEach(() => browser.moveToObject('#de-emphasisButton'));

      Terra.should.beAccessible({ context: '#de-emphasis' });
      Terra.should.matchScreenshot({ selector: '#de-emphasis' });
    });

    describe('De-emphasis-Keyboard Focus', () => {
      beforeEach(() => browser.keys('Tab'));

      Terra.should.beAccessible({ context: '#de-emphasis' });
      Terra.should.matchScreenshot({ selector: '#de-emphasis' });
    });

    describe('De-emphasis-Active', () => {
      beforeEach(() => browser.url('/#/raw/tests/button/active-variant-buttons'));

      Terra.should.matchScreenshot('active', { selector: '#de-emphasisActive' });
      Terra.should.matchScreenshot('active and focused', { selector: '#de-emphasisActiveFocusSpan' });
    });
  });

  describe('Action', () => {
    before(() => browser.url('/#/raw/tests/button/variants/action-button'));

    Terra.should.beAccessible({ context: '#action' });
    Terra.should.matchScreenshot({ selector: '#action' });

    Terra.should.themeEachCustomProperty('#action', {
      '--terra-button-action-border-radius': '26px',
    });

    describe('Action-Hovered', () => {
      beforeEach(() => browser.moveToObject('#actionButton'));

      Terra.should.beAccessible({ context: '#action' });
      Terra.should.matchScreenshot({ selector: '#action' });
    });

    describe('Action-Keyboard Focus', () => {
      beforeEach(() => browser.keys('Tab'));

      Terra.should.beAccessible({ context: '#action' });
      Terra.should.matchScreenshot({ selector: '#action' });
    });

    describe('Action-Active', () => {
      beforeEach(() => browser.url('/#/raw/tests/button/active-variant-buttons'));

      Terra.should.matchScreenshot('active', { selector: '#actionActive' });
      Terra.should.matchScreenshot('active and focused', { selector: '#actionActiveFocusSpan' });
    });
  });

  describe('Utility', () => {
    before(() => browser.url('/#/raw/tests/button/variants/utility-button'));

    Terra.should.beAccessible({ context: '#utility' });
    Terra.should.matchScreenshot({ selector: '#utility' });

    describe('Utility-Hovered', () => {
      beforeEach(() => browser.moveToObject('#utilityButton'));

      Terra.should.beAccessible({ context: '#utility' });
      Terra.should.matchScreenshot({ selector: '#utility' });
    });

    describe('Utility-Keyboard Focus', () => {
      beforeEach(() => browser.keys('Tab'));

      Terra.should.beAccessible({ context: '#utility' });
      Terra.should.matchScreenshot({ selector: '#utility' });

      Terra.should.themeEachCustomProperty('#utility', {
        '--terra-button-utility-border-radius': '50%',
      });
    });

    describe('Utility-Active', () => {
      beforeEach(() => browser.url('/#/raw/tests/button/active-variant-buttons'));

      Terra.should.matchScreenshot('active', { selector: '#utilityActive' });
      Terra.should.matchScreenshot('active and focused', { selector: '#utilityActiveFocusSpan' });
    });
  });

  describe('Long Text', () => {
    beforeEach(() => browser.url('/#/raw/tests/button/long-text-button'));

    Terra.should.beAccessible({ context: '#long-text' });
    Terra.should.matchScreenshot({ selector: '#long-text' });
  });

  describe('Block', () => {
    beforeEach(() => browser.url('/#/raw/tests/button/long-text-button'));

    Terra.should.beAccessible({ context: '#long-text-block' });
    Terra.should.matchScreenshot({ selector: '#long-text-block' });
  });

  describe('Button Types', () => {
    beforeEach(() => browser.url('/#/raw/tests/button/button-types'));
    Terra.should.beAccessible();

    describe('Type button', () => {
      Terra.should.matchScreenshot({ selector: '#buttonWithTypeButton' });

      Terra.should.themeEachCustomProperty('#buttonWithTypeButton', {
        '--terra-button-text-only-horizontal-margin': '20px',
      });
    });

    describe('Type reset', () => {
      Terra.should.matchScreenshot({ selector: '#buttonWithTypeReset' });
    });

    describe('Type submit', () => {
      Terra.should.matchScreenshot({ selector: '#buttonWithTypeSubmit' });
    });
  });

  describe('Button with Icon', () => {
    beforeEach(() => browser.url('/#/raw/tests/button/icon-button'));
    Terra.should.beAccessible();

    describe('Icon and Text', () => {
      Terra.should.matchScreenshot({ selector: '#iconNeutralButton' });

      Terra.should.themeEachCustomProperty('#iconNeutralButton', {
        '--terra-button-text-and-icon-horizontal-margin': '20px',
        '--terra-button-text-and-icon-margin-between': '20px',
      });
    });

    describe('Icon and Text Reversed', () => {
      Terra.should.matchScreenshot({ selector: '#iconReversedButton' });
    });

    describe('Icon only', () => {
      Terra.should.matchScreenshot({ selector: '#iconOnlyButton' });

      Terra.should.themeEachCustomProperty('#iconOnlyButton', {
        '--terra-button-icon-only-horizontal-margin': '20px',
        '--terra-button-icon-height': '10px',
        '--terra-button-icon-width': '10px',
      });
    });
  });

  describe('Compact Button', () => {
    beforeEach(() => browser.url('/#/raw/tests/button/compact-button'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#compactButton' });
  });
});
