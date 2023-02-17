import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ListUtils from './ListUtils';
import styles from './ListSectionHeader.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * @private Whether or not the section is collapsed.
   */
  isCollapsed: PropTypes.bool,
  /**
   * @private Whether or not the section can be collapsed.
   */
  isCollapsible: PropTypes.bool,
  /**
   * Optionally sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`.
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
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
   * Title text to be placed within the section header.
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
};

const defaultProps = {
  isCollapsed: false,
  isCollapsible: false,
  level: 1,
};

const ListSectionHeader = ({
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
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);

  const sectionHeaderClassNames = classNames(
    cx(
      'section-header',
      { 'is-collapsible': isCollapsible },
    ),
    customProps.className,
  );

  const attrSpread = {};
  const Element = `h${level}`;
  const titleElement = <div className={cx('fill')}>{title}</div>;
  let accordionIcon;
  if (isCollapsible) {
    accordionIcon = (
      <div className={cx('start')}>
        <span className={cx(['accordion-icon', { 'is-open': !isCollapsed }])} />
      </div>
    );

    attrSpread.onClick = ListUtils.wrappedOnClickForItem(onClick, onSelect, metaData);
    attrSpread.onKeyDown = ListUtils.wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);
    attrSpread.tabIndex = '0';
    attrSpread.role = 'button';
    attrSpread['aria-expanded'] = !isCollapsed;
    attrSpread['data-item-show-focus'] = 'true';
    attrSpread.onBlur = ListUtils.wrappedEventCallback(onBlur, event => event.currentTarget.setAttribute('data-item-show-focus', 'true'));
    attrSpread.onMouseDown = ListUtils.wrappedEventCallback(onMouseDown, event => event.currentTarget.setAttribute('data-item-show-focus', 'false'));
  }

  return (
    <li className={cx(theme.className)}>
      <Element className={cx('title')}>
        <div {...customProps} {...attrSpread} className={sectionHeaderClassNames} ref={refCallback}>
          {accordionIcon}
          {titleElement}
        </div>
      </Element>
    </li>
  );
};

ListSectionHeader.propTypes = propTypes;
ListSectionHeader.defaultProps = defaultProps;

export default ListSectionHeader;
