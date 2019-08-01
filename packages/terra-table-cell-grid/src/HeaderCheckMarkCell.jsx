import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './HeaderCheckMarkCell.module.scss';
import TableUtils from './TableUtils';

const cx = classNames.bind(styles);

const propTypes = {
  checkMarkState: PropTypes.oneOf(['checked', 'unchecked', 'mixed']),
  /**
   * Whether or not the cell should adhere to the tables paddingStyle.
   */
  isPadded: PropTypes.bool,
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
   * Callback contains the javascript event and prop metadata, e.g. onSelect(event, metaData)
   */
  onSelect: PropTypes.func,
  /**
   * Function callback for the ref of the td.
   */
  refCallback: PropTypes.func,
  /**
   * Function callback for the ref of the td.
   */
  width: PropTypes.shape({
    static: PropTypes.shape({
      value: PropTypes.number,
      unit: PropTypes.string,
    }),
    percentage: PropTypes.number,
    scalar: PropTypes.number,
  }),
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
  isPadded: false,
  isSelected: false,
  isSelectable: false,
  checkMarkState: 'unchecked',
};

const classForState = {
  checked: 'is-checked',
  unchecked: 'is-unchecked',
  mixed: 'is-mixed',
};

const ariaForState = {
  checked: 'true',
  unchecked: 'false',
  mixed: 'mixed',
};

const HeaderCheckMarkCell = ({
  checkMarkState,
  isPadded,
  isSelected,
  isSelectable,
  metaData,
  onBlur,
  onClick,
  onKeyDown,
  onMouseDown,
  onSelect,
  refCallback,
  width,
  ...customProps
}) => {
  const cellClassNames = cx(
    'header-cell',
    customProps.className,
  );

  const attrSpread = {};
  if (isSelectable) {
    attrSpread.onClick = TableUtils.wrappedOnClickForItem(onClick, onSelect, metaData);
    attrSpread.onKeyDown = TableUtils.wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);
    attrSpread.tabIndex = '0';
    attrSpread['data-header-show-focus'] = 'true';
    attrSpread.onBlur = TableUtils.wrappedEventCallback(onBlur, event => event.currentTarget.setAttribute('data-header-show-focus', 'true'));
    attrSpread.onMouseDown = TableUtils.wrappedEventCallback(onMouseDown, event => event.currentTarget.setAttribute('data-header-show-focus', 'false'));
  }

  const checkClassNames = cx([
    'checkmark',
    classForState[checkMarkState],
  ]);

  let content = (
    <div
      className={checkClassNames}
      disabled={isSelectable}
      role="checkbox"
      aria-checked={ariaForState[checkMarkState]}
    />
  );

  if (isPadded) {
    content = (
      <div className={cx('container')}>
        {content}
      </div>
    );
  }

  return (
    <div
      {...customProps}
      style={TableUtils.styleFromWidth(width)} // eslint-disable-line react/forbid-dom-props
      className={cellClassNames}
      ref={refCallback}
      role="gridcell"
    >
      {content}
    </div>
  );
};

HeaderCheckMarkCell.propTypes = propTypes;
HeaderCheckMarkCell.defaultProps = defaultProps;

export default HeaderCheckMarkCell;
