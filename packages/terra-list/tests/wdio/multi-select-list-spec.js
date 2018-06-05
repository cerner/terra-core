/* global before, browser, Terra */

describe('Multi Select List', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Multi Select List Default', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/multi-select-list/default-multi-select-list'));

    Terra.should.matchScreenshot();

    it('should highlight the first item upon clicking', () => {
      browser.click('ul li:nth-child(1)');
    });
    Terra.should.matchScreenshot('first item highlighted');

    it('should highlight the second item upon clicking', () => {
      browser.click('ul li:nth-child(2)');
    });
    Terra.should.matchScreenshot('first and second item highlighted');

    it('should highlight the third item upon clicking', () => {
      browser.click('ul li:nth-child(3)');
    });
    Terra.should.matchScreenshot('first second and third item highlighted');

    it('should unhighlight the second item upon clicking', () => {
      browser.click('ul li:nth-child(2)');
    });
    Terra.should.matchScreenshot('first and third item highlighted');

    it('should unhighlight the third item upon clicking', () => {
      browser.click('ul li:nth-child(3)');
    });
    Terra.should.matchScreenshot('first item highlighted third item unhighlighted');

    describe('Enter Key', () => {
      before(() => browser.url('/#/raw/tests/terra-list/list/multi-select-list/default-multi-select-list'));

      it('should select and highlight the first item upon enter', () => {
        browser.keys(['Tab', 'Enter']);
      });
      Terra.should.matchScreenshot('first item highlighted');

      it('should highlight the second item upon enter', () => {
        browser.keys(['Tab', 'Enter']);
      });
      Terra.should.matchScreenshot('first and second item highlighted');

      it('should highlight the third item upon enter', () => {
        browser.keys(['Tab', 'Enter']);
      });
      Terra.should.matchScreenshot('first second and third item highlighted');

      it('should unhighlight the second item upon enter', () => {
        browser.keys(['Shift', 'Tab', 'Enter', 'Shift']);
      });
      Terra.should.matchScreenshot('first and third item highlighted');

      it('should unhighlight the third item upon enter', () => {
        browser.keys(['Tab', 'Enter']);
      });
      Terra.should.matchScreenshot('first item highlighted third item unhighlighted');
    });

    describe('Space Bar', () => {
      before(() => browser.url('/#/raw/tests/terra-list/list/multi-select-list/default-multi-select-list'));

      it('should highlight the selected items upon space keydown', () => {
        browser.keys(['Tab', 'Space']);
      });
      Terra.should.matchScreenshot('first item highlighted');

      it('should highlight the selected items upon space keydown', () => {
        browser.keys(['Tab', 'Space']);
      });
      Terra.should.matchScreenshot('first and second item highlighted');

      it('should highlight the selected items upon space keydown', () => {
        browser.keys(['Tab', 'Space']);
      });
      Terra.should.matchScreenshot('first second and third item highlighted');

      it('should highlight the selected items upon space keydown', () => {
        browser.keys(['Shift', 'Tab', 'Space', 'Shift']);
      });
      Terra.should.matchScreenshot('first and third item highlighted');

      it('should highlight the selected items upon space keydown', () => {
        browser.keys(['Tab', 'Space']);
      });
      Terra.should.matchScreenshot('first item highlighted third item unhighlighted');
    });
    Terra.should.beAccessible();
  });

  describe('Multi Select List Max Count', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/multi-select-list/max-count-multi-select-list'));
    Terra.should.matchScreenshot();

    it('should not highlight the third item', () => {
      browser.keys(['Tab', 'Tab', 'Tab', 'Enter']);
    });
    Terra.should.matchScreenshot('first and second item highlighted');

    it('should unhighlight the second item', () => {
      browser.click('ul li:nth-child(2)');
    });
    Terra.should.matchScreenshot('first item highlighted');

    it('should highlight the third item', () => {
      browser.keys(['Tab', 'Space']);
    });
    Terra.should.matchScreenshot('first and third item highlighted');

    Terra.should.beAccessible();
  });

  describe('Multi Select List On Change', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/multi-select-list/on-change-multi-select-list'));

    it('should highlight and display the first item', () => {
      browser.keys(['Tab', 'Enter']);
    });
    Terra.should.matchScreenshot('selected item(s) 0');

    it('should highlight and display the second item', () => {
      browser.click('ul li:nth-child(2)');
    });
    Terra.should.matchScreenshot('selected item(s) 0,1');

    it('should highlight and display the third item', () => {
      browser.keys(['Tab', 'Enter']);
    });
    Terra.should.matchScreenshot('selected item(s) 0,1,2');

    it('should unhighlight and deselect the second item', () => {
      // Shift-tab to go back, shift at end to release shift key-down
      browser.keys(['Shift', 'Tab', 'Enter', 'Shift']);
    });
    Terra.should.matchScreenshot('selected item(s) 0,2');

    it('should unhighlight and deselect third item', () => {
      browser.click('ul li:nth-child(3)');
    });
    Terra.should.matchScreenshot('selected item(s) 0 third item unhighlighted');

    Terra.should.beAccessible();
  });

  describe('Multi Select List On Change with Max Selection', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/multi-select-list/on-change-multi-select-list-with-max-selection'));

    it('should highlight and display the first item', () => {
      browser.keys(['Tab', 'Enter']);
    });
    Terra.should.matchScreenshot('selected item(s) 0');

    it('should highlight and display the second item', () => {
      browser.click('ul li:nth-child(2)');
    });
    Terra.should.matchScreenshot('selected item(s) 0,1');

    it('should not highlight and not display the third item', () => {
      browser.keys(['Tab', 'Enter']);
    });
    Terra.should.matchScreenshot('selected item(s) 0,1');

    it('should unhighlight and deselect the second item', () => {
      browser.addValue('ul li:nth-child(2)', 'Space');
    });
    Terra.should.matchScreenshot('selected item(s) 0 second item unhighlighted');

    it('should highlight and select third item', () => {
      browser.click('ul li:nth-child(3)');
    });
    Terra.should.matchScreenshot('selected item(s) 0,2');

    Terra.should.beAccessible();
  });

  describe('Multi Select List No Deselect Item', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/multi-select-list/multi-select-list-with-no-deselect-item'));
    Terra.should.matchScreenshot();

    it('should not deselect item one', () => {
      browser.click('ul li:nth-child(1)');
    });
    Terra.should.matchScreenshot();

    Terra.should.beAccessible();
  });
});
