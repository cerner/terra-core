/* global browser, Terra, before */

describe('Grid', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-grid/grid/grid-default'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeEachCustomProperty({
      '--terra-grid-gutter-width': '35px',
    });
  });

  describe('Responsive', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-grid/grid/grid-responsive'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Nested', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-grid/grid/grid-nested'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });
});
