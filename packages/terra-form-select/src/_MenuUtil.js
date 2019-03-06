import React from 'react';
import { Variants } from './_constants';

class MenuUtil {
  /**
   * Determines if the query is contained within the string.
   * @param {string|undefined} string - The initial string.
   * @param {string|undefined} query - The value being searched for.
   * @return {boolean} - True if the string contains the query.
   */
  static contains(string, query) {
    if (!string) {
      return false;
    }
    return string.toString().toLowerCase().indexOf(query.trim().toLowerCase()) > -1;
  }

  /**
   * Compares the value of two strings to determine case insensitive equality.
   * @param {string|undefined} a - The initial value to compare.
   * @param {string|undefined} b - The secondary value to compare.
   * @return {boolean} - True if the values are equal.
   */
  static isEqual(a, b) {
    if (a === undefined || b === undefined) {
      return false;
    }
    return a.toString().toLowerCase() === b.toString().toLowerCase();
  }

  /**
   * Determines whether the variant allows multiple selections.
   * @param {string} variant - The variant.
   * @return {boolean} - True if the variant allows multiple selections.
   */
  static allowsMultipleSelections(variant) {
    return variant === Variants.MULTIPLE || variant === Variants.TAG;
  }

  /**
   * Determines whether the provided option is selected.
   * @param {array|number|string} value - The select value.
   * @param {number|string} option - The option value.
   * @return {boolean} - True if the option is selected.
   */
  static isSelected(value, option) {
    if (Array.isArray(value)) {
      return MenuUtil.includes(value, option);
    }
    return MenuUtil.isEqual(value, option);
  }

  /**
   * Determines if the query is contianed within the array.
   * @param {array|undefined} array - The initial array.
   * @param {string|undefined} query - The value being searched for.
   * @return {boolean} - True if the query is contained within the array.
   */
  static includes(array, query) {
    if (!array) {
      return false;
    }

    return array.find(option => MenuUtil.isEqual(option, query)) !== undefined;
  }

  /**
   * Flattens the available options. Ignores disabled options.
   * @param {ReactNode} object - The node being flattened.
   * @param {boolean} - Whether disabled props should be filtered out.
   * @return {array} - An array of available options.
   */
  static flatten(object, ignoreDisabled) {
    return React.Children.toArray(object).reduce((accumulator, option) => {
      if (option.type.isOption && (!ignoreDisabled || (ignoreDisabled && !option.props.disabled))) {
        accumulator.push(option);
      } else if (option.type.isOptGroup) {
        return accumulator.concat(MenuUtil.flatten(option.props.children, ignoreDisabled));
      }
      return accumulator;
    }, []);
  }

  /**
   * Filters the object content by the search criteria.
   * @param {ReactNode} object - The node being filtered.
   * @param {function|undefined} optionFilter - An optional custom filter.
   * @return {array} - An array of filtered content.
   */
  static filter(object, searchValue, optionFilter) {
    return React.Children.toArray(object).reduce((accumulator, option) => {
      if (option.type.isOption && MenuUtil.filterOption(option, searchValue, optionFilter)) {
        accumulator.push(option);
      } else if (option.type.isOptGroup) {
        const children = MenuUtil.filter(option.props.children, searchValue, optionFilter);
        // Ignore groups that do not contain any filtered options.
        if (children.length > 0) {
          accumulator.push(React.cloneElement(option, {}, children));
        }
      }
      return accumulator;
    }, []);
  }

  /**
    * Determines if the option should be included in the filtered set.
    * @param {ReactNode} option - The option being filtered.
    * @param {function|undefined} optionFilter - A custom callback to filter against.
    * @return {boolean} - True if the option should be included in the fitlered set.
   */
  static filterOption(option, searchValue, optionFilter) {
    if (optionFilter) {
      return optionFilter(searchValue, option);
    }
    return MenuUtil.contains(option.props.display, searchValue);
  }

  /**
   * Finds the option matching the requested value.
   * @param {ReactNode} object - The node being flattened.
   * @param {string} value - The value of the target option.
   * @return {ReactNode|undefined} - The option. Returns undefined if not found.
   */
  static findByValue(object, value) {
    return MenuUtil.flatten(object).find(({ props }) => MenuUtil.isEqual(props.value, value));
  }

  /**
   * Finds the option matching the requested display value.
   * @param {ReactNode} object - The node being flattened.
   * @param {string} value - The value of the target option.
   * @return {ReactNode|undefined} - The option. Returns undefined if not found.
   */
  static findByDisplay(object, value) {
    return MenuUtil.flatten(object).find(({ props }) => MenuUtil.isEqual(props.display, value));
  }

  /**
   * Finds the first option in the menu.
   * @param {ReactNode} object - The menu.
   * @return {string|null} - The value of the first option. Null if not found.
   */
  static findFirst(object) {
    const options = MenuUtil.flatten(object, true);

    if (options.length > 0) {
      return options[0].props.value;
    }
    return null;
  }

