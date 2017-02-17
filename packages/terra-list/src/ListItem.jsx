import React, { PropTypes } from 'react';
import classNames from 'classnames';
import '../src/list-item.scss';

const propTypes = {
  className: PropTypes.string,
  content: PropTypes.element,
  isSelected: PropTypes.bool,
  isSelectable: PropTypes.bool,
  hasChevron: PropTypes.bool,
};

const defaultProps = {
  className: '',
  content: undefined,
  isSelected: false,
  isSelectable: undefined,
  hasChevron: undefined,
};

const ListItem = ({
    className,
    content,
    isSelected,
    isSelectable,
    hasChevron,
    ...customProps
  }) => {
  const listItemClassNames = classNames([
    'terra-ListItem',
    { 'terra-ListItem--selected': isSelected },
    { 'terra-ListItem-selectable': isSelectable },
    { 'terra-ListItem-chevron': hasChevron },
    className,
  ]);

  return (
    <li {...customProps} className={listItemClassNames}>
      {content}
    </li>
  );
};

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
