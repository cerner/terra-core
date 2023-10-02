import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'terra-theme-context';
import classNames from 'classnames/bind';

import Cell from './Cell';
import cellShape from '../proptypes/cellShape';
import { columnShape } from '../proptypes/columnShape';
import GridContext from '../utils/GridContext';
import styles from './Row.module.scss';

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
  rowHeaderIndex: 0,
  isSelected: false,
};

function Row(props) {
  const {
    rowIndex,
    height,
    id,
    isSelected,
    cells,
    displayedColumns,
    rowHeaderIndex,
    onCellSelect,
  } = props;

  const theme = useContext(ThemeContext);
  const gridContext = useContext(GridContext);

  return (
    <tr
      className={cx('row', theme.className)}
      // eslint-disable-next-line react/forbid-dom-props
      style={{ height }}
    >
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
          isHighlighted={isSelected}
          onCellSelect={onCellSelect}
          isSelectable={cellData.isSelectable || gridContext.role === 'grid'}
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
