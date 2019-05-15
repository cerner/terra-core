import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import TableSubheader from './TableSubheader';

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node,
  /**
   * A callback function for onClick action
   */
  onClick: PropTypes.func,
  /**
   * A callback function for onKeyDown action
   */
  onKeyDown: PropTypes.func,
  /**
   * @private
   * Id of the helper text identifying a row is selectable. Populates the aria-describedby attribute
   * of a child row.
   */
  selectableRowHelpTextId: PropTypes.string,
  /**
   * @private
   * Id of the helper text identifying a row is selected. Populates the aria-describedby attribute
   * of a child row.
   */
  selectedRowHelpTextId: PropTypes.string,
};

const defaultProps = {
  onClick: undefined,
  onKeyDown: undefined,
  selectableRowHelpTextId: undefined,
  selectedRowHelpTextId: undefined,
};

function cloneChildItems(children, onClick, onKeyDown, numberOfCols, selectableRowHelpTextId, selectedRowHelpTextId) {
  return React.Children.map(children, (child) => {
    const newProps = {};
    if (onClick) {
      newProps.onClick = onClick;
    }
    if (onKeyDown) {
      newProps.onKeyDown = onKeyDown;
    }

    if (selectableRowHelpTextId) {
      newProps.selectableRowHelpTextId = selectableRowHelpTextId;
    }

    if (selectedRowHelpTextId) {
      newProps.selectedRowHelpTextId = selectedRowHelpTextId;
    }

    if (child.type === TableRow) {
      return React.cloneElement(child, newProps);
    }
    if (child.type === TableSubheader) {
      return React.cloneElement(child, { colSpan: numberOfCols });
    }
    return child;
  });
}

function getNumberOfColumns(children) {
  let count = 0;
  const childArray = React.Children.toArray(children);
  for (let i = 0; i < childArray.length; i += 1) {
    // If the child is a TableRow and it has children, then return the count of the TableRow's children.
    // Assumptions: Number of children will be equal to number of columns. Children of TableRow should be TableCell
    if (childArray[i].type === TableRow && childArray[i].props.children !== null) {
      count = React.Children.count(childArray[i].props.children);
      return count >= 16 ? 16 : count;
    }
  }
  return count;
}

const TableRows = ({
  children,
  onClick,
  onKeyDown,
  selectableRowHelpTextId,
  selectedRowHelpTextId,
  ...customProps
}) => {
  const numberOfCols = getNumberOfColumns(children);
  const cloneChildren = cloneChildItems(children, onClick, onKeyDown, numberOfCols, selectableRowHelpTextId, selectedRowHelpTextId);
  return (
    <tbody {...customProps}>
      {cloneChildren}
    </tbody>
  );
};

TableRows.propTypes = propTypes;
TableRows.defaultProps = defaultProps;

export default TableRows;
