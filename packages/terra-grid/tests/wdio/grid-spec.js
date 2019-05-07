describe('Grid', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-grid/grid/grid-tiny'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-grid-gutter-margin-left': '35px',
        '--terra-grid-gutter-padding-left': '35px',
      },
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
