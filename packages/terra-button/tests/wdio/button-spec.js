/* global browser, Terra, before */
const shouldTheme = (customProperties) => {
  Object.entries(customProperties).forEach(([key, value]) => {
    it(`themed [${key}]`, () => {
      browser.setCSSCustomProps({ [key]: value });
      expect(browser.checkElement('[data-reactroot]')).to.matchReference();
    });
  });
};

describe('Button', () => {
  before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

  describe('Neutral', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/neutral'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();

    shouldTheme({
      // Button Vars that apply to all buttons
      '--terra-button-border-radius': '50px',
      '--terra-button-line-height': '20px',
      '--terra-button-padding-bottom': '20px',
      '--terra-button-padding-top': '20px',
      '--terra-button-disabled-opacity': '.7',

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

      shouldTheme({
        '--terra-button-hover-background-color-neutral': 'green',
        '--terra-button-hover-color-neutral': 'purple',
      });
    });

    describe('Neutral-Keyboard Focus', () => {
      beforeEach(() => browser.keys('Tab'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();

      shouldTheme({
        '--terra-button-focus-background-color-neutral': 'purple',
        '--terra-button-focus-border-color-neutral': 'red',
        '--terra-button-focus-box-shadow-neutral': '0 0 1px 3px rgba(76, 178, 233, 0.5)',
      });
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
  });

  describe('Action', () => {
    before(() => browser.url('/#/tests/button-tests/action'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();

    shouldTheme({
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

      shouldTheme({
        '--terra-button-utility-border-radius': '50%',
      });
    });
  });

  describe('Long Text', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/long-text'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();

    shouldTheme({
      '--terra-button-text-align': 'center',
    });
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
      Terra.should.matchScreenshot();

      shouldTheme({
        '--terra-button-text-only-margin-left': '20px',
        '--terra-button-text-only-margin-right': '20px',
      });
    });

    describe('Type reset', () => {
      beforeEach(() => browser.url('/#/tests/button-tests/with-type-reset'));
      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Type submit', () => {
      beforeEach(() => browser.url('/#/tests/button-tests/with-type-submit'));
      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });
  });

  describe('Button with Icon', () => {
    describe('Icon and Text', () => {
      beforeEach(() => browser.url('/#/tests/button-tests/icon-neutral'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();

      shouldTheme({
        '--terra-button-text-left-margin-left': '20px',
        '--terra-button-text-left-margin-right': '20px',
        '--terra-button-icon-right-margin-right': '20px',
      });
    });

    describe('Icon and Text Reversed', () => {
      beforeEach(() => browser.url('/#/tests/button-tests/icon-reversed'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();

      shouldTheme({
        '--terra-button-text-right-margin-right': '20px',
        '--terra-button-icon-left-margin-left': '20px',
        '--terra-button-icon-left-margin-right': '20px',
      });
    });

    describe('Icon only', () => {
      beforeEach(() => browser.url('/#/tests/button-tests/icon-only'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();

      shouldTheme({
        '--terra-button-icon-only-margin-left': '20px',
        '--terra-button-icon-only-margin-right': '20px',
        '--terra-button-icon-height': '10px',
        '--terra-button-icon-width': '10px',
      });
    });
  });
});
