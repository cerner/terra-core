Terra.describeViewports('Show Hide', ['medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/raw/tests/terra-show-hide/show-hide/default-show-hide'));

    it('should display collapsed Show Hide', () => {
      Terra.validates.element('collapsed');
    });

    it('should expand to full text', () => {
      browser.click('button');
    });

    it('should display expanded Show Hide', () => {
      Terra.validates.element('expanded');
    });

    it('should re-collapse the text', () => {
      browser.click('button');
      browser.click('#root');
    });

    describe('Focus', () => {
      it('has focus', () => {
        browser.keys(['Tab']);
        expect(browser.hasFocus('button')).to.be.true;
      });

      it('should display focus on Show Hide', () => {
        Terra.validates.element('default');
      });

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

      it('should display active Show Hide', () => {
        Terra.validates.element('default');
      });

      it('release button press', () => {
        browser.buttonUp();
        browser.moveToObject('#root');
      });
    });
  });

  describe('Custom button text', () => {
    before(() => browser.url('/raw/tests/terra-show-hide/show-hide/custom-button-text-show-hide'));

    it('should display collapsed Show Hide', () => {
      Terra.validates.element('collapsed');
    });

    it('should expand to full text', () => {
      browser.click('button');
    });

    it('should display expanded Show Hide', () => {
      Terra.validates.element('expanded');
    });
  });

  describe('Initially open', () => {
    before(() => browser.url('/raw/tests/terra-show-hide/show-hide/initially-open-show-hide'));

    it('should display expanded Show Hide', () => {
      Terra.validates.element('expanded');
    });
  });

  describe('No preview', () => {
    before(() => browser.url('/raw/tests/terra-show-hide/show-hide/no-preview-show-hide'));

    it('should display collapsed Show Hide', () => {
      Terra.validates.element('collapsed');
    });
  });

  describe('Button align start', () => {
    before(() => browser.url('/raw/tests/terra-show-hide/show-hide/button-align-start-show-hide'));

    it('should display collapsed Show Hide', () => {
      Terra.validates.element('collapsed');
    });

    it('should expand to full text', () => {
      browser.click('button');
    });

    it('should display expanded Show Hide', () => {
      Terra.validates.element('expanded');
    });
  });

  describe('Button align center', () => {
    before(() => browser.url('/raw/tests/terra-show-hide/show-hide/button-align-center-show-hide'));

    it('should display collapsed Show Hide', () => {
      Terra.validates.element('collapsed');
    });

    it('should expand to full text', () => {
      browser.click('button');
    });

    it('should display expanded Show Hide', () => {
      Terra.validates.element('expanded');
    });
  });

  describe('Button align end', () => {
    before(() => browser.url('/raw/tests/terra-show-hide/show-hide/button-align-end-show-hide'));

    it('should display collapsed Show Hide', () => {
      Terra.validates.element('collapsed');
    });

    it('should expand to full text', () => {
      browser.click('button');
    });

    it('should display expanded Show Hide', () => {
      Terra.validates.element('expanded');
    });
  });

  describe('Long button text', () => {
    before(() => {
      browser.url('/raw/tests/terra-show-hide/show-hide/long-button-text-show-hide');
      browser.moveToObject('#root', 0, 700); // move cursor to remove focus styles
    });

    it('should display collapsed Show Hide', () => {
      Terra.validates.element('collapsed');
    });

    it('should expand to full text', () => {
      browser.click('button');
    });

    it('should display expanded Show Hide', () => {
      Terra.validates.element('expanded');
    });
  });
});
