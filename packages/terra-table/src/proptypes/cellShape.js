import PropTypes from 'prop-types';

const cellShape = PropTypes.shape({
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
});

export default cellShape;
