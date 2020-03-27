import React from 'react';
import PropTypes from 'prop-types';

/**
 * The props table parser continues to have trouble detecting the propTypes of a component that
 * returns `null`. I've duplicated the propType definition here so that a table could be parsed for it.
 */
const propTypes = {
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
};
const PropTypesExample = ({ ...customProps }) => <div />; // eslint-disable-line no-unused-vars
PropTypesExample.propTypes = propTypes;
export default PropTypesExample;
