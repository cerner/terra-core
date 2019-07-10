Terra.describeViewports('Button', ['tiny'], () => {
  describe('Neutral', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/variants/neutral-button');
      browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
    });

    Terra.it.validatesElement({ selector: '#neutral' });

    describe('Neutral-Hovered', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-button/button/variants/neutral-button');
        browser.moveToObject('#neutralButton');
      });

      Terra.it.validatesElement({ selector: '#neutral' });

      after(() => browser.moveToObject('#root'));
    });

    describe('Neutral-Keyboard Focus', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-button/button/variants/neutral-button');
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

    describe('Emphasis-Hovered', () => {
      before(() => browser.moveToObject('#emphasisButton'));

      Terra.it.validatesElement({ selector: '#emphasis' });

      after(() => browser.moveToObject('#root'));
    });

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

    describe('Ghost-Hovered', () => {
      before(() => browser.moveToObject('#ghostButton'));

      Terra.it.validatesElement({ selector: '#ghost' });

      after(() => browser.moveToObject('#root'));
    });

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

    describe('De-emphasis-Hovered', () => {
      before(() => browser.moveToObject('#de-emphasisButton'));

      Terra.it.validatesElement({ selector: '#de-emphasis' });

      after(() => browser.moveToObject('#root'));
    });

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

    describe('Action-Hovered', () => {
      before(() => browser.moveToObject('#actionButton'));

      Terra.it.validatesElement({ selector: '#action' });

      after(() => browser.moveToObject('#root'));
    });

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

    describe('Utility-Hovered', () => {
      before(() => browser.moveToObject('#utilityButton'));

      Terra.it.validatesElement({ selector: '#utility' });

      after(() => browser.moveToObject('#root'));
    });

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
});
