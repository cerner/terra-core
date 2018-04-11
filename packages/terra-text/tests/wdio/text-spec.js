/* global browser, Terra, before */
describe('Text', () => {
  before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/text/default-text'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Color', () => {
    beforeEach(() => browser.url('/#/raw/tests/text/text-color'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Font Size', () => {
    beforeEach(() => browser.url('/#/raw/tests/text/text-font-size'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Italic', () => {
    beforeEach(() => browser.url('/#/raw/tests/text/text-italics'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Weight', () => {
    beforeEach(() => browser.url('/#/raw/tests/text/text-weight'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Visually Hidden', () => {
    beforeEach(() => browser.url('/#/raw/tests/text/text-visually-hidden'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('All visual props set', () => {
    beforeEach(() => browser.url('/#/raw/tests/text/text-visual-props'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Line-height calculated on text font size when parent has a different font size.', () => {
    beforeEach(() => browser.url('/#/raw/tests/text/text-line-height'));
    Terra.should.matchScreenshot();
  });
});
