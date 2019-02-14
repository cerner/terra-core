const viewports = Terra.viewports('tiny', 'large');

describe('Form-Input', () => {
  describe('Valid', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-input/form-input/default-form-input');
    });

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-form-input-background-color': 'red',
        '--terra-form-input-background-image': 'linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)',
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
        '--terra-form-input-background-size': '20px 20px',
        '--terra-form-input-height': '40px',
      },
    });
  });

  describe('Invalid', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-form-input/form-input/invalid-form-input');
    });

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-form-input-error-background-image': 'linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)',
        '--terra-form-input-error-border': '20rem dashed blue',
      },
    });
  });

  describe('Enabled', () => {
    describe('Enabled Non-Selected', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/default-form-input');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });
    });

    describe('Enabled Hovered', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/default-form-input');
        browser.moveToObject('input');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });
      Terra.should.themeEachCustomProperty({
        '--terra-form-input-hover-border': '20rem dashed blue',
      });
    });

    describe('Enabled Placeholder', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/placeholder-form-input');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-form-input-placeholder-color': 'red',
          '--terra-form-input-placeholder-font-style': 'italic',
        },
      });
    });

    describe('Enabled Value', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/value-form-input');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });
      Terra.should.themeEachCustomProperty({
        '--terra-form-input-color': 'red',
      });
    });

    describe('Enabled Keyboard-Focused', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/default-form-input');
        browser.keys('Tab');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.getElementById("form-input-default").style.caretColor = "transparent";');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-form-input-focus-background-color': 'red',
          '--terra-form-input-focus-border': '20rem dashed red',
          '--terra-form-input-focus-background-size': '20px 20px',
        },
      });
    });
  });

  describe('Disabled', () => {
    describe('Disabled Non-Selected', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/disabled-form-input');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-form-input-disabled-background-color': 'red',
          '--terra-form-input-disabled-border-width': '20rem dashed red',
          '--terra-form-input-disabled-color': 'red',
          '--terra-form-input-disabled-opacity': '0.5',
        },
      });
    });

    describe('Disabled Placeholder', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/disabled-placeholder-input');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-form-input-placeholder-disabled-color': 'red',
          '--terra-form-input-placeholder-disabled-font-style': 'italic',
        },
      });
    });

    describe('Disabled Value', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/disabled-value-input');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-form-input-disabled-color': 'red',
        },
      });
    });

    describe('Disabled Hovered', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/disabled-form-input');
        browser.moveToObject('input');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });
      Terra.should.themeEachCustomProperty({
        '--terra-form-input-hover-border': '20rem dashed red',
      });
    });

    describe('Disabled Keyboard-Focused', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/disabled-form-input');
        browser.keys('Tab');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-form-input-focus-background-color': 'red',
          '--terra-form-input-focus-border': '20rem dashed red',
          '--terra-form-input-error-focus-background-size': '20px 20px',
        },
      });
    });
  });

  describe('InputField', () => {
    describe('Resized InputField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/input-field-width');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });
    });

    describe('Valid InputField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/input-field');
      });

      Terra.should.matchScreenshot({ viewports });
    });

    describe('Invalid InputField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/input-field');
        browser.click('#validity-toggle');
      });

      Terra.should.matchScreenshot({ viewports });
    });
  });
});
