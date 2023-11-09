import TagsUtils from '../../src/_TagsUtils';

describe('TagsUtils', () => {
  describe('getRollUpIndex', () => {
    it('should return the correct index to roll up tags', () => {
      const tagListRef = {
        current: document.createElement('div'),
      };
      const startIndex = TagsUtils.getRollUpIndex(tagListRef);
      expect(startIndex).toBe(0);
    });
  });

  describe('setTagsTabIndex', () => {
    it('should set tabindex for all tag elements', () => {
      const tag1 = document.createElement('div');
      const tag2 = document.createElement('div');
      const tags = [tag1, tag2];
      TagsUtils.setTagsTabIndex(tags, 1);
      expect(tag1.getAttribute('tabindex')).toBe('1');
      expect(tag2.getAttribute('tabindex')).toBe('1');
    });
  });

  describe('setRollUpTagTabIndex', () => {
    it('should set tabindex for the rollUpTag element', () => {
      const rollUpTag = document.createElement('div');
      TagsUtils.setRollUpTagTabIndex(rollUpTag, 2);
      expect(rollUpTag.getAttribute('tabindex')).toBe('2');
    });
  });
});
