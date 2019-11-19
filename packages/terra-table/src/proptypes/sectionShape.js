import PropTypes from 'prop-types';
import rowShape from './rowShape';

const headerShape = PropTypes.shape({
  /**
    * The children list items passed to the component.
    */
  rows: PropTypes.arrayOf(rowShape),
  sectionHeader: PropTypes.shape({
    key: PropTypes.string.isRequired,
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
    * Function callback for when the appropriate click or key action is performed.
    * Callback contains the javascript event and prop metadata, e.g. onSelect(event, metaData)
    */
    onSelect: PropTypes.func,
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
  }),
});

export default headerShape;
