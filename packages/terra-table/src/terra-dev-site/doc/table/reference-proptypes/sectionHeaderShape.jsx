import React from 'react';
import PropTypes from 'prop-types';

/**
 * The props table parser continues to have trouble detecting the propTypes of a component that
 * returns `null`. I've duplicated the propType definition here so that a table could be parsed for it.
 */
const propTypes = {
  /**
   * The react key to apply to the section header.
   */
  key: PropTypes.string.isRequired,
  /**
   * The id to apply to the header in order to provide structure for assistive technologies.
   */
  id: PropTypes.string.isRequired,
  /**
  * Whether or not the section is collapsed.
  */
  isCollapsed: PropTypes.bool,
  /**
  * Whether or not the section can be collapsed.
  */
  isCollapsible: PropTypes.bool,
  /**
  * The associated metaData to be provided in the onToggle(event, metaData) callback.
  */
  // eslint-disable-next-line react/forbid-prop-types
  metaData: PropTypes.object,
  /**
  * Function callback for when the appropriate click or key action is performed to expand or collapse the section.
  * Callback contains the javascript event and prop metadata, e.g. onToggle(event, metaData)
  */
  onToggle: PropTypes.func,
  /**
  * Function callback pass-through for the ref of the section header.
  */
  refCallback: PropTypes.func,
  /**
  * Title text to be placed within the section header.
  */
  title: PropTypes.string.isRequired,
  /**
  * Additional attributes to be passed to the section header.
  */
  // eslint-disable-next-line react/forbid-prop-types
  attrs: PropTypes.object,
};
const PropTypesExample = ({ ...customProps }) => <div />; // eslint-disable-line no-unused-vars
PropTypesExample.propTypes = propTypes;
export default PropTypesExample;
