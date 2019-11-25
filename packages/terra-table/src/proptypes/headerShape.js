import PropTypes from 'prop-types';
import headerCellShape from './headerCellShape';

const headerShape = PropTypes.shape({
  id: PropTypes.string,
  key: PropTypes.string,
  checkAlignment: PropTypes.number,
  cells: PropTypes.arrayOf(headerCellShape),
  refCallback: PropTypes.func,
  allowSelectAll: PropTypes.bool,
  selectAllStatus: PropTypes.oneOf(['empty', 'checked', 'indeterminate']),
  selectColumnHeaderLabel: PropTypes.string,
});

export default headerShape;