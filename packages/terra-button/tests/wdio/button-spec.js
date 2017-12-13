/* global browser, Terra, before */
const ignoreContrast = {
  'color-contrast': { enabled: false },
};

describe('Button', () => {
  before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));
  describe('Default', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/default'));

    Terra.should.themeEachCustomProperty({
      '--terra-button-border-radius': '50px',
      '--terra-button-border-width': '10px',
      '--terra-button-font-weight': '800',
      '--terra-button-padding-bottom': '50px',
      '--terra-button-padding-left': '50px',
      '--terra-button-padding-right': '50px',
      '--terra-button-padding-top': '50px',
      '--terra-button-text-transform': 'uppercase',
      '--terra-button-background-color-default': 'purple',
      '--terra-button-border-color-default': 'purple',
      '--terra-button-color-default': 'purple',
      '--terra-button-disabled-background-color-default': 'purple',
      '--terra-button-disabled-border-color-default': 'purple',
      '--terra-button-disabled-color-default': 'purple',
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();

    describe('Default Hovered', () => {
      beforeEach(() => browser.moveToObject('button'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty({
        '--terra-button-hover-background-color-default': 'purple',
        '--terra-button-hover-color-default': 'purple',
      });
    });

    describe('Default Active', () => {
      beforeEach(() => browser.click('button'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty({
        '--terra-button-active-background-color-default': 'purple',
        '--terra-button-active-border-color-default': 'purple',
        '--terra-button-active-color-default': 'purple',
      });
    });
  });

  describe('Primary', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/primary'));

    Terra.should.beAccessible({ rules: ignoreContrast });
    Terra.should.matchScreenshot();
    Terra.should.themeEachCustomProperty({
      '--terra-button-background-color-primary': 'purple',
      '--terra-button-border-color-primary': 'purple',
      '--terra-button-color-primary': 'purple',
      '--terra-button-disabled-background-color-primary': 'purple',
      '--terra-button-disabled-border-color-primary': 'purple',
      '--terra-button-disabled-color-primary': 'purple',
    });

    describe('Primary Hovered', () => {
      beforeEach(() => browser.moveToObject('button'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty({
        '--terra-button-hover-background-color-primary': 'purple',
        '--terra-button-hover-color-primary': 'purple',
      });
    });

    describe('Primary Active', () => {
      beforeEach(() => browser.click('button'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty({
        '--terra-button-active-background-color-primary': 'purple',
        '--terra-button-active-border-color-primary': 'purple',
        '--terra-button-active-color-primary': 'purple',
      });
    });
  });

  describe('Secondary', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/secondary'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeEachCustomProperty({
      '--terra-button-background-color-secondary': 'purple',
      '--terra-button-border-color-secondary': 'purple',
      '--terra-button-color-secondary': 'purple',
      '--terra-button-disabled-background-color-secondary': 'purple',
      '--terra-button-disabled-border-color-secondary': 'purple',
      '--terra-button-disabled-color-secondary': 'purple',
    });

    describe('Secondary Hovered', () => {
      beforeEach(() => browser.moveToObject('button'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty({
        '--terra-button-hover-background-color-secondary': 'purple',
        '--terra-button-hover-color-secondary': 'purple',
      });
    });

    describe('Secondary Active', () => {
      beforeEach(() => browser.click('button'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeEachCustomProperty({
        '--terra-button-active-background-color-secondary': 'purple',
        '--terra-button-active-border-color-secondary': 'purple',
        '--terra-button-active-color-secondary': 'purple',
      });
    });
  });

  describe('Link', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/link'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Tiny', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/tiny'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Small', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/small'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Medium', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/medium'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Large', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/large'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Huge', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/huge'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Long Text', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/long-text'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Button as type Button', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/with-type-button'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Button as type reset', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/with-type-reset'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Button as type submit', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/with-type-submit'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Icon with text', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/icon-default'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Icon only', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/icon-only'));

    // Ignore rule to ensure buttons have discernible text
    // TODO: Remove once https://github.com/cerner/terra-core/issues/1058 is resolved
    Terra.should.beAccessible({ rules: { 'button-name': { enabled: false } } });
    Terra.should.matchScreenshot();
  });

  describe('Icon reversed', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/icon-reversed'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Compact', () => {
    beforeEach(() => browser.url('/#/tests/button-tests/compact'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });
});
