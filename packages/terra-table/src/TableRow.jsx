import React, { PropTypes } from 'react';
import classNames from 'classnames';
import TableRowContent from './TableRowContent';

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
   * A callback function for onClick action
   */
  onClick: PropTypes.func,
  /**
   * Whether or not row is selectable
   */
  isSelectable: PropTypes.bool,
  /**
   * A classname to put on row component of table
   */
  className: PropTypes.string,
};

const defaultProps = {
  isSelected: false,
  isSelectable: undefined,
  className: '',
};

function cloneChildItems(children, height, onClick) {
  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length > 16) {
    console.log(`Number of Columns are ${React.Children.count(children)}. This is more than columns limit`);
  }
  return childrenArray.filter((child, index) => index < 16).map((child) => {
    if (child.type === TableRowContent) {
      return React.cloneElement(child, { height, onClick });
    }
    return child;
  });
}

const TableRow = ({
  className,
  children,
  isSelected,
  isSelectable,
  height,
  onClick,
  ...customProps
  }) => {
  const rowClassNames = classNames([
    { 'terra-Table--isSelected': isSelected },
    { 'terra-Table--isSelectable': isSelectable },
    className,
  ]);

  const cloneChildren = cloneChildItems(children, height, onClick);
  return (
    <tr className={rowClassNames} {...customProps}>
      {cloneChildren}
    </tr>
  );
};

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

export default TableRow;
