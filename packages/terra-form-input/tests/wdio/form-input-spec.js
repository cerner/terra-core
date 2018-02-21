/* global browser, Terra */
describe('Form-Input', () => {
  describe('Valid', () => {
    beforeEach(() => {
      browser.url('/#tests/form-input-tests/default');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeEachCustomProperty({
      '--terra-form-input-background-color': 'red',
      '--terra-form-input-focus-animation-background': 'linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)',
      '--terra-form-input-border-radius': '0.3rem',
      '--terra-form-input-border': '2px dashed #4a4a41',
      '--terra-form-input-box-shadow': 'inset 5em 1em gold',
      '--terra-form-input-color': '#fff',
      '--terra-form-input-font-size': '2.143rem',
      '--terra-form-input-line-height': '2.143',
      '--terra-form-input-padding-bottom': '1.571rem',
      '--terra-form-input-padding-left': '1.357rem',
      '--terra-form-input-padding-right': '1.357rem',
      '--terra-form-input-padding-top': '1.571rem',
      '--terra-form-input-transition-duration': '2s',
      '--terra-form-input-transition-timing-function': 'ease-out',
      '--terra-form-input-focus-background-start': '20px 20px',
      '--terra-form-input-height': '40px',
    });
  });

  describe('Invalid', () => {
    beforeEach(() => {
      browser.url('/#tests/form-input-tests/invalid');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeEachCustomProperty({
      '--terra-form-input-error-focus-animation-background': 'linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)',
      '--terra-form-input-error-border': '20rem dashed blue',
    });
  });

  describe('Enabled', () => {
    describe('Enabled Non-Selected', () => {
      beforeEach(() => {
        browser.url('/#tests/form-input-tests/default');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Enabled Hovered', () => {
      beforeEach(() => {
        browser.url('/#tests/form-input-tests/default');
        browser.moveToObject('input');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty({
        '--terra-form-input-hover-border': '20rem dashed blue',
      });
    });

    describe('Enabled Keyboard-Focused', () => {
      beforeEach(() => {
        browser.url('/#tests/form-input-tests/focussed');
        browser.keys('Tab');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty({
        '--terra-form-input-focus-background-color': 'red',
        '--terra-form-input-focus-border': '20rem dashed red',
        '--terra-form-input-focus-keyboard-animation-size': '20px 20px',
      });
    });
  });

  describe('Disabled', () => {
    describe('Disabled Non-Selected', () => {
      beforeEach(() => {
        browser.url('/#tests/form-input-tests/disabled');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty({
        '--terra-form-input-disabled-background-color': 'red',
        '--terra-form-input-disabled-border-width': '20rem dashed red',
        '--terra-form-input-disabled-color': 'red',
        '--terra-form-input-disabled-opacity': '0.5',
      });
    });

    describe('Disabled Hovered', () => {
      beforeEach(() => {
        browser.url('/#tests/form-input-tests/disabled');
        browser.moveToObject('input');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty({
        '--terra-form-input-hover-border': '20rem dashed red',
      });
    });

    describe('Disabled Keyboard-Focused', () => {
      beforeEach(() => {
        browser.url('/#tests/form-input-tests/disabled');
        browser.keys('Tab');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty({
        '--terra-form-input-focus-background-color': 'red',
        '--terra-form-input-focus-border': '20rem dashed red',
        '--terra-form-input-error-focus-keyboard-animation-size': '20px 20px',
      });
    });
  });
});
