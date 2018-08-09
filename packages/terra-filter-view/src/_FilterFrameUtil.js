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
   * @param {Object} state - The component state.
   * @param {ReactNode} target - The select wrapper.
   * @param {ReactNode} dropdown - The dropdown.
   * @return {Object} - The calculated dropdown attributes.
   */
  static dropdownPosition(props, state, target, dropdown) {
    const style = Object.assign({}, props).style || {};
    const { height } = dropdown.getBoundingClientRect();
    const { bottom, width, top } = target.getBoundingClientRect();

    const spaceBelow = window.innerHeight - bottom;
    const maxHeight = style.maxHeight ? parseInt(style.maxHeight, 10) : Infinity;
    const canFitBelow = maxHeight < spaceBelow || height < spaceBelow || spaceBelow > top;
    const availableSpace = canFitBelow ? spaceBelow : top;

    return {
      width,
      maxHeight: Math.min(maxHeight, availableSpace - 10),
      isAbove: !canFitBelow,
      isPositioned: true,
    };
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
}

export default FrameUtil;
