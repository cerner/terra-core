import React from 'react';
import PropTypes from 'prop-types';
import KeyCode from 'keycode-js';
import TableRows from './TableRows';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import TableSubheader from './TableSubheader';
import SelectableUtils from './SelectableUtils';

const propTypes = {
  /**
   * The children rows to be be passed to the component.
   */
  children: PropTypes.node,
  /**
   * Indicates if the unselected rows are disabled. This is helpful for enabling max row selection.
   */
  disableUnselectedRows: PropTypes.bool,
  /**
   * A callback function to execute when the selection state changes. The first parameter is the event. The second parameter is the selectedIndexes.
   */
  onChange: PropTypes.func,
  /**
   * A callback function to execute when the selected row loses focus. The first parameter is the event. The second parameter is the index of the row losing focus.
   */
  onBlur: PropTypes.func,
  /**
   * The list of selected row indexes.
   */
  // eslint-disable-next-line react/forbid-prop-types
  selectedIndexes: PropTypes.array,
};

const defaultProps = {
  disableUnselectedRows: false,
  onChange: undefined,
  onBlur: undefined,
  selectedIndexes: [],
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  },
};

class SelectableTableRows extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleOnChange(event, index) {
    if (this.props.onChange) {
      this.props.onChange(event, index);
    }

    const selectedRow = event.currentTarget;
    if (!selectedRow.hasAttribute('aria-label')) {
      // Aria-Label is being populated with the cell contents for screen reader to read it as whole instead of cell value.
      let ariaLabel = this.context.intl.formatMessage({ id: 'Terra.table.selectabletablerows.selectedRow' });
      const cellCount = selectedRow.children.length;
      for (let columnIndex = 0; columnIndex < cellCount; columnIndex += 1) {
        ariaLabel += ` ${selectedRow.children[columnIndex].innerText}`;
      }
      event.currentTarget.setAttribute('aria-label', ariaLabel);
    }
  }

  handleOnBlur(event, index) {
    if (this.props.onBlur) {
      this.props.onBlur(event, index);
    }

    const selectedRow = event.currentTarget;
    if (selectedRow.getAttributeNode('aria-selected').value === 'false') {
      if (selectedRow.hasAttribute('aria-label')) {
        selectedRow.removeAttribute('aria-label');
      }
    }
  }

  wrappedOnBlur(row, index) {
    const initialOnBlur = row.props.onBlur;
    // removes aria-label from unselected row
    return (event) => {
      if (row.props.isSelectable !== false) {
        this.handleOnBlur(event, index);
      }

      if (initialOnBlur) {
        initialOnBlur(event);
      }
    };
  }

  wrappedOnClickForRow(row, index) {
    const initialOnClick = row.props.onClick;
    return (event) => {
      // The default isSelectable attribute is either undefined or true, unless the consumer specifies the row's isSelectable attribute as false.
      if (row.props.isSelectable !== false) {
        this.handleOnChange(event, index);
      }

      if (initialOnClick) {
        initialOnClick(event);
      }
    };
  }

  wrappedOnKeyDownForRow(row, index) {
    const initialOnKeyDown = row.props.onKeyDown;

    return (event) => {
      if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
        // The default isSelectable attribute is either undefined or true, unless the consumer specifies the row's isSelectable attribute as false.
        if (row.props.isSelectable !== false) {
          this.handleOnChange(event, index);
        }
      }

      if (initialOnKeyDown) {
        initialOnKeyDown(event);
      }
    };
  }

  newPropsForRow(row, index, onClick, onKeyDown, onBlur) {
    const isSelected = this.props.selectedIndexes.indexOf(index) >= 0;
    const newProps = { };
    // Set the isSelected attribute to false for all the rows except the rows whose index is set to state selectedIndex.
    if ((isSelected) || (row.props.isSelected)) {
      newProps.isSelected = isSelected;
    }

    // Set the default isSelectable attribute to true, unless the consumer specifies the row isSelectable as false.
    newProps.isSelectable = true;
    if (row.props.isSelectable === false) {
      newProps.isSelectable = row.props.isSelectable;
    }

    if (this.props.disableUnselectedRows && !isSelected) {
      newProps.isSelectable = false;
    }

    // If selectable, add tabIndex on rows to navigate through keyboard tab key for selectable row and add
    // onClick, onKeyDown and onBlur functions.
    if (newProps.isSelectable) {
      newProps.tabIndex = '0';
      newProps.onClick = onClick;
      newProps.onKeyDown = onKeyDown;
      newProps.onBlur = onBlur;
    }

    return newProps;
  }

  clonedChildItems(rows) {
    return React.Children.map(rows, (row, index) => {
      if (row.type !== TableHeader && row.type !== TableSubheader) {
        const wrappedOnClick = this.wrappedOnClickForRow(row, index);
        const wrappedOnKeyDown = this.wrappedOnKeyDownForRow(row, index);
        const wrappedOnBlur = this.wrappedOnBlur(row, index);
        const newProps = this.newPropsForRow(row, index, wrappedOnClick, wrappedOnKeyDown, wrappedOnBlur);
        if (newProps.isSelected) {
          let ariaLabel = this.context.intl.formatMessage({ id: 'Terra.table.selectabletablerows.selectedRow' }); // 'Row Selected';
          const cells = row.props.children;
          const cellCount = cells.length;
          for (let columnIndex = 0; columnIndex < cellCount; columnIndex += 1) {
            ariaLabel += ` ${cells[columnIndex].props.content}`;
          }
          return React.cloneElement(row, { ...newProps, 'aria-label': `${ariaLabel}` });
        }

        return React.cloneElement(row, newProps);
      }
      return row;
    });
  }

  render() {
    const {
      children, disableUnselectedRows, onChange, onBlur, selectedIndexes, ...customProps
    } = this.props;
    const clonedChildItems = this.clonedChildItems(children);
    return (
      <TableRows {...customProps}>
        {clonedChildItems}
      </TableRows>
    );
  }
}

SelectableTableRows.propTypes = propTypes;
SelectableTableRows.defaultProps = defaultProps;
SelectableTableRows.Row = TableRow;
SelectableTableRows.Utils = SelectableUtils;
SelectableTableRows.contextTypes = contextTypes;

export default SelectableTableRows;
