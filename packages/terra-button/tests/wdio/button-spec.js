Terra.describeViewports('Button', ['tiny'], () => {
  describe('Neutral', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/variants/neutral-button');
      browser.moveToObject('#root', 0, 700); // move cursor to remove focus styles
    });

    Terra.it.validatesElement({ selector: '#neutral' });

    describe('Neutral-Keyboard Focus', () => {
      before(() => {
        browser.keys('Tab');
      });

      Terra.it.validatesElement({ selector: '#neutral' });
    });

    describe('Neutral-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.it.validatesElement('active', { selector: '#neutralActive' });
      Terra.it.validatesElement('active and focused', { selector: '#neutralActiveFocusSpan' });
    });
  });

  describe('Emphasis', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/emphasis-button'));

    Terra.it.validatesElement({ selector: '#emphasis' });

    describe('Emphasis-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.it.validatesElement({ selector: '#emphasis' });
    });

    describe('Emphasis-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.it.validatesElement('active', { selector: '#emphasisActive' });
      Terra.it.validatesElement('active and focused', { selector: '#emphasisActiveFocusSpan' });
    });
  });

  describe('Ghost', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/ghost-button'));

    Terra.it.validatesElement({ selector: '#ghost' });

    describe('Ghost-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.it.validatesElement({ selector: '#ghost' });
    });

    describe('Ghost-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.it.validatesElement('active', { selector: '#ghostActive' });
      Terra.it.validatesElement('active and focused', { selector: '#ghostActiveFocusSpan' });
    });
  });

  describe('De-emphasis', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/deemphasis-button'));

    Terra.it.validatesElement({ selector: '#de-emphasis' });

    describe('De-emphasis-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.it.validatesElement({ selector: '#de-emphasis' });
    });

    describe('De-emphasis-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.it.validatesElement('active', { selector: '#de-emphasisActive' });
      Terra.it.validatesElement('active and focused', { selector: '#de-emphasisActiveFocusSpan' });
    });
  });

  describe('Action', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/action-button'));

    Terra.it.validatesElement({ selector: '#action' });

    describe('Action-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.it.validatesElement({ selector: '#action' });
    });

    describe('Action-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.it.validatesElement('active', { selector: '#actionActive' });
      Terra.it.validatesElement('active and focused', { selector: '#actionActiveFocusSpan' });
    });
  });

  describe('Utility', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/utility-button'));

    Terra.it.validatesElement({ selector: '#utility' });

    describe('Utility-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.it.validatesElement({ selector: '#utility' });
    });

    describe('Utility-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.it.validatesElement('active', { selector: '#utilityActive' });
      Terra.it.validatesElement('active and focused', { selector: '#utilityActiveFocusSpan' });
    });
  });

  describe('Long Text', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/long-text-button');
      browser.moveToObject('#root');
    });

    Terra.it.validatesElement({ selector: '#long-text' });
  });

  describe('Block', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/long-text-button');
      browser.moveToObject('#root');
    });

    Terra.it.validatesElement({ selector: '#long-text' });
  });

  describe('Button Types', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/button-types');
      browser.moveToObject('#root');
    });

    Terra.it.isAccessible();

    describe('Type reset', () => {
      Terra.it.validatesElement({ selector: '#buttonWithTypeReset' });
    });

    describe('Type submit', () => {
      Terra.it.matchesScreenshot({ selector: '#buttonWithTypeSubmit' });
    });

    describe('Type button', () => {
      Terra.it.matchesScreenshot({ selector: '#buttonWithTypeButton' });
    });
  });

  describe('Button with Icon', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/icon-button');
      browser.moveToObject('#root');
    });

    Terra.it.isAccessible();

    describe('Icon and Text', () => {
      Terra.it.matchesScreenshot({ selector: '#iconNeutralButton' });
    });

    describe('Icon and Text Reversed', () => {
      Terra.it.matchesScreenshot({ selector: '#iconReversedButton' });
    });

    describe('Icon only', () => {
      Terra.it.matchesScreenshot({ selector: '#iconOnlyButton' });
    });
  });

  describe('Compact Button', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/compact-button');
      browser.moveToObject('#root');
    });

    Terra.it.validatesElement({ selector: '#compactButton' });
  });

  describe('Programmatic Focus', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/programmatic-focus');
      browser.click('#button1');
    });

    Terra.it.matchesScreenshot('Button 2 focused programmatically');

    it('focuses button 1', () => {
      browser.keys(['Enter']);
      Terra.validates.screenshot('Button 1 focused programmatically');
    });

    it('focuses button 3', () => {
      browser.click('#button3');
      Terra.validates.screenshot('Button 3 clicked without focus styles');
    });

    browser.execute(() => {
      expect(document.querySelector('#button3').to.equal(document.activeElement));
    });
  });

  describe('Dismissing Modal should focus the button', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/button-modal-focus');
      browser.click('#modal-open-button');
      browser.pause(300);
    });

    Terra.it.validatesElement('Button has focus');
  });

  describe('Programmatic Disabled', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/programmatic-disabled');
    });

    it('focuses button', () => {
      browser.keys(['Tab']);
    });

    Terra.it.validatesElement('Button has focus', { selector: '#root' });

    it('disables button', () => {
      browser.click('#programmaticDisabledButton');
    });

    Terra.it.validatesElement('Button is Disabled', { selector: '#root' });
  });
});