  /**
   * Finds the first option in the menu.
   * @param {ReactNode} object - The menu.
   * @return {string|null} - The value of the last option. Null if not found.
   */
  static findLast(object) {
    const options = MenuUtil.flatten(object, true);

    if (options.length > 0) {
      return options[options.length - 1].props.value;
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
    const option = MenuUtil.flatten(object, true).find(opt => (
      opt.props.display || '').toLowerCase().startsWith(string.toLowerCase()));
    return option ? option.props.value : null;
  }

  /**
   * Finds the option following the active option.
   * @param {ReactNode} object - The node being flattened.
   * @param {string} value - The value of the active option.
   * @return {string|null} - The value of the next option. Returns null if not found.
   */
  static findNext(object, value) {
    const options = MenuUtil.flatten(object, true);
    const index = options.findIndex(({ props }) => MenuUtil.isEqual(props.value, value));
    return index === -1 ? null : options[Math.min(index + 1, options.length - 1)].props.value;
  }

  /**
   * Finds the option preceding the active option.
   * @param {ReactNode} object - The node being flattened.
   * @param {string} value - The value of the active option.
   * @return {string|null} - The value of the previous option. Returns null if not found.
   */
  static findPrevious(object, value) {
    const options = MenuUtil.flatten(object, true);
    const index = options.findIndex(({ props }) => MenuUtil.isEqual(props.value, value));
    return index === -1 ? null : options[Math.max(index - 1, 0)].props.value;
  }

  /**
   * Determines the appropriate active option.
   * @param {Object} props - The menu props.
   * @param {array} children - The menu children.
   * @param {Object} state - The menu state.
   * @return {string|null} - The active option value. Null if not found.
   */
  static getActiveOptionFromProps(props, children, state) {
    const { active } = state;
    const { searchValue, value } = props;
    const options = MenuUtil.flatten(children, true);

    if (options.length === 0) {
      return null;
    } if (state.searchValue === undefined) {
      const selected = options.find(option => (
        Array.isArray(value) ? MenuUtil.includes(value, option.props.value) : MenuUtil.isEqual(value, option.props.value)
      ));
      return selected === undefined ? options[0].props.value : selected.props.value;
    } if (searchValue !== state.searchValue) {
      return options[0].props.value;
    } if (active !== null && MenuUtil.findByValue(options, active)) {
      return active;
    }
    return options[0].props.value;
  }

  /**
   * Determines if the menu should allow a free text entry.
   * @param {Object} props - The menu props.
   * @param {array} children - The menu children.
   * @return {boolean} - True if a free text entry is allowed.
   */
  static shouldAllowFreeText(props, children) {
    const { searchValue, value, variant } = props;

    if (variant === Variants.TAG || variant === Variants.COMBOBOX) {
      const option = MenuUtil.findByDisplay(children, searchValue);
      const included = Array.isArray(value) ? MenuUtil.includes(value, searchValue) : MenuUtil.isEqual(value, searchValue);
      return !option && !included && (searchValue || '').trim().length > 0;
    }
    return false;
  }

  /**
   * Determines if the menu should show the no results content.
   * @param {Object} props - The menu props.
   * @param {array} children - The menu children.
   * @return {boolean} - True if the no results content should show..
   */
  static shouldShowNoResults(props, children) {
    const { variant } = props;

    if (variant !== Variants.TAG && variant !== Variants.COMBOBOX) {
      return children.length === 0;
    }
    return false;
  }

  /**
   * Determines if the number of selected items has reached the maximum.
   * @param {Object} props - The menu props.
   * @return {boolean} - True if the maximum selection count has reached.
   */
  static isMaxSelectionReached(props) {
    const { maxSelectionCount, value, variant } = props;

    if (maxSelectionCount !== undefined && MenuUtil.allowsMultipleSelections(variant) && Array.isArray(value) && value.length >= maxSelectionCount) {
      return true;
    }

    return false;
  }

  /**
   * Updates the selection state of the all the options in the menu.
   * @param {ReactNode} object - The node being updated.
   * @param {Object} props - The menu props.
   * @return {array} - A cloned copy of the object with the selection state updated.
   */
  static updateSelectionState(object, props) {
    const maxSelectionCountReached = MenuUtil.isMaxSelectionReached(props);

    return React.Children.map(object, (child) => {
      if (child.type.isOption) {
        return React.cloneElement(child, {
          disabled: child.props.disabled || (maxSelectionCountReached && !MenuUtil.isSelected(props.value, child.props.value)),
        });
      } if (child.type.isOptGroup) {
        return React.cloneElement(child, {}, MenuUtil.updateSelectionState(child.props.children, props));
      }
      return child;
    });
  }
}

export default MenuUtil;
