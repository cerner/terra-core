import React, { PropTypes } from 'react';
import classNames from 'classnames';

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
   * Whether or not row is selectable
   */
  isSelectable: PropTypes.bool,
};

const defaultProps = {
  isSelected: false,
};

const TableRow = ({
  children,
  isSelected,
  isSelectable,
  ...customProps
  }) => {
  const rowClassNames = classNames([
    { 'terra-Table--isSelected': isSelected },
    { 'terra-Table--isSelectable': isSelectable },
    'terra-Table-row',
    customProps.className,
  ]);

  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length > 16) {
    // eslint-disable-next-line no-console
    console.log(`Number of Columns are ${React.Children.count(children)}. This is more than columns limit`);
  }

  return (
    <tr {...customProps} aria-selected={isSelected} className={rowClassNames}>
      {children}
    </tr>
  );
};

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

export default TableRow;
