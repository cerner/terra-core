describe('Button', () => {
  before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

  describe('Neutral', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/neutral-button'));

    Terra.should.beAccessible({ context: '[id=neutral]' });
    Terra.should.matchScreenshot({ selector: '[id=neutral]' });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '[id=neutral]',
      properties: {
        // Button Vars that apply to all buttons
        '--terra-button-border-radius': '50px',
        '--terra-button-line-height': '20px',
        '--terra-button-vertical-padding': '20px',
        '--terra-button-disabled-opacity': '.7',
        '--terra-button-font-size': '50px',

        // Netural Button Vars for default state
        '--terra-button-background-color-neutral': 'purple',
        '--terra-button-border-color-neutral': 'purple',
        '--terra-button-box-shadow-neutral': '0 0 7px 4px purple',
        '--terra-button-color-neutral': 'purple',
        '--terra-button-font-weight-neutral': 'bold',
      },
    });

    describe('Neutral-Hovered', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-button/button/variants/neutral-button');
        browser.moveToObject('[id=neutralButton]');
      });

      Terra.should.beAccessible({ context: '[id=neutral]' });
      Terra.should.matchScreenshot({ selector: '[id=neutral]' });

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '[id=neutral]',
        properties: {
          '--terra-button-hover-background-color-neutral': 'green',
          '--terra-button-hover-color-neutral': 'purple',
        },
      });
    });

    describe('Neutral-Keyboard Focus', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-button/button/variants/neutral-button');
        browser.keys('Tab');
      });

      Terra.should.beAccessible({ context: '[id=neutral]' });
      Terra.should.matchScreenshot({ selector: '[id=neutral]' });

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '[id=neutral]',
        properties: {
          '--terra-button-focus-background-color-neutral': 'purple',
          '--terra-button-focus-border-color-neutral': 'red',
          '--terra-button-focus-box-shadow-neutral': '0 0 1px 3px rgba(76, 178, 233, 0.5)',
        },
      });
    });

    describe('Neutral-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.should.matchScreenshot('active', { selector: '[id=neutralActive]' });
      Terra.should.matchScreenshot('active and focused', { selector: '[id=neutralActiveFocusSpan]' });

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '[id=neutral]',
        properties: {
          '--terra-button-active-and-focus-background-color-neutral': 'purple',
          '--terra-button-active-and-focus-border-color-neutral': 'purple',
          '--terra-button-active-and-focus-box-shadow-neutral': '0 0 7px 4px purple, 0 0 1px 3px rgba(76, 178, 233, 0.5)',
          '--terra-button-active-background-color-neutral': 'purple',
          '--terra-button-active-border-color-neutral': 'purple',
        },
      });
    });
  });

  describe('Emphasis', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/emphasis-button'));

    Terra.should.beAccessible({ context: '[id=emphasis]' });
    Terra.should.matchScreenshot({ selector: '[id=emphasis]' });

    describe('Emphasis-Hovered', () => {
      before(() => browser.moveToObject('[id=emphasisButton]'));

      Terra.should.beAccessible({ context: '[id=emphasis]' });
      Terra.should.matchScreenshot({ selector: '[id=emphasis]' });
    });

    describe('Emphasis-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.should.beAccessible({ context: '[id=emphasis]' });
      Terra.should.matchScreenshot({ selector: '[id=emphasis]' });
    });

    describe('Emphasis-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.should.beAccessible({ context: '[id=emphasisActive]' });
      Terra.should.matchScreenshot('active', { selector: '[id=emphasisActive]' });

      Terra.should.beAccessible({ context: '[id=emphasisActiveFocus]' });
      Terra.should.matchScreenshot('active and focused', { selector: '[id=emphasisActiveFocusSpan]' });
    });
  });

  describe('De-emphasis', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/deemphasis-button'));

    Terra.should.beAccessible({ context: '[id=de-emphasis]' });
    Terra.should.matchScreenshot({ selector: '[id=de-emphasis]' });

    describe('De-emphasis-Hovered', () => {
      before(() => browser.moveToObject('[id=de-emphasisButton]'));

      Terra.should.beAccessible({ context: '[id=de-emphasis]' });
      Terra.should.matchScreenshot({ selector: '[id=de-emphasis]' });
    });

    describe('De-emphasis-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.should.beAccessible({ context: '[id=de-emphasis]' });
      Terra.should.matchScreenshot({ selector: '[id=de-emphasis]' });
    });

    describe('De-emphasis-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.should.matchScreenshot('active', { selector: '[id=de-emphasisActive]' });
      Terra.should.matchScreenshot('active and focused', { selector: '[id=de-emphasisActiveFocusSpan]' });
    });
  });

  describe('Action', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/action-button'));

    Terra.should.beAccessible({ context: '[id=action]' });
    Terra.should.matchScreenshot({ selector: '[id=action]' });

    Terra.should.themeEachCustomProperty('[id=action]', {
      '--terra-button-action-border-radius': '26px',
    });

    describe('Action-Hovered', () => {
      before(() => browser.moveToObject('[id=actionButton]'));

      Terra.should.beAccessible({ context: '[id=action]' });
      Terra.should.matchScreenshot({ selector: '[id=action]' });
    });

    describe('Action-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.should.beAccessible({ context: '[id=action]' });
      Terra.should.matchScreenshot({ selector: '[id=action]' });
    });

    describe('Action-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.should.matchScreenshot('active', { selector: '[id=actionActive]' });
      Terra.should.matchScreenshot('active and focused', { selector: '[id=actionActiveFocusSpan]' });
    });
  });

  describe('Utility', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/variants/utility-button'));

    Terra.should.beAccessible({ context: '[id=utility]' });
    Terra.should.matchScreenshot({ selector: '[id=utility]' });

    describe('Utility-Hovered', () => {
      before(() => browser.moveToObject('[id=utilityButton]'));

      Terra.should.beAccessible({ context: '[id=utility]' });
      Terra.should.matchScreenshot({ selector: '[id=utility]' });
    });

    describe('Utility-Keyboard Focus', () => {
      before(() => browser.keys('Tab'));

      Terra.should.beAccessible({ context: '[id=utility]' });
      Terra.should.matchScreenshot({ selector: '[id=utility]' });

      Terra.should.themeEachCustomProperty('[id=utility]', {
        '--terra-button-utility-border-radius': '50%',
      });
    });

    describe('Utility-Active', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/active-variant-buttons'));

      Terra.should.matchScreenshot('active', { selector: '[id=utilityActive]' });
      Terra.should.matchScreenshot('active and focused', { selector: '[id=utilityActiveFocusSpan]' });
    });
  });

  describe('Long Text', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/long-text-button'));

    Terra.should.beAccessible({ context: '[id=long-text]' });
    Terra.should.matchScreenshot({ selector: '[id=long-text]' });
  });

  describe('Block', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/long-text-button'));

    Terra.should.beAccessible({ context: '[id=long-text-block]' });
    Terra.should.matchScreenshot({ selector: '[id=long-text-block]' });
  });

  describe('Button Types', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/button-types'));

    Terra.should.beAccessible();

    describe('Type reset', () => {
      Terra.should.matchScreenshot({ selector: '[id=buttonWithTypeReset]' });
    });

    describe('Type submit', () => {
      Terra.should.matchScreenshot({ selector: '[id=buttonWithTypeSubmit]' });
    });

    describe('Type button', () => {
      Terra.should.matchScreenshot({ selector: '[id=buttonWithTypeButton]' });

      Terra.should.themeEachCustomProperty('[id=buttonWithTypeButton]', {
        '--terra-button-text-only-horizontal-margin': '20px',
      });
    });
  });

  describe('Button with Icon', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/icon-button'));

    Terra.should.beAccessible();

    describe('Icon and Text', () => {
      Terra.should.matchScreenshot({ selector: '[id=iconNeutralButton]' });

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '[id=iconNeutralButton]',
        properties: {
          '--terra-button-text-and-icon-horizontal-margin': '20px',
          '--terra-button-text-and-icon-margin-between': '20px',
        },
      });
    });

    describe('Icon and Text Reversed', () => {
      before(() => browser.url('/#/raw/tests/terra-button/button/icon-button'));

      Terra.should.matchScreenshot({ selector: '[id=iconReversedButton]' });
    });

    describe('Icon only', () => {
      Terra.should.matchScreenshot({ selector: '[id=iconOnlyButton]' });

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '[id=iconOnlyButton]',
        properties: {
          '--terra-button-icon-only-horizontal-margin': '20px',
          '--terra-button-icon-height': '10px',
          '--terra-button-icon-width': '10px',
        },
      });
    });
  });

  describe('Compact Button', () => {
    before(() => browser.url('/#/raw/tests/terra-button/button/compact-button'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '[id=compactButton]' });
  });
});
