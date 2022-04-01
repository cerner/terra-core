// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';

/**
 * htmlToReactAttributes - Takes an html attribute and transforms it
 * into a jsx attribute
 * @param {string} attributeName Html attribute
 */
const htmlToReactAttributes = (attributeName) => {
  // https://facebook.github.io/react/docs/dom-elements.html#all-supported-html-attributes
  if (attributeName.indexOf('aria-') >= 0) {
    return attributeName;
  }

  // https://facebook.github.io/react/docs/dom-elements.html#all-supported-html-attributes
  if (attributeName.indexOf('data-') >= 0) {
    return attributeName;
  }

  // https://facebook.github.io/react/docs/dom-elements.html#classname
  if (attributeName === 'class') {
    return 'className';
  }

  // https://facebook.github.io/react/docs/dom-elements.html#htmlfor
  if (attributeName === 'for') {
    return 'htmlFor';
  }

  return _.camelCase(attributeName);
};

export default htmlToReactAttributes;
