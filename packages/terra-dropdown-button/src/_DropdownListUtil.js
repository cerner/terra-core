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

  /**
   * Gets the children of a node as an array
   * @param {React.ReactNode} object Node to get children of
   * @return {Array<React.ReactNode>} the array of children
   */
  static getChildArray(object) {
    return React.Children.toArray(object.props.children);
  }

  /**
   * Finds the option matching the requested label.
   * @param {React.ReactNode} object - The dropdown containing the options.
   * @param {string} label - The label of the target option.
   * @return {React.ReactNode|undefined} - The option. Returns undefined if not found.
   */
  static findByValue(object, label) {
    return DropdownListUtil.getChildArray(object).find(({ props }) => DropdownListUtil.isEqual(props.label, label));
  }

  /**
   * Finds the index of the option matching the requested label.
   * @param {React.ReactNode} object - The dropdown containing the options.
   * @param {string} label - The label of the target option.
   * @return {number} - The index of the option
   */
  static findIndexByValue(object, label) {
    return DropdownListUtil.getChildArray(object).findIndex(({ props }) => DropdownListUtil.isEqual(props.label, label));
  }

  static findByIndex(object, index) {
    return DropdownListUtil.getChildArray(object)[index];
  }

  /**
   * Finds the first option in the dropdown that starts with the string.
   * @param {React.ReactNode} object - The dropdown.
   * @param {string} string - The start string.
   * @return {number} - The index of the first option that starts with the provided string.
   */
  static findWithStartString(object, string) {
    return DropdownListUtil.getChildArray(object).findIndex((opt) => (
      opt.props.label || '').toLowerCase().startsWith(string.toLowerCase()));
  }

  /**
   * Finds the index of the option following the active option.
   * @param {React.ReactNode} object - The dropdown containing the options.
   * @param {number} index - The index of the active option.
   * @return {number} - The index of the next option.
   */
  static findNext(object, index) {
    const options = DropdownListUtil.getChildArray(object);
    const next = Math.min(index + 1, options.length - 1);
    return Math.max(0, next);
  }

  /**
   * Finds the index of the option preceding the active option.
   * @param {React.ReactNode} object - The dropdown containing the options.
   * @param {number} index - The index of the active option.
   * @return {number} - The index of the previous option.
   */
  static findPrevious(object, index) {
    const options = DropdownListUtil.getChildArray(object);
    const previous = Math.max(index - 1, 0);
    return Math.min(previous, options.length - 1);
  }
}

export default DropdownListUtil;
