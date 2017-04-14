import React, { PropTypes } from 'react';
import TableRows from './TableRows';

const KEYCODES = {
  ENTER: 13,
};

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node,
  /**
   * The maximum height for all the rows in a table
   */
  height: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * A callback function for onClick action
   */
  onClick: PropTypes.func,
  /**
  * A callback function for onKeyDown action for tab key
  */
  onKeyDown: PropTypes.func,
};

const defaultProps = {
  onClick: undefined,
  onKeyDown: undefined,
};

class SingleSelectableRows extends React.Component {
  static selectedRowIndex(rows) {
    // Find the first row which is selected and is selectable
    for (let i = 0; i < rows.length; i += 1) {
      if (rows[i].props.isSelected === true && rows[i].props.isSelectable !== false) {
        return i;
      }
    }
    return -1;
  }

  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
    this.shouldHandleSelection = this.shouldHandleSelection.bind(this);
    this.state = { selectedIndex: SingleSelectableRows.selectedRowIndex(this.props.children) };
  }

  handleSelection(event, index) {
    this.setState({ selectedIndex: index });
  }

  shouldHandleSelection(index) {
    return index !== this.state.selectedIndex;
  }

  wrappedOnClickForRow(row, index) {
    const initialOnClick = this.props.onClick;

    return (event) => {
      if (row.props.isSelectable !== false && this.shouldHandleSelection(index)) {
        this.handleSelection(event, index);
      }

      if (initialOnClick) {
        initialOnClick(event);
      }
    };
  }

  wrappedOnKeyDownForRow(row, index) {
    const initialOnKeyDown = this.props.onKeyDown;

    return (event) => {
      if (event.nativeEvent.keyCode === KEYCODES.ENTER) {
        if (row.props.isSelectable !== false && this.shouldHandleSelection(index)) {
          this.handleSelection(event, index);
        }
      }

      if (initialOnKeyDown) {
        initialOnKeyDown(event);
      }
    };
  }

  newPropsForRow(row, index, onClick, onKeyDown) {
    const isSelected = this.state.selectedIndex === index;

    const newProps = { onClick, onKeyDown };

    // set the isSelected attribute to false for all the rows except the row whose index is set to state selectedIndex
    // This will ensure that only one row will be selected at a moment of time.
    if (isSelected !== row.props.isSelected) {
      newProps.isSelected = isSelected;
    }

    const isSelectable = row.props.isSelectable;
    // By default isSelectable attribute for the TableRow is undefined, as this is selectable table,
    // we will make row selectable by default. If consumer specify the row attribute isSelectable as false,
    // then row will not be selectable
    if (isSelectable === undefined) {
      newProps.isSelectable = true;
    }

    // Add tabIndex on rows to navigate through keyboard tab key for selectable row
    if (newProps.isSelectable || isSelectable) {
      newProps.tabIndex = '0';
    }

    return newProps;
  }

  clonedChildItems(rows) {
    return rows.map((row, index) => {
      const wrappedOnClick = this.wrappedOnClickForRow(row, index);
      const wrappedOnKeyDown = this.wrappedOnKeyDownForRow(row, index);
      const newProps = this.newPropsForRow(row, index, wrappedOnClick, wrappedOnKeyDown);
      return React.cloneElement(row, newProps);
    });
  }

  render() {
    const { children, height, ...customProps } = this.props;
    const clonedChilItems = this.clonedChildItems(children);
    if ('onClick' in customProps) {
      delete customProps.onClick;
    }
    if ('onKeyDown' in customProps) {
      delete customProps.onKeyDown;
    }
    return (
      <TableRows height={height} {...customProps}>
        {clonedChilItems}
      </TableRows>
    );
  }

}

SingleSelectableRows.propTypes = propTypes;
SingleSelectableRows.defaultProps = defaultProps;

export default SingleSelectableRows;
