Terra.describeViewports('Show Hide', ['medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/raw/tests/terra-show-hide/show-hide/default-show-hide'));

    it('should display collapsed Show Hide', () => {
      Terra.validates.element('default collapsed');
    });

    it('should expand to full text', () => {
      $('button').click();
    });

    it('should display expanded Show Hide', () => {
      Terra.validates.element('default expanded');
    });

    it('should re-collapse the text', () => {
      $('button').click();
      $('#root').click();
    });

    describe('Focus', () => {
      it('has focus', () => {
        browser.keys(['Tab']);
        expect($('button').isFocused()).toBe(true);
      });

      it('should display focus on Show Hide', () => {
        Terra.validates.element('focus default');
      });

      it('removes focus', () => {
        browser.keys(['Tab']);
        expect($('button').isFocused()).toBe(false);
      });
    });

    describe('Active', () => {
      it('is active', () => {
        $('button').moveTo();
        browser.buttonDown();
      });

      it('should display active Show Hide', () => {
        Terra.validates.element('active default');
      });

      it('release button press', () => {
        browser.buttonUp();
        $('#root').moveTo();
      });
    });
  });

  describe('Custom button text', () => {
    before(() => browser.url('/raw/tests/terra-show-hide/show-hide/custom-button-text-show-hide'));

    it('should display collapsed Show Hide', () => {
      Terra.validates.element('custom button collapsed');
    });

    it('should expand to full text', () => {
      $('button').click();
    });

    it('should display expanded Show Hide', () => {
      Terra.validates.element('custom button expanded');
    });
  });

  describe('Initially open', () => {
    before(() => browser.url('/raw/tests/terra-show-hide/show-hide/initially-open-show-hide'));

    it('should display expanded Show Hide', () => {
      Terra.validates.element('initially open expanded');
    });
  });

  describe('No preview', () => {
    before(() => browser.url('/raw/tests/terra-show-hide/show-hide/no-preview-show-hide'));

    it('should display collapsed Show Hide', () => {
      Terra.validates.element('no preview collapsed');
    });
  });

  describe('Button align start', () => {
    before(() => browser.url('/raw/tests/terra-show-hide/show-hide/button-align-start-show-hide'));

    it('should display collapsed Show Hide', () => {
      Terra.validates.element('button align start collapsed');
    });

    it('should expand to full text', () => {
      $('button').click();
    });

    it('should display expanded Show Hide', () => {
      Terra.validates.element('button align start expanded');
    });
  });

  describe('Button align center', () => {
    before(() => browser.url('/raw/tests/terra-show-hide/show-hide/button-align-center-show-hide'));

    it('should display collapsed Show Hide', () => {
      Terra.validates.element('button align center collapsed');
    });

    it('should expand to full text', () => {
      $('button').click();
    });

    it('should display expanded Show Hide', () => {
      Terra.validates.element('button align center expanded');
    });
  });

  describe('Button align end', () => {
    before(() => browser.url('/raw/tests/terra-show-hide/show-hide/button-align-end-show-hide'));

    it('should display collapsed Show Hide', () => {
      Terra.validates.element('button align end collapsed');
    });

    it('should expand to full text', () => {
      $('button').click();
    });

    it('should display expanded Show Hide', () => {
      Terra.validates.element('button align end expanded');
    });
  });

  describe('Long button text', () => {
    before(() => {
      browser.url('/raw/tests/terra-show-hide/show-hide/long-button-text-show-hide');
      $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // move cursor to remove focus styles
    });

    it('should display collapsed Show Hide', () => {
      Terra.validates.element('long button text collapsed');
    });

    it('should expand to full text', () => {
      $('button').click();
    });

    it('should display expanded Show Hide', () => {
      Terra.validates.element('long button text expanded');
    });
  });
});
