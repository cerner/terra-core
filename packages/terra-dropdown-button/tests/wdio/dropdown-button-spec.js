Terra.describeViewports('Dropdown Button', ['medium'], () => {
  describe('Default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/default-dropdown-button');
      // avoid hover styles
      browser.moveToObject('#root', 100, 100);
    });

    Terra.it.validatesElement();

    it('validates focus styling', () => {
      browser.keys('Tab');
      Terra.validates.element('focus');
      // tab away from the button so focus is not in later screenshots
      browser.keys('Tab');
    });

    it('validates hover styling', () => {
      browser.moveToObject('[class*=dropdown-button]');
      Terra.validates.element('hover');
    });

    it('validates the open dropdown', () => {
      browser.click('[class*=dropdown-button]');
    });

    Terra.it.validatesElement('dropdown open', { selector: '[class*=dropdown-list]' });
    Terra.it.matchesScreenshot('dropdown button with dropdown open');
  });

  describe('Disabled', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/disabled-dropdown-button');
    });

    Terra.it.validatesElement();

    it('tries to tab to the button', () => {
      browser.keys(['Tab']);
      Terra.validates.screenshot('tab attempted');
    });

    it('tries to click the button', () => {
      expect(() => browser.click('[class*=dropdown-button]')).to.throw('is not clickable');
    });
  });

  describe('Callback', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/callback-dropdown-button');
      // avoid hover styles
      browser.moveToObject('#root', 100, 100);
    });

    Terra.it.matchesScreenshot();

    describe('Callback in menu', () => {
      beforeEach(() => {
        // Open the menu
        browser.click('[class*=dropdown-button]');
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

  describe('Wide contents', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/wide-dropdown-button');
      // avoid hover styles
      browser.moveToObject('#root', 100, 100);
    });

    Terra.it.validatesElement('Both closed');

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

  describe('Block', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/block-dropdown-button');
    });

    Terra.it.validatesElement();
  });

  describe('Bounded', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-dropdown-button/dropdown-button/bounded-dropdown-button');
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
});
