import React from 'react';
import Variants from './_constants';
import MenuUtil from './_MenuUtil';

class SelectUtil {
  /**
   * Determines the default value of the select.
   * @param {Object} props - The component props.
   * @return {array|number|string|null} - The default value. Returns null for controlled components.
   */
  static defaultValue(props) {
    const { defaultValue, value } = props;

    if (value !== undefined) {
      return null;
    } if (SelectUtil.allowsMultipleSelections(props)) {
      // Flatten allows converting a string default into an array.
      return defaultValue ? [defaultValue].flatten() : [];
    }
    return (props.defaultValue !== undefined && props.defaultValue !== null) ? props.defaultValue : '';
  }

  /**
   * Determines the value resulting from the removal of an option.
   * @param {Object} props - The component props.
   * @param {Object} state - The component state.
   * @param {number|string} value - The value to be removed.
   * @return {array} - The value resulting from the removal of an option.
   */
  static deselect(props, state, value) {
    return SelectUtil.value(props, state).filter(option => option !== value);
  }

  /**
   * Finds the option matching the requested value.
   * @param {Object} props - The component props.
   * @param {Object} state - The component state.
   * @param {string} value - The option value.
   * @return {ReactNode|undefined} - The option. Returns undefined if not found.
   */
  static findByValue(props, state, value) {
    return MenuUtil.findByValue(props.children, value) || MenuUtil.findByValue(state.tags, value);
  }

  /**
   * Determines whether the variant allows multiple selections.
   * @param {Object} props - The component props.
   * @return {boolean} - True if the variant allows multiple selections.
   */
  static allowsMultipleSelections(props) {
    return props.variant === Variants.MULTIPLE || props.variant === Variants.TAG;
  }

  /**
   * Determines the value resulting from the selection of an option.
   * @param {Object} props - The component props.
   * @param {Object} state - The component state.
   * @param {number|string} value - The selected option value.
   * @return {array|number|string} - The value resulting from the selection of an option
   */
  static select(props, state, value) {
    if (SelectUtil.allowsMultipleSelections(props)) {
      return [...SelectUtil.value(props, state), value];
    }
    return value;
  }

  /**
   * Determines the controlled or uncontrolled value of the select.
   * @param {Object} props - The component props.
   * @param {Object} state - The component state.
   * @return {array|number|string|null} - The select value.
   */
  static value(props, state) {
    return props.value === undefined ? state.value : props.value;
  }

  /**
   * Determines the display of the value.
   * @param {Object} props - The component props.
   * @param {string|number} value - The option value.
   * @return {string} - The display of the option.
   */
  static valueDisplay(props, value) {
    const option = MenuUtil.findByValue(props.children, value);
    return option ? option.props.display : value;
  }

  /**
   * Parses options in Select and return total number of options
   * @param {React Children} children
   * @return {number} - Number of total Options
   */
  static getTotalNumberOfOptions(children) {
    let totalNumberOfOptions = 0;

    React.Children.forEach(children, (child) => {
      if (child.type.isOption) {
        totalNumberOfOptions += 1;
      }

      if (child.type.isOptGroup) {
        React.Children.forEach(child.props.children, (grandChild) => {
          if (grandChild.type.isOption) {
            totalNumberOfOptions += 1;
          }
        });
      }
    });

    return totalNumberOfOptions;
  }
}

export default SelectUtil;
