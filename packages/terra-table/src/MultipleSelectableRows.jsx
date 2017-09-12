import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import TableRows from './TableRows';
import TableRow from './TableRow';

const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
};

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node,
  /**
   * A callback function for onChange action. Has the following parameters:
   * <ul>
   *   <li>the event triggering the onChange</li>
   *   <li>the sorted list of the indexes for the rows selected</li>
   *   <li>the index of the last item selected</li>
   * </ul>
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  onChange: undefined,
};

class MultipleSelectableRows extends React.Component {
  static selectedRowIndexes(rows) {
    if (!rows || !rows.length) {
      return [];
    }

    // Find the rows which are selected and are selectable
    const selectedIndexes = [];
    for (let i = 0; i < rows.length; i += 1) {
      if (rows[i].props.isSelected) {
        selectedIndexes.push(i);
      }
    }
    return selectedIndexes;
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedIndexes: MultipleSelectableRows.selectedRowIndexes(this.props.children),
    };
  }

  handleOnChange(event, index) {
    return () => {
      if (this.props.onChange) {
        const selectedIndexes = this.state.selectedIndexes.sort();
        this.props.onChange(event, selectedIndexes, index);
      }
    };
  }

  updateSelectedIndexes(index, postStateChangeCallback) {
    if (!this.state.selectedIndexes.includes(index)) {
      this.setState({
        selectedIndexes: [...this.state.selectedIndexes, index],
      }, postStateChangeCallback);
    } else {
      const indexToSlice = this.state.selectedIndexes.indexOf(index);
      this.setState({
        selectedIndexes: [
          ...this.state.selectedIndexes.slice(0, indexToSlice),
          ...this.state.selectedIndexes.slice(indexToSlice + 1),
        ],
      }, postStateChangeCallback);
    }
  }

  wrappedOnClickForRow(row, index) {
    return (event) => {
      event.preventDefault();
      const handleOnChange = this.handleOnChange(event, index);
      this.updateSelectedIndexes(index, handleOnChange);
    };
  }

  wrappedOnKeyDownForRow(row, index) {
    const initialOnKeyDown = row.props.onKeyDown;

    return (event) => {
      if (event.nativeEvent.keyCode === KEYCODES.ENTER || event.nativeEvent.keyCode === KEYCODES.SPACE) {
        const handleOnChange = this.handleOnChange(event, index);
        this.updateSelectedIndexes(index, handleOnChange);
      }

      if (initialOnKeyDown) {
        initialOnKeyDown(event);
      }
    };
  }

  newPropsForRow(row, index, onClick, onKeyDown) {
    const isSelected = this.state.selectedIndexes.indexOf(index) !== -1;
    const newProps = {};

    newProps.isSelected = isSelected;

    // Set the default isSelectable attribute to true, unless the consumer specifies the row isSelectable as false.
    newProps.isSelectable = true;
    if (row.props.isSelectable === false) {
      newProps.isSelectable = row.props.isSelectable;
    }

    // If selectable, add tabIndex on rows to navigate through keyboard tab key for selectable row and add
    // onClick and onKeyDown functions.
    if (newProps.isSelectable) {
      newProps.tabIndex = '0';
      newProps.onClick = onClick;
      newProps.onKeyDown = onKeyDown;
    }

    return newProps;
  }

  clonedChildItems(rows) {
    return React.Children.map(rows, (row, index) => {
      if (row.type === TableRow) {
        const wrappedOnClick = this.wrappedOnClickForRow(row, index);
        const wrappedOnKeyDown = this.wrappedOnKeyDownForRow(row, index);
        const newProps = this.newPropsForRow(row, index, wrappedOnClick, wrappedOnKeyDown);
        return React.cloneElement(row, newProps);
      }
      return row;
    });
  }

  render() {
    const { children, onChange, ...customProps } = this.props;
    const clonedChildItems = this.clonedChildItems(children);

    return (
      <TableRows {...customProps}>
        {clonedChildItems}
      </TableRows>
    );
  }
}

MultipleSelectableRows.propTypes = propTypes;
MultipleSelectableRows.defaultProps = defaultProps;

export default MultipleSelectableRows;
