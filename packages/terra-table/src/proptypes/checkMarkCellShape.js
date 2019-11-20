import PropTypes from 'prop-types';

const checkMarkShape = PropTypes.shape({
    key: PropTypes.string.isRequired,
  /**
     * The top padding to be used for the CheckMarkCell in rem(s).
     * To used in conjunction with a paddingStyle of none. Allowing for consumers to set their own padding.
     * The presence of this property will also change alignment to a fixed value, rather then centered.
     */
    alignmentPadding: PropTypes.number,
    /**
     * Whether or not the cell display as disabled.
     */
    isDisabled: PropTypes.bool,
    /**
     * Whether or not the check should be it's own click target.
     */
    isSelectable: PropTypes.bool,
    /**
     * Whether or not the cell should display as selected with check mark.
     */
    isSelected: PropTypes.bool,
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
     * Function callback returning the html node of the check mark cell.
     */
    refCallback: PropTypes.func,
    /**
     * Additional attributes to be passed to the check mark cell.
     */
    // eslint-disable-next-line react/forbid-prop-types
    attrs: PropTypes.object,
  });

  export default checkMarkShape;
