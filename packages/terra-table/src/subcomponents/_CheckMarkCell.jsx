import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import styles from './CheckMarkCell.module.scss';
import {
  wrappedOnClickForItem,
  wrappedOnKeyDownForItem,
  wrappedEventCallback,
} from './utils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Aria label for the check mark.
   */
  label: PropTypes.string.isRequired,
  /**
   * Whether or not the check mark cell should be read only.
   */
  isIcon: PropTypes.bool,
  /**
   * Whether or not the check mark cell should be visually hidden.
   */
  isHidden: PropTypes.bool,
  /**
   * The top padding to be used for the CheckMarkCell.
   * To used in conjunction with a cellPaddingStyle of none. Allowing for consumers to set their own padding.
   * The presence of this property will also change alignment to a fixed value, rather then centered.
   */
  alignmentPadding: PropTypes.string,
  /**
   * Whether or not the cell displays as disabled.
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
   * Function callback returning the html node of the check mark cell.
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
  isIcon: false,
  isHidden: false,
  isDisabled: false,
  isSelected: false,
  isSelectable: false,
};

const CheckMarkCell = ({
  alignmentPadding,
  isIcon,
  isHidden,
  isDisabled,
  isSelected,
  isSelectable,
  label,
  metaData,
  onBlur,
  onClick,
  onKeyDown,
  onMouseDown,
  onSelect,
  refCallback,
  ...customProps
}) => {
  const attrSpread = { 'aria-selected': isSelected };
  const attrCheck = {};
  if (isHidden || isIcon) {
    // A user of a screenreader still need a keyboard accessible method of selection, so providing -1 index and kydown.
    attrSpread.onKeyDown = wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);
    attrSpread.tabIndex = '-1';
  } else if (isSelectable) {
    if (isDisabled) {
      attrCheck['aria-disabled'] = true;
    } else {
      attrSpread.onClick = wrappedOnClickForItem(onClick, onSelect, metaData);
      attrSpread.onKeyDown = wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);
      attrSpread.tabIndex = '0';
      attrSpread['data-cell-show-focus'] = 'true';
      attrSpread.onBlur = wrappedEventCallback(onBlur, event => {
        event.stopPropagation();
        event.currentTarget.setAttribute('data-cell-show-focus', 'true');
      });
      attrSpread.onMouseDown = wrappedEventCallback(onMouseDown, event => {
        event.stopPropagation();
        event.currentTarget.setAttribute('data-cell-show-focus', 'false');
      });
    }
  }

  let attrPadding;
  if (alignmentPadding) {
    attrPadding = { style: { paddingTop: alignmentPadding } };
  }

  const checkMarkClasses = cx(
    'cell',
    { 'hide-cell': isHidden },
    { 'is-interactable': !isDisabled && isSelectable },
    { 'is-top-align': attrPadding },
  );

  return (
    <div
      {...customProps}
      {...attrSpread}
      className={customProps.className ? `${checkMarkClasses} ${customProps.className}` : checkMarkClasses}
      ref={refCallback}
      role="gridcell"
    >
      <VisuallyHiddenText aria-checked={isSelected} role="checkbox" {...attrCheck} text={label} />
      <div aria-hidden {...attrPadding} className={cx({ container: !isHidden })}>
        <div
          focusable="false"
          className={cx(
            'checkmark',
            { 'is-selectable': isSelectable },
            { 'is-selected': isSelected },
            { 'is-disabled': isDisabled },
            { 'is-hidden': isHidden },
          )}
        />
      </div>
    </div>
  );
};

CheckMarkCell.propTypes = propTypes;
CheckMarkCell.defaultProps = defaultProps;

export default CheckMarkCell;
