import React from 'react';
import PropTypes from 'prop-types';
import Arrange from 'terra-arrange';
import CheckIcon from 'terra-icon/lib/icon/IconCheckmark';
import ChevronIcon from 'terra-icon/lib/icon/IconChevronRight';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import MenuUtils from './_MenuUtils';
import styles from './MenuItem.module.scss';

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
   * Indicates if the item is selected. A selected item is indicated with a checkmark.
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

  /**
   * Indicates if the item has focus. This is used internally to control focus and does not set initial focus.
   */
  isActive: PropTypes.bool,
};

const defaultProps = {
  text: '',
  isSelected: false,
  isActive: false,
  isSelectable: undefined,
  isDisabled: false,
  subMenuItems: [],
};

class MenuItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.wrapOnClick = this.wrapOnClick.bind(this);
    this.wrapOnKeyDown = this.wrapOnKeyDown.bind(this);
    this.wrapOnKeyUp = this.wrapOnKeyUp.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.setItemNode = this.setItemNode.bind(this);
    this.state = {
      isSelected: props.isSelected && props.isSelectable && !context.isGroupItem,
      isActive: false,
    };
  }

  componentDidUpdate() {
    if (this.props.isActive && this.itemNode) {
      this.itemNode.focus();
    }
  }

  setItemNode(node) {
    if (node) {
      this.itemNode = node;
    }
  }

  handleSelection(event) {
    event.preventDefault();

    if (this.props.isSelectable && !this.context.isGroupItem && !this.props.isDisabled) {
      this.setState(prevState => ({ isSelected: !prevState.isSelected }));

      if (this.props.onChange) {
        this.props.onChange(event, !this.state.isSelected);
      }
    }
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

        // Only add active style if the menu doesn't have a sub menu to avoid active style being stuck enabled
        if (!(this.props.subMenuItems && this.props.subMenuItems.length > 0)) {
          this.setState({ isActive: true });
        }

        if (this.props.onClick) {
          this.props.onClick(event);
        }
      // Remove active state when tab key is released while while holding the space key to avoid active style being stuck enabled
      } else if (event.nativeEvent.keyCode === MenuUtils.KEYCODES.TAB) {
        this.setState({ isActive: false });
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    });
  }

  wrapOnKeyUp(onKeyUp) {
    return ((event) => {
      if (event.nativeEvent.keyCode === MenuUtils.KEYCODES.ENTER || event.nativeEvent.keyCode === MenuUtils.KEYCODES.SPACE) {
        this.setState({ isActive: false });
      }

      if (onKeyUp) {
        onKeyUp(event);
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
      isActive,
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
    } else {
      attributes.onClick = this.wrapOnClick;
      attributes.onKeyDown = this.wrapOnKeyDown(attributes.onKeyDown);
      attributes.onKeyUp = this.wrapOnKeyUp(attributes.Up);
    }

    const markAsSelected = this.state.isSelected || (isGroupItem && isSelected);

    const itemClassNames = cx([
      'item',
      { selected: markAsSelected },
      { 'is-disabled': isDisabled },
      // eslint-disable-next-line quote-props
      { 'active': this.state.isActive },
      attributes.className,
    ]);

    const textContainer = <div className={cx(['text'])}>{text}</div>;
    const hasChevron = subMenuItems.length > 0;
    let content = textContainer;
    if (hasChevron || isSelectableMenu) {
      content = (
        <Arrange
          fitStart={isSelectableMenu ? <CheckIcon className={cx(['checkmark'])} /> : null}
          fill={textContainer}
          fitEnd={hasChevron ? <ChevronIcon className={cx(['chevron'])} /> : null}
          align="center"
        />
      );
    }

    let role = 'menuitem';
    if (isGroupItem) {
      role = 'menuitemradio';
    } else if (isSelectable) {
      role = 'menuitemcheckbox';
    }

    return (
      <li {...attributes} className={itemClassNames} ref={this.setItemNode} role={role} aria-checked={markAsSelected}>
        {content}
      </li>
    );
  }
}

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;
MenuItem.contextTypes = contextTypes;

export default MenuItem;
