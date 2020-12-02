Terra.describeViewports('Button', ['tiny'], () => {
  describe('Neutral', () => {
    it('displays default neutral Button', () => {
      browser.url('/raw/tests/terra-button/button/variants/neutral-button');
      browser.moveToObject('#root', 0, 700); // move cursor to remove focus styles

      Terra.validates.element('default', { selector: '#neutral' });
    });

    it('displays neutral Button with keyboard focus', () => {
      browser.keys('Tab');

      Terra.validates.element('neutral-keyboard focus', { selector: '#neutral' });
    });

    it('displays Neutral-Active Button', () => {
      browser.url('/raw/tests/terra-button/button/active-variant-buttons');

      Terra.validates.element('active', { selector: '#neutralActive' });
      Terra.validates.element('active and focused', { selector: '#neutralActiveFocusSpan' });
    });
  });

  describe('Emphasis', () => {
    it('displays default emphasis Button', () => {
      browser.url('/raw/tests/terra-button/button/variants/emphasis-button');

      Terra.validates.element('default', { selector: '#emphasis' });
    });

    it('displays emphasis Button with keyboard focus', () => {
      browser.keys('Tab');

      Terra.validates.element('emphasis-keyboard focus', { selector: '#emphasis' });
    });

    it('displays emphasis-active Button', () => {
      browser.url('/raw/tests/terra-button/button/active-variant-buttons');

      Terra.validates.element('active', { selector: '#emphasisActive' });
      Terra.validates.element('active and focused', { selector: '#emphasisActiveFocusSpan' });
    });
  });

  describe('Ghost', () => {
    it('displays default ghost Button', () => {
      browser.url('/raw/tests/terra-button/button/variants/ghost-button');

      Terra.validates.element('default', { selector: '#ghost' });
    });

    it('displays ghost Button with keyboard focus', () => {
      browser.keys('Tab');

      Terra.validates.element('ghost-keyboard focus', { selector: '#ghost' });
    });

    it('displays ghost-active Button', () => {
      browser.url('/raw/tests/terra-button/button/active-variant-buttons');

      Terra.validates.element('active', { selector: '#ghostActive' });
      Terra.validates.element('active and focused', { selector: '#ghostActiveFocusSpan' });
    });
  });

  describe('De-emphasis', () => {
    it('displays default de-emphasis Button', () => {
      browser.url('/raw/tests/terra-button/button/variants/deemphasis-button');

      Terra.validates.element('default', { selector: '#de-emphasis' });
    });

    it('displays de-emphasis Button with keyboard focus', () => {
      browser.keys('Tab');

      Terra.validates.element('de-emphasis-keyboard focus', { selector: '#de-emphasis' });
    });

    it('displays de-emphasis-active Button', () => {
      browser.url('/raw/tests/terra-button/button/active-variant-buttons');

      Terra.validates.element('active', { selector: '#de-emphasisActive' });
      Terra.validates.element('active and focused', { selector: '#de-emphasisActiveFocusSpan' });
    });
  });

  describe('Action', () => {
    it('displays default action Button', () => {
      browser.url('/raw/tests/terra-button/button/variants/action-button');

      Terra.validates.element('default', { selector: '#action' });
    });

    it('displays action Button with keyboard focus', () => {
      browser.keys('Tab');

      Terra.validates.element('action-keyboard focus', { selector: '#action' });
    });

    it('displays action-active Button', () => {
      browser.url('/raw/tests/terra-button/button/active-variant-buttons');

      Terra.validates.element('active', { selector: '#actionActive' });
      Terra.validates.element('active and focused', { selector: '#actionActiveFocusSpan' });
    });
  });

  describe('Utility', () => {
    it('displays default utility Button', () => {
      browser.url('/raw/tests/terra-button/button/variants/utility-button');

      Terra.validates.element({ selector: '#utility' });
    });

    it('displays utility Button with keyboard focus', () => {
      browser.keys('Tab');

      Terra.validates.element('utility-keyboard focus', { selector: '#utility' });
    });

    it('displays utility-active Button', () => {
      browser.url('/raw/tests/terra-button/button/active-variant-buttons');

      Terra.validates.element('active', { selector: '#utilityActive' });
      Terra.validates.element('active and focused', { selector: '#utilityActiveFocusSpan' });
    });
  });

  it('displays Button with long text', () => {
    browser.url('/raw/tests/terra-button/button/long-text-button');
    browser.moveToObject('#root');

    Terra.validates.element('long text', { selector: '#long-text' });
  });

  describe('Button Types', () => {
    before(() => {
      browser.url('/raw/tests/terra-button/button/button-types');
      browser.moveToObject('#root');
    });

    it('displays type reset', () => {
      Terra.validates.element('type reset', { selector: '#buttonWithTypeReset' });
    });

    it('displays type submit', () => {
      Terra.validates.element('type submit', { selector: '#buttonWithTypeSubmit' });
    });

    it('displays type button', () => {
      Terra.validates.element('type button', { selector: '#buttonWithTypeButton' });
    });
  });

  describe('displays Button with Icon', () => {
    before(() => {
      browser.url('/raw/tests/terra-button/button/icon-button');
      browser.moveToObject('#root');
    });

    it('displays icon and text', () => {
      Terra.validates.element('icon and text', { selector: '#iconNeutralButton' });
    });

    it('displays icon and text reversed', () => {
      Terra.validates.element('icon and text reversed', { selector: '#iconReversedButton' });
    });

    it('displays icon only', () => {
      Terra.validates.element('icon only', { selector: '#iconOnlyButton' });
    });
  });

  it('displays compact Button', () => {
    browser.url('/raw/tests/terra-button/button/compact-button');
    browser.moveToObject('#root');

    Terra.validates.element('compact', { selector: '#compactButton' });
  });

  describe('Programmatic Focus', () => {
    before(() => {
      browser.url('/raw/tests/terra-button/button/programmatic-focus');
    });

    it('displays programmatic focus on Button 2', () => {
      browser.click('#button1');

      Terra.validates.element('focused Button 2');
    });

    it('displays programmatic focus on Button 1', () => {
      browser.keys(['Enter']);
      Terra.validates.element('focused Button 1');
    });

    it('displays programmatic focus on Button 2', () => {
      browser.click('#button3');
      Terra.validates.element('Button 3 clicked without focus styles');
    });

    browser.execute(() => {
      expect(document.querySelector('#button3').to.equal(document.activeElement));
    });
  });

  describe('Dismissing Modal should focus the button', () => {
    it('displays Button with focus', () => {
      browser.url('/raw/tests/terra-button/button/button-modal-focus');
      browser.click('#modal-open-button');
      browser.pause(300);

      Terra.validates.element('Button has focus');
    });
  });

  describe('Programmatic Disabled', () => {
    before(() => {
      browser.url('/raw/tests/terra-button/button/programmatic-disabled');
    });

    it('focuses button', () => {
      browser.keys(['Tab']);

      Terra.validates.element('Button has focus', { selector: '#root' });
    });

    it('disables button', () => {
      browser.click('#programmaticDisabledButton');

      Terra.validates.element('Button is Disabled', { selector: '#root' });
    });
  });

  describe('Programmatically Re-enable a disabled button', () => {
    before(() => {
      browser.url('/raw/tests/terra-button/button/programmatic-disable-enable');
    });

    it('disables button', () => {
      browser.keys(['Tab']);
      browser.click('#programmaticDisabledButton1');
      Terra.validates.element('Button is disabled', { selector: '#root' });
    });

    it('enables button', () => {
      browser.keys(['Tab']);
      browser.click('#programmaticDisabledButton2');
      Terra.validates.element('Enabled Button is not focused', { selector: '#root' });
    });
  });
});
