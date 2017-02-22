import React, { PropTypes } from 'react';
import classNames from 'classnames';
import ChevronRight from 'terra-icon/lib/icon/themeable/chevronRight.svg';
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
  hasChevron: false,
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
    { 'terra-ListItem-isSelectable': isSelectable },
    { 'terra-ListItem-hasChevron': hasChevron },
    className,
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
