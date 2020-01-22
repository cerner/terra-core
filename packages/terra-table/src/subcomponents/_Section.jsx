import React from 'react';
import PropTypes from 'prop-types';
import SectionHeader from './_SectionHeader';

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
  /**
   * The numberOfColumns to be used as a descriptor for assistive technology.
   */
  numberOfColumns: PropTypes.number.isRequired,
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
};

const defaultProps = {
  children: [],
  isCollapsed: false,
  isCollapsible: false,
};

const Section = ({
  children,
  isCollapsed,
  isCollapsible,
  ...customProps
}) => {
  let sectionItems;
  if (!isCollapsible || !isCollapsed) {
    sectionItems = children;
  }

  return (
    <React.Fragment>
      <SectionHeader {...customProps} isCollapsible={isCollapsible} isCollapsed={isCollapsed} />
      {sectionItems}
    </React.Fragment>
  );
};

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
