import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Row.module.scss';
import {
  wrappedOnClickForItem,
  wrappedOnKeyDownForItem,
  wrappedEventCallback,
} from './utils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children to be passed as row content.
   */
  children: PropTypes.node.isRequired,
  /**
   * Indicates the desired divider style to apply to the row and its children.
   */
  dividerStyle: PropTypes.oneOf([
    'vertical',
    'horizontal',
    'both'
  ]),
  /**
   * Whether or not the rows interaction is disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Whether or not row should display as selected to match the link primary cell or toggle state of the row.
   */
  isSelected: PropTypes.bool,
  /**
   * Whether or not row can be selected.
   */
  isSelectable: PropTypes.bool,
  /**
   * Whether or not row should display as a striped row.
   */
  isStriped: PropTypes.bool,
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
   * Function callback returning the html node for the row.
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
  isDisabled: false,
  isSelected: false,
  isSelectable: false,
  isStriped: false,
};

const Row = ({
  children,
  dividerStyle,
  isDisabled,
  isSelected,
  isSelectable,
  isStriped,
  metaData,
  onBlur,
  onClick,
  onKeyDown,
  onMouseDown,
  onSelect,
  refCallback,
  ...customProps
}) => {
  const attrSpread = {};
  if (isSelectable) {
    if (isDisabled) {
      attrSpread['aria-disabled'] = true;
    } else {
      attrSpread.onClick = wrappedOnClickForItem(onClick, onSelect, metaData);
      attrSpread.onKeyDown = wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);
      attrSpread.tabIndex = '0';
      attrSpread['data-row-show-focus'] = 'true';
      attrSpread.onBlur = wrappedEventCallback(onBlur, event => event.currentTarget.setAttribute('data-row-show-focus', 'true'));
      attrSpread.onMouseDown = wrappedEventCallback(onMouseDown, event => event.currentTarget.setAttribute('data-row-show-focus', 'false'));
    }
  }

  const divider = dividerStyle ? `divider-${dividerStyle}` : undefined;
  const rowClasses = cx(
    { 'is-selected': isSelected && isSelectable },
    { 'is-selectable': !isDisabled && isSelectable },
    { 'is-striped': isStriped },
    divider,
    'row',
  );

  return (
    <div
      {...customProps}
      {...attrSpread}
      className={customProps.className ? `${rowClasses} ${customProps.className}` : rowClasses}
      ref={refCallback}
      role="row"
    >
      {children}
    </div>
  );
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
