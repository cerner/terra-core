import React, {
  useContext, useRef,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import ThemeContext from 'terra-theme-context';
import styles from './Cell.module.scss';
import ColumnContext from '../utils/ColumnContext';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String identifier of the row in which the Cell will be rendered.
   */
  rowId: PropTypes.string.isRequired,

  /**
   * String identifier of the column in which the Cell will be rendered.
   */
  columnId: PropTypes.string.isRequired,

  /**
   * The cell's row position in the grid. This is zero based.
   */
  rowIndex: PropTypes.number,

  /**
   * The cell's column position in the grid. This is zero based.
   */
  columnIndex: PropTypes.number,

  /**
   * Content that will be rendered within the Cell.
   */
  children: PropTypes.node,

  /**
   *  Boolean indicating if cell contents are masked.
   */
  isMasked: PropTypes.bool,

  /**
   * String that labels the cell for accessibility.
   */
  ariaLabel: PropTypes.string,

  /**
   * Boolean indicating that the cell is a row header.
   */
  isRowHeader: PropTypes.bool,

  /**
   * String that specifies the height of the cell. Any valid CSS value is accepted.
   */
  height: PropTypes.string,

  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  isRowHeader: false,
  isMasked: false,
};

function Cell(props) {
  const {
    rowId,
    columnId,
    rowIndex,
    columnIndex,
    ariaLabel,
    isMasked,
    isRowHeader,
    children,
    height,
    intl,
  } = props;

  const cellRef = useRef();
  const theme = useContext(ThemeContext);
  const columnContext = useContext(ColumnContext);

  // Create cell content for masked and blank cells
  let cellContent;
  if (isMasked) {
    cellContent = (
      <span className={cx('no-data-cell', theme.className)}>
        {intl.formatMessage({ id: 'Terra.dataGrid.maskedCell' })}
      </span>
    );
  } else if (!children) {
    cellContent = (
      <span className={cx('no-data-cell', theme.className)}>
        {intl.formatMessage({ id: 'Terra.dataGrid.blank' })}
      </span>
    );
  } else {
    cellContent = children;
  }

  const className = cx('cell', {
    masked: isMasked,
    pinned: columnIndex < columnContext.pinnedColumnOffsets.length,
    blank: !children,
  }, theme.className);

  const cellLeftEdge = (columnIndex < columnContext.pinnedColumnOffsets.length) ? columnContext.pinnedColumnOffsets[columnIndex] : null;

  const CellTag = isRowHeader ? 'th' : 'td';
  return (
    <CellTag
      ref={cellRef}
      aria-label={ariaLabel}
      tabIndex={-1}
      className={className}
      {...(isRowHeader && { scope: 'row', role: 'rowheader' })}
      // eslint-disable-next-line react/forbid-component-props
      style={{ left: cellLeftEdge }}
    >
      {/* eslint-disable-next-line react/forbid-dom-props */}
      <div className={cx('cell-content', theme.className)} style={{ height }}>{cellContent}</div>
      <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.dataGrid.cell-interactable' })} />
    </CellTag>
  );
}

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default React.memo(injectIntl(Cell));
