describe('Grid', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-grid/grid/grid-default'));

    Terra.it.isAccessible(Terra.viewports('medium')[0]);
    Terra.it.matchesScreenshot(Terra.viewports('medium')[0]);
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

    Terra.it.isAccessible(Terra.viewports('medium')[0]);
    Terra.it.matchesScreenshot(Terra.viewports('medium')[0]);
  });

  describe('Nested', () => {
    before(() => browser.url('/#/raw/tests/terra-grid/grid/grid-nested'));

    Terra.it.isAccessible(Terra.viewports('medium')[0]);
    Terra.it.matchesScreenshot(Terra.viewports('medium')[0]);
  });

  describe('Tiny', () => {
    before(() => browser.url('/#/raw/tests/terra-grid/grid/grid-tiny'));
    const viewports = Terra.viewports('tiny', 'huge');
    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Small', () => {
    before(() => browser.url('/#/raw/tests/terra-grid/grid/grid-small'));
    const viewports = Terra.viewports('tiny', 'medium');
    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Medium', () => {
    before(() => browser.url('/#/raw/tests/terra-grid/grid/grid-medium'));
    const viewports = Terra.viewports('small', 'large');
    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Large', () => {
    before(() => browser.url('/#/raw/tests/terra-grid/grid/grid-large'));
    const viewports = Terra.viewports('medium', 'huge');
    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Huge', () => {
    before(() => browser.url('/#/raw/tests/terra-grid/grid/grid-huge'));
    const viewports = Terra.viewports('large', 'enormous');
    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Enormous', () => {
    before(() => browser.url('/#/raw/tests/terra-grid/grid/grid-enormous'));
    const viewports = Terra.viewports('huge', 'enormous');
    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });
});
