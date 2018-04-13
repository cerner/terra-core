/* global browser, Terra */
const viewports = Terra.viewports('medium');

describe('Heading', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/heading/default-heading'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Color', () => {
    beforeEach(() => browser.url('/#/raw/tests/heading/heading-color'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Italics', () => {
    beforeEach(() => browser.url('/#/raw/tests/heading/heading-italics'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Levels', () => {
    beforeEach(() => browser.url('/#/raw/tests/heading/heading-levels'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Size', () => {
    beforeEach(() => browser.url('/#/raw/tests/heading/heading-size'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Visually Hidden', () => {
    beforeEach(() => browser.url('/#/raw/tests/heading/heading-visually-hidden'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Visual Props', () => {
    beforeEach(() => browser.url('/#/raw/tests/heading/heading-visual-props'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Weight', () => {
    beforeEach(() => browser.url('/#/raw/tests/heading/heading-weight'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
