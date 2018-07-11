/* global browser, Terra, before */

describe('Grid', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-grid/grid/grid-default'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeEachCustomProperty({
      '--terra-grid-gutter-width': '35px',
    });
  });

  describe('Responsive', () => {
    before(() => browser.url('/#/raw/tests/terra-grid/grid/grid-responsive'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Nested', () => {
    before(() => browser.url('/#/raw/tests/terra-grid/grid/grid-nested'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });
});
