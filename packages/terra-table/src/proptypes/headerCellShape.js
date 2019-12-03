import PropTypes from 'prop-types';

const headerCellShape = PropTypes.shape({
  /**
   * The id of the header cell for the row cells to set within their "headers" prop.
   */
  id: PropTypes.string.isRequired,
  /**
   * The react key to apply to the cell.
   */
  key: PropTypes.string.isRequired,
  /**
   * Content to be displayed for the column header.
   */
  children: PropTypes.node,
  /**
   * Whether or not header cell should appear as a selectable element.
   */
  isSelectable: PropTypes.bool,
  /**
   * The associated metaData to be provided in the onSelect callback.
   */
  // eslint-disable-next-line react/forbid-prop-types
  metaData: PropTypes.object,
  /**
   * Function callback for when the appropriate click or key action is performed.
   * Callback contains the javascript event and prop metadata, e.g. onSelect(event, metaData)
   */
  onSelect: PropTypes.func,
  /**
   * Function callback returning the html node for the header cell.
   */
  refCallback: PropTypes.func,
  /**
   * Whether or not the cell's inner containing element responsible for handling table's default padding is removed.
   * This is useful to optimize the DOM for either a table without padding or to optimize a cell whose custom content is providing its own padding.
   */
  removeInner: PropTypes.bool,
  isSortDesc: PropTypes.bool,
  isSortActive: PropTypes.bool,
  onCellAction: PropTypes.func,
  onSortAction: PropTypes.func,
});

export default headerCellShape;
  