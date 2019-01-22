import React from 'react';
import PropTypes from 'prop-types';
import IconDown from 'terra-icon/lib/icon/IconCaretDown';
import IconUp from 'terra-icon/lib/icon/IconCaretUp';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './TableHeaderCell.module.scss';
import TableUtils from './TableUtils';

const cx = classNames.bind(styles);

const TableHeaderCellMinWidth = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  HUGE: 'huge',
};

const TableHeaderCellSort = {
  ASC: 'asc',
  DESC: 'desc',
};

const propTypes = {
  /**
   * Content to be displayed for the column header
   */
  children: PropTypes.node,
  /**
   * Whether or not row is selectable
   */
  isSelectable: PropTypes.bool,
  /**
   * The associated metaData to be provided in the onSelect callback.
   */
  // eslint-disable-next-line react/forbid-prop-types
  metaData: PropTypes.object,
  /**
   * The minimum width for the column. One of `tiny`, `small`, `medium`, `large`, `huge`.
   */
  minWidth: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Function callback for when the appropriate click or key action is performed.
   * Callback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)
   */
  onSelect: PropTypes.func,
  /**
   * Whether or not data in table is sorted (asc, desc)
   */
  sort: PropTypes.oneOf(['asc', 'desc']),
};

const defaultProps = {
  children: [],
  isSelectable: false,
  minWidth: 'small',
};

const TableHeaderCell = ({
  children,
  isSelectable,
  metaData,
  minWidth,
  onClick,
  onKeyDown,
  onSelect,
  sort,
  ...customProps
}) => {
  const contentClassName = cx([
    'header-cell',
    { 'is-selectable': isSelectable },
    minWidth,
    customProps.className,
  ]);

  let sortIndicator = null;
  if (sort === 'asc') {
    sortIndicator = <span className={cx('sort-indicator')}><IconUp /></span>;
  } else if (sort === 'desc') {
    sortIndicator = <span className={cx('sort-indicator')}><IconDown /></span>;
  }

  const attrSpread = { 'data-sort': sort };
  if (isSelectable) {
    attrSpread.onClick = TableUtils.wrappedOnClickForItem(onClick, onSelect, metaData);
    attrSpread.onKeyDown = TableUtils.wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);
    attrSpread.tabIndex = '0';
  }

  return (
    <th {...customProps} {...attrSpread} data-terra-table-header-cell className={contentClassName}>
      {children}
      {sortIndicator}
    </th>
  );
};

TableHeaderCell.propTypes = propTypes;
TableHeaderCell.defaultProps = defaultProps;

export default TableHeaderCell;
export { TableHeaderCellMinWidth, TableHeaderCellSort };
