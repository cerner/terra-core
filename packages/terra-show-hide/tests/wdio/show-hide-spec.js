Terra.describeViewports('Show Hide', ['medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/show-hide/default-show-hide'));

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

      it('should focus on focusRef element', () => {
        $('button').click();
        expect($('#focusRef').isFocused()).toBe(true);
      });

      it('should move focus from expanded content to the button on tab', () => {
        browser.keys(['Tab']);
        expect($('button').isFocused()).toBe(true);
      });

      it('focus should not go back to focusRef element if it is normally a non-focusable element like <span>', () => {
        browser.keys(['Shift', 'Tab']);
        expect($('#focusRef').isFocused()).toBe(false);
        browser.keys(['Shift']); // Modifier like Control, Shift, Alt and Command will stay pressed so you need to trigger them again to release them.
      });

      it('removes focus', () => {
        browser.keys(['Tab']); // focuses to button
        expect($('button').isFocused()).toBe(true);
        $('button').click(); // collaps the content
        browser.keys(['Tab']);
        expect($('button').isFocused()).toBe(false);
      });
    });

    describe('Active', () => {
      it('is active', () => {
        $('button').moveTo();
        browser.performActions([{
          type: 'pointer',
          id: 'pointer1',
          parameters: {
            pointerType: 'mouse',
          },
          actions: [{
            type: 'pointerDown',
            button: 0,
          }],
        }]);
      });

      it('should display active Show Hide', () => {
        Terra.validates.element('active default');
      });

      it('release button press', () => {
        browser.performActions([{
          type: 'pointer',
          id: 'pointer1',
          parameters: {
            pointerType: 'mouse',
          },
          actions: [{
            type: 'pointerUp',
            button: 0,
          }],
        }]);
        $('#root').moveTo();
      });
    });
  });

  describe('Custom button text', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/show-hide/custom-button-text-show-hide'));

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
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/show-hide/initially-open-show-hide'));

    it('should display expanded Show Hide', () => {
      Terra.validates.element('initially open expanded');
    });
  });

  describe('No preview', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/show-hide/no-preview-show-hide'));

    it('should display collapsed Show Hide', () => {
      Terra.validates.element('no preview collapsed');
    });
  });

  describe('Button align start', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/show-hide/button-align-start-show-hide'));

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
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/show-hide/button-align-center-show-hide'));

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
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/show-hide/button-align-end-show-hide'));

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

  describe('No focusRef', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/show-hide/no-focus-ref-show-hide'));

    it('should display collapsed Show Hide', () => {
      Terra.validates.element('no focus ref show hide');
    });

    it('should expand to full text', () => {
      $('button').click();
    });

    it('should display expanded Show Hide', () => {
      Terra.validates.element('no focus ref show hide expanded');
    });

    it('should focus on content container once expanded', () => {
      expect($('[class*="show-hide-content"]').isFocused()).toBe(true);
    });
  });

  describe('Long button text', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/show-hide/long-button-text-show-hide');
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

  describe('Interactive ShowHide', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/show-hide/interactive-show-hide'));

    it('should display collapsed Show Hide', () => {
      Terra.validates.element('interactive show hide');
    });

    it('should expand to full text', () => {
      $('button').click();
    });

    it('should display expanded Show Hide', () => {
      Terra.validates.element('interactive show hide expanded');
    });

    it('should focus on the focusRef element', () => {
      expect($('#focusRef').isFocused()).toBe(true);
    });

    it('should move focus to link', () => {
      browser.keys(['Tab']);
      expect($('#link').isFocused()).toBe(true);
    });

    it('should move focus from expanded content', () => {
      browser.keys(['Tab']);
      expect($('button').isFocused()).toBe(true);
    });

    it('should focus on the button', () => {
      Terra.validates.element('interactive show hide focused button');
    });

    it('focus should go back to content to interactive element', () => {
      browser.keys(['Shift', 'Tab']);
      expect($('#link').isFocused()).toBe(true);
      browser.keys(['Shift']); // Modifier like Control, Shift, Alt and Command will stay pressed so you need to trigger them again to release them.
    });

    it('should display focus on interactive element', () => {
      Terra.validates.element('interactive show hide focused link');
    });
  });
});
