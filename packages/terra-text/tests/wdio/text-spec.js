const viewports = Terra.viewports('huge');

describe('Text', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/default-text'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Color', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-color'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Italics', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-italics'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Font Size Group 1', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-font-size-1'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Font Size Group 2', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-font-size-2'));

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Font Size Group 3', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-font-size-3'));

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Visually Hidden', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-visually-hidden'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Visual Props', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-visual-props'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Weight', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-weight'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Line-height calculated on text font size when parent has a different font size.', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-line-height'));
    Terra.should.matchScreenshot();
  });
});
