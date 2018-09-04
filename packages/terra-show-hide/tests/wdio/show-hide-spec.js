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

  describe('On Close Show Hide', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/on-close-show-hide'));

    it('should not increment', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('div*=Times');
    });

    Terra.should.matchScreenshot('expanded');

    it('should increment', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('div*=Times');
    });

    Terra.should.matchScreenshot('collapsed');
    Terra.should.beAccessible();
  });

  describe('On Open Show Hide', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/on-open-show-hide'));

    it('should increment', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('div*=Times');
    });

    Terra.should.matchScreenshot('expanded');

    it('should not increment', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('div*=Times');
    });

    Terra.should.matchScreenshot('collapsed');
    Terra.should.beAccessible();
  });
});
