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
   * Whether or not the sort indicator is descending.
   */
  isSortDesc: PropTypes.bool,
  /**
   * Whether or not the column is to be marked as a sorted column.
   */
  isSortActive: PropTypes.bool,
  /**
   * The associated metaData to be provided in the onCellAction and onSortAction callbacks.
   */
  // eslint-disable-next-line react/forbid-prop-types
  metaData: PropTypes.object,
  /**
   * Function callback for when the appropriate click or key action is performed.
   * Callback contains the javascript event and prop metadata, e.g. onCellAction(event, metaData)
   * The presence of this func will indicate that the cell can be interacted with for actions or selections.
   */
  onCellAction: PropTypes.func,
  /**
   * Function callback for when the appropriate click or key action is performed.
   * Callback contains the javascript event and prop metadata, e.g. onSortAction(event, metaData)
   * The presence of this func will indicate that the cell can be interacted with for sorting.
   */
  onSortAction: PropTypes.func,
  /**
   * Function callback returning the html node for the header cell.
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

export default headerCellShape;
