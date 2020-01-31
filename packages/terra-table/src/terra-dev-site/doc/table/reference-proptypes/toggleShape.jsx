import React from 'react';
import PropTypes from 'prop-types';

/**
 * The props table parser continues to have trouble detecting the propTypes of a component that
 * returns `null`. I've duplicated the propType definition here so that a table could be parsed for it.
 */
const propTypes = {
  /**
   * The label associated to the toggle action for the row.
   */
  toggleLabel: PropTypes.string.isRequired,

  /**
   * Whether or not the row is in a togged state, this covers both `'checkStyle'` and `'rowStyle'` toggle states.
   */
  isToggled: PropTypes.bool,
  /**
   * The associated metaData to be return within row toggle callbacks.
   */
  // eslint-disable-next-line react/forbid-prop-types
  metaData: PropTypes.object,
  /**
   * Function callback for when the appropriate click or key action is performed.
   * Callback contains the javascript event and prop metadata, e.g. onCheckAction(event, metaData)
   */
  onToggle: PropTypes.func,
};
const PropTypesExample = ({ ...customProps }) => <div />; // eslint-disable-line no-unused-vars
PropTypesExample.propTypes = propTypes;
export default PropTypesExample;
