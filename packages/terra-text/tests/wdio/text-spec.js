const viewports = Terra.viewports('huge');

describe('Text', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/default-text'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Color', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-color'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Italics', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-italics'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Font Size Group 1', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-font-size-1'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Font Size Group 2', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-font-size-2'));

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Font Size Group 3', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-font-size-3'));

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Visually Hidden', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-visually-hidden'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Visual Props', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-visual-props'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Weight', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-weight'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Line-height calculated on text font size when parent has a different font size.', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-line-height'));
    Terra.it.matchesScreenshot();
  });

  describe('Word Wrapped', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-word-wrapped'));
    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });
});
