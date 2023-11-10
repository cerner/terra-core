Terra.describeViewports('Tags', ['tiny', 'medium', 'large'], () => {
  describe('Multiple tags grouped together in the Tag List', () => {
    it('should render tags', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/tag/tag-list-collapsed-tags');
      Terra.validates.element('tag list', { selector: '#root' });
    });

    it('focuses on the tag', () => {
      browser.keys('Tab');
      Terra.validates.element('focus the tag', { selector: '#root' });
    });

    it('should set focus to the next tag', () => {
      browser.keys(['ArrowRight']);
      Terra.validates.element('focus second tag of list 1', { selector: '#root' });
    });

    it('should set focus to the previous tag', () => {
      browser.keys('ArrowLeft');
      Terra.validates.element('focus first tag of list 1', { selector: '#root' });
    });
  });
});
