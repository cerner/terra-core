import PropTypes from 'prop-types';

const selectAllColumnShape = PropTypes.shape({
  /**
   * The status of the select all checkbox.
   */
  checkStatus: PropTypes.oneOf(['empty', 'checked', 'indeterminate']),
  /**
   * The alignment prop sets the bottom spacing of the check mar, standard units are valid. This is used when providing your own padding.
   */
  checkAlignment: PropTypes.string,
  /**
   * The text label for the column header's interaction.
   */
  checkLabel: PropTypes.string.isRequired,
  /**
   * The function callback triggering when the checkbox within the column header has an interaction.
   */
  onCheckAction: PropTypes.func,
  /**
   * Whether or not interaction should be disabled.
   */
  isDisabled: PropTypes.bool,
});

export default selectAllColumnShape;
