Terra.describeViewports('Toggle Button', ['medium'], () => {
  describe('Default', () => {
    it('should display closed button', () => {
      browser.url('/raw/tests/terra-toggle-button/toggle-button/default-toggle-button');
      Terra.validates.element('closed');
    });

    it('should open the button', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');
      Terra.validates.element('opened');
    });
  });

  describe('Icon Only', () => {
    it('should open the button', () => {
      browser.url('/raw/tests/terra-toggle-button/toggle-button/icon-only');
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');
      Terra.validates.element('opened');
    });
  });

  describe('Custom Icon', () => {
    it('should open the button', () => {
      browser.url('/raw/tests/terra-toggle-button/toggle-button/custom-icon');
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');
      Terra.validates.element('opened');
    });
  });

  describe('Customized Button', () => {
    it('should open the button', () => {
      browser.url('/raw/tests/terra-toggle-button/toggle-button/customized-button-toggle-button');
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');
      Terra.validates.element('opened');
    });
  });

  it('displays Closed Button Text', () => {
    browser.url('/raw/tests/terra-toggle-button/toggle-button/closed-button-text');

    Terra.validates.element('closed button text');
  });

  describe('Opened Button Text', () => {
    it('should open the button', () => {
      browser.url('/raw/tests/terra-toggle-button/toggle-button/opened-button-text');
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');
      Terra.validates.element('opened');
    });
  });

  it('displays Initially open toggle button', () => {
    browser.url('/raw/tests/terra-toggle-button/toggle-button/initially-open');
    Terra.validates.element('initially opened');
  });

  describe('Animated', () => {
    it('should open the button', () => {
      browser.url('/raw/tests/terra-toggle-button/toggle-button/animated');
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.moveToObject('#root');

      // Let the animation complete
      browser.pause(100);
      Terra.validates.element('opened');
    });
  });

  describe('Icon Animated', () => {
    it('should open the button', () => {
      browser.url('/raw/tests/terra-toggle-button/toggle-button/icon-animated');
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');

      // Let the animation complete
      browser.pause(100);
      Terra.validates.element('opened');
    });
  });

  describe('On Close Toggle Button', () => {
    it('should not increment', () => {
      browser.url('/raw/tests/terra-toggle-button/toggle-button/on-close-toggle-button');
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('div*=Times');
      Terra.validates.element('opened');
    });

    it('should increment', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('div*=Times');
      Terra.validates.element('closed');
    });
  });

  describe('On Open Toggle Button', () => {
    it('should increment', () => {
      browser.url('/raw/tests/terra-toggle-button/toggle-button/on-open-toggle-button');
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('div*=Times');
      Terra.validates.element('opened');
    });

    it('should not increment', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('div*=Times');
      Terra.validates.element('closed');
    });
  });
});
