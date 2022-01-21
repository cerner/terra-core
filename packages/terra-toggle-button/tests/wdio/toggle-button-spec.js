Terra.describeViewports('Toggle Button', ['medium'], () => {
  describe('Default', () => {
    it('should display closed button', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/toggle-button/default-toggle-button');
      Terra.validates.element('closed toggle button');
    });

    it('should open the button', () => {
      $('button').click();

      // Ensures the on hover button styling is not displayed
      $('p*=Lorem').click();
      Terra.validates.element('opened toggle button');
    });
  });

  describe('Icon Only', () => {
    it('should open the button', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/toggle-button/icon-only');
      $('button').click();

      // Ensures the on hover button styling is not displayed
      $('p*=Lorem').click();
      Terra.validates.element('opened icon only toggle button');
    });
  });

  describe('Custom Icon', () => {
    it('should open the button', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/toggle-button/custom-icon');
      $('button').click();

      // Ensures the on hover button styling is not displayed
      $('p*=Lorem').click();
      Terra.validates.element('opened custom icon toggle button');
    });
  });

  describe('Customized Button', () => {
    it('should open the button', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/toggle-button/customized-button-toggle-button');
      $('button').click();

      // Ensures the on hover button styling is not displayed
      $('p*=Lorem').click();
      Terra.validates.element('opened customized icon toggle button');
    });
  });

  it('displays Closed Button Text', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/toggle-button/closed-button-text');

    Terra.validates.element('closed button text');
  });

  describe('Opened Button Text', () => {
    it('should open the button', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/toggle-button/opened-button-text');
      $('button').click();

      // Ensures the on hover button styling is not displayed
      $('p*=Lorem').click();
      Terra.validates.element('opened button text');
    });
  });

  it('displays initially open toggle button', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/toggle-button/initially-open');
    Terra.validates.element('initially opened toggle button');
  });

  describe('Animated', () => {
    it('should open the button', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/toggle-button/animated');
      $('button').click();

      // Ensures the on hover button styling is not displayed
      $('#root').moveTo();

      // Let the animation complete
      browser.pause(100);
      Terra.validates.element('opened animated');
    });
  });

  describe('Icon Animated', () => {
    it('should open the button', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/toggle-button/icon-animated');
      $('button').click();

      // Ensures the on hover button styling is not displayed
      $('p*=Lorem').click();

      // Let the animation complete
      browser.pause(100);
      Terra.validates.element('opened icon animated');
    });
  });

  describe('On Close Toggle Button', () => {
    it('should not increment', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/toggle-button/on-close-toggle-button');
      $('button').click();

      // Ensures the on hover button styling is not displayed
      $('div*=Times').click();
      Terra.validates.element('opened on close toggle button');
    });

    it('should increment', () => {
      $('button').click();

      // Ensures the on hover button styling is not displayed
      $('div*=Times').click();
      Terra.validates.element('closed on close toggle button');
    });
  });

  describe('On Open Toggle Button', () => {
    it('should increment', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/toggle-button/on-open-toggle-button');
      $('button').click();

      // Ensures the on hover button styling is not displayed
      $('div*=Times').click();
      Terra.validates.element('opened on open toggle button');
    });

    it('should not increment', () => {
      $('button').click();

      // Ensures the on hover button styling is not displayed
      $('div*=Times').click();
      Terra.validates.element('closed on open toggle button');
    });
  });
});
