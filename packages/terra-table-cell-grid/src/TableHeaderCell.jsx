import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
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
   * Content to be displayed for the column header.
   */
  children: PropTypes.node,
  /**
   * Start aligned icon of the header cell.
   */
  icon: PropTypes.element,
  /**
   * Whether or not the cell should adhere to the tables paddingStyle.
   */
  isPadded: PropTypes.bool,
  /**
   * Whether or not header cell should appear as a selectable element.
   */
  isSelectable: PropTypes.bool,
  /**
   * The associated metaData to be provided in the onSelect callback.
   */
  // eslint-disable-next-line react/forbid-prop-types
  metaData: PropTypes.object,
  /**
   * Function callback for when the appropriate click or key action is performed.
   * Callback contains the javascript event and prop metadata, e.g. onSelect(event, metaData)
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
  /**
   * String-formatted width that the HeaderCell should be rendered as. Any valid css width value is supported (i.e. 200px, 3rem).
   */
  width: PropTypes.shape({
    static: PropTypes.shape({
      value: PropTypes.number,
      unit: PropTypes.string,
    }),
    percentage: PropTypes.number,
    scalar: PropTypes.number,
  }),
  /**
   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.
   */
  onBlur: PropTypes.func,
  /**
   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.
   */
  onClick: PropTypes.func,
  /**
   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.
   */
  onKeyDown: PropTypes.func,
  /**
   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.
   */
  onMouseDown: PropTypes.func,
};

const defaultProps = {
  children: [],
  isSelectable: false,
  sort: 'none',
};

const TableHeaderCell = ({
  children,
  icon,
  isPadded,
  isSelectable,
  metaData,
  onBlur,
  onClick,
  onKeyDown,
  onMouseDown,
  onSelect,
  refCallback,
  sort,
  width,
  ...customProps
}) => {
  const contentClassName = cx([
    'header-cell',
    { 'is-selectable': isSelectable },
    { 'is-sortable': sort === 'asc' || sort === 'desc' },
    customProps.className,
  ]);

  let sortIndicator;
  if (sort !== 'none') {
    sortIndicator = <div className={cx(`sort-indicator-${sort}`)} key="sort" />;
  }

  let headerIcon;
  if (icon) {
    headerIcon = <div className={cx('cell-icon')} key="icon">{icon}</div>;
  }

  const attrSpread = { 'aria-sort': ariaSortMap[sort] };
  if (isSelectable) {
    attrSpread.onClick = TableUtils.wrappedOnClickForItem(onClick, onSelect, metaData);
    attrSpread.onKeyDown = TableUtils.wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);
    attrSpread.tabIndex = '0';
    attrSpread['data-header-show-focus'] = 'true';
    attrSpread.onBlur = TableUtils.wrappedEventCallback(onBlur, event => event.currentTarget.setAttribute('data-header-show-focus', 'true'));
    attrSpread.onMouseDown = TableUtils.wrappedEventCallback(onMouseDown, event => event.currentTarget.setAttribute('data-header-show-focus', 'false'));
  }

  let content = [
    headerIcon,
    <div className={cx('cell-content')} key="content">
      {children}
    </div>,
    sortIndicator,
  ];

  if (isPadded) {
    content = (
      <div className={cx('container')}>
        {content}
      </div>
    );
  }

  return (
    <div
      {...customProps}
      {...attrSpread}
      style={TableUtils.styleFromWidth(width)} // eslint-disable-line react/forbid-dom-props
      className={contentClassName}
      ref={refCallback}
      role="columnheader"
    >
      {content}
    </div>
  );
};

TableHeaderCell.propTypes = propTypes;
TableHeaderCell.defaultProps = defaultProps;

export default TableHeaderCell;
