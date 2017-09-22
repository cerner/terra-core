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
    this.shouldHandleSelection = this.shouldHandleSelection.bind(this);
    this.state = { selectedIndexes: SelectableList.Utils.selectedIndexesFromItems(this.props.children, this.validatedMaxCount()) };
  }

  handleOnChange(event, index) {
    if (this.shouldHandleSelection(index)) {
      event.preventDefault();

      let newIndexes = [];
      if (this.state.selectedIndexes.length) {
        if (this.state.selectedIndexes.indexOf(index) >= 0) {
          newIndexes = this.state.selectedIndexes.slice();
          newIndexes.splice(newIndexes.indexOf(index), 1);
        } else {
          newIndexes = this.state.selectedIndexes.concat([index]);
        }
      } else {
        newIndexes.push(index);
      }

      this.setState({ selectedIndexes: newIndexes });
      if (this.props.onChange) {
        this.props.onChange(event, newIndexes);
      }
    }
  }

  shouldHandleSelection(index) {
    if (this.state.selectedIndexes.length < this.validatedMaxCount()) {
      return true;
    }
    if (this.state.selectedIndexes.indexOf(index) >= 0) {
      return true;
    }
    return false;
  }

  validatedMaxCount() {
    if (this.props.maxSelectionCount !== undefined) {
      return this.props.maxSelectionCount;
    }
    return this.props.children.length;
  }

  render() {
    const { children, isDivided, onChange, maxSelectionCount, ...customProps } = this.props;
    return (
      <SelectableList
        {...customProps}
        isDivided={isDivided}
        onChange={this.handleOnChange}
        selectedIndexes={this.state.selectedIndexes}
        disableUnselectedItems={this.state.selectedIndexes.length >= this.validatedMaxCount()}
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
