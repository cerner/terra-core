import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'terra-theme-context';
import classNames from 'classnames/bind';

import styles from './Row.module.scss';
import Cell from './Cell';
import RowSelectionCell from './RowSelectionCell';
import cellShape from '../proptypes/cellShape';
import { columnShape } from '../proptypes/columnShape';
import GridContext from '../utils/GridContext';

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
  const gridContext = useContext(GridContext);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <tr
      className={cx('row', {
        selected: isSelected,
        selectable: hasRowSelection,
      }, theme.className)}
      onMouseEnter={hasRowSelection ? () => { setIsHovered(true); } : null}
      onMouseLeave={hasRowSelection ? () => { setIsHovered(false); } : null}
      // eslint-disable-next-line react/forbid-dom-props
      style={{ height }}
    >
      {hasRowSelection && (
        <RowSelectionCell
          rowId={id}
          columnId={displayedColumns[0].id}
          rowIndex={rowIndex}
          columnIndex={0}
          isSelected={isSelected}
          ariaLabel={ariaLabel}
          onCellSelect={onCellSelect}
        />
      )}
      {cells.map((cellData, cellColumnIndex) => (
        <Cell
          rowId={id}
          columnId={displayedColumns[cellColumnIndex].id}
          rowIndex={rowIndex}
          columnIndex={cellColumnIndex}
          key={`${id}_${displayedColumns[cellColumnIndex].id}`}
          isMasked={cellData.isMasked}
          isRowHeader={cellColumnIndex === rowHeaderIndex}
          height={height}
          isHighlighted={isHovered || isSelected}
          onCellSelect={onCellSelect}
          isSelectable={gridContext.role === 'grid'}
        >
          {cellData.content}
        </Cell>
      ))}
    </tr>
  );
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default React.memo(Row);
