import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ListUtils from './ListUtils';
import styles from './ListSubsectionHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * @private Whether or not the subsection is collapsed.
   */
  isCollapsed: PropTypes.bool,
  /**
   * @private Whether or not the subsection can be collapsed.
   */
  isCollapsible: PropTypes.bool,
  /**
   * Optionally sets the heading level. One of `2`, `3`, `4`, `5`, `6`.
   */
  level: PropTypes.oneOf([2, 3, 4, 5, 6]),
  /**
   * @private The associated metaData to be provided in the onSelect callback.
   */
  // eslint-disable-next-line react/forbid-prop-types
  metaData: PropTypes.object,
  /**
   * @private Function callback for when the appropriate click or key action is performed.
   * Callback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)
   */
  onSelect: PropTypes.func,
  /**
   * Function callback passthrough for the ref of the section li.
   */
  refCallback: PropTypes.func,
  /**
   * Title text to be placed within the subsection header.
   */
  title: PropTypes.string.isRequired,
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
   * Accessibility role of the list, defaults to 'none'. If creating a list with selectable items, pass 'listbox'.
   */
  role: PropTypes.string,
  /**
   * Whether or not the list-subsection-header item is disabled.
   * Set to `true` only for non-selectable items along with `isSelectable` prop.
   */
  isDisabled: PropTypes.bool,

};

const defaultProps = {
  isCollapsed: false,
  isCollapsible: false,
  level: 2,
  role: 'none',
  isDisabled: false,
};

const ListSubsectionHeader = ({
  isCollapsed,
  isCollapsible,
  level,
  metaData,
  onBlur,
  onClick,
  onKeyDown,
  onMouseDown,
  onSelect,
  refCallback,
  title,
  role,
  isDisabled,
  ...customProps
}) => {
  const sectionHeaderClassNames = cx([
    'subsection-header',
    { 'is-collapsible': isCollapsible },
    customProps.className,
  ]);

  const attrSpread = {};
  const Element = `h${level}`;
  let titleElement = <Element className={cx('title')}>{title}</Element>;
  let accordionIcon;
  if (isCollapsible) {
    accordionIcon = (
      <div className={cx('start')}>
        <span className={cx(['accordion-icon', { 'is-open': !isCollapsed }])} />
      </div>
    );
    titleElement = (
      <div className={cx('fill')}>
        {titleElement}
      </div>
    );

    attrSpread.onClick = ListUtils.wrappedOnClickForItem(onClick, onSelect, metaData);
    attrSpread.onKeyDown = ListUtils.wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);
    attrSpread.tabIndex = '0';
    attrSpread.role = 'heading';
    attrSpread['aria-expanded'] = !isCollapsed;
    attrSpread['aria-level'] = 2;
    attrSpread['data-item-show-focus'] = 'true';
    attrSpread.onBlur = ListUtils.wrappedEventCallback(onBlur, event => event.currentTarget.setAttribute('data-item-show-focus', 'true'));
    attrSpread.onMouseDown = ListUtils.wrappedEventCallback(onMouseDown, event => event.currentTarget.setAttribute('data-item-show-focus', 'false'));
  }
  if (role && role.length > 0 && role !== 'none') {
    attrSpread.role = role;
  }
  if (isDisabled) {
    attrSpread['aria-disabled'] = true;
  }

  return (
    <li {...customProps} {...attrSpread} className={sectionHeaderClassNames} ref={refCallback}>
      {accordionIcon}
      {titleElement}
    </li>
  );
};

ListSubsectionHeader.propTypes = propTypes;
ListSubsectionHeader.defaultProps = defaultProps;

export default ListSubsectionHeader;
