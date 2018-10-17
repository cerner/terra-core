describe('List', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('List Default', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list/default-list'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-list-item-background-color': '#dddddd',
      },
    });
  });

  describe('List Items Divided', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list/items-divided-list'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-list-item-background-color': '#ffffff',
        '--terra-list-divider-border-top': '1px dotted #dddddd',
        '--terra-list-last-divider-border-bottom': '1px dotted #dddddd',
      },
    });
  });

  describe('List One Item', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list/list-one-item'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });
});
