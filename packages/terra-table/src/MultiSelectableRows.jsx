import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import SelectableTableRows from './SelectableTableRows';

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node,
  /**
   * A callback function triggered when a row is selected or unselected. Passes the following parameters:
   * <ul>
   *   <li>the event triggering the onChange</li>
   *   <li>the list of the indexes for the rows selected</li>
   *   <li>the index of the last item selected</li>
   * </ul>
   */
  onChange: PropTypes.func,
  /**
   * The maximum number of rows that can be selected.
   */
  maxSelectionCount: PropTypes.number,
};

const defaultProps = {
  onChange: undefined,
  maxSelectionCount: undefined,
};

class MultiSelectableRows extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndexes: SelectableTableRows.Utils.initialMultiSelectRowIndexes(this.props.children,
        this.props.maxSelectionCount),
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event, index) {
    const { children, maxSelectionCount } = this.props;
    const {
      shouldHandleMultiSelectRowSelection,
      updatedMultiSelectedIndexes,
    } = SelectableTableRows.Utils;

    // Check if the selectedIndexes state should update before updating
    if (shouldHandleMultiSelectRowSelection(children, maxSelectionCount, this.state.selectedIndexes, index)) {
      event.preventDefault();
      const newIndexes = updatedMultiSelectedIndexes(this.state.selectedIndexes, index);

      this.setState({ selectedIndexes: newIndexes });
      if (this.props.onChange) {
        this.props.onChange(event, newIndexes, index);
      }
    }
  }

  render() {
    const { children, maxSelectionCount, onChange, ...customProps } = this.props;

    return (
      <SelectableTableRows
        {...customProps}
        onChange={this.handleOnChange}
        selectedIndexes={this.state.selectedIndexes}
        disableUnselectedRows={this.state.selectedIndexes.length >= SelectableTableRows.Utils.validatedMaxCountSelection(children, maxSelectionCount)}
      >
        {children}
      </SelectableTableRows>
    );
  }
}

MultiSelectableRows.propTypes = propTypes;
MultiSelectableRows.defaultProps = defaultProps;
MultiSelectableRows.Row = SelectableTableRows.Row;

export default MultiSelectableRows;
