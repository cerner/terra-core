describe('Multi Select List', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Multi Select List Default', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/multi-select-list/default-multi-select-list'));

    Terra.should.matchScreenshot();

    it('selects the first item upon clicking', () => {
      browser.click('ul li:nth-child(1)');
    });
    Terra.should.matchScreenshot('first item selected');

    it('selects the second item upon clicking', () => {
      browser.click('ul li:nth-child(2)');
    });
    Terra.should.matchScreenshot('first and second item selected');

    it('selects the third item upon clicking', () => {
      browser.click('ul li:nth-child(3)');
    });
    Terra.should.matchScreenshot('first second and third item selected');

    it('deselects the second item upon clicking', () => {
      browser.click('ul li:nth-child(2)');
    });
    Terra.should.matchScreenshot('first and third item selected');

    it('deselects the third item upon clicking', () => {
      browser.click('ul li:nth-child(3)');
    });
    Terra.should.matchScreenshot('first item selected third item focus');

    describe('Enter Key', () => {
      before(() => browser.url('/#/raw/tests/terra-list/list/multi-select-list/default-multi-select-list'));

      it('selects the first item upon enter', () => {
        browser.keys(['Tab', 'Enter']);
      });
      Terra.should.matchScreenshot('first item selected');

      it('selects the second item upon enter', () => {
        browser.keys(['Tab', 'Enter']);
      });
      Terra.should.matchScreenshot('first and second item selected');

      it('selects the third item upon enter', () => {
        browser.keys(['Tab', 'Enter']);
      });
      Terra.should.matchScreenshot('first second and third item selected');

      it('deselects the second item upon enter', () => {
        browser.keys(['Shift', 'Tab', 'Enter', 'Shift']);
      });
      Terra.should.matchScreenshot('first and third item selected');

      it('deselects the third item upon enter', () => {
        browser.keys(['Tab', 'Enter']);
      });
      Terra.should.matchScreenshot('first item selected third item focused');
    });

    describe('Space Bar', () => {
      before(() => browser.url('/#/raw/tests/terra-list/list/multi-select-list/default-multi-select-list'));

      it('selects the first item upon space keydown', () => {
        browser.keys(['Tab', 'Space']);
      });
      Terra.should.matchScreenshot('first item selected');

      it('selects the second item upon space keydown', () => {
        browser.keys(['Tab', 'Space']);
      });
      Terra.should.matchScreenshot('first and second item selected');

      it('selects the third item upon space keydown', () => {
        browser.keys(['Tab', 'Space']);
      });
      Terra.should.matchScreenshot('first second and third item selected');

      it('deselects the second item upon space keydown', () => {
        // Shift-tab combination to go to prev. item, selects that item and then keyup the shift
        browser.keys(['Shift', 'Tab', 'Space', 'Shift']);
      });
      Terra.should.matchScreenshot('first and third item selected');

      it('deselects the third item upon space keydown', () => {
        browser.keys(['Tab', 'Space']);
      });
      Terra.should.matchScreenshot('first item selected third item focus');
      Terra.should.beAccessible();
    });
  });

  describe('Multi Select List Max Count', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/multi-select-list/max-count-multi-select-list'));
    Terra.should.matchScreenshot();

    it('should not select the third item', () => {
      browser.keys(['Tab', 'Tab', 'Tab', 'Enter']);
    });
    Terra.should.matchScreenshot('first and second item selected');

    it('deselects the second item', () => {
      browser.click('ul li:nth-child(2)');
    });
    Terra.should.matchScreenshot('first item selected');

    it('selects the third item', () => {
      browser.keys(['Tab', 'Space']);
    });
    Terra.should.matchScreenshot('first and third item selected');

    Terra.should.beAccessible();
  });

  describe('Multi Select List Focus', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-list/list/multi-select-list/default-multi-select-list');
      browser.waitForExist('ul');
      // Selects the first and second item (Tab -> Enter, Tab -> Enter), then focuses back on the first item (Shift -> Tab). Finally, release the shift key
      browser.keys(['Tab', 'Enter', 'Tab', 'Enter', 'Shift', 'Tab', 'Shift']);
    });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-list-item-selected-focus-background-color': '#fdebeb',
      },
    });
  });

  describe('Multi Select List On Change', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/multi-select-list/on-change-multi-select-list'));

    it('selects and displays the first item', () => {
      browser.keys(['Tab', 'Enter']);
    });
    Terra.should.matchScreenshot('selected item(s) 0');

    it('selects and displays the second item', () => {
      browser.click('ul li:nth-child(2)');
    });
    Terra.should.matchScreenshot('selected item(s) 0,1');

    it('selects and displays the third item', () => {
      browser.keys(['Tab', 'Enter']);
    });
    Terra.should.matchScreenshot('selected item(s) 0,1,2');

    it('deselects the second item', () => {
      // Shift-tab to go back, shift at end to release shift key-down
      browser.keys(['Shift', 'Tab', 'Enter', 'Shift']);
    });
    Terra.should.matchScreenshot('selected item(s) 0,2');

    it('deselects the third item', () => {
      browser.click('ul li:nth-child(3)');
    });
    Terra.should.matchScreenshot('selected item(s) 0 third item focus');

    Terra.should.beAccessible();
  });

  describe('Multi Select List On Change with Max Selection', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/multi-select-list/on-change-multi-select-list-with-max-selection'));

    it('selects and displays the first item', () => {
      browser.keys(['Tab', 'Enter']);
    });
    Terra.should.matchScreenshot('selected item(s) 0');

    it('selects and displays the second item', () => {
      browser.click('ul li:nth-child(2)');
    });
    Terra.should.matchScreenshot('selected item(s) 0,1');

    it('should not select and not display the third item', () => {
      browser.keys(['Tab', 'Enter']);
    });
    Terra.should.matchScreenshot('selected item(s) 0,1');

    it('deselects the second item', () => {
      browser.addValue('ul li:nth-child(2)', 'Space');
    });
    Terra.should.matchScreenshot('selected item(s) 0 second item deselected');

    it('selects the third item', () => {
      browser.click('ul li:nth-child(3)');
    });
    Terra.should.matchScreenshot('selected item(s) 0,2');

    Terra.should.beAccessible();
  });

  describe('Multi Select List No Deselect Item', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/multi-select-list/multi-select-list-with-no-deselect-item'));

    Terra.should.matchScreenshot('before click');
    it('should not deselect item one', () => {
      browser.click('ul li:nth-child(1)');
    });
    Terra.should.matchScreenshot('after click');

    Terra.should.beAccessible();
  });
});
