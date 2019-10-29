import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './HeaderCheckMarkCell.module.scss';
import TableUtils from './TableUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The bottom padding to be used for the HeaderCheckMarkCell in rem(s).
   * To used in conjunction with a paddingStyle of none. Allowing for consumers to set their own padding.
   */
  alignmentPadding: PropTypes.number,
  /**
   * Whether or not the cell display as disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Whether or not a selected state should display as partially selected.
   */
  isIntermediate: PropTypes.bool,
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
  isDisabled: false,
  isIntermediate: false,
  isPadded: false,
  isSelected: false,
  isSelectable: false,
};

const HeaderCheckMarkCell = ({
  alignmentPadding,
  isDisabled,
  isIntermediate,
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
    if (isSelected) {
      attrCheck['aria-checked'] = isIntermediate ? 'mixed' : true;
    } else {
      attrCheck['aria-checked'] = false;
    }
  }

  if (alignmentPadding) {
    attrCheck.style = { marginBottom: `${alignmentPadding}rem` };
  }

  return (
    <div
      {...customProps}
      {...attrSpread}
      style={TableUtils.styleFromWidth(width)} // eslint-disable-line react/forbid-dom-props
      className={cx(
        'header-cell',
        { 'is-interactable': !isDisabled && isSelectable },
        customProps.className,
      )}

      ref={refCallback}
      role={isSelectable ? 'columnheader' : 'none'}
    >
      <div {...attrCheck} className={cx('container')}>
        <span
          className={`${cx(
            'checkmark',
            { 'is-selected': isSelectable && isSelected },
            { 'is-intermediate': isSelectable && isIntermediate },
            { 'is-disabled': isSelectable && isDisabled },
          )} ${customProps.className}`}
        />
      </div>
    </div>
  );
};

HeaderCheckMarkCell.propTypes = propTypes;
HeaderCheckMarkCell.defaultProps = defaultProps;

export default HeaderCheckMarkCell;
