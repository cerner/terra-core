/* global before, browser, Terra */

describe('List Item', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('List Item Default', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list-item/default-list-item'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('List Item Selected', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list-item/selected-list-item'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-list-item-selected-divider-color': '#dddddd',
        '--terra-list-item-selected-background-color': '#fdebeb',
      },
    });
  });

  describe('List Item Selectable', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-list/list/list-item/selectable-list-item');
      browser.waitForExist('li');
      browser.click('li');
    });

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-list-item-hover-background-color': '#fdebeb',
      },
    });
  });

  describe('List Item Chevron', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list-item/chevron-list-item'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
    Terra.should.themeEachCustomProperty({
      '--terra-list-chevron-color': '#dddddd',
    });
  });
});
