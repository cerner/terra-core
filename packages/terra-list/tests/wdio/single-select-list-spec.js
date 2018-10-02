describe('Single Select List', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    describe('Click Operations', () => {
      before(() => browser.url('/#/raw/tests/terra-list/list/single-select-list/default-single-select-list'));

      it('selects the first item', () => {
        browser.click('ul li:nth-child(1)');
      });
      Terra.should.matchScreenshot('first item selected');

      it('selects the second item', () => {
        browser.click('ul li:nth-child(2)');
      });
      Terra.should.matchScreenshot('second item selected');
      Terra.should.beAccessible();
    });

    describe('Keyboard Enter Key', () => {
      before(() => browser.url('/#/raw/tests/terra-list/list/single-select-list/default-single-select-list'));

      it('selects the first item', () => {
        browser.keys(['Tab', 'Enter']);
      });
      Terra.should.matchScreenshot('first item selected');

      it('selects the second item', () => {
        browser.keys(['Tab', 'Enter']);
      });
      Terra.should.matchScreenshot('second item selected');
      Terra.should.beAccessible();
    });

    describe('Keyboard Space Key', () => {
      before(() => browser.url('/#/raw/tests/terra-list/list/single-select-list/default-single-select-list'));
      it('selects the first item', () => {
        browser.keys(['Tab', 'Space']);
      });
      Terra.should.matchScreenshot('first item selected');

      it('selects the second item', () => {
        browser.keys(['Tab', 'Space']);
      });
      Terra.should.matchScreenshot('second item selected');
      Terra.should.beAccessible();
    });
  });

  describe('Single Select List On Change', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/single-select-list/on-change-single-select-list'));

    it('selects the first item', () => {
      browser.keys(['Tab', 'Space']);
    });
    Terra.should.matchScreenshot('first item selected');

    it('selects the seond item', () => {
      browser.keys(['Tab', 'Enter']);
    });
    Terra.should.matchScreenshot('second item selected');

    it('reselects the first item', () => {
      browser.click('ul li:nth-child(1)');
    });
    Terra.should.matchScreenshot('first item selected');
    Terra.should.beAccessible();
  });
});
