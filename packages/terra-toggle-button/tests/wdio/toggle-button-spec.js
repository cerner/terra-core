/* global before, browser, Terra */

describe('Toggle Button', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/default-toggle-button'));

    Terra.should.matchScreenshot('closed');
    Terra.should.beAccessible();


    it('should open the button', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');
    });

    Terra.should.matchScreenshot('opened');
    Terra.should.beAccessible();
  });

  describe('Icon Only', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/icon-only'));

    it('should open the button', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');
    });

    Terra.should.matchScreenshot('opened');
    Terra.should.beAccessible();
  });

  describe('Custom Icon', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/custom-icon'));

    it('should open the button', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');
    });

    Terra.should.matchScreenshot('opened');
    Terra.should.beAccessible();
  });

  describe('Customized Button', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/customized-button-toggle-button'));

    it('should open the button', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');
    });

    Terra.should.matchScreenshot('opened');
    Terra.should.beAccessible();
  });

  describe('Closed Button Text', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/closed-button-text'));

    Terra.should.matchScreenshot('closed');
    Terra.should.beAccessible();
  });

  describe('Opened Button Text', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/opened-button-text'));

    it('should open the button', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('p*=Lorem');
    });

    Terra.should.matchScreenshot('opened');
    Terra.should.beAccessible();
  });

  describe('Initially open', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/initially-open'));

    Terra.should.matchScreenshot('opened');
    Terra.should.beAccessible();
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

    Terra.should.matchScreenshot('opened');
    Terra.should.beAccessible();
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

    Terra.should.matchScreenshot('opened');
    Terra.should.beAccessible();
  });

  describe('On Close Toggle Button', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/on-close-toggle-button'));

    it('should not increment', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('div*=Times');
    });

    Terra.should.matchScreenshot('opened');

    it('should increment', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('div*=Times');
    });

    Terra.should.matchScreenshot('closed');
    Terra.should.beAccessible();
  });

  describe('On Open Toggle Button', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-button/toggle-button/on-open-toggle-button'));

    it('should increment', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('div*=Times');
    });

    Terra.should.matchScreenshot('opened');

    it('should not increment', () => {
      browser.click('button');

      // Ensures the on hover button styling is not displayed
      browser.click('div*=Times');
    });

    Terra.should.matchScreenshot('closed');
    Terra.should.beAccessible();
  });
});
