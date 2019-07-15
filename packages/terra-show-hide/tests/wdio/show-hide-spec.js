Terra.describeViewports('Show Hide', ['medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/default-show-hide'));

    Terra.it.validatesElement('collapsed');

    it('should expand to full text', () => {
      browser.click('button');
    });

    Terra.it.validatesElement('expanded');

    it('should re-collapse the text', () => {
      browser.click('button');
      browser.click('#root');
    });

    describe('Hover', () => {
      it('is hovered', () => {
        browser.moveToObject('button');
      });

      Terra.it.validatesElement();

      it('removes hover', () => {
        browser.moveToObject('#root');
      });
    });

    describe('Focus', () => {
      it('has focus', () => {
        browser.keys(['Tab']);
        expect(browser.hasFocus('button')).to.be.true;
      });

      Terra.it.validatesElement();

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

      Terra.it.validatesElement();

      it('release button press', () => {
        browser.buttonUp();
        browser.moveToObject('#root');
      });
    });
  });

  describe('Custom button text', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/custom-button-text-show-hide'));

    Terra.it.validatesElement('collapsed');

    it('should expand to full text', () => {
      browser.click('button');
    });

    Terra.it.validatesElement('expanded');
  });

  describe('Initially open', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/initially-open-show-hide'));

    Terra.it.validatesElement('expanded');
  });

  describe('No preview', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/no-preview-show-hide'));

    Terra.it.validatesElement('collapsed');
  });

  describe('Button align start', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/button-align-start-show-hide'));

    Terra.it.validatesElement('collapsed');

    it('should expand to full text', () => {
      browser.click('button');
    });

    Terra.it.validatesElement('expanded');
  });

  describe('Button align center', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/button-align-center-show-hide'));

    Terra.it.validatesElement('collapsed');

    it('should expand to full text', () => {
      browser.click('button');
    });

    Terra.it.validatesElement('expanded');
  });

  describe('Button align end', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/show-hide/button-align-end-show-hide'));

    Terra.it.validatesElement('collapsed');

    it('should expand to full text', () => {
      browser.click('button');
    });

    Terra.it.validatesElement('expanded');
  });

  describe('Long button text', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-show-hide/show-hide/long-button-text-show-hide');
      browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
    });

    Terra.it.validatesElement('collapsed');

    it('should expand to full text', () => {
      browser.click('button');
    });

    Terra.it.validatesElement('expanded');
  });
});
