import PropTypes from 'prop-types';

const widthShape = PropTypes.shape({
  /**
   * Static width that for the cell.
   */
  static: PropTypes.shape({
    /**
     * Numerical width value.
     */
    value: PropTypes.number.isRequired,
    /**
     * Valid css units are supported (i.e. 'px', 'rem', etc).
     */
    unit: PropTypes.string.isRequired,
  }),
  /**
   * Percentage width of the row for the header cell.
   */
  percentage: PropTypes.number,
  /**
   * Relative scalar value of the cell's width compared to its sibling cells.
   */
  scalar: PropTypes.number,
});

export default widthShape;
