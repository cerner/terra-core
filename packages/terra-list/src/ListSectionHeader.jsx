import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import ListUtils from './ListUtils';
import styles from './ListSectionHeader.module.scss';

const cx = classNames.bind(styles);

/* eslint-disable react/forbid-prop-types */
const propTypes = {
  /**
   * Whether or not the section is collapsed.
   */
  isCollapsed: PropTypes.bool,
  /**
   * Whether or not the section can be collapsed.
   */
  isCollapsible: PropTypes.bool,
  /**
   * Optionally sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`. Default `level=2`.
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /**
   * The associated metaData to be provided in the onSelect callback.
   */
  metaData: PropTypes.object,
  /**
   * Function callback for when the appropriate click or key action is performed.
   * Callback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)
   */
  onSelect: PropTypes.func,
  /**
   * Function callback passthrough for the ref of the section li.
   */
  refCallback: PropTypes.func,
  /**
   * Header to be placed within a section list item
   */
  title: PropTypes.string,
};
/* eslint-enable react/forbid-prop-types */

const defaultProps = {
  isCollapsed: false,
  isCollapsible: false,
  level: 2,
  title: '',
};

const SectionHeader = ({
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
  const sectionHeaderClassNames = cx([
    'section-header',
    { 'is-collapsible': isCollapsible },
    customProps.className,
  ]);

  const ariaSpread = {};
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

    ariaSpread.onClick = ListUtils.wrappedOnClickForItem(onClick, onSelect, metaData);
    ariaSpread.onKeyDown = ListUtils.wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);
    ariaSpread.tabIndex = '0';
    ariaSpread.role = 'heading';
    ariaSpread['aria-expanded'] = !isCollapsed;
    ariaSpread['aria-level'] = 1;
    ariaSpread.onBlur = ListUtils.wrappedOnBlur(onBlur, event => event.currentTarget.setAttribute('data-focusable', 'true'));
    ariaSpread.onMouseDown = ListUtils.wrappedOnMouseDown(onMouseDown, event => event.currentTarget.setAttribute('data-focusable', 'false'));
  }

  return (
    <li {...customProps} {...ariaSpread} className={sectionHeaderClassNames} ref={refCallback}>
      {accordionIcon}
      {titleElement}
    </li>
  );
};

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;
