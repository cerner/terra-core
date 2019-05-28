describe('Toggle Button', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/default-toggle-button'));

    Terra.it.matchesScreenshot('closed');
    Terra.it.isAccessible();


    it('should open the button', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');
    });

    Terra.it.matchesScreenshot('opened');
    Terra.it.isAccessible();
  });

  describe('Icon Only', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/icon-only'));

    it('should open the button', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');
    });

    Terra.it.matchesScreenshot('opened');
    Terra.it.isAccessible();
  });

  describe('Custom Icon', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/custom-icon'));

    it('should open the button', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');
    });

    Terra.it.matchesScreenshot('opened');
    Terra.it.isAccessible();
  });

  describe('Customized Button', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/customized-button-toggle-button'));

    it('should open the button', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');
    });

    Terra.it.matchesScreenshot('opened');
    Terra.it.isAccessible();
  });

  describe('Closed Button Text', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/closed-button-text'));

    Terra.it.matchesScreenshot('closed');
    Terra.it.isAccessible();
  });

  describe('Opened Button Text', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/opened-button-text'));

    it('should open the button', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');
    });

    Terra.it.matchesScreenshot('opened');
    Terra.it.isAccessible();
  });

  describe('Initially open', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/initially-open'));

    Terra.it.matchesScreenshot('opened');
    Terra.it.isAccessible();
  });

  describe('Animated', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/animated'));

    it('should open the button', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');

      // Let the animation complete
      browser.pause(100);
    });

    Terra.it.matchesScreenshot('opened');
    Terra.it.isAccessible();
  });

  describe('Icon Animated', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/icon-animated'));

    it('should open the button', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');

      // Let the animation complete
      browser.pause(100);
    });

    Terra.it.matchesScreenshot('opened');
    Terra.it.isAccessible();
  });

  describe('On Close Toggle Button', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/on-close-toggle-button'));

    it('should not increment', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('div*=Times');
    });

    Terra.it.matchesScreenshot('opened');

    it('should increment', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('div*=Times');
    });

    Terra.it.matchesScreenshot('closed');
    Terra.it.isAccessible();
  });

  describe('On Open Toggle Button', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/on-open-toggle-button'));

    it('should increment', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('div*=Times');
    });

    Terra.it.matchesScreenshot('opened');

    it('should not increment', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('div*=Times');
    });

    Terra.it.matchesScreenshot('closed');
    Terra.it.isAccessible();
  });
});
