describe('TabPane', () => {
  before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

  describe('Text Only', () => {
    before(() => browser.url('/#/raw/tests/terra-tabs/tabs/tab-pane/text-only-tab-pane'));
    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-tabs-font-size': '30px',
        '--terra-tabs-line-height': '2',
        '--terra-tabs-text-only-padding': '50px',
      },
    });
  });

  describe('Icon Only', () => {
    before(() => browser.url('/#/raw/tests/terra-tabs/tabs/tab-pane/icon-only-tab-pane'));
    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
    Terra.should.themeEachCustomProperty({
      '--terra-tabs-icon-only-padding': '50px',
    });
  });

  describe('Icon and Text', () => {
    before(() => browser.url('/#/raw/tests/terra-tabs/tabs/tab-pane/icon-and-text-tab-pane'));
    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
    Terra.should.themeEachCustomProperty({
      '--terra-tabs-padding': '50px',
    });
  });

  describe('Custom Display', () => {
    before(() => browser.url('/#/raw/tests/terra-tabs/tabs/tab-pane/custom-display-tab-pane'));
    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('Long text', () => {
    before(() => browser.url('/#/raw/tests/terra-tabs/tabs/tab-pane/long-text-tab-pane'));
    Terra.should.matchScreenshot({ selector: '[id=longText]' });
    Terra.should.beAccessible();
  });
});
