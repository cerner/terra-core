Terra.describeViewports('Tag', ['tiny'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-tag/tag/default-tag'));
    Terra.it.validatesElement();
  });

  describe('Href Tag', () => {
    before(() => browser.url('/#/raw/tests/terra-tag/tag/href-tag'));
    Terra.it.matchesScreenshot();
  });

  describe('Icon and Text Tag', () => {
    before(() => browser.url('/#/raw/tests/terra-tag/tag/icon-and-text-tag'));
    Terra.it.validatesElement();
  });

  describe('Icon and Text Long Tag', () => {
    before(() => browser.url('/#/raw/tests/terra-tag/tag/long-text-tag'));
    Terra.it.validatesElement();
  });

  describe('OnClick Tag', () => {
    before(() => browser.url('/#/raw/tests/terra-tag/tag/on-click-tag'));

    Terra.it.validatesElement();

    it('tabs to tag', () => {
      browser.keys('Tab');
      browser.hasFocus('#on-click');
      Terra.validates.element('focus');
    });

    it('hovers the tag', () => {
      browser.moveToObject('button');
      Terra.validates.element('hover');
    });
  });
});

Terra.describeViewports('Multiple Tags', ['tiny', 'medium', 'large'], () => {
  before(() => browser.url('/#/raw/tests/terra-tag/tag/multiple-tags'));
  Terra.it.validatesElement();
});
