import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import ChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import SelectableUtils from './ListUtils';
import styles from './ListItem.module.scss';

const cx = classNames.bind(styles);

// Disable this lint rule to allow for the metaData prop
/* eslint-disable react/forbid-prop-types */
const propTypes = {
  /**
   * The content element to be placed inside the list item for display.
   */
  children: PropTypes.node,
  /**
   * Whether or not the list item has a disclosure indicator presented.
   */
  hasChevron: PropTypes.bool,
  /**
   * Whether or not the child list items should have a border color applied.
   */
  isDivided: PropTypes.bool,
  /**
   * Whether or not the list item should have selection styles applied.
   */
  isSelected: PropTypes.bool,
  /**
   * Whether or not the list item should have styles to indicate the item is selectable.
   */
  isSelectable: PropTypes.bool,
  /**
   * Function callback for the ref of the li.
   */
  metaData: PropTypes.object,
  /**
   * Function callback for the ref of the li.
   */
  onChange: PropTypes.func,
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
  refCallback: PropTypes.func,
};
/* eslint-enable react/forbid-prop-types */

const defaultProps = {
  children: [],
  hasChevron: undefined,
  isDivided: false,
  isSelected: false,
  isSelectable: undefined,
};

/**
 * Returns a wrapped onClick callback function.
 */
const wrappedOnClickForItem = (onClick, isSelectable, onChange, metaData) => (
  (event) => {
    // The default isSelectable attribute is either undefined or true, unless the consumer specifies the item isSelectable attribute as false.
    if (isSelectable !== false && onChange) {
      onChange(event, metaData);
    }

    if (onClick) {
      onClick(event);
    }
  }
);

/**
 * Returns a wrapped onKeyDown callback function with enter and space keys triggering onChange.
 */
const wrappedOnKeyDownForItem = (onKeyDown, isSelectable, onChange, metaData) => (
  (event) => {
    if (event.nativeEvent.keyCode === SelectableUtils.KEYCODES.ENTER || event.nativeEvent.keyCode === SelectableUtils.KEYCODES.SPACE) {
      // The default isSelectable attribute is either undefined or true, unless the consumer specifies the item isSelectable attribute as false.
      if (isSelectable !== false && onChange) {
        onChange(event, metaData);
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  }
);

const ListItem = ({
  children,
  hasChevron,
  isDivided,
  isSelected,
  isSelectable,
  metaData,
  onChange,
  onClick,
  onKeyDown,
  refCallback,
  ...customProps
}) => {
  const listItemClassNames = cx([
    'list-item',
    { divided: isDivided },
    { selected: isSelected },
    { 'is-selectable': isSelectable },
    { 'item-has-chevron': hasChevron },
    customProps.className,
  ]);

  const ariaSpread = {};
  if (isSelectable) {
    ariaSpread.onClick = wrappedOnClickForItem(onClick, isSelectable, onChange, metaData);
    ariaSpread.onKeyDown = wrappedOnKeyDownForItem(onKeyDown, isSelectable, onChange, metaData);
    ariaSpread.tabIndex = '0';
    ariaSpread.role = 'option';
    ariaSpread['aria-selected'] = isSelected;
  }

  let childContent = children;
  if (hasChevron) {
    childContent = [
      <div className={cx('item-fill')} key="item-fill">{childContent}</div>,
      <div className={cx('item-end')} key="item-end">{<span className={cx('chevron')}><ChevronRight height="0.8em" width="0.8em" /></span>}</div>,
    ];
  }

  return (
    <li {...customProps} {...ariaSpread} className={listItemClassNames} ref={refCallback}>
      {childContent}
    </li>
  );
};

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
