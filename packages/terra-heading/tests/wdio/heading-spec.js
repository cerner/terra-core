/* global before, browser, Terra */
const viewports = Terra.viewports('medium');

describe('Heading', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/default-heading'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Color', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/heading-color'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Italics', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/heading-italics'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Levels', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/heading-levels'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Size', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/heading-size'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Visually Hidden', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/heading-visually-hidden'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Visual Props', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/heading-visual-props'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Weight', () => {
    before(() => browser.url('/#/raw/tests/terra-heading/heading/heading-weight'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
