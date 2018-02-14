/* global browser, Terra, before */
const shouldTheme = (customProperties, selector) => {
  const selectedElement = selector || '[data-reactroot]';
  Object.entries(customProperties).forEach(([key, value]) => {
    it(`themed [${key}]`, () => {
      browser.execute(`document.documentElement.style.setProperty('${key}', '${value}')`);
      expect(browser.checkElement(selectedElement)).to.matchReference();
    });
  });
};

describe('Button', () => {
  before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

  describe('Neutral', () => {
    beforeEach(() => browser.url('/#/raw/tests/button/active-variant-buttons'));

    Terra.should.beAccessible({ context: '#neutral' });
    Terra.should.matchScreenshot({ selector: '#neutral' });

    shouldTheme({
      // Button Vars that apply to all buttons
      '--terra-button-border-radius': '50px',
      '--terra-button-line-height': '20px',
      '--terra-button-vertical-padding': '20px',
      '--terra-button-disabled-opacity': '.7',

      // Netural Button Vars for default state
      '--terra-button-background-color-neutral': 'purple',
      '--terra-button-border-color-neutral': 'purple',
      '--terra-button-box-shadow-neutral': '0 0 7px 4px purple',
      '--terra-button-color-neutral': 'purple',
      '--terra-button-font-weight-neutral': 'bold',
    }, '#neutral');

    describe('Neutral-Hovered', () => {
      beforeEach(() => browser.moveToObject('button'));

      Terra.should.beAccessible({ context: '#neutral' });
      Terra.should.matchScreenshot({ selector: '#neutral' });

      shouldTheme({
        '--terra-button-hover-background-color-neutral': 'green',
        '--terra-button-hover-color-neutral': 'purple',
      }, '#neutral');
    });

    describe('Neutral-Keyboard Focus', () => {
      beforeEach(() => browser.keys('Tab'));

      Terra.should.beAccessible({ context: '#neutral' });
      Terra.should.matchScreenshot({ selector: '#neutral' });

      shouldTheme({
        '--terra-button-focus-background-color-neutral': 'purple',
        '--terra-button-focus-border-color-neutral': 'red',
        '--terra-button-focus-box-shadow-neutral': '0 0 1px 3px rgba(76, 178, 233, 0.5)',
      }, '#neutral');
    });

    describe('Neutral-Active', () => {
      beforeEach(() => browser.url('/#/raw/tests/button/active-variant-buttons'));

      shouldTheme({
        '--terra-button-active-and-focus-background-color-neutral': 'purple',
        '--terra-button-active-and-focus-border-color-neutral': 'purple',
        '--terra-button-active-and-focus-box-shadow-neutral': '0 0 7px 4px purple, 0 0 1px 3px rgba(76, 178, 233, 0.5)',
        '--terra-button-active-background-color-neutral': 'purple',
        '--terra-button-active-border-color-neutral': 'purple',
      }, '#neutral');

      Terra.should.matchScreenshot('active', { selector: '#neutralActive' });
      Terra.should.matchScreenshot('active and focused', { selector: '#neutralActiveFocusSpan' });
    });
  });

  describe('Emphasis', () => {
    before(() => browser.url('/#/raw/tests/button/active-variant-buttons'));

    Terra.should.beAccessible({ context: '#emphasis' });
    Terra.should.matchScreenshot({ selector: '#emphasis' });

    describe('Emphasis-Hovered', () => {
      before(() => browser.moveToObject('button'));

      Terra.should.beAccessible({ context: '#emphasis' });
      Terra.should.matchScreenshot({ selector: '#emphasis' });
    });

    describe('Emphasis-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

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
    before(() => browser.url('/#/raw/tests/button/active-variant-buttons'));

    Terra.should.beAccessible({ context: '#de-emphasis' });
    Terra.should.matchScreenshot({ selector: '#de-emphasis' });

    describe('De-emphasis-Hovered', () => {
      before(() => browser.moveToObject('button'));

      Terra.should.beAccessible({ context: '#de-emphasis' });
      Terra.should.matchScreenshot({ selector: '#de-emphasis' });
    });

    describe('De-emphasis-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

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
    before(() => browser.url('/#/raw/tests/button/active-variant-buttons'));

    Terra.should.beAccessible({ context: '#action' });
    Terra.should.matchScreenshot({ selector: '#action' });

    shouldTheme({
      '--terra-button-action-border-radius': '26px',
    }, '#action');

    describe('Action-Hovered', () => {
      before(() => browser.moveToObject('button'));

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
    before(() => browser.url('/#/raw/tests/button/active-variant-buttons'));

    Terra.should.beAccessible({ context: '#utility' });
    Terra.should.matchScreenshot({ selector: '#utility' });

    describe('Utility-Hovered', () => {
      before(() => browser.moveToObject('button'));

      Terra.should.beAccessible({ context: '#utility' });
      Terra.should.matchScreenshot({ selector: '#utility' });
    });

    describe('Utility-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.should.beAccessible({ context: '#utility' });
      Terra.should.matchScreenshot({ selector: '#utility' });

      shouldTheme('#utility', {
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

    describe('Type button', () => {
      Terra.should.beAccessible({ context: '#buttonWithTypeButton' });
      Terra.should.matchScreenshot({ selector: '#buttonWithTypeButton' });

      shouldTheme({
        '--terra-button-text-only-horizontal-margin': '20px',
      }, '#buttonWithTypeButton');
    });

    describe('Type reset', () => {
      Terra.should.beAccessible({ context: '#buttonWithTypeReset' });
      Terra.should.matchScreenshot({ selector: '#buttonWithTypeReset' });
    });

    describe('Type submit', () => {
      Terra.should.beAccessible({ context: '#buttonWithTypeSubmit' });
      Terra.should.matchScreenshot({ selector: '#buttonWithTypeSubmit' });
    });
  });

  describe('Button with Icon', () => {
    before(() => browser.url('/#/raw/tests/button/icon-button'));

    describe('Icon and Text', () => {
      Terra.should.beAccessible({ context: '#iconNeutralButton' });
      Terra.should.matchScreenshot({ selector: '#iconNeutralButton' });

      shouldTheme({
        '--terra-button-text-and-icon-horizontal-margin': '20px',
        '--terra-button-text-and-icon-margin-between': '20px',
      }, '#iconNeutralButton');
    });

    describe('Icon and Text Reversed', () => {
      Terra.should.beAccessible({ context: '#iconReversedButton' });
      Terra.should.matchScreenshot({ selector: '#iconReversedButton' });
    });

    describe('Icon only', () => {
      Terra.should.beAccessible({ context: '#iconOnlyButton' });
      Terra.should.matchScreenshot({ selector: '#iconOnlyButton' });

      shouldTheme({
        '--terra-button-icon-only-horizontal-margin': '20px',
        '--terra-button-icon-height': '10px',
        '--terra-button-icon-width': '10px',
      }, '#iconOnlyButton');
    });
  });
});
