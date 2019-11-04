import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './HeaderCell.module.scss';
import {
  styleFromWidth,
  wrappedOnClickForItem,
  wrappedOnKeyDownForItem,
  wrappedEventCallback,
} from './TableUtils';

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
   * Function callback returning the html node for the header cell.
   */
  refCallback: PropTypes.func,
  /**
   * Whether or not the cell's container responsible for using the table's default padding is removed.
   * This is useful to optimize the DOM for either a table without padding or to optimize a cell whose content is providing its own padding.
   */
  removePadding: PropTypes.bool,
  /**
   * Whether or not data in table is sorted (`'none'`, `'asc'`, `'desc'`)
   */
  sort: PropTypes.oneOf(['none', 'asc', 'desc']),
  /**
   * Width of the header cell. Should match row cell counter-part.
   */
  width: PropTypes.shape({
    /**
     * Static width that for the cell.
     */
    static: PropTypes.shape({
      /**
       * Numerical width value.
       */
      value: PropTypes.number.isRequired,
      /**
       * Valid css units are supported (i.e. 'px', 'rem', etc).
       */
      unit: PropTypes.string.isRequired,
    }),
    /**
     * Percentage width of the row for the header cell.
     */
    percentage: PropTypes.number,
    /**
     * Relative scalar value of the cell's width compared to its sibling cells.
     */
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
  removePadding: false,
  sort: 'none',
};

const HeaderCell = ({
  children,
  isSelectable,
  metaData,
  onBlur,
  onClick,
  onKeyDown,
  onMouseDown,
  onSelect,
  refCallback,
  removePadding,
  sort,
  width,
  ...customProps
}) => {
  let sortIndicator;
  if (sort !== 'none') {
    sortIndicator = <div className={cx(`sort-indicator-${sort}`)} key="sort" />;
  }

  const attrSpread = { 'aria-sort': ariaSortMap[sort] };
  if (isSelectable) {
    attrSpread.onClick = wrappedOnClickForItem(onClick, onSelect, metaData);
    attrSpread.onKeyDown = wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);
    attrSpread.tabIndex = '0';
    attrSpread['data-header-show-focus'] = 'true';
    attrSpread.onBlur = wrappedEventCallback(onBlur, event => event.currentTarget.setAttribute('data-header-show-focus', 'true'));
    attrSpread.onMouseDown = wrappedEventCallback(onMouseDown, event => event.currentTarget.setAttribute('data-header-show-focus', 'false'));
    attrSpread['aria-selected'] = false;
  }

  let content = [
    <div className={cx('cell-content')} key="content">
      {children}
    </div>,
    sortIndicator,
  ];

  if (!removePadding) {
    content = (
      <div className={cx('container')}>
        {content}
      </div>
    );
  }

  const headerCellClasses = cx(
    'header-cell',
    { 'is-selectable': isSelectable },
    { 'is-sortable': sort === 'asc' || sort === 'desc' },
  );

  return (
    <div
      {...customProps}
      {...attrSpread}
      style={styleFromWidth(width)} // eslint-disable-line react/forbid-dom-props
      className={customProps.className ? `${headerCellClasses} ${customProps.className}` : headerCellClasses}
      ref={refCallback}
      role="columnheader"
    >
      {content}
    </div>
  );
};

HeaderCell.propTypes = propTypes;
HeaderCell.defaultProps = defaultProps;

export default HeaderCell;
