import React from 'react';
import PropTypes from 'prop-types';

/**
 * The props table parser continues to have trouble detecting the propTypes of a component that
 * returns `null`. I've duplicated the propType definition here so that a table could be parsed for it.
 */
const propTypes = {
  /**
   * The react key to apply to the cell.
   */
  key: PropTypes.string.isRequired,
  /**
   * Child content to be displayed for the row cell.
   */
  children: PropTypes.node,
  /**
   * Function callback returning the html node for the cell.
   */
  refCallback: PropTypes.func,
  /**
   * Whether or not the cell's inner containing element responsible for handling table's default padding is removed.
   * This is useful to optimize the DOM for either a table without padding or to optimize a cell whose custom content is providing its own padding.
   */
  removeInner: PropTypes.bool,
  /**
   * Additional attributes to be passed to the cell.
   */
  // eslint-disable-next-line react/forbid-prop-types
  attrs: PropTypes.object,
};
const PropTypesExample = ({ ...customProps }) => <div />; // eslint-disable-line no-unused-vars
PropTypesExample.propTypes = propTypes;
export default PropTypesExample;
