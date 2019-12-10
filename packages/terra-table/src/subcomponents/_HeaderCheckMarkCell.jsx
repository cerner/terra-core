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
   * To used in conjunction with a paddingStyle of none. Allowing for consumers to set their own padding.
   */
  alignmentPadding: PropTypes.string,
  /**
   * Whether or not the cell display as disabled.
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
  const attrSpread = { role: 'none' };
  const attrCheck = {};
  if (!isHidden && isSelectable) {
    if (isDisabled) {
      attrCheck['aria-disabled'] = true;
    } else {
      attrSpread.onClick = wrappedOnClickForItem(onClick, onSelect, metaData);
      attrSpread.onKeyDown = wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);
      attrSpread.tabIndex = '0';
      attrSpread['data-cell-show-focus'] = 'true';
      attrSpread.onBlur = wrappedEventCallback(onBlur, event => event.currentTarget.setAttribute('data-cell-show-focus', 'true'));
      attrSpread.onMouseDown = wrappedEventCallback(onMouseDown, event => event.currentTarget.setAttribute('data-cell-show-focus', 'false'));
    }

    if (isSelected) {
      attrCheck['aria-checked'] = isIndeterminate ? 'mixed' : true;
    } else {
      attrCheck['aria-checked'] = false;
    }
  }

  let attrPadding;
  if (alignmentPadding) {
    attrPadding = { style: { paddingBottom: alignmentPadding } };
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
      <VisuallyHiddenText aria-checked={isSelected} role="checkbox" {...attrCheck} text={label} />
      <div {...attrPadding} className={cx({ container: !isHidden })}>
        <div
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
