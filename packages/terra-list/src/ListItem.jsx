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
    { 'terra-ListItem-isSelectable': isSelectable },
    { 'terra-ListItem-hasChevron': hasChevron },
    className,
  ]);

  let chevron;
  if (hasChevron) {
    chevron = <ChevronRight height="10" width="10" />;
  }

  return (
    <li {...customProps} className={listItemClassNames}>
      {content}
      <span className="terra-ListItem-chevron">
        {chevron}
      </span>
    </li>
  );
};

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
