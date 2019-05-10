/* global before, browser, Terra */

describe('Show Hide', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/default-show-hide'));

    Terra.should.matchScreenshot('collapsed');
    Terra.should.beAccessible();

    it('should expand to full text', () => {
      browser.click('button');
    });

    Terra.should.matchScreenshot('expanded');
    Terra.should.beAccessible();
  });

  describe('Hover', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-show-hide/show-hide/default-show-hide');
      browser.moveToObject('button');
    });
    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('Focus', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-show-hide/show-hide/default-show-hide');
      browser.keys(['Tab']);
    });
    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('Active', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-show-hide/show-hide/default-show-hide');
      browser.moveToObject('button');
      browser.buttonDown();
    });
    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('Custom button text', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/custom-button-text-show-hide'));

    Terra.should.matchScreenshot('collapsed');
    Terra.should.beAccessible();

    it('should expand to full text', () => {
      browser.click('button');
    });

    Terra.should.matchScreenshot('expanded');
    Terra.should.beAccessible();
  });

  describe('Initially open', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/initially-open-show-hide'));

    Terra.should.matchScreenshot('expanded');
    Terra.should.beAccessible();
  });

  describe('No preview', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/no-preview-show-hide'));

    Terra.should.matchScreenshot('collapsed');
    Terra.should.beAccessible();
  });

  describe('Button align start', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/button-align-start-show-hide'));

    Terra.should.matchScreenshot('collapsed');
    Terra.should.beAccessible();

    it('should expand to full text', () => {
      browser.click('button');
    });

    Terra.should.matchScreenshot('expanded');
    Terra.should.beAccessible();
  });

  describe('Button align center', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/button-align-center-show-hide'));

    Terra.should.matchScreenshot('collapsed');
    Terra.should.beAccessible();

    it('should expand to full text', () => {
      browser.click('button');
    });

    Terra.should.matchScreenshot('expanded');
    Terra.should.beAccessible();
  });

  describe('Button align end', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/button-align-end-show-hide'));

    Terra.should.matchScreenshot('collapsed');
    Terra.should.beAccessible();

    it('should expand to full text', () => {
      browser.click('button');
    });

    Terra.should.matchScreenshot('expanded');
    Terra.should.beAccessible();
  });

  describe('Long button text', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/long-button-text-show-hide'));

    Terra.should.matchScreenshot('collapsed');
    Terra.should.beAccessible();

    it('should expand to full text', () => {
      browser.click('button');
    });

    Terra.should.matchScreenshot('expanded');
    Terra.should.beAccessible();
  });

  describe('Custom css properties', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/default-show-hide'));//

    Terra.should.beAccessible();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-show-hide-color': '#0059a8',
        '--terra-show-hide-font-size': '1rem',
        '--terra-show-hide-line-height': '1.429',
        '--terra-show-hide-underline': 'none',
        '--terra-show-hide-focus-background-color': 'transparent',
        '--terra-show-hide-focus-border-radius': '0.2142rem',
        '--terra-show-hide-focus-box-shadow': '0 0 0 1px #4cb2e9, 0 0 0 3px rgba(76, 178, 233, 0.25)',
        '--terra-show-hide-focus-color': '#001f67',
        '--terra-show-hide-focus-underline': 'underline',
        '--terra-show-hide-hover-background-color': '',
        '--terra-show-hide-hover-color': '#001f67',
        '--terra-show-hide-active-color': '#001f67 ',
        '--terra-show-hide-disabled-color': 'rgba(28, 31, 33, 0.2) ',
        '--terra-show-hide-compact-padding-bottom': '0 ',
        '--terra-show-hide-compact-padding-top': '0 ',
        '--terra-show-hide-text-and-icon-margin-between': '0.3571rem ',
        '--terra-show-hide-icon-height': '1rem',
        '--terra-show-hide-icon-width': '1rem',
      },
    });
  });
});
