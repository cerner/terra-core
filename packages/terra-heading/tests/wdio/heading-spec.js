/* global browser, Terra */
const viewports = Terra.viewports('medium');

describe('Heading', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-heading/heading/default-heading'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Color', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-heading/heading/heading-color'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Italics', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-heading/heading/heading-italics'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Levels', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-heading/heading/heading-levels'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Size', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-heading/heading/heading-size'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Visually Hidden', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-heading/heading/heading-visually-hidden'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Visual Props', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-heading/heading/heading-visual-props'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Weight', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-heading/heading/heading-weight'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
