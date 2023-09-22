import React, {
  useState, useContext, useRef, useCallback, useEffect, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import ColumnHeader from './subcomponents/ColumnHeader';
import Row from './subcomponents/Row';
import rowShape from './proptypes/rowShape';
import { columnShape } from './proptypes/columnShape';
import ColumnContext from './utils/ColumnContext';
import validateRowHeaderIndex from './proptypes/validators';
import styles from './Table.module.scss';

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
     * Data for content in the body of the table. Rows will be rendered in the order given.
     */
  rows: PropTypes.arrayOf(rowShape),

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
   * Callback function that is called when a selectable column is selected. Parameters:
   *  @param {string} columnId columnId
   */
  onColumnSelect: PropTypes.func,
};

const defaultProps = {
  rowHeaderIndex: 0,
  defaultColumnWidth: 200,
  columnHeaderHeight: '2.5rem',
  rowHeight: '2.5rem',
  pinnedColumns: [],
  overflowColumns: [],
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
    onColumnSelect,
    defaultColumnWidth,
    columnHeaderHeight,
    rowHeight,
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
    ...pinnedColumns,
    ...overflowColumns,
  ];
  const [renderedColumns, setRenderedColumns] = useState(displayedColumns.map((column) => initializeColumn(column)));

  // Manage column resize
  const [tableHeight, setTableHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const activeColumnPageX = useRef(0);
  const activeColumnWidth = useRef(200);
  const tableWidth = useRef(0);

  const table = useRef();
  const tableContainerRef = useRef();
  const [cellAriaLiveMessage, setCellAriaLiveMessage] = useState(null);

  // Define ColumnContext Provider value object
  const columnContextValue = useMemo(() => ({ pinnedColumnOffsets, setCellAriaLiveMessage }), [pinnedColumnOffsets]);
  const theme = useContext(ThemeContext);

  // -------------------------------------
  // functions

  // -------------------------------------
  // callback Hooks

  const tableRef = useCallback((node) => {
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
    let cumulativeOffset = 0;
    let lastPinnedColumnIndex;

    if (pinnedColumns.length === 0) {
      setPinnedColumnOffsets([]);
    } else {
      offsetArray.push(cumulativeOffset);

      lastPinnedColumnIndex = pinnedColumns.length - 1;

      // eslint-disable-next-line array-callback-return
      renderedColumns.slice(0, lastPinnedColumnIndex).map((pinnedColumn) => {
        cumulativeOffset += pinnedColumn.width;
        offsetArray.push(cumulativeOffset);
      });
      setPinnedColumnOffsets(offsetArray);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderedColumns]);

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
    // Notify consumers of the new column width
    if (onColumnResize) {
      onColumnResize(renderedColumns[activeIndex].id, renderedColumns[activeIndex].width);
    }

    // Remove active index
    setActiveIndex(null);
  };

  // -------------------------------------

  return (
    <div ref={tableContainerRef} className={cx('table-container')}>
      <table
        ref={tableRef}
        id={id}
        role="table"
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabel}
        className={cx('table', theme.className)}
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
