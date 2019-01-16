import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './TableRow.module.scss';
import TableUtils from './TableUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node,
  /**
   * Whether or not row is selected
   */
  isSelected: PropTypes.bool,
  /**
   * Whether or not row is selectable
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
   * Function callback for the ref of the tr.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  isSelected: false,
  isSelectable: false,
};

const TableRow = ({
  children,
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
  const rowClassNames = cx([
    { 'is-selected': isSelected && isSelectable },
    { 'is-selectable': isSelectable },
    'row',
    customProps.className,
  ]);

  const attrSpread = {};
  if (isSelectable) {
    attrSpread.onClick = TableUtils.wrappedOnClickForItem(onClick, onSelect, metaData);
    attrSpread.onKeyDown = TableUtils.wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);
    attrSpread.tabIndex = '0';
    attrSpread['aria-selected'] = isSelected;
    attrSpread['data-row-show-focus'] = 'true';
    attrSpread.onBlur = TableUtils.wrappedEventCallback(onBlur, event => event.currentTarget.setAttribute('data-row-show-focus', 'true'));
    attrSpread.onMouseDown = TableUtils.wrappedEventCallback(onMouseDown, event => event.currentTarget.setAttribute('data-row-show-focus', 'false'));
  }

  return (
    <tr {...customProps} {...attrSpread} className={rowClassNames} ref={refCallback}>
      {children}
    </tr>
  );
};

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

export default TableRow;
