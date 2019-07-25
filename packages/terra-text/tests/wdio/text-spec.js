Terra.describeViewports('Text', ['huge'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/default-text'));

    Terra.it.validatesElement();
  });

  describe('Color', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-color'));

    Terra.it.validatesElement();
  });

  describe('Italics', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-italics'));

    Terra.it.validatesElement();
  });

  describe('Font Size Group 1', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-font-size-1'));

    Terra.it.validatesElement();
  });

  describe('Font Size Group 2', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-font-size-2'));

    Terra.it.validatesElement();
  });

  describe('Font Size Group 3', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-font-size-3'));

    Terra.it.validatesElement();
  });

  describe('Visually Hidden', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-visually-hidden'));

    Terra.it.validatesElement();
  });

  describe('Visual Props', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-visual-props'));

    Terra.it.validatesElement();
  });

  describe('Weight', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-weight'));

    Terra.it.validatesElement();
  });

  describe('Line-height calculated on text font size when parent has a different font size.', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-line-height'));

    Terra.it.validatesElement();
  });

  describe('Word Wrapped', () => {
    before(() => browser.url('/#/raw/tests/terra-text/text/text-word-wrapped'));

    Terra.it.validatesElement();
  });
});
