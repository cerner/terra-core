Terra.describeViewports('Form-Textarea', ['tiny', 'large'], () => {
  it('should display default Textarea', () => {
    browser.url('/raw/tests/terra-form-textarea/form-textarea/default-textarea');
    browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

    Terra.validates.element('default');
  });

  it('should display Textarea with props populated', () => {
    browser.url('/raw/tests/terra-form-textarea/form-textarea/populated-textarea');
    browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

    Terra.validates.element('props populated');
  });

  it('should display invalid Textarea', () => {
    browser.url('/raw/tests/terra-form-textarea/form-textarea/invalid-textarea');
    browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

    Terra.validates.element('invalid');
  });

  it('should display incomplete Textarea', () => {
    browser.url('/raw/tests/terra-form-textarea/form-textarea/incomplete-textarea');
    browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

    Terra.validates.element('incomplete');
  });

  it('should display small Textarea with height resizing', () => {
    browser.url('/raw/tests/terra-form-textarea/form-textarea/small-textarea');
    browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

    Terra.validates.element('small textarea with height resizing');
  });

  it('should display medium Textarea with height resizing', () => {
    browser.url('/raw/tests/terra-form-textarea/form-textarea/medium-textarea');
    browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

    Terra.validates.element('medium textarea with height resizing');
  });

  it('should display large Textarea with height resizing', () => {
    browser.url('/raw/tests/terra-form-textarea/form-textarea/large-textarea');
    browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

    Terra.validates.element('large Textarea with height resizing');
  });

  it('should display full size Textarea with height resizing', () => {
    browser.url('/raw/tests/terra-form-textarea/form-textarea/full-textarea');
    browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

    Terra.validates.element('full size Textarea with height resizing');
  });

  describe('AutoResizable Textarea', () => {
    before(() => {
      browser.url('/raw/tests/terra-form-textarea/form-textarea/auto-resizable-textarea');
      browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles
    });

    it('should display auto-resizable Textarea', () => {
      Terra.validates.element('0');
    });

    it('should resize when given several rows of input', () => {
      browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');

      Terra.validates.element('1');
    });

    describe('Non-Resizable Textarea', () => {
      before(() => {
        browser.url('/raw/tests/terra-form-textarea/form-textarea/medium-textarea');
        browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles
      });

      it('should display non-resizable Textarea', () => {
        Terra.validates.element('0');
      });

      it('should not resize when given several rows of input', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');

        Terra.validates.element('1');
      });
    });

    describe('Blocks autoresizing for when ontouch exists and browser screen is not desktop size', () => {
      before(() => {
        browser.url('/raw/tests/terra-form-textarea/form-textarea/auto-resizable-textarea-mobile-on-touch-start');
        browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles
      });

      it('should display auto-resizable Textarea', () => {
        Terra.validates.element('0');
      });

      it('should not resize when ontouch exists and browser screen is not desktop size', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');

        Terra.validates.element('1');
      });
    });

    describe('Blocks autoresizing for when DocumentTouch exists and browser screen is not desktop size', () => {
      before(() => {
        browser.url('/raw/tests/terra-form-textarea/form-textarea/auto-resizable-textarea-mobile-document-touch');
        browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles
      });

      it('should display auto-resizable Textarea', () => {
        Terra.validates.element('0');
      });

      it('should not resize when DocumentTouch exists and browser screen is not desktop size', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');

        Terra.validates.element('1');
      });
    });

    describe('Blocks autoresizing for when maxTouchPoints exists and browser screen is not desktop size', () => {
      before(() => {
        browser.url('/raw/tests/terra-form-textarea/form-textarea/auto-resizable-textarea-mobile-max-touch-points');
        browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles
      });

      it('should display auto-resizable Textarea', () => {
        Terra.validates.element('0');
      });

      it('should not resize when maxTouchPoints exists and browser screen is not desktop size', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');

        Terra.validates.element('1');
      });
    });

    describe('Blocks autoresizing for when msMaxTouchPoints exists and browser screen is not desktop size', () => {
      before(() => {
        browser.url('/raw/tests/terra-form-textarea/form-textarea/auto-resizable-textarea-mobile-ms-max-touch-points');
        browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles
      });

      it('should display auto-resizable Textarea', () => {
        Terra.validates.element('0');
      });

      it('should not resize when msMaxTouchPoints exists and browser screen is not desktop size', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');

        Terra.validates.element('1');
      });
    });

    it('should swap two Textareas with different size', () => {
      browser.url('/raw/tests/terra-form-textarea/form-textarea/swap-textarea');
      browser.click('#swap-button');

      Terra.validates.element('swapping');
    });
  });

  describe('TextareaField', () => {
    it('should display valid TextareaField', () => {
      browser.url('/raw/tests/terra-form-textarea/form-textarea/textarea-field');
      browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

      Terra.validates.element('valid');
    });

    it('should display invalid TextareaField', () => {
      browser.url('/raw/tests/terra-form-textarea/form-textarea/textarea-field');
      browser.click('#validity-toggle');

      Terra.validates.element('invalid');
    });

    it('should display incomplete TextareaField', () => {
      browser.url('/raw/tests/terra-form-textarea/form-textarea/textarea-field');
      browser.click('#incomplete-toggle');

      Terra.validates.element('incomplete');
    });

    it('should display Disabled TextareaField', () => {
      browser.url('/raw/tests/terra-form-textarea/form-textarea/disabled-textarea-field');
      browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

      Terra.validates.element('disabled');
    });
  });
});

Terra.describeViewports('Form-Textarea', ['large'], () => {
  describe('Setting Value', () => {
    before(() => browser.url('/raw/tests/terra-form-textarea/form-textarea/setting-value-textarea'));

    it('should display empty Textarea', () => {
      Terra.validates.element('empty');
    });

    it('should trigger onInput when programmatically setting value', () => {
      browser.click('#textarea-set-text-button');

      Terra.validates.element('programmatically');
    });
  });
});
