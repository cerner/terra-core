import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'terra-theme-context';
import classNames from 'classnames/bind';
import styles from './Row.module.scss';
import Cell from './Cell';
import cellShape from '../proptypes/cellShape';
import { columnShape } from '../proptypes/columnShape';

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
   * A string identifier used to describe the row contents. This value will be used to construct additional labels
   * for internal controls (e.g. row selection cells).
   */
  ariaLabel: PropTypes.string,

  /**
   * All columns currently displayed.
   */
  displayedColumns: PropTypes.arrayOf(columnShape),

  /**
   * A zero-based index indicating which column represents the row header.
   */
  rowHeaderIndex: PropTypes.number,
};

const defaultProps = {
  rowHeaderIndex: 0,
};

function Row(props) {
  const {
    rowIndex,
    height,
    id,
    cells,
    ariaLabel,
    displayedColumns,
    rowHeaderIndex,
  } = props;

  const theme = useContext(ThemeContext);

  const getCellData = (cellRowIndex, cellColumnIndex, cellData, rowId) => {
    const columnId = displayedColumns[cellColumnIndex].id;
    const isRowHeader = cellColumnIndex === rowHeaderIndex;

    return (
      <Cell
        rowId={rowId}
        columnId={columnId}
        rowIndex={cellRowIndex}
        columnIndex={cellColumnIndex}
        key={`${rowId}_${columnId}`}
        isMasked={cellData.isMasked}
        isRowHeader={isRowHeader}
        height={height}
      >
        {cellData.content}
      </Cell>
    );
  };

  return (
    <tr
      className={cx('row', {
      }, theme.className)}
      // eslint-disable-next-line react/forbid-dom-props
      style={{ height }}
    >
      {cells.map((cellData, cellColumnIndex) => (
        getCellData(rowIndex, cellColumnIndex, cellData, id)
      ))}
    </tr>
  );
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default React.memo(Row);
