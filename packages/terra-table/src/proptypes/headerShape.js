import PropTypes from 'prop-types';
import headerCellShape from './headerCellShape';

const headerShape = PropTypes.shape({
  id: PropTypes.string,
  key: PropTypes.string,
  cells: PropTypes.arrayOf(headerCellShape),
  refCallback: PropTypes.func,
  isCheckboxEnabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  isIntermediate: PropTypes.bool,
});

export default headerShape;