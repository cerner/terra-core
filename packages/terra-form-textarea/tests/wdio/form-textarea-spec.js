const viewports = Terra.viewports('tiny', 'large');

const ignoredA11y = {
  label: { enabled: false },
};

describe('Form-Textarea', () => {
  describe('default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/default-textarea');
    });

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ rules: ignoredA11y });
  });


  describe('Props Populated', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/populated-textarea');
    });

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ rules: ignoredA11y });
  });

  describe('Invalid', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/invalid-textarea');
    });

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ rules: ignoredA11y });
  });

  describe('Small Textarea Height Resizing', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/small-textarea');
    });

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ rules: ignoredA11y });
  });

  describe('Medium Textarea Height Resizing', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/medium-textarea');
    });

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ rules: ignoredA11y });
  });

  describe('Large Textarea Height Resizing', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/large-textarea');
    });

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ rules: ignoredA11y });
  });

  describe('Full Size Textarea Height Resizing', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/full-textarea');
    });

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ rules: ignoredA11y });
  });

  describe('Enabled Placeholder', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/placeholder-textarea');
    });

    Terra.it.isAccessible({ rules: ignoredA11y });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Disabled Placeholder', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-textarea/form-textarea/disabled-placeholder-textarea');
    });

    Terra.it.isAccessible({ rules: ignoredA11y });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('AutoResizable Textarea', () => {
    describe('Resizes when given several rows of input', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/auto-resizable-textarea');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("textarea").style.caretColor = "transparent";');
      });

      Terra.it.matchesScreenshot('0', { viewports });

      it('should resize appropriately', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');
      });

      Terra.it.matchesScreenshot('1', { viewports });
    });

    describe('Does not resize textareas that are non-resizable', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/medium-textarea');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("textarea").style.caretColor = "transparent";');
      });

      Terra.it.matchesScreenshot('0', { viewports });

      it('should resize appropriately', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');
      });

      Terra.it.matchesScreenshot('1', { viewports });
    });

    describe('Blocks autoresizing for when ontouch exists and browser screen is not desktop size', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/auto-resizable-textarea-mobile-on-touch-start');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("textarea").style.caretColor = "transparent";');
      });

      Terra.it.matchesScreenshot('0', { viewports });

      it('should resize appropriately', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');
      });

      Terra.it.matchesScreenshot('1', { viewports });
    });

    describe('Blocks autoresizing for when DocumentTouch exists and browser screen is not desktop size', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/auto-resizable-textarea-mobile-document-touch');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("textarea").style.caretColor = "transparent";');
      });

      Terra.it.matchesScreenshot('0', { viewports });

      it('should resize appropriately', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');
      });

      Terra.it.matchesScreenshot('1', { viewports });
    });

    describe('Blocks autoresizing for when maxTouchPoints exists and browser screen is not desktop size', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/auto-resizable-textarea-mobile-max-touch-points');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("textarea").style.caretColor = "transparent";');
      });

      Terra.it.matchesScreenshot('0', { viewports });

      it('should resize appropriately', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');
      });

      Terra.it.matchesScreenshot('1', { viewports });
    });

    describe('Blocks autoresizing for when msMaxTouchPoints exists and browser screen is not desktop size', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/auto-resizable-textarea-mobile-ms-max-touch-points');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("textarea").style.caretColor = "transparent";');
      });

      Terra.it.matchesScreenshot('0', { viewports });

      it('should resize appropriately', () => {
        browser.setValue('textarea', 'New input New Input\n \n \n \n \n \n \n \n \n');
      });

      Terra.it.matchesScreenshot('1', { viewports });
    });
  });

  describe('TextareaField', () => {
    describe('Valid TextareaField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/textarea-field');
      });

      Terra.it.matchesScreenshot({ viewports });
    });

    describe('Invalid TextareaField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/textarea-field');
        browser.click('#validity-toggle');
      });

      Terra.it.matchesScreenshot({ viewports });
    });

    describe('Disabled TextareaField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-textarea/form-textarea/disabled-textarea-field');
      });

      Terra.it.matchesScreenshot({ viewports });
    });
  });
});
