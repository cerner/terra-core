import React from 'react';
import PropTypes from 'prop-types';
import cellShape from '../../../../proptypes/cellShape';

/**
 * The props table parser continues to have trouble detecting the propTypes of a component that
 * returns `null`. I've duplicated the propType definition here so that a table could be parsed for it.
 */
const propTypes = {
/**
   * The index of the row is derived by default, but in the case of paging and virtualization a different index may be needed as an override.
   */
  index: PropTypes.number,
  /**
   * The index of the cell that provides the accessible link entry point for disclosure style rows.
   */
  primaryCellIndex: PropTypes.number,
  /**
   * The react key to apply to the row.
   */
  key: PropTypes.string.isRequired,
  /**
   * The check mark is by default vertically centered. The alignment prop sets the top spacing of the check, standard units are valid.
   */
  checkAlignment: PropTypes.string,
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
   * Whether or not the row is the currently selected disclosure.
   * This aria state relates to the primary link cell.
   */
  isDisclosed: PropTypes.bool,
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
};
const PropTypesExample = ({ ...customProps }) => <div />; // eslint-disable-line no-unused-vars
PropTypesExample.propTypes = propTypes;
export default PropTypesExample;
