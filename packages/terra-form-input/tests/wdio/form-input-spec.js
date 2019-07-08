Terra.describeViewports('Form-Input', ['tiny', 'large'], () => {
  describe('Valid', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-input/form-input/default-form-input');
    });

    Terra.it.validatesElement();
  });

  describe('Invalid', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-form-input/form-input/invalid-form-input');
    });

    Terra.it.validatesElement();
  });

  describe('Enabled', () => {
    describe('Enabled Non-Selected', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/default-form-input');
      });

      Terra.it.validatesElement();
    });

    describe('Enabled Hovered', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/default-form-input');
        browser.moveToObject('input');
      });

      Terra.it.validatesElement();
    });

    describe('Enabled Placeholder', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/placeholder-form-input');
      });

      Terra.it.validatesElement();
    });

    describe('Enabled Value', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/value-form-input');
      });

      Terra.it.validatesElement();
    });

    describe('Enabled Keyboard-Focused', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/default-form-input');
        browser.keys('Tab');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.getElementById("form-input-default").style.caretColor = "transparent";');
      });

      Terra.it.validatesElement();
    });
  });

  describe('Disabled', () => {
    describe('Disabled Non-Selected', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/disabled-form-input');
      });

      Terra.it.validatesElement();
    });

    describe('Disabled Placeholder', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/disabled-placeholder-input');
      });

      Terra.it.validatesElement();
    });

    describe('Disabled Value', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/disabled-value-input');
      });

      Terra.it.validatesElement();
    });

    describe('Disabled Hovered', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/disabled-form-input');
        browser.moveToObject('input');
      });

      Terra.it.validatesElement();
    });

    describe('Disabled Keyboard-Focused', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/disabled-form-input');
        browser.keys('Tab');
      });

      Terra.it.validatesElement();
    });
  });

  describe('InputField', () => {
    describe('Resized InputField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/input-field-width');
      });

      Terra.it.validatesElement();
    });

    describe('Valid InputField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/input-field');
      });

      Terra.it.validatesElement();
    });

    describe('Invalid InputField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/input-field');
        browser.click('#validity-toggle');
      });

      Terra.it.validatesElement();
    });

    describe('Disabled InputField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/disabled-input-field');
      });

      Terra.it.validatesElement();
    });
  });
});
