import PropTypes from 'prop-types';

const SortIndicators = {
  ASCENDING: 'ascending',
  DESCENDING: 'descending',
};

const columnShape = PropTypes.shape({
  /**
   * Required string representing a unique identifier for the column.
   */
  id: PropTypes.string.isRequired,
  /**
   * String of text to render within the column header cell.
   */
  displayName: PropTypes.string,
  /**
   * Boolean value indicating whether or not the column has an error in the data.
   */
  hasError: PropTypes.bool,
  /**
   * Boolean value indicating whether or not the column header is resizable.
   */
  isResizable: PropTypes.bool,
  /**
   * Boolean value indicating whether or not the column header is selectable.
   */
  isSelectable: PropTypes.bool,
  /**
   * Number that specifies the minimum column width in pixels.
   */
  minimumWidth: PropTypes.number,
  /**
   * Number that specifies the maximum column width in pixels.
   */
  maximumWidth: PropTypes.number,
  /**
   * A number (in px) specifying the width of the column. If not provided, the Table's default column width will be used.
   */
  width: PropTypes.number,
  /* A string indicating which sorting indicator should be rendered. If not provided, no sorting indicator will be rendered.
   * One of `ascending`, `descending`.
   */
  sortIndicator: PropTypes.oneOf(Object.values(SortIndicators)),
});

export { columnShape, SortIndicators };
