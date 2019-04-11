import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

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
  /**
   * @private
   * Function to trigger when the onClick has been called on a row. This passes the onclick
   * function as an onclick trigger to the row's child columns.
   */
  onClick: PropTypes.func,
  /**
   * @private
   * Function to trigger when the onKeyDown has been called on a row. This passes the onKeyDown
   * function as an onclick trigger to the row's child columns.
   */
  onKeyDown: PropTypes.func,
  /**
   * @private
   * Id of the helper text identifying a row is selectable. Populates the aria-describedby attribute
   * of the child cells in this row.
   */
  selectRowHelpTextId: PropTypes.string,
};

const defaultProps = {
  isSelected: false,
  isSelectable: undefined,
  onClick: undefined,
  onKeyDown: undefined,
  selectRowHelpTextId: undefined,
};

function cloneChildItems(children, onClick, onKeyDown, selectRowHelpTextId, isSelectable) {
  return React.Children.map(children, (child) => {
    const newProps = {};

    if (onClick) {
      newProps.onClick = onClick;
    }
    if (onKeyDown) {
      newProps.onKeyDown = onKeyDown;
    }

    newProps.isSelectable = isSelectable;

    newProps.selectRowHelpTextId = selectRowHelpTextId;
    return React.cloneElement(child, newProps);
  });
}

const TableRow = ({
  children,
  isSelected,
  isSelectable,
  onClick,
  onKeyDown,
  selectRowHelpTextId,
  ...customProps
}) => {
  const rowClassNames = cx([
    { 'is-selected': isSelected },
    { 'is-selectable': isSelectable },
    'row',
    customProps.className,
  ]);

  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length > 16) {
    // eslint-disable-next-line no-console
    console.log(`Number of Columns are ${React.Children.count(children)}. This is more than columns limit`);
  }

  return (
    <tr {...customProps} onKeyDown={onKeyDown} aria-describedby={isSelectable ? selectRowHelpTextId : undefined} aria-selected={isSelected} className={rowClassNames} role="row">
      {cloneChildItems(children, onClick, onKeyDown, selectRowHelpTextId, isSelectable)}
    </tr>
  );
};

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

export default TableRow;
