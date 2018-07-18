import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import SelectableList from './SelectableList';

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
  /**
   * Whether or not the child list items should have a border color applied.
   */
  isDivided: PropTypes.bool,
  /**
   * A callback event that will be triggered when selection state changes.
   */
  onChange: PropTypes.func,
  /**
   * The maximum number of list items that can be selected.
   */
  maxSelectionCount: PropTypes.number,
};

const defaultProps = {
  children: [],
  isDivided: false,
  onChange: undefined,
  maxSelectionCount: undefined,
};

class MultiSelectList extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = { selectedIndexes: SelectableList.Utils.initialMultiSelectedIndexes(props.children, props.maxSelectionCount) };
  }

  handleOnChange(event, index) {
    const { children, maxSelectionCount } = this.props;
    if (SelectableList.Utils.shouldHandleMultiSelect(children, maxSelectionCount, this.state.selectedIndexes, index)) {
      event.preventDefault();
      const newIndexes = SelectableList.Utils.updatedMultiSelectedIndexes(this.state.selectedIndexes, index);

      this.setState({ selectedIndexes: newIndexes });
      if (this.props.onChange) {
        this.props.onChange(event, newIndexes);
      }
    }
  }

  render() {
    const {
      children, isDivided, onChange, maxSelectionCount, ...customProps
    } = this.props;
    return (
      <SelectableList
        {...customProps}
        isDivided={isDivided}
        onChange={this.handleOnChange}
        selectedIndexes={this.state.selectedIndexes}
        disableUnselectedItems={this.state.selectedIndexes.length >= SelectableList.Utils.validatedMaxCount(children, maxSelectionCount)}
      >
        {children}
      </SelectableList>
    );
  }
}

MultiSelectList.propTypes = propTypes;
MultiSelectList.defaultProps = defaultProps;
MultiSelectList.Item = SelectableList.Item;

export default MultiSelectList;
