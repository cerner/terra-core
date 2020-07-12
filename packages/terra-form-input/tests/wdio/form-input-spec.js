Terra.describeViewports('Form-Input', ['tiny', 'large'], () => {
  describe('Valid', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-input/form-input/default-form-input');
      browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles
    });

    Terra.it.validatesElement();
  });

  describe('Invalid', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-input/form-input/invalid-form-input');
      browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles
    });

    Terra.it.validatesElement();
  });

  describe('Incomplete', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-input/form-input/incomplete-form-input');
      browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles
    });

    Terra.it.validatesElement();
  });

  describe('Invalid With Incomplete', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-input/form-input/invalid-with-incomplete-form-input');
      browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles
    });

    Terra.it.validatesElement();
  });

  describe('Enabled', () => {
    describe('Enabled Non-Selected', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/default-form-input');
        browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles
      });

      Terra.it.validatesElement();
    });

    describe('Enabled Hovered', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/default-form-input');
        browser.moveToObject('input');
      });

      Terra.it.validatesElement();
    });

    describe('Enabled Value', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/value-form-input');
        browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles
      });

      Terra.it.validatesElement();
    });

    describe('Enabled Keyboard-Focused', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/default-form-input');
        browser.keys('Tab');
        browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles
      });

      Terra.it.validatesElement();
    });
  });

  describe('Disabled', () => {
    describe('Disabled Non-Selected', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/disabled-form-input');
        browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles
      });

      Terra.it.validatesElement();
    });

    describe('Disabled Value', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/disabled-value-input');
        browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles
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
        browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles
      });

      Terra.it.validatesElement();
    });
  });

  describe('InputField', () => {
    describe('Resized InputField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/input-field-width');
        browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles
      });

      Terra.it.validatesElement();
    });

    describe('Valid InputField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/input-field');
        browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles
      });

      Terra.it.validatesElement();
    });

    describe('Invalid InputField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/input-field');
        browser.click('#validity-toggle');
        browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles
      });

      Terra.it.validatesElement();
    });

    describe('Incomplete InputField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/input-field');
        browser.click('#incomplete-toggle');
        browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles
      });

      Terra.it.validatesElement();
    });

    describe('Disabled InputField', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-input/form-input/disabled-input-field');
        browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles
      });

      Terra.it.validatesElement();
    });
  });
});
