/* global before, browser, Terra */

describe('Show Hide', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/default-show-hide'));

    Terra.it.matchesScreenshot('collapsed');
    Terra.it.isAccessible();

    it('should expand to full text', () => {
      browser.click('button');
    });

    Terra.it.matchesScreenshot('expanded');
    Terra.it.isAccessible();

    it('should re-collapse the text', () => {
      browser.click('button');
      browser.click('#root');
    });

    describe('Hover', () => {
      it('is hovered', () => {
        browser.moveToObject('button');
      });

      Terra.it.matchesScreenshot();
      Terra.it.isAccessible();

      it('removes hover', () => {
        browser.moveToObject('#root');
      });
    });

    describe('Focus', () => {
      it('has focus', () => {
        browser.keys(['Tab']);
        expect(browser.hasFocus('button')).to.be.true;
      });
      Terra.it.matchesScreenshot();
      Terra.it.isAccessible();

      it('removes focus', () => {
        browser.keys(['Tab']);
        expect(browser.hasFocus('button')).to.be.false;
      });
    });

    describe('Active', () => {
      it('is active', () => {
        browser.moveToObject('button');
        browser.buttonDown();
      });
      Terra.it.matchesScreenshot();
      Terra.it.isAccessible();

      it('release button press', () => {
        browser.buttonUp();
        browser.moveToObject('#root');
      });
    });
  });

  describe('Custom button text', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/custom-button-text-show-hide'));

    Terra.it.matchesScreenshot('collapsed');
    Terra.it.isAccessible();

    it('should expand to full text', () => {
      browser.click('button');
    });

    Terra.it.matchesScreenshot('expanded');
    Terra.it.isAccessible();
  });

  describe('Initially open', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/initially-open-show-hide'));

    Terra.it.matchesScreenshot('expanded');
    Terra.it.isAccessible();
  });

  describe('No preview', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/no-preview-show-hide'));

    Terra.it.matchesScreenshot('collapsed');
    Terra.it.isAccessible();
  });

  describe('Button align start', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/button-align-start-show-hide'));

    Terra.it.matchesScreenshot('collapsed');
    Terra.it.isAccessible();

    it('should expand to full text', () => {
      browser.click('button');
    });

    Terra.it.matchesScreenshot('expanded');
    Terra.it.isAccessible();
  });

  describe('Button align center', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/button-align-center-show-hide'));

    Terra.it.matchesScreenshot('collapsed');
    Terra.it.isAccessible();

    it('should expand to full text', () => {
      browser.click('button');
    });

    Terra.it.matchesScreenshot('expanded');
    Terra.it.isAccessible();
  });

  describe('Button align end', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/button-align-end-show-hide'));

    Terra.it.matchesScreenshot('collapsed');
    Terra.it.isAccessible();

    it('should expand to full text', () => {
      browser.click('button');
    });

    Terra.it.matchesScreenshot('expanded');
    Terra.it.isAccessible();
  });

  describe('Long button text', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-show-hide/show-hide/long-button-text-show-hide');
      browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
    });

    Terra.it.matchesScreenshot('collapsed');
    Terra.it.isAccessible();

    it('should expand to full text', () => {
      browser.click('button');
    });

    Terra.it.matchesScreenshot('expanded');
    Terra.it.isAccessible();
  });
});
