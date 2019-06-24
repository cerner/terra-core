import React from 'react';

class DropdownListUtil {
  /**
   * Compares the value of two strings to determine case insensitive equality.
   * @param {string|undefined} a - The initial value to compare.
   * @param {string|undefined} b - The secondary value to compare.
   * @return {boolean} - True if the values are equal.
   */
  static isEqual(a, b) {
    if (a === undefined || a === null || b === undefined || b === null) {
      return false;
    }
    return a.toString().toLowerCase() === b.toString().toLowerCase();
  }

  static getChildArray(object) {
    return React.Children.toArray(object.props.children);
  }

  /**
   * Finds the option matching the requested label.
   * @param {ReactNode} object - The node being flattened.
   * @param {string} label - The label of the target option.
   * @return {ReactNode|undefined} - The option. Returns undefined if not found.
   */
  static findByValue(object, label) {
    return DropdownListUtil.getChildArray(object).find(({ props }) => DropdownListUtil.isEqual(props.label, label));
  }

  /**
   * Finds the first option in the menu.
   * @param {ReactNode} object - The menu.
   * @return {string|null} - The label of the first option. Null if not found.
   */
  static findFirst(object) {
    const options = DropdownListUtil.getChildArray(object);

    if (options.length > 0) {
      return options[0].props.label;
    }
    return null;
  }

  /**
   * Finds the first option in the menu.
   * @param {ReactNode} object - The menu.
   * @return {string|null} - The label of the last option. Null if not found.
   */
  static findLast(object) {
    const options = DropdownListUtil.getChildArray(object);

    if (options.length > 0) {
      return options[options.length - 1].props.label;
    }
    return null;
  }

  /**
   * Finds the first option in the menu that starts with the string.
   * @param {ReactNode} object - The menu.
   * @param {string} string - The start string.
   * @return {string|null} - The firt option that starts with the provided string.
   */
  static findWithStartString(object, string) {
    const option = DropdownListUtil.getChildArray(object).find(opt => (
      opt.props.label || '').toLowerCase().startsWith(string.toLowerCase()));
    return option ? option.props.label : null;
  }

  /**
   * Finds the option following the active option.
   * @param {ReactNode} object - The node being flattened.
   * @param {string} label - The label of the active option.
   * @return {string|null} - The label of the next option. Returns null if not found.
   */
  static findNext(object, label) {
    const options = DropdownListUtil.getChildArray(object);
    const index = options.findIndex(({ props }) => DropdownListUtil.isEqual(props.label, label));
    return index === -1 ? null : options[Math.min(index + 1, options.length - 1)].props.label;
  }

  /**
   * Finds the option preceding the active option.
   * @param {ReactNode} object - The node being flattened.
   * @param {string} label - The label of the active option.
   * @return {string|null} - The label of the previous option. Returns null if not found.
   */
  static findPrevious(object, label) {
    const options = DropdownListUtil.getChildArray(object);
    const index = options.findIndex(({ props }) => DropdownListUtil.isEqual(props.label, label));
    return index === -1 ? null : options[Math.max(index - 1, 0)].props.label;
  }
}

export default DropdownListUtil;
