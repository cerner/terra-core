Terra.describeViewports('Form-Textarea', ['tiny', 'large'], () => {
  describe('default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/default-textarea');
    });

    Terra.it.validatesElement();
  });

  describe('Props Populated', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/populated-textarea');
    });

    Terra.it.validatesElement();
  });

  describe('Invalid', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/invalid-textarea');
    });

    Terra.it.validatesElement();
  });

  describe('Incomplete', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/incomplete-textarea');
    });

    Terra.it.validatesElement();
  });

  describe('Small Textarea Height Resizing', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/small-textarea');
    });

    Terra.it.validatesElement();
  });

  describe('Medium Textarea Height Resizing', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/medium-textarea');
    });

    Terra.it.validatesElement();
  });

  describe('Large Textarea Height Resizing', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/large-textarea');
    });

    Terra.it.validatesElement();
  });

  describe('Full Size Textarea Height Resizing', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/full-textarea');
    });

    Terra.it.validatesElement();
  });

  describe('Enabled Placeholder', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/placeholder-textarea');
    });

    Terra.it.validatesElement();
  });

  describe('Disabled Placeholder', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/disabled-placeholder-textarea');
    });

    Terra.it.validatesElement();
  });

  describe('AutoResizable Textarea', () => {
    describe('Resizes when given several rows of input', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/auto-resizable-textarea');
        browser.moveToObject('#root', 0, 0);
      });

      Terra.it.validatesElement('0');

      it('should resize appropriately', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');
      });

      Terra.it.matchesScreenshot('1');
    });

    describe('Does not resize textareas that are non-resizable', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/medium-textarea');
      });

      Terra.it.validatesElement('0');

      it('should resize appropriately', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');
      });

      Terra.it.matchesScreenshot('1');
    });

    describe('Blocks autoresizing for when ontouch exists and browser screen is not desktop size', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/auto-resizable-textarea-mobile-on-touch-start');
        browser.moveToObject('#root', 0, 0);
      });

      Terra.it.validatesElement('0');

      it('should resize appropriately', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');
      });

      Terra.it.matchesScreenshot('1');
    });

    describe('Blocks autoresizing for when DocumentTouch exists and browser screen is not desktop size', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/auto-resizable-textarea-mobile-document-touch');

        browser.moveToObject('#root', 0, 0);
      });

      Terra.it.validatesElement('0');

      it('should resize appropriately', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');
      });

      Terra.it.matchesScreenshot('1');
    });

    describe('Blocks autoresizing for when maxTouchPoints exists and browser screen is not desktop size', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/auto-resizable-textarea-mobile-max-touch-points');
        browser.moveToObject('#root', 0, 0);
      });

      Terra.it.validatesElement('0');

      it('should resize appropriately', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');
      });

      Terra.it.matchesScreenshot('1');
    });

    describe('Blocks autoresizing for when msMaxTouchPoints exists and browser screen is not desktop size', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/auto-resizable-textarea-mobile-ms-max-touch-points');
        browser.moveToObject('#root', 0, 0);
      });

      Terra.it.validatesElement('0');

      it('should resize appropriately', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');
      });

      Terra.it.matchesScreenshot('1');
    });

    describe('Swapping two textareas with different size', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/swap-textarea');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("textarea").style.caretColor = "transparent";');
        browser.click('#swap-button');
      });

      Terra.it.validatesElement();
    });
  });

  describe('TextareaField', () => {
    describe('Valid TextareaField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/textarea-field');
        browser.moveToObject('#root', 0, 0);
      });

      Terra.it.validatesElement();
    });

    describe('Invalid TextareaField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/textarea-field');
        browser.click('#validity-toggle');
      });

      Terra.it.validatesElement();
    });

    describe('Incomplete TextareaField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/textarea-field');
        browser.click('#incomplete-toggle');
      });

      Terra.it.validatesElement();
    });

    describe('Disabled TextareaField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/disabled-textarea-field');
      });

      Terra.it.validatesElement();
    });
  });
});
