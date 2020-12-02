Terra.describeViewports('Button Group', ['huge'], () => {
  it('displays text button', () => {
    browser.url('/raw/tests/terra-button-group/button-group/button-group-text');
    browser.moveToObject('#root', 0, 700);

    Terra.validates.element('text button', { selector: '#button-group-text' });
  });

  it('displays long text button', () => {
    browser.url('/raw/tests/terra-button-group/button-group/button-group-long-text');
    browser.moveToObject('#root', 0, 700); // move cursor to remove focus styles

    Terra.validates.element('long text button', { selector: '#button-group-text' });
  });

  it('displays icon button', () => {
    browser.url('/raw/tests/terra-button-group/button-group/button-group-icon');
    browser.moveToObject('#root', 0, 700); // move cursor to remove focus styles

    Terra.validates.element('icon button', { selector: '#button-group-icon' });
  });

  it('displays not selectable Button Group', () => {
    browser.url('/raw/tests/terra-button-group/button-group/button-group-not-selectable');

    Terra.validates.element('not selectable', { selector: '#button-group-not-selectable' });
  });

  it('displays disabled buttons', () => {
    browser.url('/raw/tests/terra-button-group/button-group/button-group-disabled-buttons');

    Terra.validates.element('disabled buttons', { selector: '#button-group-not-selectable' });
  });

  describe('Single-Select', () => {
    before(() => browser.url('/#/raw/tests/terra-button-group/button-group/button-group-single-select'));
    it('should select the first button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-key')).to.equal('1');

      Terra.validates.element('button1-selected');
    });

    it('should select the second button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-key')).to.equal('2');

      Terra.validates.element('button2-selected');
    });

    it('should select the fourth button', () => {
      browser.keys('Tab');
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-key')).to.equal('4');

      Terra.validates.element('button4-selected');
    });
  });

  describe('Multi-Select', () => {
    before(() => browser.url('/#/raw/tests/terra-button-group/button-group/button-group-multi-select'));
    it('should select the first button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-keys')).to.equal('1');

      Terra.validates.element('button1-selected');
    });

    it('should unselect the first button', () => {
      browser.keys('Space');
      expect(browser.getText('#selected-keys')).to.equal('');

      Terra.validates.element('button1-unselected');
    });

    it('should select the second button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-keys')).to.equal('2');

      Terra.validates.element('button2-selected');
    });

    it('should select the third button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect(browser.getText('#selected-keys')).to.equal('2, 3');

      Terra.validates.element('button3-selected');
    });

    it('should unselect the third button', () => {
      browser.keys('Space');
      expect(browser.getText('#selected-keys')).to.equal('2');

      Terra.validates.element('button3-unselected');
    });
  });

  describe('Button Focus', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-button-group/button-group/button-group-multi-select');
    });
    it('should focus and select second button', () => {
      browser.keys('Tab');
      browser.keys('Tab');
      browser.keys('Space');

      Terra.validates.element('before switching window');
    });
    it('should switch window', () => {
      browser.newWindow('https://engineering.cerner.com/terra-core/raw/tests/terra-button-group/button-group/button-group-is-block', 'terra-core');
      browser.switchTab();

      Terra.validates.element('after switching window');
    });
  });
});

Terra.describeViewports('Button Group', ['tiny', 'huge'], () => {
  it('displays Button Group wrapping', () => {
    browser.url('/raw/tests/terra-button-group/button-group/button-group-wrapping');
    browser.moveToObject('#root', 0, 700); // move cursor to remove focus styles

    Terra.validates.element('wrapping');
  });

  it('displays Button Group block', () => {
    browser.url('/raw/tests/terra-button-group/button-group/button-group-is-block');
    browser.moveToObject('#root', 0, 700); // move cursor to remove focus styles

    Terra.validates.element('block');
  });

  describe('Programmatic Disabled', () => {
    before(() => {
      browser.url('/raw/tests/terra-button-group/button-group/programmatic-disabled');
    });

    it('focuses button', () => {
      browser.keys(['Tab']);

      Terra.validates.element('Button has focus', { selector: '#root' });
    });

    it('disables button', () => {
      browser.click('#programmaticDisabledButton');

      Terra.validates.element('Button is Disabled', { selector: '#root' });
    });
  });
});
