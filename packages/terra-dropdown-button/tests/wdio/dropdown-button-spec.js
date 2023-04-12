Terra.describeViewports('Dropdown Button', ['medium'], () => {
  describe('Default', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/dropdown-button/default-dropdown-button');
      // avoid hover styles
      $('#root').moveTo({ xOffset: 100, yOffset: 1 });
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
      $('[class*=dropdown-button]').click();
      Terra.validates.element('dropdown open', { selector: '[class*=dropdown-list]' });
      Terra.validates.element('dropdown button with dropdown open');
    });

    it('should print MetaData of option on click', () => {
      $('#opt1').click();
      Terra.validates.element('MetaData of 1st option', { selector: '#root' });
    });
  });

  describe('Disabled', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/dropdown-button/disabled-dropdown-button');
    });

    it('should display disabled Dropdown Button', () => {
      Terra.validates.element('disabled');
    });

    it('tries to tab to the button', () => {
      browser.keys(['Tab']);
      Terra.validates.element('tab attempted');
    });

    it('tries to click the button', () => {
      expect(() => $('[class*=dropdown-button]').click()).toThrow('not clickable');
    });
  });

  describe('Interactions', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/dropdown-button/callback-dropdown-button');
      // avoid hover styles
      $('#root').moveTo({ xOffset: 100, yOffset: 1 });
    });

    it('should display Dropdown Button with interactions', () => {
      Terra.validates.element('interactions');
    });

    it('opens the dropdown with click', () => {
      $('[class*=dropdown-button]').click();
      $('[class*=dropdown-list]').waitForDisplayed();
    });

    it('closes dropdown on escape without running a callback', () => {
      browser.keys(['Escape']);
      Terra.validates.element('escape');
    });

    it('opens the dropdown with enter', () => {
      browser.keys(['Enter']);
      $('[class*=dropdown-list]').waitForDisplayed();
      browser.keys('Escape');
    });

    it('opens the dropdown with space', () => {
      browser.keys('Space');
      $('[class*=dropdown-list]').waitForDisplayed();
      // Cleanup the open dropdown, after hooks don't work on it blocks
      browser.keys(['Escape']);
    });

    describe('Callback in menu', () => {
      beforeEach(() => {
        // Open the menu
        $('[class*=dropdown-button]').click();
        $('[class*=dropdown-list]').waitForDisplayed();
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
        $('#red').click();
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
        $('[class*=dropdown-button]').click();
        Terra.validates.element('clicking caret closes dropdown');
      });

      it('closes the dropdown when clicking outside the dropdownbutton', () => {
        $('#root').moveTo({ xOffset: 200, yOffset: 1 });
        browser.performActions([{
          type: 'pointer',
          id: 'pointer1',
          parameters: {
            pointerType: 'mouse',
          },
          actions: [{
            type: 'pointerDown',
            button: 0,
          }],
        }]);
        browser.performActions([{
          type: 'pointer',
          id: 'pointer1',
          parameters: {
            pointerType: 'mouse',
          },
          actions: [{
            type: 'pointerUp',
            button: 0,
          }],
        }]);
        Terra.validates.element('clicking outside closes dropdown');
      });
    });

    it('does not reopen the dropdown when open and closed with keyboard interactions', () => {
      browser.keys(['Enter']);
      $('[class*=dropdown-list]').waitForDisplayed();

      browser.keys(['Enter']);
      // wait for invisible
      $('[class*=dropdown-list]').waitForDisplayed({ reverse: true });
    });
  });

  describe('Wide contents', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/dropdown-button/wide-dropdown-button');
      // avoid hover styles
      $('#root').moveTo({ xOffset: 1, yOffset: 300 });
    });

    it('should display wide contents Dropdown Button both closed', () => {
      Terra.validates.element('Both closed');
    });

    it('opens the long label dropdown', () => {
      $('#wide-label').click();
      Terra.validates.element('Long label open');
    });

    it('opens the long option dropdown', () => {
      browser.keys(['Escape']);
      $('#wide-option').click();
      Terra.validates.element('Long option open');
    });
  });

  it('should display block Dropdown Button', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/dropdown-button/block-dropdown-button');

    Terra.validates.element('block');
  });

  describe('Bounded', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/dropdown-button/bounded-dropdown-button');
    });

    it('opens the top left dropdown', () => {
      $('#top-left').click();
      Terra.validates.element('Top left open');
    });

    it('opens the top right dropdown', () => {
      browser.keys('Escape');
      $('#top-right').click();
      Terra.validates.element('Top right open');
    });

    it('opens the bottom left dropdown', () => {
      browser.keys('Escape');
      $('#bottom-left').click();
      Terra.validates.element('Bottom left open');
    });

    it('opens the bottom right dropdown', () => {
      browser.keys('Escape');
      $('#bottom-right').click();
      Terra.validates.element('Bottom right open');
    });
  });

  describe('Focus in callback', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/dropdown-button/dropdown-focus');
    });

    it('opens the dropdown', () => {
      $('[class*=dropdown-button]').click();
      $('[class*=dropdown-list]').waitForDisplayed();
    });

    it('should run callback in dropdown that focuses an element', () => {
      $('#first').click();
      Terra.validates.element('first button clicked');
    });
  });

  it('should display variants of Dropdown Button', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/dropdown-button/variant-dropdown-buttons');
    $('#root').moveTo({ xOffset: 1, yOffset: 100 });

    Terra.validates.element('variants');
  });
});

describe('Navigate from first item to last item', () => {
  it('Navigate from first Item to last Item', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/dropdown-button/variant-dropdown-buttons');
    $('[class*=dropdown-button]').click();
    $('[class*=dropdown-list]').waitForDisplayed();
    $('li:first-child[role="menuitem"]').isFocused();
    browser.keys(['ArrowUp']);
    Terra.validates.element('last item focused', { selector: '#root' });
  });

  it('Navigate from last item to first item', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/dropdown-button/variant-dropdown-buttons');
    $('[class*=dropdown-button]').click();
    $('[class*=dropdown-list]').waitForDisplayed();
    $('li:last-child[role="menuitem"]').isFocused();
    browser.keys(['ArrowDown']);
    Terra.validates.element('first item focused', { selector: '#root' });
  });
});
