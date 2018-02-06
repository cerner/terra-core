/* global before, browser, Terra */

describe('Button Group', () => {
  describe('Text Button', () => {
    beforeEach(() => browser.url('/#/tests/button-group-tests/text-button-group'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Long Text Button', () => {
    beforeEach(() => browser.url('/#/tests/button-group-tests/long-text-button-group'));
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

  describe('Single-Select', () => {
    before(() => browser.url('/#/tests/button-group-tests/single-select-button-group'));
    it('should select the first button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-key')).to.equal('1');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('button1-selected');

    it('should select the second button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-key')).to.equal('2');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('button2-selected');

    it('should select the fourth button', () => {
      browser.keys('Tab');
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-key')).to.equal('4');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('button4-selected');
  });

  describe('Multi-Select', () => {
    before(() => browser.url('/#/tests/button-group-tests/multi-select-button-group'));
    it('should select the first button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-keys')).to.equal('1');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('button1-selected');

    it('should unselect the first button', () => {
      browser.keys('Space');
      expect(browser.getText('#selected-keys')).to.equal('');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('button1-unselected');

    it('should select the second button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-keys')).to.equal('2');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('button2-selected');

    it('should select the third button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-keys')).to.equal('2, 3');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('button3-selected');

    it('should unselect the third button', () => {
      browser.keys('Space');
      expect(browser.getText('#selected-keys')).to.equal('2');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('button3-unselected');
  });
});
