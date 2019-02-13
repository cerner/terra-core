import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import TableUtils from './TableUtils';
import styles from './TableSubsectionHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Number of columns the subsection header must span
   */
  colSpan: PropTypes.number.isRequired,
  /**
   * @private Whether or not the subsection is collapsed.
   */
  isCollapsed: PropTypes.bool,
  /**
   * @private Whether or not the subsection can be collapsed.
   */
  isCollapsible: PropTypes.bool,
  /**
   * Optionally sets the heading level. One of `3`, `4`, `5`, `6`.
   */
  level: PropTypes.oneOf([3, 4, 5, 6]),
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
};

const defaultProps = {
  isCollapsed: false,
  isCollapsible: false,
  level: 3,
};

const TableSubsectionHeader = ({
  colSpan,
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

    attrSpread.onClick = TableUtils.wrappedOnClickForItem(onClick, onSelect, metaData);
    attrSpread.onKeyDown = TableUtils.wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);
    attrSpread.tabIndex = '0';
    attrSpread.role = 'heading';
    attrSpread['aria-expanded'] = !isCollapsed;
    attrSpread['aria-level'] = 2;
    attrSpread['data-row-show-focus'] = 'true';
    attrSpread.onBlur = TableUtils.wrappedEventCallback(onBlur, event => event.currentTarget.setAttribute('data-row-show-focus', 'true'));
    attrSpread.onMouseDown = TableUtils.wrappedEventCallback(onMouseDown, event => event.currentTarget.setAttribute('data-row-show-focus', 'false'));
  }

  return (
    <tr {...customProps} {...attrSpread} className={sectionHeaderClassNames} ref={refCallback}>
      <td colSpan={colSpan}>
        <div className={cx('subsection-content')}>
          {accordionIcon}
          {titleElement}
        </div>
      </td>
    </tr>
  );
};

TableSubsectionHeader.propTypes = propTypes;
TableSubsectionHeader.defaultProps = defaultProps;

export default TableSubsectionHeader;
