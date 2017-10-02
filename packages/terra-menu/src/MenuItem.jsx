import React from 'react';
import PropTypes from 'prop-types';
import Arrange from 'terra-arrange';
import CheckIcon from 'terra-icon/lib/icon/IconCheckmark';
import ChevronIcon from 'terra-icon/lib/icon/IconChevronRight';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import MenuUtils from './_MenuUtils';
import styles from './MenuItem.scss';

const cx = classNames.bind(styles);

const contextTypes = {
  isGroupItem: PropTypes.bool,
  isSelectableMenu: PropTypes.bool,
};

const propTypes = {
  /**
   * Sets the item's text.
   */
  text: PropTypes.string,

  /**
   * Indicates if item should be disabled
   */
  isDisabled: PropTypes.bool,

  /**
   * Indicates if the item is selected.
   */
  isSelected: PropTypes.bool,

  /**
   * Indicates if the item should be selectable.
  */
  isSelectable: PropTypes.bool,

  /**
   * List of Menu.Items to display in a submenu when this item is selected.
   */
  subMenuItems: PropTypes.arrayOf(PropTypes.element),

  /**
   * Callback function for when item is clicked
   */
  onClick: PropTypes.func,

  /**
   * Callback function for when selection state changes on a selectable item.
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  text: '',
  isSelected: false,
  isSelectable: undefined,
  isDisabled: false,
  subMenuItems: [],
};

class MenuItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.wrapOnClick = this.wrapOnClick.bind(this);
    this.wrapOnKeyDown = this.wrapOnKeyDown.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.state = { isSelected: props.isSelected && props.isSelectable && !context.isGroupItem };
  }

  handleSelection(event) {
    event.preventDefault();
    this.setState((prevState) => {
      const newState = prevState;
      newState.isSelected = !prevState.isSelected;
      if (this.props.onChange) {
        this.props.onChange(event, newState.isSelected);
      }

      return newState;
    });
  }

  wrapOnClick(event) {
    this.handleSelection(event);

    if (this.props.onClick) {
      this.props.onClick(event);
    }
  }

  wrapOnKeyDown(onKeyDown) {
    return ((event) => {
      if (event.nativeEvent.keyCode === MenuUtils.KEYCODES.ENTER || event.nativeEvent.keyCode === MenuUtils.KEYCODES.SPACE) {
        this.handleSelection(event);
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    });
  }

  render() {
    const {
      text,
      isDisabled,
      isSelected,
      isSelectable,
      subMenuItems,
      ...customProps
    } = this.props;

    const { isGroupItem, isSelectableMenu } = this.context;

    const attributes = Object.assign({}, customProps);
    attributes.tabIndex = isDisabled ? '-1' : '0';
    attributes['aria-disabled'] = isDisabled;

    // This is passed down by the single select list in group item and not needed
    delete attributes.hasChevron;

    if (isDisabled) {
      delete attributes.onClick;
      delete attributes.onKeyDown;
    } else if (isSelectable && !isGroupItem && !isDisabled) {
      attributes.onClick = this.wrapOnClick;
      attributes.onKeyDown = this.wrapOnKeyDown(attributes.onKeyDown);
    }

    const itemClassNames = cx([
      'item',
      { selected: this.state.isSelected || (isGroupItem && isSelected) },
      { 'is-disabled': isDisabled },
      attributes.className,
    ]);

    const content = <div className={cx(['title'])}>{text}</div>;
    const hasChevron = subMenuItems.length > 0;

    if (hasChevron || isSelectableMenu) {
      return (
        <li {...attributes} className={itemClassNames}>
          <Arrange
            fitStart={isSelectableMenu ? <CheckIcon className={cx(['checkmark'])} /> : null}
            fill={content}
            fitEnd={hasChevron ? <ChevronIcon className={cx(['chevron'])} /> : null}
            align={'center'}
          />
        </li>
      );
    }

    return (
      <li {...attributes} className={itemClassNames}>
        {content}
      </li>
    );
  }
}

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;
MenuItem.contextTypes = contextTypes;

export default MenuItem;
