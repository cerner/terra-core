import React, { PropTypes } from 'react';
import classNames from 'classnames';
import TableCell from './TableCell';

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node,
  /**
   * Whether or not row is selected
   */
  isSelected: PropTypes.bool,
  /**
   * The maximum height for the row in a table
   */
  height: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Whether or not row is selectable
   */
  isSelectable: PropTypes.bool,
};

const defaultProps = {
  isSelected: false,
};

function cloneChildItems(children, height) {
  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length > 16) {
    // eslint-disable-next-line no-console
    console.log(`Number of Columns are ${React.Children.count(children)}. This is more than columns limit`);
  }
  return childrenArray.filter((child, index) => index < 16).map((child) => {
    if (child.type === TableCell) {
      return React.cloneElement(child, { height });
    }
    return child;
  });
}

const TableRow = ({
  children,
  isSelected,
  isSelectable,
  height,
  ...customProps
  }) => {
  const rowClassNames = classNames([
    { 'terra-Table--isSelected': isSelected },
    { 'terra-Table--isSelectable': isSelectable },
    'terra-Table-row',
    customProps.className,
  ]);

  const cloneChildren = cloneChildItems(children, height);
  return (
    <tr {...customProps} aria-selected={isSelected} className={rowClassNames}>
      {cloneChildren}
    </tr>
  );
};

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

export default TableRow;
