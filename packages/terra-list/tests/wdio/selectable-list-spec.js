describe('Selectable List', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Selectable List Chevron', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/selectable-list/chevron-selectable-list'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('Selectable List Chevron Styled', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-list/list/selectable-list/chevron-selectable-list');
      browser.waitForExist('ul');
      browser.click('ul li:nth-child(1)');
    });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-list-item-chevron-color': '#000000',
      },
    });
  });

  describe('Selectable List Hover', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-list/list/selectable-list/default-selectable-list');
      browser.waitForExist('ul');
      browser.moveToObject('ul li:nth-child(1)');
    });

    Terra.should.themeEachCustomProperty({
      '--terra-list-item-hover-background-color': '#fdebeb',
    });
  });

  describe('Selectable List Focus', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-list/list/selectable-list/default-selectable-list');
      browser.waitForExist('ul');
      browser.click('ul li:nth-child(1)');
    });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-list-item-focus-background-color': '#fdebeb',
        '--terra-list-item-focus-box-shadow': '5px 10px #dddddd',
        '--terra-list-item-focus-outline': '1px dashed #000000',
      },
    });
  });

  describe('Selectable List Default', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/selectable-list/default-selectable-list'));

    Terra.should.matchScreenshot();

    it('selects the first item', () => {
      browser.keys(['Tab', 'Space']);
    });
    Terra.should.matchScreenshot('first item selected');

    it('selects the second item', () => {
      browser.keys(['Tab', 'Enter']);
    });
    Terra.should.matchScreenshot('second item selected');

    it('selects the third item', () => {
      browser.click('ul li:nth-child(3)');
    });
    Terra.should.matchScreenshot('third item selected');
    Terra.should.beAccessible();
  });

  describe('Selectable List Disable Unselected', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/selectable-list/disable-unselected-selectable-list'));

    it('selects the first item', () => {
      browser.keys(['Tab', 'Enter']);
    });
    Terra.should.matchScreenshot('first item selected');

    it('selects the second item', () => {
      browser.keys(['Tab', 'Enter']);
    });
    Terra.should.matchScreenshot('second item selected');

    it('attempts to select the third item', () => {
      browser.keys(['Tab', 'Enter']);
    });
    Terra.should.matchScreenshot('third item disabled');

    Terra.should.beAccessible();
  });

  describe('Selectable List Items Divided', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/selectable-list/items-divided-selectable-list'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('Selectable List Non Selectable Item', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/selectable-list/non-selectable-item-selectable-list'));

    Terra.should.matchScreenshot('before click');
    it('attempts to select non-selectable item', () => {
      browser.click('ul li:nth-child(3)');
    });

    Terra.should.matchScreenshot('after click');
    Terra.should.beAccessible();
  });

  describe('Selectable List On Change', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/selectable-list/on-change-selectable-list'));

    it('selects the first item', () => {
      browser.keys(['Tab', 'Space']);
    });
    Terra.should.matchScreenshot('first item selected');

    it('selects the second item', () => {
      browser.keys(['Tab', 'Enter']);
    });
    Terra.should.matchScreenshot('second item selected');

    it('selects the first item again', () => {
      browser.click('ul li:nth-child(1)');
    });
    Terra.should.matchScreenshot('first item selected');

    Terra.should.beAccessible();
  });

  describe('Selectable List One Item', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/selectable-list/one-item-selectable-list'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('Selectable List Preselected Item', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/selectable-list/preselected-item-selectable-list'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });
  describe('Selectable List Single Chevron', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/selectable-list/single-chevron-selectable-list'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('Selectable List Single Non Chevron', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/selectable-list/single-non-chevron-selectable-list'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });
});
