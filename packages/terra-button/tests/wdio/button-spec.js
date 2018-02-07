/* global browser, Terra, before */
describe('Button', () => {
  before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

  describe('Neutral', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/neutral'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();

    Terra.should.themeEachCustomProperty({
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
    });

    describe('Neutral-Hovered', () => {
      beforeEach(() => browser.moveToObject('button'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();

      Terra.should.themeEachCustomProperty({
        '--terra-button-hover-background-color-neutral': 'green',
        '--terra-button-hover-color-neutral': 'purple',
      });
    });

    describe('Neutral-Keyboard Focus', () => {
      beforeEach(() => browser.keys('Tab'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();

      Terra.should.themeEachCustomProperty(
        '#neutral',
        {
          '--terra-button-focus-background-color-neutral': 'purple',
          '--terra-button-focus-border-color-neutral': 'red',
          '--terra-button-focus-box-shadow-neutral': '0 0 1px 3px rgba(76, 178, 233, 0.5)',
        },
      );
    });

    describe('Neutral-Active', () => {
      beforeEach(() => browser.url('/#/tests/button-tests/active-styles'));

      Terra.should.themeEachCustomProperty(
        '#neutral',
        {
          '--terra-button-active-and-focus-background-color-neutral': 'purple',
          '--terra-button-active-and-focus-border-color-neutral': 'purple',
          '--terra-button-active-and-focus-box-shadow-neutral': '0 0 7px 4px purple, 0 0 1px 3px rgba(76, 178, 233, 0.5)',
          '--terra-button-active-background-color-neutral': 'purple',
          '--terra-button-active-border-color-neutral': 'purple',
        },
      );

      Terra.should.matchScreenshot('active', { selector: '#neutralActive' });
      Terra.should.matchScreenshot('active and focused', { selector: '#neutralActiveFocusSpan' });
    });
  });

  describe('Emphasis', () => {
    before(() => browser.url('/#/tests/button-tests/emphasis'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();

    describe('Emphasis-Hovered', () => {
      before(() => browser.moveToObject('button'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Emphasis-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Emphasis-Active', () => {
      beforeEach(() => browser.url('/#/tests/button-tests/active-styles'));

      Terra.should.beAccessible({ context: '#emphasisActive' });
      Terra.should.matchScreenshot('active', { selector: '#emphasisActive' });

      Terra.should.beAccessible({ context: '#emphasisActiveFocus' });
      Terra.should.matchScreenshot('active and focused', { selector: '#emphasisActiveFocusSpan' });
    });
  });

  describe('De-emphasis', () => {
    before(() => browser.url('/#/tests/button-tests/de-emphasis'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();

    describe('De-emphasis-Hovered', () => {
      before(() => browser.moveToObject('button'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('De-emphasis-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('De-emphasis-Active', () => {
      beforeEach(() => browser.url('/#/tests/button-tests/active-styles'));

      Terra.should.matchScreenshot('active', { selector: '#de-emphasisActive' });
      Terra.should.matchScreenshot('active and focused', { selector: '#de-emphasisActiveFocusSpan' });
    });
  });

  describe('Action', () => {
    before(() => browser.url('/#/tests/button-tests/action'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();

    Terra.should.themeEachCustomProperty({
      '--terra-button-action-border-radius': '26px',
    });

    describe('Action-Hovered', () => {
      before(() => browser.moveToObject('button'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Action-Keyboard Focus', () => {
      beforeEach(() => browser.keys('Tab'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Action-Active', () => {
      beforeEach(() => browser.url('/#/tests/button-tests/active-styles'));

      Terra.should.matchScreenshot('active', { selector: '#actionActive' });
      Terra.should.matchScreenshot('active and focused', { selector: '#actionActiveFocusSpan' });
    });
  });

  describe('Utility', () => {
    before(() => browser.url('/#/tests/button-tests/utility'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();

    describe('Utility-Hovered', () => {
      before(() => browser.moveToObject('button'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Utility-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();

      Terra.should.themeEachCustomProperty({
        '--terra-button-utility-border-radius': '50%',
      });
    });

    describe('Utility-Active', () => {
      beforeEach(() => browser.url('/#/tests/button-tests/active-styles'));

      Terra.should.matchScreenshot('active', { selector: '#utilityActive' });
      Terra.should.matchScreenshot('active and focused', { selector: '#utilityActiveFocusSpan' });
    });
  });

  describe('Long Text', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/long-text'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Block', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/block'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Button Types', () => {
    describe('Type button', () => {
      beforeEach(() => browser.url('/#/tests/button-tests/with-type-button'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot({ selector: 'button' });

      Terra.should.themeEachCustomProperty(
        'button',
        {
          '--terra-button-text-only-horizontal-margin': '20px',
        },
      );
    });

    describe('Type reset', () => {
      beforeEach(() => browser.url('/#/tests/button-tests/with-type-reset'));
      Terra.should.beAccessible();
      Terra.should.matchScreenshot({ selector: 'button' });
    });

    describe('Type submit', () => {
      beforeEach(() => browser.url('/#/tests/button-tests/with-type-submit'));
      Terra.should.beAccessible();
      Terra.should.matchScreenshot({ selector: 'button' });
    });
  });

  describe('Button with Icon', () => {
    describe('Icon and Text', () => {
      beforeEach(() => browser.url('/#/tests/button-tests/icon-neutral'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot({ selector: '#iconNeutralButton' });

      Terra.should.themeEachCustomProperty(
        '#iconNeutralButton',
        {
          '--terra-button-text-and-icon-horizontal-margin': '20px',
          '--terra-button-text-and-icon-margin-between': '20px',
        },
      );
    });

    describe('Icon and Text Reversed', () => {
      beforeEach(() => browser.url('/#/tests/button-tests/icon-reversed'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot({ selector: '#iconReversedButton' });
    });

    describe('Icon only', () => {
      beforeEach(() => browser.url('/#/tests/button-tests/icon-only'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot({ selector: '#iconOnlyButton' });

      Terra.should.themeEachCustomProperty(
        '#iconOnlyButton',
        {
          '--terra-button-icon-only-horizontal-margin': '20px',
          '--terra-button-icon-height': '10px',
          '--terra-button-icon-width': '10px',
        },
      );
    });
  });

  describe('Compact Button', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/compact'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#compactButton' });
  });
});
