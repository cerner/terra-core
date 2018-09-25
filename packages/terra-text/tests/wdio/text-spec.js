const viewports = Terra.viewports('medium');

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

  describe('Font Size', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-font-size'));

    Terra.should.beAccessible({ viewports });
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
