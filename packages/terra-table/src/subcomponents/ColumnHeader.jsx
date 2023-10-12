import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ColumnHeaderCell from './ColumnHeaderCell';
import { columnShape } from '../proptypes/columnShape';
import GridContext, { GridConstants } from '../utils/GridContext';

const propTypes = {
  /**
   * Data for columns. By default, columns will be presented in the order given.
   */
  columns: PropTypes.arrayOf(columnShape).isRequired,

  /**
   * String that specifies the column header height. Any valid CSS height value accepted.
   */
  headerHeight: PropTypes.string.isRequired,

  /**
   * Number that specifies the height of the table in pixels.
   */
  tableHeight: PropTypes.number,

  /**
   * Function that is called when a selectable header cell is selected. Parameters:
   * @param {string} columnId columnId
   */
  onColumnSelect: PropTypes.func,

  /**
   * Function that is called when the mouse down event is triggered on the column resize handle.
   */
  onResizeMouseDown: PropTypes.func,
};

const ColumnHeader = (props) => {
  const {
    columns,
    headerHeight,
    tableHeight,
    onColumnSelect,
    onResizeMouseDown,
  } = props;

  const gridContext = useContext(GridContext);
  const isGridContext = gridContext.role === GridConstants.GRID;

  return (
    <thead>
      <tr className="column-header-row" height={headerHeight}>
        {columns.map((column, columnIndex) => (
          <ColumnHeaderCell
            key={column.id}
            id={column.id}
            rowIndex={0}
            columnIndex={columnIndex}
            displayName={column.displayName}
            width={column.width}
            minimumWidth={column.minimumWidth}
            maximumWidth={column.maximumWidth}
            headerHeight={headerHeight}
            isResizable={isGridContext ? column.isResizable !== false : column.isResizable}
            isSelectable={isGridContext ? column.isSelectable !== false : column.isSelectable}
            tableHeight={tableHeight}
            hasError={column.hasError}
            sortIndicator={column.sortIndicator}
            onColumnSelect={onColumnSelect}
            onResizeMouseDown={onResizeMouseDown}
          />
        ))}
      </tr>
    </thead>
  );
};

ColumnHeader.propTypes = propTypes;
export default React.memo(ColumnHeader);
