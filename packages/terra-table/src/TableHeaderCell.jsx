import React from 'react';
import PropTypes from 'prop-types';
import IconDown from 'terra-icon/lib/icon/IconCaretDown';
import IconUp from 'terra-icon/lib/icon/IconCaretUp';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './TableHeaderCell.module.scss';
import TableUtils from './TableUtils';

const cx = classNames.bind(styles);

const ariaSortMap = {
  asc: 'ascending',
  desc: 'descending',
  none: 'none',
};

const propTypes = {
  /**
   * Content to be displayed for the column header
   */
  children: PropTypes.node,
  /**
   * Whether or not header cell should appear as a selectable element..
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
   * Function callback for the ref of the th.
   */
  refCallback: PropTypes.func,
  /**
   * Whether or not data in table is sorted (none, asc, desc)
   */
  sort: PropTypes.oneOf(['none', 'asc', 'desc']),
};

const defaultProps = {
  children: [],
  isSelectable: false,
  minWidth: 'small',
  sort: 'none',
};

const TableHeaderCell = ({
  children,
  isSelectable,
  metaData,
  minWidth,
  onClick,
  onKeyDown,
  onSelect,
  refCallback,
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

  const attrSpread = { 'aria-sort': ariaSortMap[sort] };
  if (isSelectable) {
    attrSpread.onClick = TableUtils.wrappedOnClickForItem(onClick, onSelect, metaData);
    attrSpread.onKeyDown = TableUtils.wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);
    attrSpread.tabIndex = '0';
  }

  return (
    <th {...customProps} {...attrSpread} data-terra-table-header-cell className={contentClassName} ref={refCallback} role="columnheader">
      {children}
      {sortIndicator}
    </th>
  );
};

TableHeaderCell.propTypes = propTypes;
TableHeaderCell.defaultProps = defaultProps;

export default TableHeaderCell;
