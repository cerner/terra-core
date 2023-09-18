import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'terra-theme-context';
import classNames from 'classnames/bind';
import styles from './Row.module.scss';
import Cell from './Cell';
import cellShape from '../proptypes/cellShape';
import { columnShape } from './proptypes/columnShape';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * An identifier to uniquely identify the row within the grid.
   */
  id: PropTypes.string.isRequired,

  /**
   * The row's position in the Grid. This is zero based.
   */
  rowIndex: PropTypes.number,

  /**
   * String that specifies height of the row. Any valid CSS width value is accepted.
  */
  height: PropTypes.string,

  /**
   * Data to be displayed in the cells of the row. Cells will be rendered in the row in the order given.
   */
  cells: PropTypes.arrayOf(cellShape),

  /**
   * A boolean indicating whether or not the row should render as selected.
   */
  isSelected: PropTypes.bool,

  /**
   * A string identifier used to describe the row contents. This value will be used to construct additional labels
   * for internal controls (e.g. row selection cells).
   */
  ariaLabel: PropTypes.string,

  /**
   * Boolean indicating whether or not the DataGrid allows a row to be selected. If true, an additional
   * column containing a checkbox is rendered to indicate when when the row is selected.
   */
  hasRowSelection: PropTypes.bool,

  /**
   * All columns currently displayed.
   */
  displayedColumns: PropTypes.arrayOf(columnShape),

  /**
   * Callback function that will be called when a cell in the row is selected.
   * @param {string} rowId rowId
   * @param {string} columnId columnId
   */
  onCellSelect: PropTypes.func,

  /**
   * A zero-based index indicating which column represents the row header.
   */
  rowHeaderIndex: PropTypes.number,
};

const defaultProps = {
  hasRowSelection: false,
  rowHeaderIndex: 0,
  isSelected: false,
};

function Row(props) {
  const {
    rowIndex,
    height,
    hasRowSelection,
    id,
    isSelected,
    cells,
    ariaLabel,
    displayedColumns,
    rowHeaderIndex,
    onCellSelect,
  } = props;

  const theme = useContext(ThemeContext);

  const [isHovered, setHovered] = useState(false);

  const columnIndexOffSet = hasRowSelection ? 1 : 0;

  const getCellData = (cellRowIndex, cellColumnIndex, cellData, rowId) => {
    const columnId = displayedColumns[cellColumnIndex].id;
    const isRowHeader = cellColumnIndex === rowHeaderIndex + columnIndexOffSet;

    return (
      <Cell
        rowId={rowId}
        columnId={columnId}
        rowIndex={cellRowIndex}
        columnIndex={cellColumnIndex}
        key={`${rowId}_${columnId}`}
        isSelected={!hasRowSelection && cellData.isSelected}
        isMasked={cellData.isMasked}
        isSelectable={cellData.isSelectable}
        isRowHeader={isRowHeader}
        isHighlighted={isHovered || isSelected}
        onCellSelect={onCellSelect}
        height={height}
      >
        {cellData.content}
      </Cell>
    );
  };

  return (
    <tr
      className={cx('row', {
        selected: isSelected,
        selectable: hasRowSelection,
      }, theme.className)}
      // eslint-disable-next-line react/forbid-dom-props
      style={{ height }}
      onMouseEnter={hasRowSelection ? () => { setHovered(true); } : null}
      onMouseLeave={hasRowSelection ? () => { setHovered(false); } : null}
    >
      {cells.map((cellData, cellColumnIndex) => (
        getCellData(rowIndex, cellColumnIndex + columnIndexOffSet, cellData, id)
      ))}
    </tr>
  );
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default React.memo(Row);
