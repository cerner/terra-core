import React from 'react';
import PropTypes from 'prop-types';
import cellShape from '../../../../proptypes/cellShape';
import discloseShape from '../../../../proptypes/discloseShape';
import toggleShape from '../../../../proptypes/toggleShape';

/**
 * The props table parser continues to have trouble detecting the propTypes of a component that
 * returns `null`. I've duplicated the propType definition here so that a table could be parsed for it.
 */
const propTypes = {
  /**
   * Additional attributes to be passed to the row.
   */
  // eslint-disable-next-line react/forbid-prop-types
  attrs: PropTypes.object,
  /**
   * The children to be passed as row content.
   */
  cells: PropTypes.arrayOf(cellShape),
  /**
   * The check mark is by default vertically centered. The alignment prop sets the top spacing of the check, standard units are valid.
   */
  checkAlignment: PropTypes.string,
  /**
   * Data relating to the `'disclose'` for either rowStyle actions.
   */
  discloseAction: discloseShape,
  /**
   * The aria-rowindex for the row is derived by default, but in the case of paging and virtualization a different index may be needed as an override.
   */
  index: PropTypes.number,
  /**
   * Whether or not the rows interaction is disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Whether or not row should display as a striped row.
   */
  isStriped: PropTypes.bool,
  /**
   * The react key to apply to the row.
   */
  key: PropTypes.string.isRequired,
  /**
   * Function callback returning the html node for the row.
   */
  refCallback: PropTypes.func,
  /**
   * Data relating to the `'toggle'` for either rowStyle or checkStyle row actions.
   */
  toggleAction: toggleShape,
};
const PropTypesExample = ({ ...customProps }) => <div />; // eslint-disable-line no-unused-vars
PropTypesExample.propTypes = propTypes;
export default PropTypesExample;
