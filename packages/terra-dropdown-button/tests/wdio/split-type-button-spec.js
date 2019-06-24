Terra.describeViewports('Split Type Dropdown Button', ['medium'], () => {
  describe('Default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/default-split-type');
      // avoid hover styles
      browser.moveToObject('#root', 100, 100);
    });

    it('validates the default type', () => {
      Terra.validates.element();
    });

    it('validates primary button focus styling', () => {
      // Tab then Shift-Tab to get focus styles to appear on primary button
      browser.keys(['Tab', 'Shift', 'Tab', 'Shift']);
      Terra.validates.element('primary focus');
    });

    it('validates chevron button focus styling', () => {
      browser.keys('Tab');
      Terra.validates.element('chevron focus');
    });

    it('validates primary button hover styling', () => {
      browser.moveToObject('[class*=split-button-primary]');
      Terra.validates.element('primary hover');
    });

    it('validates chevron button hover styling', () => {
      browser.moveToObject('[class*=split-button-chevron]');
      Terra.validates.element('chevron hover');
    });
  });

  describe('Callback', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/callback-split-type');
      // avoid hover styles
      browser.moveToObject('#root', 100, 100);
    });

    Terra.it.matchesScreenshot('initial');

    it('calls primary button callback', () => {
      browser.click('[class*=split-button-primary]');
      Terra.validates.screenshot('gray');
    });

    it('opens dropdown', () => {
      browser.click('[class*=split-button-chevron]');
      browser.waitForVisible('[class*=dropdown-list]');
    });

    it('calls split button on click callback', () => {
      browser.click('#red');
      Terra.validates.screenshot('red');
    });

    it('keyboard navigates down and runs callback on space', () => {
      browser.keys(['ArrowDown', 'Space']);
      Terra.validates.screenshot('white');
    });

    it('keyboard navigates up and runs callback on enter', () => {
      browser.keys(['ArrowUp', 'Enter']);
      Terra.validates.screenshot('red2');
    });

    it('jumps to the last entry', () => {
      browser.keys(['End', 'Enter']);
      Terra.validates.screenshot('blue');
    });

    it('jumps to the first entry', () => {
      browser.keys(['Home', 'Enter']);
      Terra.validates.screenshot('red3');
    });

    it('jumps when typing', () => {
      browser.keys(['b', 'Enter']);
      Terra.validates.screenshot('blue2');
    });
  });
});
