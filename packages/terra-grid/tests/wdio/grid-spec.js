Terra.describeViewports('Grid', ['medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-grid/grid/grid-default'));

    Terra.it.validatesElement();
  });

  describe('Responsive', () => {
    before(() => browser.url('/#/raw/tests/terra-grid/grid/grid-responsive'));

    Terra.it.validatesElement();
  });

  describe('Nested', () => {
    before(() => browser.url('/#/raw/tests/terra-grid/grid/grid-nested'));

    Terra.it.validatesElement();
  });
});

Terra.describeViewports('Tiny', ['tiny', 'huge'], () => {
  before(() => browser.url('/#/raw/tests/terra-grid/grid/grid-tiny'));
  Terra.it.validatesElement();
});

Terra.describeViewports('Small', ['tiny', 'medium'], () => {
  before(() => browser.url('/#/raw/tests/terra-grid/grid/grid-small'));
  Terra.it.validatesElement();
});

Terra.describeViewports('Medium', ['small', 'large'], () => {
  before(() => browser.url('/#/raw/tests/terra-grid/grid/grid-medium'));
  Terra.it.validatesElement();
});

Terra.describeViewports('Large', ['medium', 'huge'], () => {
  before(() => browser.url('/#/raw/tests/terra-grid/grid/grid-large'));
  Terra.it.validatesElement();
});

Terra.describeViewports('Huge', ['large', 'enormous'], () => {
  before(() => browser.url('/#/raw/tests/terra-grid/grid/grid-huge'));
  Terra.it.validatesElement();
});

Terra.describeViewports('Enormous', ['huge', 'enormous'], () => {
  before(() => browser.url('/#/raw/tests/terra-grid/grid/grid-enormous'));
  Terra.it.validatesElement();
});
