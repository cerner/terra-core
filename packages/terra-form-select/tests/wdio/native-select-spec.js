Terra.describeViewports('Native Select', ['tiny'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/native-select/default'));

    describe('initially unfocused', () => {
      Terra.it.validatesElement('no-focus');
    });

    describe('default should gain focus when tabbed to', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('should be focused', async () => {
        (await browser.hasFocus('#select-id')).should.be.true;
      });

      Terra.it.validatesElement('tab-focus');
    });
  });

  describe('Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/native-select/disabled'));

    describe('initially unfocused', () => {
      Terra.it.validatesElement('no-focus');
    });

    describe('default should gain focus when tabbed to', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('should not be focused', async () => {
        (await browser.hasFocus('#select-id')).should.be.false;
      });

      Terra.it.validatesElement('tab-focus');
    });
  });

  describe('Incomplete', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/native-select/incomplete'));

    describe('initially unfocused', () => {
      Terra.it.validatesElement('no-focus');
    });

    describe('default should gain focus when tabbed to', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('should be focused', async () => {
        (await browser.hasFocus('#select-id')).should.be.true;
      });

      Terra.it.validatesElement('tab-focus');
    });
  });

  describe('Invalid', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/native-select/invalid'));

    describe('initially unfocused', () => {
      Terra.it.validatesElement('no-focus');
    });

    describe('default should gain focus when tabbed to', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('should be focused', async () => {
        (await browser.hasFocus('#select-id')).should.be.true;
      });

      Terra.it.validatesElement('tab-focus');
    });
  });

  describe('LongText', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/native-select/long-text'));

    describe('initially unfocused', () => {
      Terra.it.validatesElement('no-focus');
    });

    describe('default should gain focus when tabbed to', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('should be focused', async () => {
        (await browser.hasFocus('#select-id')).should.be.true;
      });

      Terra.it.validatesElement('tab-focus');
    });
  });

  describe('OptGroup', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/native-select/opt-group'));

    describe('initially unfocused', () => {
      Terra.it.validatesElement('no-focus');
    });

    describe('default should gain focus when tabbed to', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('should be focused', async () => {
        (await browser.hasFocus('#select-id')).should.be.true;
      });

      Terra.it.validatesElement('tab-focus');
    });
  });

  describe('Placeholder', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/native-select/placeholder'));

    describe('initially unfocused', () => {
      Terra.it.validatesElement('no-focus');
    });

    describe('default should gain focus when tabbed to', () => {
      it('should tab focus to the select', () => {
        browser.keys('Tab');
      });

      it('should be focused', async () => {
        (await browser.hasFocus('#select-id')).should.be.true;
      });

      Terra.it.validatesElement('tab-focus');
    });
  });
});
