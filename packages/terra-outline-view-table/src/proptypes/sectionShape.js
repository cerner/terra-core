import PropTypes from 'prop-types';
import rowShape from './rowShape';
import sectionHeaderShape from './sectionHeaderShape';

const headerShape = PropTypes.shape({
  /**
    * The children list items passed to the component.
    */
  rows: PropTypes.arrayOf(rowShape),
  /**
    * The section header of the provided rows.
    */
  sectionHeader: sectionHeaderShape,
});

export default headerShape;
