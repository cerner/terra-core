Terra.describeViewports('Split Button', ['medium'], () => {
  describe('Default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/default-split-button');
      // avoid hover styles
      browser.moveToObject('#root', 100, 100);
    });

    Terra.it.validatesElement();

    it('validates primary button focus styling', () => {
      // Tab then Shift-Tab to get focus styles to appear on primary button
      browser.keys(['Tab', 'Shift', 'Tab', 'Shift']);
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

    it('validates the open dropdown', () => {
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

  describe('Callback', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/callback-split-button');
      // avoid hover styles
      browser.moveToObject('#root', 100, 100);
    });

    Terra.it.matchesScreenshot();

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

      it('closes on escape without running a callback', () => {
        browser.keys(['Escape']);
        Terra.validates.screenshot('escape');
      });
    });
  });

  describe('Wide Contents', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/wide-split-button');
      // avoid hover styles
      browser.moveToObject('#root', 100, 100);
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
});
