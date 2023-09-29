import React, {
  useState, useContext, useRef, useCallback, useEffect, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import * as KeyCode from 'keycode-js';
import ResizeObserver from 'resize-observer-polyfill';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';

import ColumnHeader from './subcomponents/ColumnHeader';
import Row from './subcomponents/Row';
import rowShape from './proptypes/rowShape';
import { columnShape } from './proptypes/columnShape';
import ColumnContext from './utils/ColumnContext';
import ROW_SELECTION_COLUMN from './utils/rowSelection';
import styles from './Table.module.scss';
import GridContext from './utils/GridContext';
import validateRowHeaderIndex from './proptypes/validators';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String that identifies the element (or elements) that labels the table.
   */
  ariaLabelledBy: PropTypes.string,

  /**
   * String that labels the table for accessibility. If ariaLabelledBy is specified, ariaLabel will not be used.
   */
  ariaLabel: PropTypes.string,

  /**
   * String that will be used to identify the table. If multiple tables are on the same page, each table should have
   * a unique id.
   */
  id: PropTypes.string.isRequired,

  /**
   * Prop that determines whether the table's container should be scrollable.
   */
  isScrollable: PropTypes.bool,

  /**
   * Data for content in the body of the table. Rows will be rendered in the order given.
   */
  rows: PropTypes.arrayOf(rowShape).isRequired,

  /**
   * Data for pinned columns. Pinned columns are the stickied leftmost columns of the table.
   * Columns will be presented in the order given.
   */
  pinnedColumns: PropTypes.arrayOf(columnShape),

  /**
   * Data for overflow columns. Overflow columns are rendered in the table's horizontal overflow.
   * Columns will be presented in the order given.
   */
  overflowColumns: PropTypes.arrayOf(columnShape),

  /**
   * Number indicating the default column width in px. This value will be used if no overriding width value is provided on a per-column basis.
   */
  defaultColumnWidth: PropTypes.number,

  /**
   * String that specifies the column height. Any valid CSS height value is accepted.
   */
  columnHeaderHeight: PropTypes.string,

  /**
   * String that specifies the height for the rows in the table. Any valid CSS value is accepted.
   */
  rowHeight: PropTypes.string,

  /**
   * Number indicating the index of the column that represents row header. Index is 0 based and cannot exceed one less than the number of columns in the table.
   */
  rowHeaderIndex: validateRowHeaderIndex,

  /**
   * Function that is called when a resizable column is resized. Parameters:
   * @param {string} columnId columnId
   * @param {string} requestedWidth requestedWidth
   */
  onColumnResize: PropTypes.func,

  /**
   * Callback function that is called when a selectable cell is selected. Parameters:
   * @param {string} rowId rowId
   * @param {string} columnId columnId
   */
  onCellSelect: PropTypes.func,

  /**
   * Callback function that is called when a selectable column is selected. Parameters:
   *  @param {string} columnId columnId
   */
  onColumnSelect: PropTypes.func,

  /**
   * Callback function that is called when all selected cells need to be unselected. Parameters: none.
   */
  onClearSelection: PropTypes.func,

  /**
   * Callback function that is called when a range selection occurs. Parameters:
   * @param {number} rowIndex RowIndex of the cell from which the range selection was triggered.
   * @param {number} columnIndex ColumnIndex of the cell from which the range selection was triggered.
   * @param {number} direction Direction keycode representing the direction of the selection.
   */
  onRangeSelection: PropTypes.func,

  /**
   * Boolean indicating whether or not the table should allow entire rows to be selectable. An additional column will be
   * rendered to allow for row selection to occur.
   */
  hasSelectableRows: PropTypes.bool,
};

const defaultProps = {
  rowHeaderIndex: 0,
  defaultColumnWidth: 200,
  columnHeaderHeight: '2.5rem',
  rowHeight: '2.5rem',
  pinnedColumns: [],
  overflowColumns: [],
  isScrollable: true,
};

// Default column size constraints
const defaultColumnMinimumWidth = 60;
const defaultColumnMaximumWidth = 300;

