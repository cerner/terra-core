import React, {
  useState, useContext, useRef, useCallback, useEffect, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';

import ThemeContext from 'terra-theme-context';

import ColumnHeader from './subcomponents/ColumnHeader';
import ColumnContext from './utils/ColumnContext';
import { columnShape } from './proptypes/columnShape';
import ERRORS from './utils/constants';
import GridContext, { GridConstants } from './utils/GridContext';
import Row from './subcomponents/Row';
import RowSelectionUtils from './utils/rowSelectionUtils';
import rowShape from './proptypes/rowShape';
import validateRowHeaderIndex from './proptypes/validators';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
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
   * String that identifies the element (or elements) that labels the table.
   */
  ariaLabelledBy: PropTypes.string,

  /**
   * String that labels the table for accessibility. If ariaLabelledBy is specified, ariaLabel will not be used.
   */
  ariaLabel: PropTypes.string,

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
  rows: [],
};

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
    rowHeight,
    onColumnSelect,
    onCellSelect,
    hasSelectableRows,
    rowHeaderIndex,
  } = props;

  if (pinnedColumns.length === 0) {
    // eslint-disable-next-line no-console
    console.warn(ERRORS.PINNED_COLUMNS_UNDEFINED);
  }

  // Manage column resize
  const [tableHeight, setTableHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const [pinnedColumnOffsets, setPinnedColumnOffsets] = useState([0]);

  const activeColumnPageX = useRef(0);
  const activeColumnWidth = useRef(200);
  const tableWidth = useRef(0);
  const tableRef = useRef();

  // const sortedColumn = useRef();

  const gridContext = useContext(GridContext);
  const theme = useContext(ThemeContext);

  const isGridContext = gridContext.role === GridConstants.GRID;
  const columnContextValue = useMemo(() => ({ pinnedColumnOffsets }), [pinnedColumnOffsets]);

  // Initialize column width properties
  const initializeColumn = (column) => ({
    ...column,
    width: column.width || defaultColumnWidth,
    minimumWidth: column.minimumWidth || defaultColumnMinimumWidth,
    maximumWidth: column.maximumWidth || defaultColumnMaximumWidth,
  });

  const displayedColumns = (hasSelectableRows ? [RowSelectionUtils.ROW_SELECTION_COLUMN] : []).concat(pinnedColumns).concat(overflowColumns);
  const [tableColumns, setTableColumns] = useState(displayedColumns.map((column) => initializeColumn(column)));
  // -------------------------------------
  // functions

  const handleCellSelection = useCallback((selectionDetails) => {
    if (onCellSelect) {
      onCellSelect(selectionDetails);
    }
  }, [onCellSelect]);

  // -------------------------------------
  // useEffect Hooks

  // useEffect for row displayed columns
  useEffect(() => {
    setTableColumns(displayedColumns.map((column) => initializeColumn(column)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pinnedColumns, overflowColumns]);

  // useEffect to calculate pinned column offsets
  useEffect(() => {
    const offsetArray = [];
    let cumulativeOffset = 0;
    let lastPinnedColumnIndex;

    // if table has selectable rows but no pinned columns, then set the offset of the first column to 0
    if (hasSelectableRows && pinnedColumns.length === 0) {
      lastPinnedColumnIndex = 0;
      offsetArray.push(cumulativeOffset);
      setPinnedColumnOffsets(offsetArray);
      return;
    }

    if (pinnedColumns.length > 0) {
      offsetArray.push(cumulativeOffset);

      lastPinnedColumnIndex = hasSelectableRows ? pinnedColumns.length : pinnedColumns.length - 1;

      tableColumns.slice(0, lastPinnedColumnIndex).forEach((pinnedColumn) => {
        cumulativeOffset += pinnedColumn.width;
        offsetArray.push(cumulativeOffset);
      });
    }
    setPinnedColumnOffsets(offsetArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableColumns]);

  // useEffect for managing the table height.
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      setTableHeight(tableRef.current.offsetHeight - 1);
    });

    resizeObserver.observe(tableRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [tableRef]);

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
    tableWidth.current = tableRef.current.offsetWidth;
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
    const { minimumWidth, maximumWidth } = tableColumns[activeIndex];
    const newColumnWidth = Math.min(Math.max(activeColumnWidth.current + diffX, minimumWidth), maximumWidth);

    // Update the width for the column in the state variable
    const newColumns = [...tableColumns];
    newColumns[activeIndex].width = newColumnWidth;
    setTableColumns(newColumns);

    // Update the column and table width
    tableRef.current.style.width = `${tableWidth + (newColumnWidth - activeColumnWidth.current)}px`;
  };

  const onMouseUp = () => {
    if (onColumnResize) {
      onColumnResize(tableColumns[activeIndex].id, tableColumns[activeIndex].width);
    }
    // Remove active index
    setActiveIndex(null);
  };

  // -------------------------------------

  return (
    <div className={cx('table-container')}>
      <table
        ref={tableRef}
        id={id}
        role={gridContext.role}
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabel}
        className={cx('table', theme.className)}
        {...(activeIndex != null && { onMouseUp, onMouseMove, onMouseLeave: onMouseUp })}
      >
        <ColumnContext.Provider
          value={columnContextValue}
        >
          <ColumnHeader
            columns={tableColumns}
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
                hasRowSelection={hasSelectableRows}
                displayedColumns={displayedColumns}
                rowHeaderIndex={rowHeaderIndex}
                onCellSelect={isGridContext ? handleCellSelection : undefined}
                isSelected={row.isSelected}
              />
            ))}
          </tbody>
        </ColumnContext.Provider>
      </table>
    </div>
  );
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default React.memo(injectIntl(Table));
