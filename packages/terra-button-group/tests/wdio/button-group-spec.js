Terra.describeViewports('Button Group', ['huge'], () => {
  describe('Text Button', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button-group/button-group/button-group-text');
      browser.moveToObject('#root', 0, 700); // move cursor to remove focus styles
    });

    Terra.it.validatesElement({ selector: '#button-group-text' });
  });

  describe('Long Text Button', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button-group/button-group/button-group-long-text');
      browser.moveToObject('#root', 0, 700); // move cursor to remove focus styles
    });

    Terra.it.validatesElement({ selector: '#button-group-text' });
  });

  describe('Icon Button', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button-group/button-group/button-group-icon');
      browser.moveToObject('#root', 0, 700); // move cursor to remove focus styles
    });

    Terra.it.validatesElement({ selector: '#button-group-icon' });
  });

  describe('Not Selectable', () => {
    before(() => browser.url('/#/raw/tests/terra-button-group/button-group/button-group-not-selectable'));

    Terra.it.validatesElement({ selector: '#button-group-not-selectable' });
  });

  describe('Disabled Buttons', () => {
    before(() => browser.url('/#/raw/tests/terra-button-group/button-group/button-group-disabled-buttons'));

    Terra.it.validatesElement({ selector: '#button-group-not-selectable' });
  });

  describe('Single-Select', () => {
    before(() => browser.url('/#/raw/tests/terra-button-group/button-group/button-group-single-select'));
    it('should select the first button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-key')).to.equal('1');
    });

    Terra.it.validatesElement('button1-selected');

    it('should select the second button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-key')).to.equal('2');
    });

    Terra.it.validatesElement('button2-selected');

    it('should select the fourth button', () => {
      browser.keys('Tab');
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-key')).to.equal('4');
    });

    Terra.it.validatesElement('button4-selected');
  });

  describe('Multi-Select', () => {
    before(() => browser.url('/#/raw/tests/terra-button-group/button-group/button-group-multi-select'));
    it('should select the first button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-keys')).to.equal('1');
    });

    Terra.it.validatesElement('button1-selected');

    it('should unselect the first button', () => {
      browser.keys('Space');
      expect(browser.getText('#selected-keys')).to.equal('');
    });

    Terra.it.validatesElement('button1-unselected');

    it('should select the second button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-keys')).to.equal('2');
    });

    Terra.it.validatesElement('button2-selected');

    it('should select the third button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-keys')).to.equal('2, 3');
    });

    Terra.it.validatesElement('button3-selected');

    it('should unselect the third button', () => {
      browser.keys('Space');
      expect(browser.getText('#selected-keys')).to.equal('2');
    });

    Terra.it.validatesElement('button3-unselected');
  });
  describe('Button Focus', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button-group/button-group/button-group-multi-select');
    });
    it('should focus and select second button', () => {
      browser.keys('Tab');
      browser.keys('Tab');
      browser.keys('Space');
    });
    Terra.it.validatesElement('before switching window');
    it('should switch window', () => {
      browser.newWindow('https://engineering.cerner.com/terra-core/raw/tests/terra-button-group/button-group/button-group-is-block', 'terra-core');
      browser.switchTab();
    });
    Terra.it.validatesElement('after switching window');
  });
});

Terra.describeViewports('Button Group', ['tiny', 'huge'], () => {
  describe('Button Group Wrapping', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button-group/button-group/button-group-wrapping');
      browser.moveToObject('#root', 0, 700); // move cursor to remove focus styles
    });

    Terra.it.validatesElement();
  });

  describe('Button Group Block', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button-group/button-group/button-group-is-block');
      browser.moveToObject('#root', 0, 700); // move cursor to remove focus styles
    });

    Terra.it.validatesElement();
  });

  describe('Programmatic Disabled', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button-group/button-group/programmatic-disabled');
    });

    it('focuses button', () => {
      browser.keys(['Tab']);
    });

    Terra.it.validatesElement('Button has focus', { selector: '#root' });

    it('disables button', () => {
      browser.click('#programmaticDisabledButton');
    });

    Terra.it.validatesElement('Button is Disabled', { selector: '#root' });
  });
});
