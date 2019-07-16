Terra.describeViewports('Heading', ['medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/default-heading'));

    Terra.it.validatesElement();
  });

  describe('Color', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/heading-color'));

    Terra.it.validatesElement();
  });

  describe('Italics', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/heading-italics'));

    Terra.it.validatesElement();
  });

  describe('Levels', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/heading-levels'));

    Terra.it.validatesElement();
  });

  describe('Size', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/heading-size'));

    Terra.it.validatesElement();
  });

  describe('Visually Hidden', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/heading-visually-hidden'));

    Terra.it.validatesElement();
  });

  describe('Visual Props', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/heading-visual-props'));

    Terra.it.validatesElement();
  });

  describe('Weight', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/heading-weight'));

    Terra.it.validatesElement();
  });
});
