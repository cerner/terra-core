/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'large');

// TODO: Remove this once https://github.com/cerner/terra-core/issues/1057 addressed
const ignoreContrast = {
  'color-contrast': { enabled: false },
};

describe('Alert', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/tests/alert-tests/default'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports, rules: ignoreContrast });
    Terra.should.themeEachCustomProperty({
      '--terra-alert-icon-font-size': '50px',
    });
  });

  describe('Types', () => {
    beforeEach(() => browser.url('/#/tests/alert-tests/type'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports, rules: ignoreContrast });
  });

  describe('Titles', () => {
    beforeEach(() => browser.url('/#/tests/alert-tests/title'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports, rules: ignoreContrast });
    Terra.should.themeEachCustomProperty({
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
    });
  });

  describe('Custom', () => {
    beforeEach(() => browser.url('/#/tests/alert-tests/custom'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-alert-custom-text-color': 'blue',
      '--terra-alert-custom-background-color': 'purple',
      '--terra-alert-custom-shadow-color': 'purple',
    });
  });

  viewports.forEach((viewport) => {
    describe('Action Button', () => {
      beforeEach(() => {
        browser.url('/#/tests/alert-tests/actionButton');
        browser.setViewportSize(viewport);
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules: ignoreContrast });

      it('should be register actions', () => {
        expect(browser.getText('#actionButtonClickCount')).to.equal('0');
        browser.click('button');
        expect(browser.getText('#actionButtonClickCount')).to.equal('1');
      });
    });


    describe('Dismissible', () => {
      beforeEach(() => {
        browser.url('/#/tests/alert-tests/dismissible');
        browser.setViewportSize(viewport);
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();

      it('should dismiss', () => {
        browser.click('button');
        expect(browser.getText('#dismissed')).to.equal('Alert was dismissed');
      });
    });
  });
});
