import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import SelectableUtils from './ListUtils';
import styles from './ListSubsectionHeader.module.scss';

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
   * Function callback for the ref of the li.
   */
  metaData: PropTypes.object,
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
  onClick,
  onKeyDown,
  onSelect,
  refCallback,
  title,
  ...customProps
}) => {
  const sectionHeaderClassNames = cx([
    'subsection-header',
    { 'is-collapsible': isCollapsible },
    customProps.className,
  ]);

  const ariaSpread = {};
  const Element = `h${level}`;
  let titleElement = <Element className={cx('title')}>{title}</Element>;
  let accordionIcon;
  if (isCollapsible) {
    accordionIcon = (
      <div className={cx('item-start')}>
        <span className={cx(['accordion-icon', { 'is-open': !isCollapsed }])} />
      </div>
    );
    titleElement = (
      <div className={cx('item-fill')}>
        {titleElement}
      </div>
    );

    ariaSpread.onClick = SelectableUtils.wrappedOnClickForItem(onClick, true, onSelect, metaData);
    ariaSpread.onKeyDown = SelectableUtils.wrappedOnKeyDownForItem(onKeyDown, true, onSelect, metaData);
    ariaSpread.tabIndex = '0';
    ariaSpread.role = 'heading';
    ariaSpread['aria-expanded'] = !isCollapsed;
    ariaSpread['aria-level'] = 2;
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
