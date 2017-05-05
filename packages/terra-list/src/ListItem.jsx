import React, { PropTypes } from 'react';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import ChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import './ListItem.scss';

const propTypes = {
  /**
   * The content element to be placed inside the list item for display.
   */
  content: PropTypes.element,
  /**
   * Whether or not the list item should have selection styles applied.
   */
  isSelected: PropTypes.bool,
  /**
   * Whether or not the list item should have styles to indicate the item is selectable.
   */
  isSelectable: PropTypes.bool,
  /**
   * Whether or not the list item has a disclosure indicator presented.
   */
  hasChevron: PropTypes.bool,
};

const defaultProps = {
  content: undefined,
  isSelected: false,
  isSelectable: false,
  hasChevron: false,
};

const ListItem = ({
    content,
    isSelected,
    isSelectable,
    hasChevron,
    ...customProps
  }) => {
  const listItemClassNames = classNames([
    'terra-ListItem',
    { 'terra-ListItem--selected': isSelected },
    { 'terra-ListItem-isSelectable': isSelectable },
    { 'terra-ListItem-hasChevron': hasChevron },
    customProps.className,
  ]);

  let chevron;
  if (hasChevron) {
    chevron = <span className="terra-ListItem-chevron"><ChevronRight height="10" width="10" /></span>;
  }

  return (
    <li {...customProps} className={listItemClassNames}>
      {content}
      {chevron}
    </li>
  );
};

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
