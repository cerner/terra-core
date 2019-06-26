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

    it('validates the open dropdown', () => {
      browser.click('[class*=split-button-chevron]');
      Terra.validates.element('dropdown open', { selector: '[class*=dropdown-list]' });
      Terra.validates.screenshot('chevron with dropdown open');
    });
  });

  describe('Disabled', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/disabled-split-type');
    });

    Terra.it.validatesElement('disabled');
  });

  describe('Callback', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/callback-split-type');
      // avoid hover styles
      browser.moveToObject('#root', 100, 100);
    });

    Terra.it.matchesScreenshot('initial');

    it('calls primary split button callback', () => {
      browser.click('[class*=split-button-primary]');
      Terra.validates.screenshot('gray');
    });

    it('opens split button dropdown', () => {
      browser.click('[class*=split-button-chevron]');
      browser.waitForVisible('[class*=dropdown-list]');
    });

    it('calls split button on click callback', () => {
      browser.click('#red');
      Terra.validates.screenshot('red');
    });

    it('opens split button dropdown', () => {
      browser.click('[class*=split-button-chevron]');
      browser.waitForVisible('[class*=dropdown-list]');
    });

    it('keyboard navigates down and runs callback on space', () => {
      browser.keys(['ArrowDown', 'Space']);
      Terra.validates.screenshot('white');
    });

    it('opens split button dropdown', () => {
      browser.click('[class*=split-button-chevron]');
      browser.waitForVisible('[class*=dropdown-list]');
    });

    it('keyboard navigates up and runs callback on enter', () => {
      browser.keys(['ArrowDown', 'ArrowUp', 'Enter']);
      Terra.validates.screenshot('red2');
    });

    it('opens split button dropdown', () => {
      browser.click('[class*=split-button-chevron]');
      browser.waitForVisible('[class*=dropdown-list]');
    });

    it('jumps to the last entry', () => {
      browser.keys(['End', 'Enter']);
      Terra.validates.screenshot('blue');
    });

    it('opens split button dropdown', () => {
      browser.click('[class*=split-button-chevron]');
      browser.waitForVisible('[class*=dropdown-list]');
    });

    it('jumps to the first entry', () => {
      browser.keys(['ArrowDown', 'Home', 'Enter']);
      Terra.validates.screenshot('red3');
    });

    it('opens split button dropdown', () => {
      browser.click('[class*=split-button-chevron]');
      browser.waitForVisible('[class*=dropdown-list]');
    });

    it('jumps when typing', () => {
      browser.keys(['b', 'Enter']);
      Terra.validates.screenshot('blue2');
    });
  });

  describe('Width', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/wide-split-button');
      // avoid hover styles
      browser.moveToObject('#root', 100, 100);
    });

    Terra.it.matchesScreenshot('Both closed');

    it('opens the long label dropdown', () => {
      browser.click('#wide-label [class*=split-button-chevron]');
      Terra.validates.screenshot('Long label open');
    });

    it('opens the long option dropdown', () => {
      browser.keys(['Escape']);
      browser.click('#wide-option [class*=split-button-chevron]');
      Terra.validates.screenshot('Long option open');
    });
  });

  describe('Bounded', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/bounded-split-button');
    });

    it('opens the top left dropdown', () => {
      browser.click('#top-left [class*=split-button-chevron]');
      Terra.validates.screenshot('Top left open');
    });

    it('opens the top right dropdown', () => {
      browser.keys('Escape');
      browser.click('#top-right [class*=split-button-chevron]');
      Terra.validates.screenshot('Top right open');
    });

    it('opens the bottom left dropdown', () => {
      browser.keys('Escape');
      browser.click('#bottom-left [class*=split-button-chevron]');
      Terra.validates.screenshot('Bottom left open');
    });

    it('opens the bottom right dropdown', () => {
      browser.keys('Escape');
      browser.click('#bottom-right [class*=split-button-chevron]');
      Terra.validates.screenshot('Bottom right open');
    });
  });
});
