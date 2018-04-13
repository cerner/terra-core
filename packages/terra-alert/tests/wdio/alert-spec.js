/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'large');

describe('Alert', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/alert/default-alert'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-alert-icon-font-size': '50px',
    });
  });

  describe('Types', () => {
    beforeEach(() => browser.url('/#/raw/tests/alert/alert-type'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Titles', () => {
    beforeEach(() => browser.url('/#/raw/tests/alert/alert-title'));
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
    beforeEach(() => browser.url('/#/raw/tests/alert/custom-alert'));
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
      beforeEach(() => {
        browser.url('/#/raw/tests/alert/alert-action-button');
        browser.setViewportSize(viewport);
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();

      it('should be register actions', () => {
        expect(browser.getText('#actionButtonClickCount')).to.equal('0');
        browser.click('#actionAlert button');
        expect(browser.getText('#actionButtonClickCount')).to.equal('1');
      });
    });


    describe('Dismissible', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/alert/alert-dismissible');
        browser.setViewportSize(viewport);
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();

      it('should dismiss', () => {
        browser.click('#dismissibleAlert button');
        expect(browser.getText('#dismissed')).to.equal('Alert was dismissed');
      });
    });
  });
});
