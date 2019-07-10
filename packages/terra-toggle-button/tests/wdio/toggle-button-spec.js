Terra.describeViewports('Toggle Button', ['medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/default-toggle-button'));

    Terra.it.validatesElement('closed');

    it('should open the button', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');
    });

    Terra.it.validatesElement('opened');
  });

  describe('Icon Only', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/icon-only'));

    it('should open the button', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');
    });

    Terra.it.validatesElement('opened');
  });

  describe('Custom Icon', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/custom-icon'));

    it('should open the button', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');
    });

    Terra.it.validatesElement('opened');
  });

  describe('Customized Button', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/customized-button-toggle-button'));

    it('should open the button', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');
    });

    Terra.it.validatesElement('opened');
  });

  describe('Closed Button Text', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/closed-button-text'));

    Terra.it.validatesElement('closed');
  });

  describe('Opened Button Text', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/opened-button-text'));

    it('should open the button', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');
    });

    Terra.it.validatesElement('opened');
  });

  describe('Initially open', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/initially-open'));

    Terra.it.validatesElement('opened');
  });

  describe('Animated', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/animated'));

    it('should open the button', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.moveToObject('#root');

      // Let the animation complete
      browser.pause(100);
    });

    Terra.it.validatesElement('opened');
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

    Terra.it.validatesElement('opened');
  });

  describe('On Close Toggle Button', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/on-close-toggle-button'));

    it('should not increment', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('div*=Times');
    });

    Terra.it.validatesElement('opened');

    it('should increment', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('div*=Times');
    });

    Terra.it.validatesElement('closed');
  });

  describe('On Open Toggle Button', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/on-open-toggle-button'));

    it('should increment', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('div*=Times');
    });

    Terra.it.validatesElement('opened');

    it('should not increment', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('div*=Times');
    });

    Terra.it.validatesElement('closed');
  });
});
