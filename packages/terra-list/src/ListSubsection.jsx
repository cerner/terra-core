import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import SubsectionHeader from './ListSubsectionHeader';

// Disable this lint rule to allow for the metaData prop
/* eslint-disable react/forbid-prop-types */
const propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
  /**
   * Whether or not the subsection is collapsed.
   */
  isCollapsed: PropTypes.bool,
  /**
   * Whether or not the subsection can be collapsed.
   */
  isCollapsible: PropTypes.bool,
  /**
   * Optionally sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`. Default `level=2`.
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /**
   * The associated metaData to be provided in the onSelect callback.
   */
  metaData: PropTypes.object,
  /**
   * Function callback for when the appropriate click or key action is performed.
   * Callback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)
   */
  onSelect: PropTypes.func,
  /**
   * Function callback passthrough for the ref of the section li.
   */
  refCallback: PropTypes.func,
  /**
   * Title text to be placed within the subsection header.
   */
  title: PropTypes.string,
};
/* eslint-enable react/forbid-prop-types */

const defaultProps = {
  children: [],
  isCollapsed: false,
  isCollapsible: false,
  level: 2,
  title: '',
};

const ListSubsection = ({
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
      <SubsectionHeader isCollapsible={isCollapsible} isCollapsed={isCollapsed} {...customProps} />
      {sectionItems}
    </React.Fragment>
  );
};

ListSubsection.propTypes = propTypes;
ListSubsection.defaultProps = defaultProps;

export default ListSubsection;
