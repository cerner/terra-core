import PropTypes from 'prop-types';
import headerCellShape from './headerCellShape';
import selecAllColumnShape from './selectAllColumnShape';

const headerShape = PropTypes.shape({
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
});

export default headerShape;
