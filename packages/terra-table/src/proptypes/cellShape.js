import PropTypes from 'prop-types';

const cellShape = PropTypes.shape({
  /**
   * Content that will be rendered within the Cell.
   */
  content: PropTypes.node,
  /**
   *  Boolean indicating if cell contents are masked.
   */
  isMasked: PropTypes.bool,
});

export default cellShape;
