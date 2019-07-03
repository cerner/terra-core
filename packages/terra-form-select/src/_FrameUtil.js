import Variants from './_constants';

class FrameUtil {
  /**
   * Returns the dropdown style.
   * @param {Object} props - The component props.
   * @param {Object} state - The component state.
   * @return {Object} - The dropdown style.
   */
  static dropdownStyle(props, state) {
    const { maxHeight, width } = state;
    return Object.assign({}, Object.assign({}, props).style, { maxHeight, width });
  }

  /**
   * Determines the dropdown position.
   * @param {Object} props - The component props.
   * @param {ReactNode} target - The select wrapper.
   * @param {ReactNode} dropdown - The dropdown.
   * @param {number} maxHeight - The maxHeight of the dropdown dropdown.
   * @return {Object} - The calculated dropdown attributes.
   */
  static dropdownPosition(props, target, dropdown, maxHeight) {
    const style = Object.assign({}, props).style || {};
    const { height } = dropdown.getBoundingClientRect();
    const { bottom, width, top } = target.getBoundingClientRect();

    const spaceBelow = window.innerHeight - bottom;
    const maximumHeight = parseInt(style.maxHeight || maxHeight, 10) || Infinity;
    const canFitBelow = maximumHeight < spaceBelow || height < spaceBelow || spaceBelow > top;
    const availableSpace = canFitBelow ? spaceBelow : top;

    return {
      width,
      maxHeight: Math.min(maximumHeight, availableSpace - 10),
      isAbove: !canFitBelow,
      isPositioned: true,
    };
  }

  /**
   * Determines whether the variant allows multiple selections.
   * @param {Object} variant - The component props.
   * @return {boolean} - True if the variant allows multiple selections.
   */
  static allowsMultipleSelections(props) {
    return props.variant === Variants.MULTIPLE || props.variant === Variants.TAG;
  }

  /**
   * Determines if the query is included in the component value.
   * @param {Object} props - The component props.
   * @param {string} query - The query value.
   * @return {boolean} - True if the query is contained within the component value.
   */
  static includes(props, query) {
    if (query.trim().length === 0) {
      return false;
    }
    return (props.value || []).indexOf(query) > -1;
  }

  /**
   * Determines whether the search input should be hidden.
   * @param {Object} props - The component props;
   * @param {Object} state - The component state;
   * @return {Boolean} - True if the search input should be hidden.
   */
  static shouldHideSearch(props, state) {
    if (FrameUtil.allowsMultipleSelections(props)) {
      return !state.isFocused && props.value && props.value.length > 0;
    }
    return false;
  }

  /**
   * Determines whether the dropdown should be positioned.
   * @param {Object} previousState - The previous component state.
   * @param {Object} currentState - The current component state.
   * @param {ReactNode} dropdown - The component dropdown.
   * @return {boolean} - True if the dropdown should be positioned.
   */
  static shouldPositionDropdown(previousState, currentState, dropdown) {
    if (!currentState.isOpen) {
      return false;
    }

    const { bottom } = dropdown.getBoundingClientRect();
    return previousState.isOpen === false || bottom > window.innerHeight;
  }

  /**
   * Determines whether the option should be added on blur.
   * @param {Object} props - The component props.
   * @param {Object} state - The component state;
   * @return {boolean} - True if the option should be added.
   */
  static shouldAddOptionOnBlur(props, state) {
    const { onSelect, value, variant } = props;
    const { hasSearchChanged, searchValue } = state;

    if ((variant === Variants.TAG || variant === Variants.COMBOBOX)
        && (variant !== Variants.TAG || searchValue.trim().length > 0)
        && hasSearchChanged
        && onSelect
        && (variant !== Variants.TAG || !FrameUtil.includes(props, searchValue))
        && (variant !== Variants.COMBOBOX || value !== searchValue)) {
      return true;
    }
    return false;
  }

  /**
   * Determines the variant appropriate container tab index.
   * @param {Object} props - The component props.
   * @return {string} - A tab index.
   */
  static tabIndex(props) {
    if (props.variant === Variants.DEFAULT && !props.disabled) {
      return '0';
    }
    return '-1';
  }
}

export default FrameUtil;
