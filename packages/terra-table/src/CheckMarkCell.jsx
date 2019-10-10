import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CheckMarkCell.module.scss';
import TableUtils from './TableUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The top padding to be used for the CheckMarkCell in rem(s).
   * To used in conjunction with a paddingStyle of none. Allowing for consumers to set their own padding.
   * The presence of this property will also change alignment to a fixed value, rather then centered.
   */
  alignmentPadding: PropTypes.number,
  /**
   * Whether or not the cell display as disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Whether or not the check should be it's own click target.
   */
  isSelectable: PropTypes.bool,
  /**
   * Whether or not the cell should display as selected with check mark.
   */
  isSelected: PropTypes.bool,
  /**
   * Whether or not the cell should adhere to the tables paddingStyle.
   */
  isPadded: PropTypes.bool,
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
  isDisabled: false,
  isPadded: false,
  isSelected: false,
  isSelectable: false,
};

const CheckMarkCell = ({
  alignmentPadding,
  isDisabled,
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
  const attrSpread = {};
  const attrCheck = {};
  if (isSelectable) {
    if (isDisabled) {
      attrCheck['aria-disabled'] = true;
    } else {
      attrSpread.onClick = TableUtils.wrappedOnClickForItem(onClick, onSelect, metaData);
      attrSpread.onKeyDown = TableUtils.wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);
      attrSpread.tabIndex = '0';
      attrSpread['data-cell-show-focus'] = 'true';
      attrSpread.onBlur = TableUtils.wrappedEventCallback(onBlur, event => event.currentTarget.setAttribute('data-cell-show-focus', 'true'));
      attrSpread.onMouseDown = TableUtils.wrappedEventCallback(onMouseDown, event => event.currentTarget.setAttribute('data-cell-show-focus', 'false'));
    }

    // attributes for checkbox
    attrCheck.role = 'checkbox';
    attrCheck['aria-checked'] = isSelected;
  }

  if (alignmentPadding) {
    attrCheck.style = { marginTop: `${alignmentPadding}rem` };
  }

  return (
    <div
      {...customProps}
      {...attrSpread}
      style={TableUtils.styleFromWidth(width)} // eslint-disable-line react/forbid-dom-props
      className={cx(
        'cell',
        { 'is-selectable': !isDisabled && isSelectable },
        { 'is-top-align': !!attrCheck.style },
        customProps.className,
      )}
      ref={refCallback}
      role={isSelectable ? 'rowheader' : 'none'}
    >
      <div {...attrCheck} className={cx('container')}>
        <span className={cx('highlight')} />
        <span
          className={cx(
            'checkmark',
            { 'is-selected': isSelected },
            { 'is-disabled': isDisabled },
          )}
        />
      </div>
    </div>
  );
};

CheckMarkCell.propTypes = propTypes;
CheckMarkCell.defaultProps = defaultProps;

export default CheckMarkCell;
