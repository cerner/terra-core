Terra.describeViewports('Split Button', ['medium'], () => {
  describe('Default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/default-split-button');
      // avoid hover styles
      browser.moveToObject('#root', 100, 1);
    });

    Terra.it.validatesElement();

    it('validates primary button focus styling', () => {
      // Tab then Shift-Tab to get focus styles to appear on primary button
      browser.refresh();
      browser.keys(['Tab', 'Tab', 'Shift', 'Tab', 'Shift']);
      Terra.validates.element('primary focus');
    });

    it('validates caret button focus styling', () => {
      browser.keys('Tab');
      Terra.validates.element('caret focus');
      // tab away from the button so focus is not in later screenshots
      browser.keys('Tab');
    });

    it('validates primary button hover styling', () => {
      browser.moveToObject('[class*=split-button-primary]');
      Terra.validates.element('primary hover');
    });

    it('validates caret button hover styling', () => {
      browser.moveToObject('[class*=split-button-caret]');
      Terra.validates.element('caret hover');
    });

    it('validates primary button active styling', () => {
      browser.moveToObject('[class*=split-button-primary]');
      browser.buttonDown();
      Terra.validates.element('primary active');
      browser.buttonUp();
    });

    it('opens and validates dropdown with click', () => {
      browser.click('[class*=split-button-caret]');
      Terra.validates.element('dropdown open', { selector: '[class*=dropdown-list]' });
      Terra.validates.screenshot('caret with dropdown open');
    });
  });

  describe('Disabled', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/disabled-split-button');
    });

    Terra.it.validatesElement();

    it('tries to tab to the button', () => {
      browser.keys(['Tab']);
      Terra.validates.screenshot('tab attempted');
    });

    it('tries to click the primary button', () => {
      expect(() => browser.click('[class*=split-button-primary]')).to.throw('is not clickable');
    });

    it('tries to click the caret', () => {
      expect(() => browser.click('[class*=split-button-caret]')).to.throw('is not clickable');
    });
  });

  describe('Interactions', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/callback-split-button');
      // avoid hover styles
      browser.moveToObject('#root', 100, 1);
    });

    Terra.it.matchesScreenshot();

    it('opens the dropdown with click', () => {
      browser.click('[class*=split-button-caret]');
      browser.waitForVisible('[class*=dropdown-list]');
    });

    it('closes dropdown on escape without running a callback', () => {
      browser.keys(['Escape']);
      Terra.validates.screenshot('escape');
    });

    it('opens the dropdown with enter', () => {
      browser.keys(['Enter']);
      browser.waitForVisible('[class*=dropdown-list]');
    });

    it('opens the dropdown with space', () => {
      browser.keys(['Escape', 'Space']);
      browser.waitForVisible('[class*=dropdown-list]');
      // Cleanup the open dropdown, after hooks don't work on it blocks
      browser.keys(['Escape']);
    });

    it('calls primary split button callback', () => {
      browser.click('[class*=split-button-primary]');
      Terra.validates.screenshot('primary button click');
    });

    describe('Callback in menu', () => {
      beforeEach(() => {
        // Open the menu
        browser.click('[class*=split-button-caret]');
        browser.waitForVisible('[class*=dropdown-list]');
      });

      it('runs callback on space', () => {
        browser.keys(['Space']);
        Terra.validates.screenshot('space');
      });

      it('keyboard navigates down and runs callback on space', () => {
        browser.keys(['ArrowDown', 'Space']);
        Terra.validates.screenshot('down arrow');
      });

      it('runs callback on enter', () => {
        browser.keys(['ArrowDown', 'ArrowDown', 'Enter']);
        Terra.validates.screenshot('enter');
      });

      it('runs callback on click', () => {
        browser.click('#red');
        Terra.validates.screenshot('click');
      });

      it('will not keyboard navigates down past the last option', () => {
        browser.keys(['ArrowDown', 'ArrowDown', 'ArrowDown', 'Space']);
        Terra.validates.screenshot('no down out of bounds');
      });

      it('keyboard navigates up and runs callback on enter', () => {
        browser.keys(['ArrowDown', 'ArrowUp', 'Enter']);
        Terra.validates.screenshot('up arrow');
      });

      it('will not keyboard navigates up past the first option', () => {
        browser.keys(['ArrowDown', 'ArrowUp', 'ArrowUp', 'Enter']);
        Terra.validates.screenshot('no up out of bounds');
      });

      it('jumps to the last entry', () => {
        browser.keys(['End', 'Enter']);
        Terra.validates.screenshot('end');
      });

      it('jumps to the first entry', () => {
        browser.keys(['ArrowDown', 'Home', 'Enter']);
        Terra.validates.screenshot('home');
      });

      it('jumps when typing', () => {
        browser.keys(['b', 'Enter']);
        Terra.validates.screenshot('jumps when typing');
      });

      it('closes on tab without running a callback', () => {
        browser.keys(['Tab']);
        Terra.validates.screenshot('tab');
      });

      it('closes the dropdown when clicking the caret with the dropdown open', () => {
        browser.click('[class*=split-button-caret]');
        Terra.validates.screenshot('clicking caret closes dropdown');
      });

      it('closes the dropdown when clicking outside the dropdownbutton', () => {
        browser.moveToObject('#root', 200, 1);
        browser.buttonDown();
        browser.buttonUp();
        Terra.validates.screenshot('clicking outside closes dropdown');
      });

      it('closes the dropdown when clicking primary button and selects primary button', () => {
        browser.click('[class*=split-button-primary]');
        Terra.validates.screenshot('clicking primary closes dropdown and selects primary');
      });
    });

    it('does not reopen the dropdown when open and closed with keyboard interactions', () => {
      browser.keys(['Tab', 'Enter']);
      browser.waitForVisible('[class*=dropdown-list]');

      browser.keys(['Enter']);
      // wait for invisible
      browser.waitForVisible('[class*=dropdown-list]', undefined, true);
    });
  });

  describe('Wide Contents', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/wide-split-button');
      // avoid hover styles
      browser.moveToObject('#root', 1, 300);
    });

    Terra.it.validatesElement('Both closed');

    it('opens the long label dropdown', () => {
      browser.click('#wide-label [class*=split-button-caret]');
      Terra.validates.element('Long label open');
    });

    it('opens the long option dropdown', () => {
      browser.keys(['Escape']);
      browser.click('#wide-option [class*=split-button-caret]');
      Terra.validates.element('Long option open');
    });
  });

  describe('Block', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/block-split-button');
    });

    Terra.it.validatesElement();
  });

  describe('Bounded', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/bounded-split-button');
    });

    it('opens the top left dropdown', () => {
      browser.click('#top-left [class*=split-button-caret]');
      Terra.validates.element('Top left open');
    });

    it('opens the top right dropdown', () => {
      browser.keys('Escape');
      browser.click('#top-right [class*=split-button-caret]');
      Terra.validates.element('Top right open');
    });

    it('opens the bottom left dropdown', () => {
      browser.keys('Escape');
      browser.click('#bottom-left [class*=split-button-caret]');
      Terra.validates.element('Bottom left open');
    });

    it('opens the bottom right dropdown', () => {
      browser.keys('Escape');
      browser.click('#bottom-right [class*=split-button-caret]');
      Terra.validates.element('Bottom right open');
    });
  });

  describe('Focus in callback', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/split-focus');
    });

    it('runs primary callback that focuses an element', () => {
      browser.click('[class*=split-button-primary]');
      Terra.validates.screenshot('first button clicked');
    });

    it('opens the dropdown', () => {
      browser.click('[class*=split-button-caret]');
      browser.waitForVisible('[class*=dropdown-list]');
    });

    it('runs callback in dropdown that focuses an element', () => {
      browser.click('#second');
      Terra.validates.screenshot('second button clicked');
    });
  });

  describe('Variants', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/variant-split-buttons');
      browser.moveToObject('#root', 1, 100);
    });

    Terra.it.validatesElement();
  });
});
