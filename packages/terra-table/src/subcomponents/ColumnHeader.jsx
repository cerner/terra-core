import React from 'react';
import PropTypes from 'prop-types';

import { columnShape } from '../proptypes/columnShape';
import ColumnHeaderCell from './ColumnHeaderCell';

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
   * Number that specifies the height of the data grid in pixels.
   */
  tableHeight: PropTypes.number,

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
    onResizeMouseDown,
  } = props;

  // Create ColumnHeaderCell component for each column
  const buildColumn = (column, columnIndex) => (
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
      isResizable={column.isResizable}
      isSelectable={column.isSelectable}
      tableHeight={tableHeight}
      hasError={column.hasError}
      sortIndicator={column.sortIndicator}
      onResizeMouseDown={onResizeMouseDown}
    />
  );

  return (
    <thead>
      <tr className="column-header-row" height={headerHeight}>
        {columns.map((column, columnIndex) => (buildColumn(column, columnIndex)))}
      </tr>
    </thead>
  );
};

ColumnHeader.propTypes = propTypes;
export default React.memo(ColumnHeader);
