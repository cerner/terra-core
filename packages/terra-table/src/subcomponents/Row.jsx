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
   * An identifier to uniquely identify the row within the table.
   */
  id: PropTypes.string.isRequired,

  /**
   * The row's position in the table. This is zero based.
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
    displayedColumns,
    rowHeaderIndex,
  } = props;

  const theme = useContext(ThemeContext);

  return (
    <tr
      className={cx('row', {
      }, theme.className)}
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
