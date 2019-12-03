import PropTypes from 'prop-types';
import cellShape from './cellShape';

const rowShape = PropTypes.shape({
  /**
   * The react key to apply to the row.
   */
  key: PropTypes.string.isRequired,
  /**
   * The check mark is by default vertically centered. The alignment prop sets the top spacing of the check mark in rem values.
   */
  checkAlignment: PropTypes.number,
  /**
   * The label associated to the toggle action for the row. Should be set if `'rowStyle'` or `'checkStyle'` are set to `'toggle'`.
   */
  toggleLabel: PropTypes.string,
  /**
   * The label associated to the disclose action for the row. Should be set if `'rowStyle'` is set to `'disclose'`.
   */
  discloseLabel: PropTypes.string,
  /**
   * Whether or not the row is in a togged state.
   */
  isToggled: PropTypes.bool,
  /**
   * Whether or not the row visually displays as in togged state.
   */
  isVisuallyToggled: PropTypes.bool,
  /**
   * The children to be passed as row content.
   */
  cells:  PropTypes.arrayOf(cellShape),
  /**
   * Whether or not the rows interaction is disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Whether or not row should display as a striped row.
   */
  isStriped: PropTypes.bool,
  /**
   * The associated metaData to be provided in the onSelect callback.
   */
  // eslint-disable-next-line react/forbid-prop-types
  metaData: PropTypes.object,
  /**
   * Function callback for when the appropriate click or key action is performed.
   * Callback contains the javascript event and prop metadata, e.g. onRowAction(event, metaData)
   */
  onRowAction: PropTypes.func,
  /**
   * Function callback for when the appropriate click or key action is performed.
   * Callback contains the javascript event and prop metadata, e.g. onCheckAction(event, metaData)
   */
  onCheckAction: PropTypes.func,
  /**
   * Function callback returning the html node for the row.
   */
  refCallback: PropTypes.func,
  /**
   * Additional attributes to be passed to the row.
   */
  // eslint-disable-next-line react/forbid-prop-types
  attrs: PropTypes.object,
});

export default rowShape;
