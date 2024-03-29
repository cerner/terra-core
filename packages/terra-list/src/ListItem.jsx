/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import { injectIntl } from 'react-intl';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import IconKnurling from 'terra-icon/lib/icon/IconKnurling';
import ListUtils from './ListUtils';
import styles from './List.module.scss';

const cx = classNamesBind.bind(styles);

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
  /**
   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.
   */
  onBlur: PropTypes.func,
  /**
   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.
   */
  onClick: PropTypes.func,
  /**
   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.
   */
  onKeyDown: PropTypes.func,
  /**
   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.
   */
  onMouseDown: PropTypes.func,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
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
  intl,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);

  const listItemClassNames = classNames(
    cx(
      'list-item',
      { selected: isSelected && isSelectable },
      { 'is-selectable': isSelectable },
      theme.className,
    ),
    customProps.className,
  );
  const { isDraggable, isTabFocusDisabled } = customProps;

  const attrSpread = {};

  const onFocusResponse = intl.formatMessage({ id: 'Terra.list.focus' });
  const responseId = `terra-hidden-tab-pane-response=${Math.random()}`;

  if (isSelectable) {
    attrSpread.onClick = ListUtils.wrappedOnClickForItem(onClick, onSelect, metaData);
    attrSpread.onKeyDown = ListUtils.wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);
    attrSpread.tabIndex = (isTabFocusDisabled) ? '-1' : '0';
    attrSpread.role = 'option';
    attrSpread['aria-selected'] = isSelected;
    attrSpread['data-item-show-focus'] = 'true';
    attrSpread.onBlur = ListUtils.wrappedEventCallback(onBlur, event => event.currentTarget.setAttribute('data-item-show-focus', 'true'));
    attrSpread.onMouseDown = ListUtils.wrappedEventCallback(onMouseDown, event => event.currentTarget.setAttribute('data-item-show-focus', 'false'));
  }
  if (isDraggable) {
    if (!onSelect) {
      attrSpread.onClick = (event) => {
        event?.currentTarget?.focus();
        return onClick;
      };
    }
    attrSpread['aria-describedby'] = responseId;
  }

  delete customProps?.isTabFocusDisabled;
  delete customProps?.isDraggable;

  return (
    <li {...customProps} {...attrSpread} className={listItemClassNames} ref={refCallback}>
      {(isDraggable) && (
        <div key="knurling-icon">
          <IconKnurling />
          <VisuallyHiddenText aria-hidden id={responseId} text={onFocusResponse} />
        </div>
      )}
      <div className={cx('item-fill')} key="item-fill">
        {children}
      </div>
      {hasChevron && <div className={cx('item-end')} key="item-end"><span className={cx('chevron')}><ChevronRight height="1em" width="1em" /></span></div>}
    </li>
  );
};

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default injectIntl(ListItem);
