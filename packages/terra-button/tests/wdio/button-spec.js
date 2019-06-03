describe('Button', () => {
  before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

  describe('Neutral', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/variants/neutral-button');
      browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
    });

    Terra.it.isAccessible({ context: '#neutral' });
    Terra.it.matchesScreenshot({ selector: '#neutral' });

    describe('Neutral-Hovered', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-button/button/variants/neutral-button');
        browser.moveToObject('#neutralButton');
      });

      Terra.it.isAccessible({ context: '#neutral' });
      Terra.it.matchesScreenshot({ selector: '#neutral' });

      after(() => browser.moveToObject('#root'));
    });

    describe('Neutral-Keyboard Focus', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-button/button/variants/neutral-button');
        browser.keys('Tab');
      });

      Terra.it.isAccessible({ context: '#neutral' });
      Terra.it.matchesScreenshot({ selector: '#neutral' });
    });

    describe('Neutral-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.it.matchesScreenshot('active', { selector: '#neutralActive' });
      Terra.it.matchesScreenshot('active and focused', { selector: '#neutralActiveFocusSpan' });
    });
  });

  describe('Emphasis', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/emphasis-button'));

    Terra.it.isAccessible({ context: '#emphasis' });
    Terra.it.matchesScreenshot({ selector: '#emphasis' });

    describe('Emphasis-Hovered', () => {
      before(() => browser.moveToObject('#emphasisButton'));

      Terra.it.isAccessible({ context: '#emphasis' });
      Terra.it.matchesScreenshot({ selector: '#emphasis' });

      after(() => browser.moveToObject('#root'));
    });

    describe('Emphasis-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.it.isAccessible({ context: '#emphasis' });
      Terra.it.matchesScreenshot({ selector: '#emphasis' });
    });

    describe('Emphasis-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.it.isAccessible({ context: '#emphasisActive' });
      Terra.it.matchesScreenshot('active', { selector: '#emphasisActive' });

      Terra.it.isAccessible({ context: '#emphasisActiveFocus' });
      Terra.it.matchesScreenshot('active and focused', { selector: '#emphasisActiveFocusSpan' });
    });
  });

  describe('Ghost', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/ghost-button'));

    Terra.it.isAccessible({ context: '#ghost' });
    Terra.it.matchesScreenshot({ selector: '#ghost' });

    describe('Ghost-Hovered', () => {
      before(() => browser.moveToObject('#ghostButton'));

      Terra.it.isAccessible({ context: '#ghost' });
      Terra.it.matchesScreenshot({ selector: '#ghost' });

      after(() => browser.moveToObject('#root'));
    });

    describe('Ghost-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.it.isAccessible({ context: '#ghost' });
      Terra.it.matchesScreenshot({ selector: '#ghost' });
    });

    describe('Ghost-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.it.isAccessible({ context: '#ghostActive' });
      Terra.it.matchesScreenshot('active', { selector: '#ghostActive' });

      Terra.it.isAccessible({ context: '#ghostActiveFocus' });
      Terra.it.matchesScreenshot('active and focused', { selector: '#ghostActiveFocusSpan' });
    });
  });

  describe('De-emphasis', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/deemphasis-button'));

    Terra.it.isAccessible({ context: '#de-emphasis' });
    Terra.it.matchesScreenshot({ selector: '#de-emphasis' });

    describe('De-emphasis-Hovered', () => {
      before(() => browser.moveToObject('#de-emphasisButton'));

      Terra.it.isAccessible({ context: '#de-emphasis' });
      Terra.it.matchesScreenshot({ selector: '#de-emphasis' });

      after(() => browser.moveToObject('#root'));
    });

    describe('De-emphasis-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.it.isAccessible({ context: '#de-emphasis' });
      Terra.it.matchesScreenshot({ selector: '#de-emphasis' });
    });

    describe('De-emphasis-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.it.matchesScreenshot('active', { selector: '#de-emphasisActive' });
      Terra.it.matchesScreenshot('active and focused', { selector: '#de-emphasisActiveFocusSpan' });
    });
  });

  describe('Action', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/action-button'));

    Terra.it.isAccessible({ context: '#action' });
    Terra.it.matchesScreenshot({ selector: '#action' });

    describe('Action-Hovered', () => {
      before(() => browser.moveToObject('#actionButton'));

      Terra.it.isAccessible({ context: '#action' });
      Terra.it.matchesScreenshot({ selector: '#action' });

      after(() => browser.moveToObject('#root'));
    });

    describe('Action-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.it.isAccessible({ context: '#action' });
      Terra.it.matchesScreenshot({ selector: '#action' });
    });

    describe('Action-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.it.matchesScreenshot('active', { selector: '#actionActive' });
      Terra.it.matchesScreenshot('active and focused', { selector: '#actionActiveFocusSpan' });
    });
  });

  describe('Utility', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/utility-button'));

    Terra.it.isAccessible({ context: '#utility' });
    Terra.it.matchesScreenshot({ selector: '#utility' });

    describe('Utility-Hovered', () => {
      before(() => browser.moveToObject('#utilityButton'));

      Terra.it.isAccessible({ context: '#utility' });
      Terra.it.matchesScreenshot({ selector: '#utility' });

      after(() => browser.moveToObject('#root'));
    });

    describe('Utility-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.it.isAccessible({ context: '#utility' });
      Terra.it.matchesScreenshot({ selector: '#utility' });
    });

    describe('Utility-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.it.matchesScreenshot('active', { selector: '#utilityActive' });
      Terra.it.matchesScreenshot('active and focused', { selector: '#utilityActiveFocusSpan' });
    });
  });

  describe('Long Text', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/long-text-button');
      browser.moveToObject('#root');
    });

    Terra.it.isAccessible({ context: '#long-text' });
    Terra.it.matchesScreenshot({ selector: '#long-text' });
  });

  describe('Block', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/long-text-button');
      browser.moveToObject('#root');
    });

    Terra.it.isAccessible({ context: '#long-text-block' });
    Terra.it.matchesScreenshot({ selector: '#long-text-block' });
  });

  describe('Button Types', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button/button/button-types');
      browser.moveToObject('#root');
    });

    Terra.it.isAccessible();

    describe('Type reset', () => {
      Terra.it.matchesScreenshot({ selector: '#buttonWithTypeReset' });
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

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot({ selector: '#compactButton' });
  });
});
