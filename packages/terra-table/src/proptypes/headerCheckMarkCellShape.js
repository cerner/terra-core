import PropTypes from 'prop-types';

const headerCellShape = PropTypes.shape({
  /**
   * The bottom padding to be used for the HeaderCheckMarkCell in rem(s).
   * To used in conjunction with a paddingStyle of none. Allowing for consumers to set their own padding.
   */
  alignmentPadding: PropTypes.number,
  /**
   * Whether or not the cell display as disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Whether or not a selected state should display as partially selected.
   */
  isIntermediate: PropTypes.bool,
  /**
   * Whether or not row is selected
   */
  isSelected: PropTypes.bool,
  /**
   * Whether or not row is selectable
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
   * Function callback for the ref of the td.
   */
  refCallback: PropTypes.func,
});

export default headerCellShape;
  