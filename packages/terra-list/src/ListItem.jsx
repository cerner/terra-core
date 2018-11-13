import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import ChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import ListUtils from './ListUtils';
import styles from './ListItem.module.scss';

const cx = classNames.bind(styles);

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
   * Whether or not the list item should have selection styles applied.
   */
  isSelected: PropTypes.bool,
  /**
   * Whether or not the list item should have styles to indicate the item is selectable.
   */
  isSelectable: PropTypes.bool,
  /**
   * The associated metaData to be provided in the onSelect callback.
   */
  // eslint-disable-next-line react/forbid-prop-types
  metaData: PropTypes.object,
  /**
   * Function callback for when the appropriate click or key action is performed.
   * Callback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)
   */
  onSelect: PropTypes.func,
  /**
   * Function callback for the ref of the li.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  children: [],
  hasChevron: false,
  isSelected: false,
  isSelectable: false,
};

const ListItem = ({
  children,
  hasChevron,
  isSelected,
  isSelectable,
  metaData,
  onBlur,
  onClick,
  onKeyDown,
  onMouseDown,
  onSelect,
  refCallback,
  ...customProps
}) => {
  const listItemClassNames = cx([
    'list-item',
    { selected: isSelected },
    { 'is-selectable': isSelectable },
    { 'item-has-chevron': hasChevron },
    customProps.className,
  ]);

  const ariaSpread = {};
  if (isSelectable) {
    ariaSpread.onClick = ListUtils.wrappedOnClickForItem(onClick, onSelect, metaData);
    ariaSpread.onKeyDown = ListUtils.wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);
    ariaSpread.tabIndex = '0';
    ariaSpread.role = 'option';
    ariaSpread['aria-selected'] = isSelected;
    ariaSpread['data-item-show-focus'] = 'true';
    ariaSpread.onBlur = ListUtils.wrappedOnBlur(onBlur, event => event.currentTarget.setAttribute('data-item-show-focus', 'true'));
    ariaSpread.onMouseDown = ListUtils.wrappedOnMouseDown(onMouseDown, event => event.currentTarget.setAttribute('data-item-show-focus', 'false'));
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
