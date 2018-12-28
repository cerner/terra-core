const viewports = Terra.viewports('tiny', 'large');

describe('Alert', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-alert/alert/default-alert'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-alert-icon-font-size': '50px',
    });
  });

  describe('Types', () => {
    before(() => browser.url('/#/raw/tests/terra-alert/alert/alert-type'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Padding', () => {
    before(() => browser.url('/#/raw/tests/terra-alert/alert/alert-padding'));
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Titles', () => {
    before(() => browser.url('/#/raw/tests/terra-alert/alert/alert-title'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-alert-alert-background-color': 'purple',
        '--terra-alert-error-background-color': 'purple',
        '--terra-alert-warning-background-color': 'purple',
        '--terra-alert-advisory-background-color': 'purple',
        '--terra-alert-info-background-color': 'purple',
        '--terra-alert-success-background-color': 'purple',

        '--terra-alert-alert-shadow-color': 'purple',
        '--terra-alert-error-shadow-color': 'purple',
        '--terra-alert-warning-shadow-color': 'purple',
        '--terra-alert-advisory-shadow-color': 'purple',
        '--terra-alert-info-shadow-color': 'purple',
        '--terra-alert-success-shadow-color': 'purple',

        '--terra-alert-alert-title-color': 'purple',
        '--terra-alert-error-title-color': 'purple',
      },
    });
  });

  describe('Custom', () => {
    before(() => browser.url('/#/raw/tests/terra-alert/alert/custom-alert'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-alert-custom-text-color': 'blue',
        '--terra-alert-custom-background-color': 'purple',
        '--terra-alert-custom-shadow-color': 'purple',
      },
    });
  });

  viewports.forEach((viewport) => {
    describe('Action Button', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-alert/alert/alert-action-button');
        browser.setViewportSize(viewport);
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();

      it('should be register actions', () => {
        expect(browser.getText('[id=actionButtonClickCount]')).to.equal('0');
        browser.click('[id=actionAlert] button');
        expect(browser.getText('[id=actionButtonClickCount]')).to.equal('1');
      });
    });


    describe('Dismissible', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-alert/alert/alert-dismissible');
        browser.setViewportSize(viewport);
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();

      it('should dismiss', () => {
        browser.click('[id=dismissibleAlert] button');
        expect(browser.getText('[id=dismissed]')).to.equal('Alert was dismissed');
      });
    });
  });
});
