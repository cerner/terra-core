import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import {
  wrappedOnClickForItem,
  wrappedOnKeyDownForItem,
  wrappedEventCallback,
} from './TableUtils';
import styles from './SectionHeader.module.scss';

const cx = classNames.bind(styles);

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
   * Callback contains the javascript event and prop metadata, e.g. onSelect(event, metaData)
   */
  onSelect: PropTypes.func,
  /**
   * Function callback returning the html node of the header.
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
  level: 2,
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
  id,
  ...customProps
}) => {
  const attrSpread = {};
  // const Element = `h${level}`;
  let titleElement = <span aria-hidden="true" className={cx('title')}>{title}</span>;
  let accordionIcon;
  if (isCollapsible) {
    accordionIcon = (
      <div className={cx('start')}>
        <span className={cx(['accordion-icon', { 'is-open': !isCollapsed }])} />
      </div>
    );
    titleElement = (
      <div role="columnheader" className={cx('fill')}>
        {titleElement}
      </div>
    );

    attrSpread.onClick = wrappedOnClickForItem(onClick, onSelect, metaData);
    attrSpread.onKeyDown = wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);
    attrSpread.tabIndex = '0';
    attrSpread['aria-expanded'] = !isCollapsed;
    attrSpread['data-row-show-focus'] = 'true';
    attrSpread.onBlur = wrappedEventCallback(onBlur, event => event.currentTarget.setAttribute('data-row-show-focus', 'true'));
    attrSpread.onMouseDown = wrappedEventCallback(onMouseDown, event => event.currentTarget.setAttribute('data-row-show-focus', 'false'));
  }

  const sectionHeaderClasses = cx(
    'section-header',
    { 'is-collapsible': isCollapsible },
  );

  return (
    <div
      {...customProps}
      className={customProps.className ? `${sectionHeaderClasses} ${customProps.className}` : sectionHeaderClasses}
      ref={refCallback}
      role="row"
    >
      <div
        {...attrSpread}
        id={id}
        colSpan={3}
        headers=""
        scope="colgroup"
        role="columnheader"
        className={cx('section-content')}
      >
        {/* {accordionIcon} */}
        {/* {titleElement} */}
        {title}
      </div>
    </div>
  );
};

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;
