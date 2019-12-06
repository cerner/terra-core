import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './HeaderCell.module.scss';
import {
  styleFromWidth,
  wrappedOnClickForItem,
  wrappedOnKeyDownForItem,
  wrappedEventCallback,
} from './utils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content to be displayed for the column header.
   */
  children: PropTypes.node,
  /**
   * The associated metaData to be provided in the onSelect callback.
   */
  // eslint-disable-next-line react/forbid-prop-types
  metaData: PropTypes.object,
  /**
   * Function callback returning the html node for the header cell.
   */
  refCallback: PropTypes.func,
  /**
   * Whether or not the cell's inner containing element responsible for handling table's default padding is removed.
   * This is useful to optimize the DOM for either a table without padding or to optimize a cell whose custom content is providing its own padding.
   */
  removeInner: PropTypes.bool,
  isSortDesc: PropTypes.bool,
  isSortActive: PropTypes.bool,
  onCellAction: PropTypes.func,
  onSortAction: PropTypes.func,
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
  removeInner: false,
  isSortDesc: false,
  isSortActive: false,
};

const HeaderCell = ({
  children,
  isSortDesc,
  isSortActive,
  metaData,
  onBlur,
  onClick,
  onKeyDown,
  onMouseDown,
  onCellAction,
  onSortAction,
  refCallback,
  removeInner,
  width,
  ...customProps
}) => {
  let sortIndicator;
  if (onSortAction || isSortActive) {
    sortIndicator = (
      <div
        key="sort"
        className={cx(
          `sort-indicator-${isSortDesc ? 'desc' : 'asc'}`,
          { 'sort-is-active': isSortActive },
        )}
      />
    );
  }

  const attrSpread = {};
  if (isSortActive) {
    attrSpread['aria-sort'] = isSortDesc ? 'descending' : 'ascending';
  }

  const onAction = onSortAction || onCellAction;
  if (onAction) {
    attrSpread.onClick = wrappedOnClickForItem(onClick, onAction, metaData);
    attrSpread.onKeyDown = wrappedOnKeyDownForItem(onKeyDown, onAction, metaData);
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

  if (!removeInner) {
    content = (
      <div className={cx('container')}>
        {content}
      </div>
    );
  }

  const headerCellClasses = cx(
    'header-cell',
    { 'is-interactable': onAction },
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
