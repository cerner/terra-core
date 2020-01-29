import React from 'react';
import PropTypes from 'prop-types';
import headerCellShape from '../../../../proptypes/headerCellShape';
import selecAllColumnShape from '../../../../proptypes/selectAllColumnShape';
/**
 * The props table parser continues to have trouble detecting the propTypes of a component that
 * returns `null`. I've duplicated the propType definition here so that a table could be parsed for it.
 */
const propTypes = {
  /**
   * The cells to be displayed within the header.
   */
  cells: PropTypes.arrayOf(headerCellShape),
  /**
   * Function callback returning the html node for the header.
   */
  refCallback: PropTypes.func,
  /**
   * The select all column header's properties.
   */
  selectAllColumn: selecAllColumnShape,
};
const PropTypesExample = ({ ...customProps }) => <div />; // eslint-disable-line no-unused-vars
PropTypesExample.propTypes = propTypes;
export default PropTypesExample;