function Table(props) {
  const {
    id,
    ariaLabelledBy,
    ariaLabel,
    rows,
    pinnedColumns,
    overflowColumns,
    onColumnResize,
    defaultColumnWidth,
    columnHeaderHeight,
    isScrollable,
    rowHeight,
    onColumnSelect,
    onCellSelect,
    onClearSelection,
    onRangeSelection,
    hasSelectableRows,
    rowHeaderIndex,
  } = props;

  const [pinnedColumnOffsets, setPinnedColumnOffsets] = useState([]);

  // Initialize column width properties
  const initializeColumn = (column) => ({
    ...column,
    width: column.width || defaultColumnWidth,
    minimumWidth: column.minimumWidth || defaultColumnMinimumWidth,
    maximumWidth: column.maximumWidth || defaultColumnMaximumWidth,
  });

  const displayedColumns = [
    ...(hasSelectableRows ? [ROW_SELECTION_COLUMN] : []),
    ...pinnedColumns,
    ...overflowColumns,
  ];
  const [renderedColumns, setRenderedColumns] = useState(displayedColumns.map((column) => initializeColumn(column)));

  // Manage column resize
  const [tableHeight, setTableHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [focusedRow, setFocusedRow] = useState(0);
  const [focusedCol, setFocusedCol] = useState(0);

  const activeColumnPageX = useRef(0);
  const activeColumnWidth = useRef(200);
  const tableWidth = useRef(0);

  const table = useRef();
  const tableContainerRef = useRef();
  const hasReceivedFocus = useRef(false);
  const handleFocus = useRef(true);

  const [cellAriaLiveMessage, setCellAriaLiveMessage] = useState(null);

  const gridContext = useContext(GridContext);

  // Define ColumnContext Provider value object
  const columnContextValue = useMemo(() => ({ pinnedColumnOffsets, setCellAriaLiveMessage }), [pinnedColumnOffsets]);
  const theme = useContext(ThemeContext);

  // -------------------------------------
  // functions

  const isRowSelectionCell = (columnIndex) => (
    hasSelectableRows && columnIndex < displayedColumns.length && displayedColumns[columnIndex].id === ROW_SELECTION_COLUMN.id
  );

  const setFocusedRowCol = (newRowIndex, newColIndex, makeActiveElement) => {
    setCellAriaLiveMessage(null);
    setFocusedRow(newRowIndex);
    setFocusedCol(newColIndex);
    let focusedCell = table.current.rows[newRowIndex].cells[newColIndex];
    if (isRowSelectionCell(newColIndex) && focusedCell.getElementsByTagName('input').length > 0) {
      [focusedCell] = focusedCell.getElementsByTagName('input');
    }

    if (makeActiveElement) {
      focusedCell.focus();
    }
  };

  const handleMoveCellFocus = (fromCell, toCell) => {
    // Obtain coordinate rectangles for table container, column header, and new cell selection
    const tableContainerRect = tableContainerRef.current.getBoundingClientRect();
    const columnHeaderRect = table.current.rows[0].cells[toCell.col].getBoundingClientRect();
    const nextCellRect = table.current.rows[toCell.row].cells[toCell.col].getBoundingClientRect();

    // Calculate horizontal scroll offset for right boundary
    if (nextCellRect.right > tableContainerRect.right) {
      tableContainerRef.current.scrollBy(nextCellRect.right - tableContainerRect.right, 0);
    } else {
      // Calculate horizontal scroll offset for left boundary
      let scrollOffsetX = 0;
      if (pinnedColumnOffsets.length > 0) {
        if (toCell.col > pinnedColumnOffsets.length - 1) {
          const lastPinnedColumnRect = table.current.rows[toCell.row].cells[pinnedColumnOffsets.length - 1].getBoundingClientRect();
          scrollOffsetX = nextCellRect.left - lastPinnedColumnRect.right;
        }
      } else {
        scrollOffsetX = nextCellRect.left - tableContainerRect.left;
      }

      if (scrollOffsetX < 0) {
        tableContainerRef.current.scrollBy(scrollOffsetX, 0);
      }
    }

    // Calculate vertical scroll offset
    const scrollOffsetY = nextCellRect.top - columnHeaderRect.bottom;
    if (scrollOffsetY < 0) {
      tableContainerRef.current.scrollBy(0, scrollOffsetY);
    }

    setFocusedRowCol(toCell.row, toCell.col, true);
  };

  // -------------------------------------
  // callback Hooks

  const tableResizeRef = useCallback((node) => {
    if (!node) {
      return;
    }

    table.current = node;
    const resizeObserver = new ResizeObserver(() => {
      // Update table height state variable
      setTableHeight(table.current.offsetHeight - 1);
    });

    // Register resize observer to detect size changes
    resizeObserver.observe(node);
  }, []);

  const handleCellSelection = useCallback((selectionDetails) => {
    setFocusedRow(selectionDetails.rowIndex);
    setFocusedCol(selectionDetails.columnIndex);
    if (onCellSelect) {
      onCellSelect(selectionDetails);
    }
  }, [onCellSelect]);

  // -------------------------------------
  // useEffect Hooks

  // useEffect for row displayed columns
  useEffect(() => {
    setRenderedColumns(displayedColumns.map((column) => initializeColumn(column)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pinnedColumns, overflowColumns]);

  // useEffect to calculate pinned column offsets
  useEffect(() => {
    const offsetArray = [];
    if (pinnedColumns.length > 1) {
      let cumulativeOffset = 0;

      offsetArray.push(cumulativeOffset);
      const lastPinnedColumnIndex = pinnedColumns.length - 1;

      renderedColumns.slice(0, lastPinnedColumnIndex).forEach((pinnedColumn) => {
        cumulativeOffset += pinnedColumn.width;
        offsetArray.push(cumulativeOffset);
      });
    }
    setPinnedColumnOffsets(offsetArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderedColumns]);

  // useEffect for row selection
  useEffect(() => {
    // When row selection mode is turned on or off a row selection column is added or removed.
    // Therefore, shift the focused cell to the left or right.
    let newFocusCell = { row: focusedRow, col: focusedCol };

    if (!hasSelectableRows && focusedCol === 0) {
      // When row selection is turned off, if a cell in the row selection had focus, then
      // refocus on the first cell in that row.
      newFocusCell = { row: focusedRow, col: 0 };
    } else if (hasReceivedFocus.current) {
      newFocusCell = { row: focusedRow, col: (focusedCol + (hasSelectableRows ? 1 : -1)) };
    }

    setFocusedRowCol(newFocusCell.row, newFocusCell.col, false);

    setRenderedColumns(displayedColumns.map((column) => initializeColumn(column)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasSelectableRows]);

  // -------------------------------------

  // -------------------------------------
  // event handlers

  const handleColumnSelect = useCallback((columnId) => {
    if (onColumnSelect) {
      onColumnSelect(columnId);
    }
  }, [onColumnSelect]);

  const onResizeMouseDown = useCallback((event, index, resizeColumnWidth) => {
    // Store current table and column values for resize calculations
    tableWidth.current = table.current.offsetWidth;
    activeColumnPageX.current = event.pageX;
    activeColumnWidth.current = resizeColumnWidth;

    // Set the active index to the selected column
    setActiveIndex(index);
  }, []);

  const onMouseMove = (event) => {
    if (activeIndex == null) {
      return;
    }

    // Ensure the new column width falls within the range of the minimum and maximum values
    const diffX = event.pageX - activeColumnPageX.current;
    const { minimumWidth, maximumWidth } = renderedColumns[activeIndex];
    const newColumnWidth = Math.min(Math.max(activeColumnWidth.current + diffX, minimumWidth), maximumWidth);

    // Update the width for the column in the state variable
    const newColumns = [...renderedColumns];
    newColumns[activeIndex].width = newColumnWidth;
    setRenderedColumns(newColumns);

    // Update the column and table width
    table.current.style.width = `${tableWidth + (newColumnWidth - activeColumnWidth.current)}px`;
  };

  const onMouseUp = () => {
    if (onColumnResize) {
      onColumnResize(renderedColumns[activeIndex].id, renderedColumns[activeIndex].width);
    }
    // Remove active index
    setActiveIndex(null);
  };

  const onMouseDown = () => {
    // Prevent focus event updates when triggered by mouse
    handleFocus.current = false;
  };

  const onFocus = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      // Not triggered when swapping focus between children
      if (handleFocus.current) {
        setFocusedRowCol(focusedRow, focusedCol, true);
      }

      hasReceivedFocus.current = true;
    }

    handleFocus.current = true;
  };

  /**
   * Move focus to next focusable element outside the table
   */
  const moveFocusFromTable = (moveForward) => {
    // add all elements we want to include in our selection
    const focusableElementSelector = 'a[href]:not([tabindex=\'-1\']), area[href]:not([tabindex=\'-1\']), input:not([disabled]):not([tabindex=\'-1\']), '
      + "select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), "
      + "iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])";

    const focusableElements = [...document.body.querySelectorAll(`${focusableElementSelector}`)].filter(
      element => !element.hasAttribute('disabled')
        && !element.getAttribute('aria-hidden')
        && (element.id === id || !table.current.contains(element)),
    );

    // Identify index of the active element in the DOM excluding table children
    const index = focusableElements.indexOf(table.current);
    if (index > -1) {
      // Move focus outside table
      const indexOffset = moveForward ? 1 : -1;
      const newFocusElement = focusableElements[index + indexOffset];
      if (newFocusElement) {
        newFocusElement.focus();
      }
    }
  };

  const handleKeyDown = (event) => {
    const cellCoordinates = { row: focusedRow, col: focusedCol };
    let nextRow = cellCoordinates.row;
    let nextCol = cellCoordinates.col;
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_UP:
        nextRow -= 1;
        break;
      case KeyCode.KEY_DOWN:
        nextRow += 1;
        break;
      case KeyCode.KEY_LEFT:
        if (event.metaKey) {
          // Mac: Ctrl + Cmd + Left
          // Win: Ctrl + Home
          nextCol = 0;

          if (event.ctrlKey) {
            // Mac: Ctrl + Cmd + Left
            // Windows: Ctrl + Home
            nextRow = 1; // Assumption is that the first row is the column Heading.
          }
        } else {
          // Left key
          nextCol -= 1;
        }
        break;
      case KeyCode.KEY_RIGHT:
        if (event.metaKey) {
          // Mac: Cmd + Right
          // Win: End
          nextCol = displayedColumns.length - 1;

          if (event.ctrlKey) {
            // Mac: Ctrl + Cmd + Right
            // Windows: Ctrl + End
            nextRow = rows.length;
          }
        } else {
          // Right key
          nextCol += 1;
        }
        break;
      case KeyCode.KEY_HOME:
        nextCol = 0;
        if (event.ctrlKey) {
          nextRow = 1; // Assumption is that the first row is the column Heading.
        }
        break;
      case KeyCode.KEY_END:
        nextCol = displayedColumns.length - 1; // Col are zero based.
        if (event.ctrlKey) {
          // Though rows are zero based, the header is the first row so the rowsLength will
          // always be one more than then actual number of data rows.
          nextRow = rows.length;
        }
        break;
      case KeyCode.KEY_ESCAPE:
        if (onClearSelection) {
          onClearSelection();
        }
        event.preventDefault();
        return;
      case KeyCode.KEY_TAB:
        moveFocusFromTable(!event.shiftKey);
        event.preventDefault();
        return;
      default:
        return;
    }

    if (onRangeSelection && event.shiftKey && (event.keyCode === KeyCode.KEY_UP || event.keyCode === KeyCode.KEY_DOWN)) {
      onRangeSelection(cellCoordinates.row, cellCoordinates.col, event.keyCode);
    }

    if (nextRow > rows.length || nextCol >= displayedColumns.length) {
      event.preventDefault(); // prevent the page from moving with the arrow keys.
      return;
    }
    if (nextCol < 0 || nextRow < 0) {
      event.preventDefault(); // prevent the page from moving with the arrow keys.
      return;
    }
    handleMoveCellFocus(cellCoordinates, { row: nextRow, col: nextCol });
    event.preventDefault(); // prevent the page from moving with the arrow keys.
  };

  // -------------------------------------

  return (
    <div
      className={cx('table-container', { scrollable: isScrollable })}
      ref={tableContainerRef}
    >
      <table
        ref={tableResizeRef}
        id={id}
        role={gridContext.role}
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabel}
        className={cx('table', theme.className)}
        tabIndex={gridContext.role === 'grid' ? 0 : undefined}
        onKeyDown={gridContext.role === 'grid' ? handleKeyDown : undefined}
        onMouseDown={gridContext.role === 'grid' ? onMouseDown : undefined}
        onFocus={gridContext.role === 'grid' ? onFocus : undefined}
        {...(activeIndex != null && { onMouseUp, onMouseMove, onMouseLeave: onMouseUp })}
      >
        <ColumnContext.Provider
          value={columnContextValue}
        >
          <ColumnHeader
            columns={renderedColumns}
            headerHeight={columnHeaderHeight}
            tableHeight={tableHeight}
            onResizeMouseDown={onResizeMouseDown}
            onColumnSelect={handleColumnSelect}
          />
          <tbody>
            {rows.map((row, index) => (
              <Row
                rowIndex={index + 1}
                key={row.id}
                height={rowHeight}
                id={row.id}
                cells={row.cells}
                ariaLabel={row.ariaLabel}
                displayedColumns={displayedColumns}
                rowHeaderIndex={rowHeaderIndex}
                onCellSelect={handleCellSelection}
              />
            ))}
          </tbody>
        </ColumnContext.Provider>
      </table>
      <VisuallyHiddenText aria-live="polite" aria-atomic="true" text={cellAriaLiveMessage} />
    </div>
  );
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default injectIntl(Table);
