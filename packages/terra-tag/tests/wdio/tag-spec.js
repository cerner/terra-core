Terra.describeViewports('Tag', ['tiny'], () => {
  it('displays Default tag', () => {
    browser.url('/raw/tests/terra-tag/tag/default-tag');
    Terra.validates.element('default');
  });

  it('displays Href Tag', () => {
    browser.url('/raw/tests/terra-tag/tag/href-tag');
    Terra.validates.element('href');
  });

  it('displays Icon and Text Tag', () => {
    browser.url('/raw/tests/terra-tag/tag/icon-and-text-tag');
    Terra.validates.element('icon and text');
  });

  it('displays Icon and Text Long Tag', () => {
    browser.url('/raw/tests/terra-tag/tag/long-text-tag');
    Terra.validates.element('icon and long text');
  });

  describe('OnClick Tag', () => {
    it('displays Default tag', () => {
      browser.url('/raw/tests/terra-tag/tag/on-click-tag');
      Terra.validates.element('display tag');
    });

    it('tabs to tag', () => {
      browser.click('#root');
      browser.keys('Tab');
      expect(browser.hasFocus('#on-click')).to.be.true;
      Terra.validates.element('focus');
    });
  });
});

Terra.describeViewports('Tag', ['tiny', 'medium', 'large'], () => {
  it('displays multiple tags', () => {
    browser.url('/raw/tests/terra-tag/tag/multiple-tags');
    Terra.validates.element('multiple');
  });
});
