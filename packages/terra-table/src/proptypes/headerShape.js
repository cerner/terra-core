import PropTypes from 'prop-types';
import headerCellShape from './headerCellShape';

const headerShape = PropTypes.shape({
  /**
   * The cells to be displayed within the header.
   */
  cells: PropTypes.arrayOf(headerCellShape),
  /**
   * Function callback returning the html node for the cell.
   */
  refCallback: PropTypes.func,
  /**
   * The selection all column header's properties.
   */
  selectAllColumn: PropTypes.shape({
    /**
     * The status of the select all checkbox.
     */
    checkStatus: PropTypes.oneOf(['empty', 'checked', 'indeterminate']).isRequired,
      /**
     * The alignment prop sets the bottom spacing of the check mark in rem values. This is used when providing your own padding.
     */
    checkAlignment: PropTypes.number,
    /**
     * The text label for the column header's interaction.
     */
    checkLabel: PropTypes.string.isRequired,
    /**
     * The text label for the column header's interaction.
     */
    onCheckAction: PropTypes.func.isRequired,
    /**
     * The text label for the column header's interaction.
     */
    isDisabled: PropTypes.bool,
  }),
});

export default headerShape;