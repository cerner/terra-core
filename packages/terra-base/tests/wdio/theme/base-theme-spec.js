describe('Base theme', () => {
  before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

  describe('Background color', () => {
    before(() => browser.url('/#/raw/tests/terra-base/base/default-base'));

    Terra.should.themeEachCustomProperty(
      '[id=root]',
      {
        '--terra-base-background-color': 'red',
      },
    );
  });

  describe('Background image', () => {
    before(() => browser.url('/#/raw/tests/terra-base/base/default-base'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'Background Image',
      properties: {
        '--terra-base-background-image': 'url("https://github.com/cerner/terra-core/raw/master/terra.png")',
        '--terra-base-background-repeat': 'no-repeat',
        '--terra-base-background-size': '100%',
        '--terra-base-background-position': 'top 70px left 45px',
        '--terra-base-background-attachment': 'fixed',
      },
      selector: '[id=root]',
    });

    it('should scroll to the bottom', () => {
      browser.moveToObject('[id=bottom]');
    });

    Terra.should.matchScreenshot('scrolled down', { selector: '[id=bottom-section]' });
  });
});
