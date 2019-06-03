const viewports = Terra.viewports('medium');

describe('Heading', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/default-heading'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Color', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/heading-color'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Italics', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/heading-italics'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Levels', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/heading-levels'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Size', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/heading-size'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Visually Hidden', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/heading-visually-hidden'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Visual Props', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/heading-visual-props'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Weight', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/heading-weight'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });
});
