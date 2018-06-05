/* global before, browser, Terra */

describe('List', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('List Default', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list/default-list'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('List Items Divided', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list/items-divided-list'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('List One Item', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list/list-one-item'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });
});
