Terra.describeViewports('Button Group', ['huge'], () => {
  it('displays text button', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/button-group/button-group-text');
    $('#root').moveTo({ xOffset: 0, yOffset: 700 });

    Terra.validates.element('text button', { selector: '#button-group-text' });
  });

  it('displays long text button', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/button-group/button-group-long-text');
    $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // move cursor to remove focus styles

    Terra.validates.element('long text button', { selector: '#button-group-text' });
  });

  it('displays icon button', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/button-group/button-group-icon');
    $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // move cursor to remove focus styles

    Terra.validates.element('icon button', { selector: '#button-group-icon' });
  });

  it('displays not selectable Button Group', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/button-group/button-group-not-selectable');

    Terra.validates.element('not selectable', { selector: '#button-group-not-selectable' });
  });

  it('displays disabled buttons', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/button-group/button-group-disabled-buttons');

    Terra.validates.element('disabled buttons', { selector: '#button-group-not-selectable' });
  });

  describe('Single-Select', () => {
    before(() => browser.url('/#/raw/tests/cerner-terra-core-docs/button-group/button-group-single-select'));
    it('should select the first button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect($('#selected-key').getText()).toEqual('1');

      Terra.validates.element('single select button1-selected');
    });

    it('should select the second button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect($('#selected-key').getText()).toEqual('2');

      Terra.validates.element('single select button2-selected');
    });

    it('should select the fourth button', () => {
      browser.keys('Tab');
      browser.keys('Tab');
      browser.keys('Space');
      expect($('#selected-key').getText()).toEqual('4');

      Terra.validates.element('single select button4-selected');
    });
  });

  describe('Multi-Select', () => {
    before(() => browser.url('/#/raw/tests/cerner-terra-core-docs/button-group/button-group-multi-select'));
    it('should select the first button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect($('#selected-keys').getText()).toEqual('1');

      Terra.validates.element('multi select button1-selected');
    });

    it('should unselect the first button', () => {
      browser.keys('Space');
      expect($('#selected-keys').getText()).toEqual('');

      Terra.validates.element('multi select button1-unselected');
    });

    it('should select the second button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect($('#selected-keys').getText()).toEqual('2');

      Terra.validates.element('multi select button2-selected');
    });

    it('should select the third button', () => {
      browser.keys('Tab');
      browser.keys('Space');
      expect($('#selected-keys').getText()).toEqual('2, 3');

      Terra.validates.element('multi select button3-selected');
    });

    it('should unselect the third button', () => {
      browser.keys('Space');
      expect($('#selected-keys').getText()).toEqual('2');

      Terra.validates.element('multi select button3-unselected');
    });
  });

  describe('Keyboard Navigation', () => {
    before(() => browser.url('/#/raw/tests/cerner-terra-core-docs/button-group/button-group-multi-select'));

    it('should navigate to the second button', () => {
      browser.keys('Tab');
      browser.keys('ArrowRight');
      Terra.validates.element('Button-2 focused');
    });

    it('should navigate to the third button', () => {
      browser.keys('ArrowRight');
      Terra.validates.element('Button-3 focused');
    });

    it('should navigate to the first button', () => {
      browser.keys('ArrowLeft');
      browser.keys('ArrowLeft');
      Terra.validates.element('Button-1 focused');
    });
  });

  describe('Button Focus', () => {
    before(() => {
      browser.url('/#/raw/tests/cerner-terra-core-docs/button-group/button-group-multi-select');
    });
    it('should focus and select second button', () => {
      browser.keys('Tab');
      browser.keys('Tab');
      browser.keys('Space');

      Terra.validates.element('before switching window');
    });
    it('should switch window', () => {
      const title = browser.getTitle();
      browser.newWindow('https://engineering.cerner.com/terra-core/raw/tests/cerner-terra-core-docs/button-group/button-group-is-block', 'terra-core');
      browser.switchWindow(title);

      Terra.validates.element('after switching window');
    });
  });
});

Terra.describeViewports('Button Group', ['tiny', 'huge'], () => {
  it('displays Button Group wrapping', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/button-group/button-group-wrapping');
    $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // move cursor to remove focus styles

    Terra.validates.element('wrapping');
  });

  it('displays Button Group block', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/button-group/button-group-is-block');
    $('#root').moveTo({ xOffset: 0, yOffset: 700 }); // move cursor to remove focus styles

    Terra.validates.element('block');
  });

  describe('Programmatic Disabled', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/button-group/programmatic-disabled');
    });

    it('focuses button', () => {
      browser.keys(['Tab']);

      Terra.validates.element('Button has focus', { selector: '#root' });
    });

    it('disables button', () => {
      $('#programmaticDisabledButton').click();

      Terra.validates.element('Button is Disabled', { selector: '#root' });
    });
  });
});
