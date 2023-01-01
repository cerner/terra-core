import PropTypes from 'prop-types';

const discloseShape = PropTypes.shape({
  /**
   * The index of the cell that provides the accessible link entry point for disclosure style rows.
   */
  discloseCellIndex: PropTypes.number.isRequired,
  /**
   * The label associated to the row action. Should be set if `'rowStyle'` is set to `'disclose'` or `'toggle'`.
   */
  discloseLabel: PropTypes.string,
  /**
   * Whether or not the row is the currently selected disclosure.
   * This aria state relates to the primary link cell.
   */
  isDisclosed: PropTypes.bool,
  /**
   * The associated metaData to be return within row disclose callbacks.
   */
  // eslint-disable-next-line react/forbid-prop-types
  metaData: PropTypes.object,
  /**
   * Function callback for when the appropriate click or key action is performed.
   * Callback contains the javascript event and prop metadata, e.g. onRowAction(event, metaData)
   */
  onDisclose: PropTypes.func,
});

export default discloseShape;
