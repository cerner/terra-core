import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import styles from './HeaderCheckMarkCell.module.scss';
import {
  wrappedOnClickForItem,
  wrappedOnKeyDownForItem,
  wrappedEventCallback,
} from './utils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Aria label for the content.
   */
  label: PropTypes.string.isRequired,
  /**
   * Whether or not the check should be visually hidden.
   */
  isHidden: PropTypes.bool,
  /**
   * The bottom padding to be used for the HeaderCheckMarkCell.
   * To used in conjunction with a cellPaddingStyle of none. Allowing for consumers to set their own padding.
   */
  alignmentPadding: PropTypes.string,
  /**
   * Whether or not the checkmark displays as disabled. Dependent on `'isSelectable'`.
   */
  isDisabled: PropTypes.bool,
  /**
   * Whether or not a selected state should display as partially selected.
   */
  isIndeterminate: PropTypes.bool,
  /**
   * Whether or not row is selected
   */
  isSelected: PropTypes.bool,
  /**
   * Whether or not row is selectable, this will dictate whether or not a checkmark is present.
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
  isHidden: false,
  isDisabled: false,
  isIndeterminate: false,
  isSelected: false,
  isSelectable: false,
};

const HeaderCheckMarkCell = ({
  label,
  alignmentPadding,
  isHidden,
  isDisabled,
  isIndeterminate,
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
  let attrSpread;
  let attrCheck;
  let attrPadding;
  if (alignmentPadding) {
    attrPadding = { style: { paddingBottom: alignmentPadding } };
  }

  if (isSelectable) {
    if (!isHidden) {
      attrSpread = {
        onClick: wrappedOnClickForItem(onClick, onSelect, metaData),
        onKeyDown: wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData),
        onBlur: wrappedEventCallback(onBlur, event => event.currentTarget.setAttribute('data-cell-show-focus', 'true')),
        onMouseDown: wrappedEventCallback(onMouseDown, event => event.currentTarget.setAttribute('data-cell-show-focus', 'false')),
        tabIndex: '0',
        'data-cell-show-focus': true,
      };
    }

    attrCheck = {
      role: 'checkbox',
      'aria-checked': isSelected && isIndeterminate ? 'mixed' : isSelected,
    };
    if (isDisabled) {
      attrCheck['aria-disabled'] = true;
    }
  }

  const headerCheckMarkCellClasses = cx(
    'header-cell',
    { 'hide-cell': isHidden },
    { 'is-interactable': !isDisabled && isSelectable },
  );

  return (
    <div
      {...customProps}
      {...attrSpread}
      className={customProps.className ? `${headerCheckMarkCellClasses} ${customProps.className}` : headerCheckMarkCellClasses}
      ref={refCallback}
      role="columnheader"
    >
      <div {...attrPadding} className={cx({ container: !isHidden })}>
        <VisuallyHiddenText className={cx('label')} {...attrCheck} text={label} />
        <div
          aria-hidden
          focusable="false"
          className={cx(
            'checkmark',
            { 'is-selected': isSelectable && isSelected },
            { 'is-intermediate': isSelectable && isIndeterminate },
            { 'is-disabled': isSelectable && isDisabled },
            { 'is-hidden': isHidden },
          )}
        />
      </div>
    </div>
  );
};

HeaderCheckMarkCell.propTypes = propTypes;
HeaderCheckMarkCell.defaultProps = defaultProps;

export default HeaderCheckMarkCell;
