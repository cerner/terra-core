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
   * Whether or not the section is collapsed.
   */
  isCollapsed: PropTypes.bool,
  /**
   * Whether or not the section can be collapsed.
   */
  isCollapsible: PropTypes.bool,
  /**
   * Whether or not the header list item should have a border color applied.
   */
  isDivided: PropTypes.bool,
  /**
   * Optionally sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`. Default `level=2`.
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /**
   * Function callback for the ref of the li.
   */
  metaData: PropTypes.object,
  /**
   * Function callback for the ref of the li.
   */
  onClick: PropTypes.func,
  /**
   * Function callback for the ref of the li.
   */
  onKeyDown: PropTypes.func,
  /**
   * Function callback for the ref of the li.
   */
  onSelect: PropTypes.func,
  /**
   * Function callback passthrough for the ref of the section li.
   */
  refCallback: PropTypes.func,
  /**
   * Header to be placed within a section list item
   */
  title: PropTypes.string,
};
/* eslint-enable react/forbid-prop-types */

const defaultProps = {
  children: [],
  isCollapsed: false,
  isCollapsible: false,
  isDivided: false,
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
