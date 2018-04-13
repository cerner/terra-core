/* global browser, Terra */
const viewports = Terra.viewports('medium');

describe('Text', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/text/default-text'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Color', () => {
    beforeEach(() => browser.url('/#/raw/tests/text/text-color'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Italics', () => {
    beforeEach(() => browser.url('/#/raw/tests/text/text-italics'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Font Size', () => {
    beforeEach(() => browser.url('/#/raw/tests/text/text-font-size'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Visually Hidden', () => {
    beforeEach(() => browser.url('/#/raw/tests/text/text-visually-hidden'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Visual Props', () => {
    beforeEach(() => browser.url('/#/raw/tests/text/text-visual-props'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Weight', () => {
    beforeEach(() => browser.url('/#/raw/tests/text/text-weight'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
