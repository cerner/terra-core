const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('Tag', () => {
  describe('Default', () => {
    before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

    describe('Default Tag', () => {
      before(() => browser.url('/#/raw/tests/terra-tag/tag/default-tag'));

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot();
    });
  });

  describe('Default OnClick Tag', () => {
    before(() => browser.url('/#/raw/tests/terra-tag/tag/default-on-click-tag'));
    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Href Tag', () => {
    before(() => browser.url('/#/raw/tests/terra-tag/tag/href-tag'));
    Terra.it.matchesScreenshot();
  });

  describe('Icon and Text Tag', () => {
    before(() => browser.url('/#/raw/tests/terra-tag/tag/icon-and-text-tag'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Icon and Text Long Tag', () => {
    before(() => browser.url('/#/raw/tests/terra-tag/tag/long-text-tag'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Multiple Tags', () => {
    before(() => browser.url('/#/raw/tests/terra-tag/tag/multiple-tags'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('OnClick Tag', () => {
    before(() => browser.url('/#/raw/tests/terra-tag/tag/on-click-tag'));
    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();

    describe('OnClick Tag - Keyboard focus', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-tag/tag/on-click-tag');
        browser.keys('Tab');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot();
    });

    describe('OnClick Tag - Hover', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-tag/tag/on-click-tag');
        browser.moveToObject('button');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot();
    });
  });
});
