import React from 'react';
import PropTypes from 'prop-types';
import rowShape from '../../../../proptypes/rowShape';
import sectionHeaderShape from '../../../../proptypes/sectionHeaderShape';
/**
 * The props table parser continues to have trouble detecting the propTypes of a component that
 * returns `null`. I've duplicated the propType definition here so that a table could be parsed for it.
 */
const propTypes = {
  /**
    * The children list items passed to the component.
    */
  rows: PropTypes.arrayOf(rowShape),
  /**
   * The section header of the provided rows.
   */
  sectionHeader: sectionHeaderShape,
};
const PropTypesExample = ({ ...customProps }) => <div />; // eslint-disable-line no-unused-vars
PropTypesExample.propTypes = propTypes;
export default PropTypesExample;
