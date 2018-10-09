import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import ListItem from './ListItem';

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
  /**
   * Header to be placed within a section list item
   */
  header: PropTypes.element,
  /**
   * Whether or not the section is collapsed.
   */
  isCollapsed: PropTypes.bool,
  /**
   * Function callback for the ref of the li.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  children: [],
  isCollapsed: false,
};

const ListSection = ({
  children,
  disableUnselectedItems,
  hasChevron,
  header,
  isCollapsed,
  isSelected,
  isSelectable,
  refCallback,
  ...customProps
}) => {
  let sectionItems;
  if (!isCollapsed) {
    sectionItems = children;
  }

  return (
    <React.Fragment>
      <ListItem {...customProps} refCallback={refCallback}>
        {header}
      </ListItem>
      {sectionItems}
    </React.Fragment>
  );
};

ListSection.propTypes = propTypes;
ListSection.defaultProps = defaultProps;

export default ListSection;
