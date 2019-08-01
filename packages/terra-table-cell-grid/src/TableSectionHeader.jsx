import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TableUtils from './TableUtils';
import styles from './TableSectionHeader.module.scss';

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
   * Function callback pass-through for the ref of the section li.
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

const TableSectionHeader = ({
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

    attrSpread.onClick = TableUtils.wrappedOnClickForItem(onClick, onSelect, metaData);
    attrSpread.onKeyDown = TableUtils.wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);
    attrSpread.tabIndex = '0';
    attrSpread.role = 'heading';
    attrSpread['aria-expanded'] = !isCollapsed;
    attrSpread['aria-level'] = 1;
    attrSpread['data-row-show-focus'] = 'true';
    attrSpread.onBlur = TableUtils.wrappedEventCallback(onBlur, event => event.currentTarget.setAttribute('data-row-show-focus', 'true'));
    attrSpread.onMouseDown = TableUtils.wrappedEventCallback(onMouseDown, event => event.currentTarget.setAttribute('data-row-show-focus', 'false'));
  }

  return (
    <div {...customProps} className={sectionHeaderClassNames} ref={refCallback}>
      <div {...attrSpread} className={cx(['section-content', { 'is-collapsible': isCollapsible }])}>
        {accordionIcon}
        {titleElement}
      </div>
    </div>
  );
};

TableSectionHeader.propTypes = propTypes;
TableSectionHeader.defaultProps = defaultProps;

export default TableSectionHeader;
