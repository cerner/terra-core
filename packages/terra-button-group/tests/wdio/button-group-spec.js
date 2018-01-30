/* global before, browser, Terra */

describe('Button Group', () => {
  describe('Tiny', () => {
    beforeEach(() => browser.url('/#/tests/button-group-tests/tiny-button-group'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#button-group-size-tiny' });
  });

  describe('Small', () => {
    beforeEach(() => browser.url('/#/tests/button-group-tests/small-button-group'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#button-group-size-small' });
  });

  describe('Medium', () => {
    beforeEach(() => browser.url('/#/tests/button-group-tests/medium-button-group'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#button-group-size-medium' });
  });

  describe('Large', () => {
    beforeEach(() => browser.url('/#/tests/button-group-tests/large-button-group'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#button-group-size-large' });
  });

  describe('Huge', () => {
    beforeEach(() => browser.url('/#/tests/button-group-tests/huge-button-group'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#button-group-size-huge' });
  });

  describe('Compact', () => {
    beforeEach(() => browser.url('/#/tests/button-group-tests/compact-button-group'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#button-group-compact' });
  });

  describe('Icon Default', () => {
    beforeEach(() => browser.url('/#/tests/button-group-tests/icon-default-button-group'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#button-group-icon-default' });
  });

  describe('Icon Reversed', () => {
    beforeEach(() => browser.url('/#/tests/button-group-tests/icon-reversed-button-group'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#button-group-icon-reversed' });
  });

  describe('Icon Only', () => {
    beforeEach(() => browser.url('/#/tests/button-group-tests/icon-only-button-group'));
    // TODO: remove button-name exception once https://github.com/cerner/terra-core/issues/1058 is closed
    Terra.should.beAccessible({
      rules: { 'button-name': { enabled: false } },
    });
    Terra.should.matchScreenshot({ selector: '#button-group-icon-only' });
  });

  describe('Default Variant', () => {
    beforeEach(() => browser.url('/#/tests/button-group-tests/default-variant-button-group'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#button-group-variant' });
  });

  describe('Secondary Variant', () => {
    beforeEach(() => browser.url('/#/tests/button-group-tests/secondary-variant-button-group'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#button-group-variant-secondary' });
  });

  describe('Selectable', () => {
    beforeEach(() => browser.url('/#/tests/button-group-tests/selectable-button-group'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#button-group-selectable' });
  });

  describe('onChange', () => {
    before(() => browser.url('/#/tests/button-group-tests/on-change-button-group'));
    it('should select the first button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-index')).to.equal('0');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('0');

    it('should select the second button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-index')).to.equal('1');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('1');

    it('should select the fourth button', () => {
      browser.keys('Tab');
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-index')).to.equal('3');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('3');
  });
});
