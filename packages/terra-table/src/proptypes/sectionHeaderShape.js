import PropTypes from 'prop-types';

const sectionHeaderShape = PropTypes.shape({
  /**
   * The react key to apply to the section header.
   */
  key: PropTypes.string.isRequired,
  /**
   * The id to apply to the header in order to provide structure for AT.
   */
  id: PropTypes.string.isRequired,
  /**
  * Whether or not the section is collapsed.
  */
  isCollapsed: PropTypes.bool,
  /**
  * Whether or not the section can be collapsed.
  */
  isCollapsible: PropTypes.bool,
  /**
  * The associated metaData to be provided in the onSelect callback.
  */
  // eslint-disable-next-line react/forbid-prop-types
  metaData: PropTypes.object,
  /**
   * The numberOfColumns to be used as a descriptor for assistive technology.
   */
  numberOfColumns: PropTypes.number.isRequired,
  /**
  * Function callback for when the appropriate click or key action is performed to expand or collapse the section.
  * Callback contains the javascript event and prop metadata, e.g. onToggle(event, metaData)
  */
  onToggle: PropTypes.func,
  /**
  * Function callback pass-through for the ref of the section header.
  */
  refCallback: PropTypes.func,
  /**
  * Title text to be placed within the section header.
  */
  title: PropTypes.string.isRequired,
  /**
  * Additional attributes to be passed to the section header.
  */
  // eslint-disable-next-line react/forbid-prop-types
  attrs: PropTypes.object,
});

export default sectionHeaderShape;
