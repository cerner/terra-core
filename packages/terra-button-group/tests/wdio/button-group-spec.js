/* global before, browser, Terra */

describe('Button Group', () => {
  describe('Text Button', () => {
    beforeEach(() => browser.url('/#/tests/button-group-tests/text-button-group'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Icon Button', () => {
    beforeEach(() => browser.url('/#/tests/button-group-tests/icon-button-group'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Not Selectable', () => {
    beforeEach(() => browser.url('/#/tests/button-group-tests/not-selectable-button-group'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Disabled Buttons', () => {
    beforeEach(() => browser.url('/#/tests/button-group-tests/not-selectable-button-group'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('onChange', () => {
    before(() => browser.url('/#/tests/button-group-tests/on-change-button-group'));
    it('should select the first button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-key')).to.equal('1');
    });

    Terra.should.themeEachCustomProperty({
      '--terra-button-group-active-background-color': 'white',
      '--terra-button-group-active-and-hover-background-color': 'white',
      '--terra-button-group-active-and-focus-background-color': 'white',
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('0');

    it('should select the second button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-key')).to.equal('2');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('1');

    it('should select the fourth button', () => {
      browser.keys('Tab');
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-key')).to.equal('4');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('3');
  });

  describe('Single-Select', () => {
    before(() => browser.url('/#/tests/button-group-tests/single-select-button-group'));
    it('should select the first button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-key')).to.equal('1');
    });

    Terra.should.themeEachCustomProperty({
      '--terra-button-group-active-background-color': 'white',
      '--terra-button-group-active-and-hover-background-color': 'white',
      '--terra-button-group-active-and-focus-background-color': 'white',
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('0');

    it('should select the second button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-key')).to.equal('2');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('1');

    it('should select the fourth button', () => {
      browser.keys('Tab');
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-key')).to.equal('4');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('3');
  });

  describe('Multi-Select', () => {
    before(() => browser.url('/#/tests/button-group-tests/multi-select-button-group'));
    it('should select the first button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-keys')).to.equal('1');
    });

    Terra.should.themeEachCustomProperty({
      '--terra-button-group-active-background-color': 'white',
      '--terra-button-group-active-and-hover-background-color': 'white',
      '--terra-button-group-active-and-focus-background-color': 'white',
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('0');

    it('should unselect the first button', () => {
      browser.keys('Space');
      expect(browser.getText('#selected-keys')).to.equal('');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('1');

    it('should select the second button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-keys')).to.equal('2');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('3');

    it('should select the third button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-keys')).to.equal('2, 3');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('4');

    it('should unselect the third button', () => {
      browser.keys('Space');
      expect(browser.getText('#selected-keys')).to.equal('2');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('5');
  });
});
