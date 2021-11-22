Terra.describeViewports('Form-Textarea', ['tiny', 'large'], () => {
  it('should display default Textarea', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-textarea/default-textarea');
    $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // add to ensure consistent hover styles

    Terra.validates.element('default');
  });

  it('should display Textarea with props populated', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-textarea/populated-textarea');
    $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // add to ensure consistent hover styles

    Terra.validates.element('props populated');
  });

  it('should display invalid Textarea', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-textarea/invalid-textarea');
    $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // add to ensure consistent hover styles

    Terra.validates.element('invalid');
  });

  it('should display incomplete Textarea', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-textarea/incomplete-textarea');
    $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // add to ensure consistent hover styles

    Terra.validates.element('incomplete');
  });

  it('should display small Textarea with height resizing', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-textarea/small-textarea');
    $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // add to ensure consistent hover styles

    Terra.validates.element('small textarea with height resizing');
  });

  it('should display medium Textarea with height resizing', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-textarea/medium-textarea');
    $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // add to ensure consistent hover styles

    Terra.validates.element('medium textarea with height resizing');
  });

  it('should display large Textarea with height resizing', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-textarea/large-textarea');
    $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // add to ensure consistent hover styles

    Terra.validates.element('large Textarea with height resizing');
  });

  it('should display full size Textarea with height resizing', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-textarea/full-textarea');
    $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // add to ensure consistent hover styles

    Terra.validates.element('full size Textarea with height resizing');
  });

  describe('AutoResizable Textarea', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-textarea/auto-resizable-textarea');
      $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // add to ensure consistent hover styles
    });

    it('should display auto-resizable Textarea', () => {
      Terra.validates.element('auto-resizeable');
    });

    it('should resize when given several rows of input', () => {
      $('textarea').setValue('New input New Input\n \n \n \n \n \n \n \n \n');

      Terra.validates.element('auto-resizeable with several rows');
    });

    describe('Non-Resizable Textarea', () => {
      before(() => {
        browser.url('/raw/tests/cerner-terra-core-docs/form-textarea/medium-textarea');
        $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // add to ensure consistent hover styles
      });

      it('should display non-resizable Textarea', () => {
        Terra.validates.element('non-resizable');
      });

      it('should not resize when given several rows of input', () => {
        $('textarea').setValue('New input New Input\n \n \n \n \n \n \n \n \n');

        Terra.validates.element('non-resizable with several rows');
      });
    });

    describe('Blocks autoresizing for when ontouch exists and browser screen is not desktop size', () => {
      before(() => {
        browser.url('/raw/tests/cerner-terra-core-docs/form-textarea/auto-resizable-textarea-mobile-on-touch-start');
        $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // add to ensure consistent hover styles
      });

      it('should display auto-resizable Textarea', () => {
        Terra.validates.element('auto-resizeable ontouch');
      });

      it('should not resize when ontouch exists and browser screen is not desktop size', () => {
        $('textarea').setValue('New input New Input\n \n \n \n \n \n \n \n \n');

        Terra.validates.element('auto-resizeable does not resize ontouch');
      });
    });

    describe('Blocks autoresizing for when DocumentTouch exists and browser screen is not desktop size', () => {
      before(() => {
        browser.url('/raw/tests/cerner-terra-core-docs/form-textarea/auto-resizable-textarea-mobile-document-touch');
        $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // add to ensure consistent hover styles
      });

      it('should display auto-resizable Textarea', () => {
        Terra.validates.element('auto-resizeable DocumentTouch');
      });

      it('should not resize when DocumentTouch exists and browser screen is not desktop size', () => {
        $('textarea').setValue('New input New Input\n \n \n \n \n \n \n \n \n');

        Terra.validates.element('auto-resizeable does not resize DocumentTouch');
      });
    });

    describe('Blocks autoresizing for when maxTouchPoints exists and browser screen is not desktop size', () => {
      before(() => {
        browser.url('/raw/tests/cerner-terra-core-docs/form-textarea/auto-resizable-textarea-mobile-max-touch-points');
        $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // add to ensure consistent hover styles
      });

      it('should display auto-resizable Textarea', () => {
        Terra.validates.element('auto-resizeable maxTouchPoints');
      });

      it('should not resize when maxTouchPoints exists and browser screen is not desktop size', () => {
        $('textarea').setValue('New input New Input\n \n \n \n \n \n \n \n \n');

        Terra.validates.element('auto-resizeable does not resize maxTouchPoints');
      });
    });

    describe('Blocks autoresizing for when msMaxTouchPoints exists and browser screen is not desktop size', () => {
      before(() => {
        browser.url('/raw/tests/cerner-terra-core-docs/form-textarea/auto-resizable-textarea-mobile-ms-max-touch-points');
        $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // add to ensure consistent hover styles
      });

      it('should display auto-resizable Textarea', () => {
        Terra.validates.element('auto-resizeable msMaxTouchPoints');
      });

      it('should not resize when msMaxTouchPoints exists and browser screen is not desktop size', () => {
        $('textarea').setValue('New input New Input\n \n \n \n \n \n \n \n \n');

        Terra.validates.element('auto-resizeable does not resize msMaxTouchPoints');
      });
    });

    it('should swap two Textareas with different size', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-textarea/swap-textarea');
      $('#swap-button').click();

      Terra.validates.element('swapping');
    });
  });

  describe('TextareaField', () => {
    it('should display valid TextareaField', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-textarea/textarea-field');
      $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // add to ensure consistent hover styles

      Terra.validates.element('valid');
    });

    it('should display invalid TextareaField', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-textarea/textarea-field');
      $('#validity-toggle').click();

      Terra.validates.element('text-area-field invalid');
    });

    it('should display incomplete TextareaField', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-textarea/textarea-field');
      $('#incomplete-toggle').click();

      Terra.validates.element('text-area-field incomplete');
    });

    it('should display Disabled TextareaField', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/form-textarea/disabled-textarea-field');
      $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // add to ensure consistent hover styles

      Terra.validates.element('disabled');
    });
  });
});

Terra.describeViewports('Form-Textarea', ['large'], () => {
  describe('Setting Value', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/form-textarea/setting-value-textarea'));

    it('should display empty Textarea', () => {
      Terra.validates.element('empty');
    });

    it('should trigger onInput when programmatically setting value', () => {
      $('#textarea-set-text-button').click();
      $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // move cursor to remove focus styles

      Terra.validates.element('programmatically');
    });
  });
});
