Terra.describeViewports('Button', ['tiny'], () => {
  describe('Neutral', () => {
    it('displays default neutral Button', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/button/variants/neutral-button');
      $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // move cursor to remove focus styles

      Terra.validates.element('neutral default', { selector: '#neutral' });
    });

    it('displays neutral Button with keyboard focus', () => {
      browser.keys('Tab');

      Terra.validates.element('neutral-keyboard focus', { selector: '#neutral' });
    });

    it('displays Neutral-Active Button', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/button/active-variant-buttons');

      Terra.validates.element('neutral active', { selector: '#neutralActive' });
      Terra.validates.element('neutral active and focused', { selector: '#neutralActiveFocusSpan' });
    });
  });

  describe('Emphasis', () => {
    it('displays default emphasis Button', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/button/variants/emphasis-button');

      Terra.validates.element('emphasis default', { selector: '#emphasis' });
    });

    it('displays emphasis Button with keyboard focus', () => {
      browser.keys('Tab');

      Terra.validates.element('emphasis-keyboard focus', { selector: '#emphasis' });
    });

    it('displays emphasis-active Button', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/button/active-variant-buttons');

      Terra.validates.element('emphasis active', { selector: '#emphasisActive' });
      Terra.validates.element('emphasis active and focused', { selector: '#emphasisActiveFocusSpan' });
    });
  });

  describe('Ghost', () => {
    it('displays default ghost Button', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/button/variants/ghost-button');

      Terra.validates.element('ghost default', { selector: '#ghost' });
    });

    it('displays ghost Button with keyboard focus', () => {
      browser.keys('Tab');

      Terra.validates.element('ghost-keyboard focus', { selector: '#ghost' });
    });

    it('displays ghost-active Button', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/button/active-variant-buttons');

      Terra.validates.element('ghost active', { selector: '#ghostActive' });
      Terra.validates.element('ghost active and focused', { selector: '#ghostActiveFocusSpan' });
    });
  });

  describe('De-emphasis', () => {
    it('displays default de-emphasis Button', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/button/variants/deemphasis-button');

      Terra.validates.element('de-emphasis default', { selector: '#de-emphasis' });
    });

    it('displays de-emphasis Button with keyboard focus', () => {
      browser.keys('Tab');

      Terra.validates.element('de-emphasis-keyboard focus', { selector: '#de-emphasis' });
    });

    it('displays de-emphasis-active Button', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/button/active-variant-buttons');

      Terra.validates.element('de-emphasis active', { selector: '#de-emphasisActive' });
      Terra.validates.element('de-emphasis active and focused', { selector: '#de-emphasisActiveFocusSpan' });
    });
  });

  describe('Action', () => {
    it('displays default action Button', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/button/variants/action-button');

      Terra.validates.element('action default', { selector: '#action' });
    });

    it('displays action Button with keyboard focus', () => {
      browser.keys('Tab');

      Terra.validates.element('action-keyboard focus', { selector: '#action' });
    });

    it('displays action-active Button', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/button/active-variant-buttons');

      Terra.validates.element('action active', { selector: '#actionActive' });
      Terra.validates.element('action active and focused', { selector: '#actionActiveFocusSpan' });
    });
  });

  describe('Utility', () => {
    it('displays default utility Button', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/button/variants/utility-button');

      Terra.validates.element('utility default', { selector: '#utility' });
    });

    it('displays utility Button with keyboard focus', () => {
      browser.keys('Tab');

      Terra.validates.element('utility-keyboard focus', { selector: '#utility' });
    });

    it('displays utility-active Button', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/button/active-variant-buttons');

      Terra.validates.element('utility active', { selector: '#utilityActive' });
      Terra.validates.element('utility active and focused', { selector: '#utilityActiveFocusSpan' });
    });
  });

  it('displays Button with long text', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/button/long-text-button');
    $('#root').moveTo();

    Terra.validates.element('long text', { selector: '#long-text' });
  });

  describe('Button Types', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/button/button-types');
      $('#root').moveTo();
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
      browser.url('/raw/tests/cerner-terra-core-docs/button/icon-button');
      $('#root').moveTo();
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
    browser.url('/raw/tests/cerner-terra-core-docs/button/compact-button');
    $('#root').moveTo();

    Terra.validates.element('compact', { selector: '#compactButton' });
  });

  describe('displays anchor button', () => {
    it('Anchor button', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/button/anchor-button');
      $('<a>').click();
      Terra.validates.element('anchor-button');
    });
  });

  describe('Programmatic Focus', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/button/programmatic-focus');
    });

    it('displays programmatic focus on Button 2', () => {
      $('#button1').click();

      Terra.validates.element('focused Button 2');
    });

    it('displays programmatic focus on Button 1', () => {
      browser.keys(['Enter']);
      Terra.validates.element('focused Button 1');
    });

    it('displays programmatic focus on Button 2', () => {
      $('#button3').click();
      Terra.validates.element('Button 3 clicked without focus styles');

      expect($('#button3').isFocused()).toEqual(true);
    });
  });

  describe('Dismissing Modal should focus the button', () => {
    it('displays Button with focus', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/button/button-modal-focus');
      $('#modal-open-button').click();
      browser.pause(300);

      Terra.validates.element('dismiss modal - Button has focus');
    });
  });

  describe('Programmatic Disabled', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/button/programmatic-disabled');
    });

    it('focuses button', () => {
      browser.keys(['Tab']);

      Terra.validates.element('programmatic disabled - Button has focus', { selector: '#root' });
    });

    it('disables button', () => {
      $('#programmaticDisabledButton').click();

      Terra.validates.element('programmatic disabled - Button is Disabled', { selector: '#root' });
    });
  });

  describe('Programmatically Re-enable a disabled button', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/button/programmatic-disable-enable');
    });

    it('disables button', () => {
      browser.keys(['Tab']);
      $('#programmaticDisabledButton1').click();
      Terra.validates.element('programmatic re-enabled - Button is disabled', { selector: '#root' });
    });

    it('enables button', () => {
      browser.keys(['Tab']);
      $('#programmaticDisabledButton2').click();
      Terra.validates.element('programmatic re-enabled -Enabled Button is not focused', { selector: '#root' });
    });
  });
});
