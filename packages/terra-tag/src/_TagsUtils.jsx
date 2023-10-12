/**
 * Takes tag as input and returns its width.
 */
const getTagWidth = (tag) => {
  const tagWidth = tag.offsetWidth + parseFloat(window.getComputedStyle(tag, null).getPropertyValue('margin-right'), 10);
  return tagWidth;
};

/**
 * Takes rollUpTag as input and returns its width.
 */
const getRollUpTagWidth = (rollUpTag) => {
  const rollupTagWidth = rollUpTag.offsetWidth + parseFloat(window.getComputedStyle(rollUpTag, null).getPropertyValue('margin-right'), 10);
  return rollupTagWidth;
};

/**
 * Takes tag container ref as input and returns the index value from which the tags need to be hidden/rolled up.
 */
const getRollUpIndex = (tagListRef) => {
  const rollUpTag = tagListRef.current.querySelector('[data-terra-rollup-tag]');
  const tags = tagListRef.current.querySelectorAll('[data-terra-tag]');
  const containerWidth = tagListRef.current.offsetWidth;
  let totalTagWidth = 0;
  let startIndex = 0;
  let rollupTagWidth = 0;

  if (rollUpTag) {
    rollupTagWidth = getRollUpTagWidth(rollUpTag);
  }

  for (let i = 0; i < tags.length; i += 1) {
    if (totalTagWidth >= containerWidth) {
      break;
    }
    const tagWidth = getTagWidth(tags[i]);
    if (tagWidth + totalTagWidth + rollupTagWidth < containerWidth) {
      startIndex = i + 1;
    }
    totalTagWidth += tagWidth;
  }
  return startIndex;
};

/**
 * Takes 'tag' element and tabindex 'val' as inputs and sets the tag elements tabindex.
 */
const setTagsTabIndex = (tags, val) => {
  for (let i = 0; i < tags.length; i += 1) {
    tags[i].setAttribute('tabindex', val);
  }
};

/**
 * Takes 'rollUpTag' element and tabindex 'val' as inputs and sets the rollUpTag tabindex.
 */
const setRollUpTagTabIndex = (rollUpTag, val) => {
  rollUpTag.setAttribute('tabindex', val);
};

const TagsUtils = {
  getRollUpIndex,
  setTagsTabIndex,
  setRollUpTagTabIndex,
};

export default TagsUtils;
