/* global before, browser, Terra */

describe('Button Group', () => {
  describe('Tiny', () => {
    beforeEach(() => browser.url('/#/raw/tests/button-group/size-button-group'));
    Terra.should.beAccessible({ context: '#button-group-size-tiny' });
    Terra.should.matchScreenshot({ selector: '#button-group-size-tiny' });
  });

  describe('Small', () => {
    beforeEach(() => browser.url('/#/raw/tests/button-group/size-button-group'));
    Terra.should.beAccessible({ context: '#button-group-size-small' });
    Terra.should.matchScreenshot({ selector: '#button-group-size-small' });
  });

  describe('Medium', () => {
    beforeEach(() => browser.url('/#/raw/tests/button-group/size-button-group'));
    Terra.should.beAccessible({ context: '#button-group-size-medium' });
    Terra.should.matchScreenshot({ selector: '#button-group-size-medium' });
  });

  describe('Large', () => {
    beforeEach(() => browser.url('/#/raw/tests/button-group/size-button-group'));
    Terra.should.beAccessible({ context: '#button-group-size-large' });
    Terra.should.matchScreenshot({ selector: '#button-group-size-large' });
  });

  describe('Huge', () => {
    beforeEach(() => browser.url('/#/raw/tests/button-group/size-button-group'));
    Terra.should.beAccessible({ context: '#button-group-size-huge' });
    Terra.should.matchScreenshot({ selector: '#button-group-size-huge' });
  });

  describe('Compact', () => {
    beforeEach(() => browser.url('/#/raw/tests/button-group/compact-button-group'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Icon Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/button-group/icon-button-group-button'));
    Terra.should.beAccessible({ context: '#button-group-icon-default' });
    Terra.should.matchScreenshot({ selector: '#button-group-icon-default' });
  });

  describe('Icon Reversed', () => {
    beforeEach(() => browser.url('/#/raw/tests/button-group/icon-button-group-button'));
    Terra.should.beAccessible({ context: '#button-group-icon-reversed' });
    Terra.should.matchScreenshot({ selector: '#button-group-icon-reversed' });
  });

  describe('Icon Only', () => {
    beforeEach(() => browser.url('/#/raw/tests/tests/button-group/icon-button-group-button'));
    // TODO: remove button-name exception once https://github.com/cerner/terra-core/issues/1058 is closed
    Terra.should.beAccessible({
      rules: { 'button-name': { enabled: false } },
      context: '#button-group-icon-only',
    });
    Terra.should.matchScreenshot({ selector: '#button-group-icon-only' });
  });

  describe('Default Variant', () => {
    beforeEach(() => browser.url('/#/raw/tests/button-group/variant-button-group'));
    Terra.should.beAccessible({ context: '#button-group-variant' });
    Terra.should.matchScreenshot({ selector: '#button-group-variant' });
  });

  describe('Secondary Variant', () => {
    beforeEach(() => browser.url('/#/raw/tests/button-group/variant-button-group'));
    Terra.should.beAccessible({ context: '#button-group-variant-secondary' });
    Terra.should.matchScreenshot({ selector: '#button-group-variant-secondary' });
  });

  describe('Selectable', () => {
    beforeEach(() => browser.url('/#/raw/tests/button-group/selectable-button-group'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('onChange', () => {
    before(() => browser.url('/#/raw/tests/button-group/on-change-button-group'));
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
