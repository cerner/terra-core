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

  describe('Custom Icon', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/custom-icon-show-hide'));

    it('should expand to full text', () => {
      browser.click('button');
    });

    Terra.should.matchScreenshot('expanded');
    Terra.should.beAccessible();
  });

  describe('Collapsed Text', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/collapsed-text-show-hide'));

    Terra.should.matchScreenshot('collapsed');
    Terra.should.beAccessible();
  });

  describe('Expanded Text', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/expanded-text-show-hide'));

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

  describe('Animated', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/animated-show-hide'));

    it('should expand to full text', () => {
      browser.click('button');

      // Let the animation complete
      browser.pause(100);
    });

    Terra.should.matchScreenshot('expanded');
    Terra.should.beAccessible();
  });

  describe('Custom css properties', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/states-show-hide'));

    Terra.should.matchScreenshot('collapsed');
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

    it('should ', () => {
      browser.click('button');
    });
  });
});
