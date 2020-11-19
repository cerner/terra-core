Terra.describeViewports('Dropdown Button', ['medium'], () => {
  describe('Default', () => {
    before(() => {
      browser.url('/raw/tests/terra-dropdown-button/dropdown-button/default-dropdown-button');
      // avoid hover styles
      browser.moveToObject('#root', 100, 1);
    });

    it('should display default Dropdown Button', () => {
      Terra.validates.element('default');
    });

    it('should validate focus styling', () => {
      browser.keys('Tab');
      Terra.validates.element('focus');
      // tab away from the button so focus is not in later screenshots
      browser.keys('Tab');
    });

    it('opens and validates dropdown with click', () => {
      browser.click('[class*=dropdown-button]');
      Terra.validates.element('dropdown open', { selector: '[class*=dropdown-list]' });
      Terra.validates.element('dropdown button with dropdown open');
    });

    it('should print MetaData of option on click', () => {
      browser.click('#opt1');
      Terra.validates.element('MetaData of 1st option', { selector: '#root' });
    });
  });

  describe('Disabled', () => {
    before(() => {
      browser.url('/raw/tests/terra-dropdown-button/dropdown-button/disabled-dropdown-button');
    });

    it('should display disabled Dropdown Button', () => {
      Terra.validates.element('default');
    });

    it('tries to tab to the button', () => {
      browser.keys(['Tab']);
      Terra.validates.element('tab attempted');
    });

    it('tries to click the button', () => {
      expect(() => browser.click('[class*=dropdown-button]')).to.throw('not clickable');
    });
  });

  describe('Interactions', () => {
    before(() => {
      browser.url('/raw/tests/terra-dropdown-button/dropdown-button/callback-dropdown-button');
      // avoid hover styles
      browser.moveToObject('#root', 100, 1);
    });

    it('should display Dropdown Button with interactions', () => {
      Terra.validates.element('default');
    });

    it('opens the dropdown with click', () => {
      browser.click('[class*=dropdown-button]');
      browser.waitForVisible('[class*=dropdown-list]');
    });

    it('closes dropdown on escape without running a callback', () => {
      browser.keys(['Escape']);
      Terra.validates.element('escape');
    });

    it('opens the dropdown with enter', () => {
      browser.keys(['Enter']);
      browser.waitForVisible('[class*=dropdown-list]');
      browser.keys('Escape');
    });

    it('opens the dropdown with space', () => {
      browser.keys('Space');
      browser.waitForVisible('[class*=dropdown-list]');
      // Cleanup the open dropdown, after hooks don't work on it blocks
      browser.keys(['Escape']);
    });

    describe('Callback in menu', () => {
      beforeEach(() => {
        // Open the menu
        browser.click('[class*=dropdown-button]');
        browser.waitForVisible('[class*=dropdown-list]');
      });

      it('should run callback on space', () => {
        browser.keys(['ArrowDown', 'Space']);
        Terra.validates.element('space');
      });

      it('keyboard navigates down and runs callback on space', () => {
        browser.keys(['ArrowDown', 'ArrowDown', 'Space']);
        Terra.validates.element('down arrow');
      });

      it('should run callback on enter', () => {
        browser.keys(['ArrowDown', 'ArrowDown', 'ArrowDown', 'Enter']);
        Terra.validates.element('enter');
      });

      it('should run callback on click', () => {
        browser.click('#red');
        Terra.validates.element('click');
      });

      it('keyboard navigates down past the last option', () => {
        browser.keys(['ArrowDown', 'ArrowDown', 'ArrowDown', 'ArrowDown', 'Space']);
        Terra.validates.element('no down out of bounds');
      });

      it('keyboard navigates up and runs callback on enter', () => {
        browser.keys(['ArrowDown', 'ArrowDown', 'ArrowUp', 'Enter']);
        Terra.validates.element('up arrow');
      });

      it('keyboard navigates up past the first option', () => {
        browser.keys(['ArrowDown', 'ArrowDown', 'ArrowUp', 'ArrowUp', 'Enter']);
        Terra.validates.element('no up out of bounds');
      });

      it('jumps to the last entry', () => {
        browser.keys(['ArrowDown', 'End', 'Enter']);
        Terra.validates.element('end');
      });

      it('jumps to the first entry', () => {
        browser.keys(['ArrowDown', 'Home', 'Enter']);
        Terra.validates.element('home');
      });

      it('jumps when typing', () => {
        browser.keys(['ArrowDown', 'b', 'Enter']);
        Terra.validates.element('jumps when typing');
      });

      it('closes on tab without running a callback', () => {
        browser.keys(['Tab']);
        Terra.validates.element('tab');
      });

      it('closes the dropdown when clicking the caret with the dropdown open', () => {
        browser.click('[class*=dropdown-button]');
        Terra.validates.element('clicking caret closes dropdown');
      });

      it('closes the dropdown when clicking outside the dropdownbutton', () => {
        browser.moveToObject('#root', 200, 1);
        browser.buttonDown();
        browser.buttonUp();
        Terra.validates.element('clicking outside closes dropdown');
      });
    });

    it('does not reopen the dropdown when open and closed with keyboard interactions', () => {
      browser.keys(['Enter']);
      browser.waitForVisible('[class*=dropdown-list]');

      browser.keys(['Enter']);
      // wait for invisible
      browser.waitForVisible('[class*=dropdown-list]', undefined, true);
    });
  });

  describe('Wide contents', () => {
    before(() => {
      browser.url('/raw/tests/terra-dropdown-button/dropdown-button/wide-dropdown-button');
      // avoid hover styles
      browser.moveToObject('#root', 1, 300);
    });

    it('should display wide contents Dropdown Button both closed', () => {
      Terra.validates.element('Both closed');
    });

    it('opens the long label dropdown', () => {
      browser.click('#wide-label');
      Terra.validates.element('Long label open');
    });

    it('opens the long option dropdown', () => {
      browser.keys(['Escape']);
      browser.click('#wide-option');
      Terra.validates.element('Long option open');
    });
  });

  it('should display block Dropdown Button', () => {
    browser.url('/raw/tests/terra-dropdown-button/dropdown-button/block-dropdown-button');

    Terra.validates.element('block');
  });

  describe('Bounded', () => {
    before(() => {
      browser.url('/raw/tests/terra-dropdown-button/dropdown-button/bounded-dropdown-button');
    });

    it('opens the top left dropdown', () => {
      browser.click('#top-left');
      Terra.validates.element('Top left open');
    });

    it('opens the top right dropdown', () => {
      browser.keys('Escape');
      browser.click('#top-right');
      Terra.validates.element('Top right open');
    });

    it('opens the bottom left dropdown', () => {
      browser.keys('Escape');
      browser.click('#bottom-left');
      Terra.validates.element('Bottom left open');
    });

    it('opens the bottom right dropdown', () => {
      browser.keys('Escape');
      browser.click('#bottom-right');
      Terra.validates.element('Bottom right open');
    });
  });

  describe('Focus in callback', () => {
    before(() => {
      browser.url('/raw/tests/terra-dropdown-button/dropdown-button/dropdown-focus');
    });

    it('opens the dropdown', () => {
      browser.click('[class*=dropdown-button]');
      browser.waitForVisible('[class*=dropdown-list]');
    });

    it('should run callback in dropdown that focuses an element', () => {
      browser.click('#first');
      Terra.validates.element('first button clicked');
    });
  });

  it('should display variants of Dropdown Button', () => {
    browser.url('/raw/tests/terra-dropdown-button/dropdown-button/variant-dropdown-buttons');
    browser.moveToObject('#root', 1, 100);

    Terra.validates.element('variants');
  });
});
