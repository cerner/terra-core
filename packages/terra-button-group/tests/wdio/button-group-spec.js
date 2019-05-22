const viewports = Terra.viewports('tiny', 'huge');

describe('Button Group', () => {
  describe('Text Button', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button-group/button-group/button-group-text');
      browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
    });
    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#button-group-text' });
  });

  describe('Button Group Wrapping', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button-group/button-group/button-group-wrapping');
      browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
    });
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Button Group Block', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button-group/button-group/button-group-is-block');
      browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
    });
    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Long Text Button', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button-group/button-group/button-group-long-text');
      browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
    });
    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#button-group-text' });
  });

  describe('Icon Button', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button-group/button-group/button-group-icon');
      browser.moveToObject('#root', 0, 900); // move cursor to remove focus styles
    });
    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#button-group-icon' });
  });

  describe('Not Selectable', () => {
    before(() => browser.url('/#/raw/tests/terra-button-group/button-group/button-group-not-selectable'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#button-group-not-selectable' });
  });

  describe('Disabled Buttons', () => {
    before(() => browser.url('/#/raw/tests/terra-button-group/button-group/button-group-disabled-buttons'));
    Terra.should.beAccessible();
    Terra.should.matchScreenshot({ selector: '#button-group-not-selectable' });
  });

  describe('Single-Select', () => {
    before(() => browser.url('/#/raw/tests/terra-button-group/button-group/button-group-single-select'));
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
    before(() => browser.url('/#/raw/tests/terra-button-group/button-group/button-group-multi-select'));
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
