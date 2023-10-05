import React, { useContext, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import * as KeyCode from 'keycode-js';
import classNames from 'classnames/bind';

import ThemeContext from 'terra-theme-context';
import IconUp from 'terra-icon/lib/icon/IconUp';
import IconDown from 'terra-icon/lib/icon/IconDown';
import IconError from 'terra-icon/lib/icon/IconError';

import ColumnResizeHandle from './ColumnResizeHandle';
import { SortIndicators } from '../proptypes/columnShape';
import ColumnContext from '../utils/ColumnContext';
import styles from './ColumnHeaderCell.module.scss';
import GridContext from '../utils/GridContext';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Required string representing a unique identifier for the column header cell.
   */
  id: PropTypes.string.isRequired,

  /**
   * String of text to render within the column header cell.
   */
  displayName: PropTypes.string,

  /**
   * A string indicating which sorting indicator should be rendered. If not provided, no sorting indicator will be rendered.
   * If a `component` value is specified, `sortIndicator` will be ignored. One of `ascending`, `descending`.
   */
  sortIndicator: PropTypes.oneOf(Object.values(SortIndicators)),

  /**
   * Boolean value indicating whether or not the column has an error in the data.
   */
  hasError: PropTypes.bool,

  /**
   * Number that specifies the minimum column width in pixels.
   */
  minimumWidth: PropTypes.number,

  /**
   * Number that specifies the maximum column width in pixels.
   */
  maximumWidth: PropTypes.number,

  /**
   * Boolean value indicating whether or not the column header is selectable.
  */
  isSelectable: PropTypes.bool,

  /**
   * Boolean value indicating whether or not the column header is resizable.
   */
  isResizable: PropTypes.bool,

  /**
   * Height of the parent table.
   */
  tableHeight: PropTypes.number,

  /**
   * String that specifies the default width for columns in the table. Any valid CSS width value is accepted.
   */
  width: PropTypes.number.isRequired,

  /**
   * String that specifies the column height. Any valid CSS height value accepted.
  */
  headerHeight: PropTypes.string.isRequired,

  /**
   * The cell's row position in the table. This is zero based.
   */
  rowIndex: PropTypes.number,

  /**
   * The cell's column position in the table. This is zero based.
   */
  columnIndex: PropTypes.number,

  /**
   * Function that is called when a selectable header cell is selected. Parameters:
   * @param {string} rowId rowId
   * @param {string} columnId columnId
   */
  onColumnSelect: PropTypes.func,

  /**
   * Function that is called when the mouse down event is triggered on the column resize handle.
   */
  onResizeMouseDown: PropTypes.func,

  /**
   * @private
   * Object containing intl APIs
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
};

const defaultProps = {
  hasError: false,
  isResizable: true,
  isSelectable: false,
};

const ColumnHeaderCell = (props) => {
  const {
    id,
    displayName,
    sortIndicator,
    hasError,
    isResizable,
    isSelectable,
    tableHeight,
    width,
    minimumWidth,
    maximumWidth,
    headerHeight,
    intl,
    columnIndex,
    onColumnSelect,
    onResizeMouseDown,
    rowIndex,
  } = props;

  const columnContext = useContext(ColumnContext);
  const theme = useContext(ThemeContext);
  const gridContext = useContext(GridContext);
  const columnHeaderCell = useRef();

  const onResizeHandleMouseDown = useCallback((event) => {
    if (onResizeMouseDown) {
      onResizeMouseDown(event, columnIndex, columnHeaderCell.current.offsetWidth);
    }
  }, [columnIndex, onResizeMouseDown]);

  const handleMouseDown = (event) => {
    onColumnSelect(id, { row: rowIndex, col: columnIndex });
    event.stopPropagation();
  };

  const handleKeyDown = (event) => {
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_SPACE:
      case KeyCode.KEY_RETURN:
        onColumnSelect(id, { row: rowIndex, col: columnIndex });
        event.stopPropagation();
        event.preventDefault(); // prevent the default scrolling
        break;
      default:
    }
  };

  const errorIcon = hasError && <IconError a11yLabel={intl.formatMessage({ id: 'Terra.table.columnError' })} className={cx('error-icon')} />;

  let sortIndicatorIcon;
  if (sortIndicator === SortIndicators.ASCENDING) {
    sortIndicatorIcon = <IconUp />;
  } else if (sortIndicator === SortIndicators.DESCENDING) {
    sortIndicatorIcon = <IconDown />;
  }

  const cellLeftEdge = (columnIndex < columnContext.pinnedColumnOffsets.length) ? columnContext.pinnedColumnOffsets[columnIndex] : null;
  const dividerLeftEdge = width - 1;

  const pinnedColumnsDivider = columnIndex === columnContext.pinnedColumnOffsets.length - 1
    ? (
      <div
        className={cx('pinned-columns-divider')}
        style={{ height: tableHeight, left: dividerLeftEdge }} // eslint-disable-line react/forbid-dom-props
      />
    )
    : null;

  return (
  /* eslint-disable react/forbid-dom-props */
    <th
      ref={columnHeaderCell}
      key={id}
      className={cx('column-header', theme.className, { selectable: isSelectable, pinned: columnIndex < columnContext.pinnedColumnOffsets.length })}
      role="columnheader"
      scope="col"
      tabIndex={gridContext.role === 'grid' || isSelectable ? 0 : undefined}
      aria-sort={sortIndicator}
      onMouseDown={(isSelectable && onColumnSelect) ? handleMouseDown : undefined}
      onKeyDown={isSelectable && onColumnSelect ? handleKeyDown : undefined}
      // eslint-disable-next-line react/forbid-dom-props
      style={{ width: `${width}px`, height: headerHeight, left: cellLeftEdge }}
    >
      <div className={cx('header-container')} role={displayName && 'button'}>
        {errorIcon}
        <span>{displayName}</span>
        {sortIndicatorIcon}
      </div>
      { isResizable && (
      <ColumnResizeHandle
        columnIndex={columnIndex}
        columnText={displayName}
        columnWidth={width}
        height={tableHeight}
        minimumWidth={minimumWidth}
        maximumWidth={maximumWidth}
        onResizeMouseDown={onResizeHandleMouseDown}
      />
      )}
      {pinnedColumnsDivider}
    </th>
  );
};

ColumnHeaderCell.propTypes = propTypes;
ColumnHeaderCell.defaultProps = defaultProps;
export default React.memo(injectIntl(ColumnHeaderCell));
