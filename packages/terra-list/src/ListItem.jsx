import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Arrange from 'terra-arrange';
import ChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import styles from './List.module.scss';

const cx = classNames.bind(styles);

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
  /**
   * Function callback for the ref of the li.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  content: undefined,
  isSelected: false,
  isSelectable: undefined,
  hasChevron: undefined,
};

const ListItem = ({
  content,
  isSelected,
  isSelectable,
  hasChevron,
  refCallback,
  ...customProps
}) => {
  const listItemClassNames = cx([
    'list-item',
    { selected: isSelected },
    { 'is-selectable': isSelectable },
    customProps.className,
  ]);

  const ariaSpread = isSelectable ? { role: 'option', 'aria-selected': isSelected } : {};

  if (hasChevron) {
    const chevron = <span className={cx('chevron')}><ChevronRight height="1em" width="1em" /></span>;

    return (
      <li {...customProps} {...ariaSpread} className={listItemClassNames} ref={refCallback}>
        <Arrange
          fill={content}
          fitEnd={chevron}
          align="center"
          fillAttributes={{ className: cx('arrange-content') }}
        />
      </li>
    );
  }

  return (
    <li {...customProps} {...ariaSpread} className={listItemClassNames} ref={refCallback}>
      {content}
    </li>
  );
};

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
