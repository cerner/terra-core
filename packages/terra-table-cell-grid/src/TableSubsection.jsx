import React from 'react';
import PropTypes from 'prop-types';
import SubsectionHeader from './TableSubsectionHeader';

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
   * Optionally sets the heading level. One of `3`, `4`, `5`, `6`.
   */
  level: PropTypes.oneOf([3, 4, 5, 6]),
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
   * Function callback pass-through for the ref of the section li.
   */
  refCallback: PropTypes.func,
  /**
   * Title text to be placed within the subsection header.
   */
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  children: [],
  isCollapsed: false,
  isCollapsible: false,
  level: 3,
};

const TableSubsection = ({
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
      <SubsectionHeader {...customProps} isCollapsible={isCollapsible} isCollapsed={isCollapsed} />
      {sectionItems}
    </React.Fragment>
  );
};

TableSubsection.propTypes = propTypes;
TableSubsection.defaultProps = defaultProps;

export default TableSubsection;
