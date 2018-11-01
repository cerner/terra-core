import React from 'react';
import { injectIntl, intlShape } from 'terra-base';
import PropTypes from 'prop-types';
import List from 'terra-list';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import ContentContainer from 'terra-content-container';
import IconClose from 'terra-icon/lib/icon/IconClose';
import Arrange from 'terra-arrange';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import MenuUtils from './_MenuUtils';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The intl object to be injected for translations. Provided by the injectIntl function.
   */
  intl: intlShape.isRequired,
  /**
   * Title the should be displayed in header.
   */
  title: PropTypes.string,
  /**
   * Callback function for when back button is clicked.
   */
  onRequestBack: PropTypes.func,
  /**
   * Callback function for when close button is clicked.
   */
  onRequestClose: PropTypes.func,
  /**
   * Callback function that takes the content to be displayed next and is called when an item with nested content is clicked.
   */
  onRequestNext: PropTypes.func.isRequired,
  /**
   * Menu Items/Menu Groups/Menu Dividers to be displayed.
   */
  children: PropTypes.node.isRequired,
  /**
   * Index within the Menu Stack.
   */
  index: PropTypes.number.isRequired,
  /**
   * Bounding container for the menu, will use window if no value provided.
   */
  boundingRef: PropTypes.func,
  /**
   * Indicates if the menu content should set default focus on itself.
   */
  isFocused: PropTypes.bool,
  /**
   * Indicates if menu's height has been constrained by bounding container.
   */
  isHeightBounded: PropTypes.bool,
  /**
   * Indicates if menu's width has been constrained by bounding container.
   */
  isWidthBounded: PropTypes.bool,
  /**
   * Fixed height for content.
   */
  fixedHeight: PropTypes.number,
  /**
   * Fixed width for content.
   */
  fixedWidth: PropTypes.number,
  /**
   * Width for content.
   */
  contentWidth: PropTypes.number,
  /**
   * Indicates if the content should be hidden.
   */
  isHidden: PropTypes.bool,
  /**
   * Ref callback function to be applied to content container.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  isFocused: false,
  title: '',
  isWidthBounded: false,
  isHeightBounded: false,
  isHidden: false,
};

const childContextTypes = {
  isSelectableMenu: PropTypes.bool,
};


class MenuContent extends React.Component {
  constructor(props) {
    super(props);
    this.wrapOnClick = this.wrapOnClick.bind(this);
    this.wrapOnKeyDown = this.wrapOnKeyDown.bind(this);
    this.buildHeader = this.buildHeader.bind(this);
    this.isSelectable = this.isSelectable.bind(this);
    this.onKeyDownBackButton = this.onKeyDownBackButton.bind(this);
    this.validateFocus = this.validateFocus.bind(this);
    this.needsFocus = props.isFocused;
    this.handleContainerRef = this.handleContainerRef.bind(this);

    this.state = {
      focusIndex: -1,
    };
  }

  getChildContext() {
    return { isSelectableMenu: this.isSelectable() };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isFocused) {
      this.needsFocus = this.needsFocus || this.props.isFocused !== newProps.isFocused;
    } else {
      this.needsFocus = false;
    }
  }

  componentDidUpdate() {
    this.validateFocus(this.contentNode);
  }

  onKeyDownBackButton(event) {
    if (event.nativeEvent.keyCode === MenuUtils.KEYCODES.ENTER || event.nativeEvent.keyCode === MenuUtils.KEYCODES.SPACE) {
      event.preventDefault();
      this.props.onRequestBack();
    }
  }

  validateFocus(node) {
    if (this.needsFocus && node) {
      node.focus();
      this.needsFocus = document.activeElement !== node;
    }
  }

  handleContainerRef(node) {
    if (this.props.refCallback) {
      this.props.refCallback(node);
    }
    this.contentNode = node;
    this.validateFocus(node);
  }

  isSelectable() {
    let isSelectable = false;
    React.Children.forEach(this.props.children, (child) => {
      if (child.props.children || child.props.isSelectable) {
        isSelectable = true;
      }
    });

    return isSelectable;
  }

  wrapOnClick(item) {
    const { onClick } = item.props;
    return (event) => {
      event.preventDefault();
      if (this.state.focusIndex !== -1) {
        this.setState({ focusIndex: -1 });
      }

      if (item.props.subMenuItems && item.props.subMenuItems.length > 0) {
        // Avoid keydown "click" event from enter / space key triggering stack increase here
        // We handle increasing stack with keydown events in a separate handler below
        // Fixes: https://github.com/cerner/terra-core/issues/2015
        if (event.type !== 'keydown') {
          this.props.onRequestNext(item);
        }
      }

      if (onClick) {
        onClick(event);
      }
    };
  }

  wrapOnKeyDown(item, index) {
    const { onKeyDown } = item.props;
    return ((event) => {
      event.preventDefault();
      if (event.nativeEvent.keyCode === MenuUtils.KEYCODES.ENTER || event.nativeEvent.keyCode === MenuUtils.KEYCODES.SPACE) {
        if (item.props.subMenuItems && item.props.subMenuItems.length > 0) {
          this.props.onRequestNext(item);
        }
      } else if (event.nativeEvent.keyCode === MenuUtils.KEYCODES.RIGHT_ARROW) {
        if (item.props.subMenuItems && item.props.subMenuItems.length > 0) {
          this.props.onRequestNext(item);
        }
      } else if (event.nativeEvent.keyCode === MenuUtils.KEYCODES.LEFT_ARROW) {
        this.props.onRequestBack();
      } else if (event.nativeEvent.keyCode === MenuUtils.KEYCODES.UP_ARROW) {
        this.setState({ focusIndex: index - 1 });
      } else if (event.nativeEvent.keyCode === MenuUtils.KEYCODES.DOWN_ARROW) {
        this.setState({ focusIndex: index + 1 });
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    });
  }

  buildHeader(isFullScreen) {
    const { intl } = this.props;
    const backBtnText = intl.formatMessage({ id: 'Terra.menu.back' });
    const closeBtnText = intl.formatMessage({ id: 'Terra.menu.close' });

    const closeIcon = <IconClose />;
    let closeButton = <div />;
    if (this.props.onRequestClose && isFullScreen) {
      closeButton = (
        <button type="button" className={cx(['header-button'])} onClick={this.props.onRequestClose} aria-label={closeBtnText}>
          {closeIcon}
        </button>
      );
    }

    const backIcon = <IconLeft />;
    const backButton = this.props.index > 0 ? (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        role="button"
        onClick={this.props.onRequestBack}
        onKeyDown={this.onKeyDownBackButton}
        tabIndex="0"
        aria-label={backBtnText}
        className={cx(['header-button-container'])}
      >
        <Arrange
          align="center"
          fitStart={(
            <div className={cx(['header-button'])}>
              {backIcon}
            </div>
          )}
          fill={<h1 className={cx(['header-title'])}>{this.props.title}</h1>}
        />
      </div>
    ) : <div />;

    return (
      <Arrange
        className={cx(['header'])}
        fitEnd={closeButton}
        fill={backButton}
        align="center"
      />
    );
  }

  render() {
    let index = -1;
    const items = this.props.children ? [] : undefined;
    React.Children.map(this.props.children, (item) => {
      const onClick = this.wrapOnClick(item);
      let newItem = item;

      // Check if child is an enabled Menu.Item
      if (item.props.text && !item.props.isDisabled) {
        index += 1;
        const onKeyDown = this.wrapOnKeyDown(item, index);
        const isActive = this.state.focusIndex === index;

        newItem = React.cloneElement(item, {
          onClick,
          onKeyDown,
          isActive,
        });
      // If the child has children then it is an item group, so iterate through it's children
      } else if (item.props.children) {
        const children = item.props.children ? [] : undefined;
        React.Children.forEach(item.props.children, (child) => {
          if (!child.props.isDisabled) {
            index += 1;
            const clonedElement = React.cloneElement(child, {
              onKeyDown: this.wrapOnKeyDown(child, index),
              isActive: index === this.state.focusIndex,
            });
            children.push(clonedElement);
          } else {
            children.push(child);
          }
        });
        newItem = React.cloneElement(item, {}, children);
      }

      items.push(newItem);
    });
    const boundingFrame = this.props.boundingRef ? this.props.boundingRef() : undefined;
    const isFullScreen = MenuUtils.isFullScreen(
      this.props.isHeightBounded,
      this.props.isWidthBounded,
      boundingFrame,
      this.props.contentWidth,
    );
    const isSubMenu = this.props.index > 0;
    const contentClass = cx([
      'content',
      { submenu: isSubMenu },
      { 'hidden-page': this.props.isHidden },
      { fullscreen: isFullScreen },
    ]);

    let header;
    if (isFullScreen || isSubMenu) {
      header = this.buildHeader(isFullScreen);
    }
    const contentHeight = this.props.isHeightBounded ? '100%' : this.props.fixedHeight;
    const contentPosition = this.props.isHeightBounded ? 'relative' : 'static';
    const contentWidth = this.props.isWidthBounded ? undefined : this.props.fixedWidth;

    return (
      <div
        ref={this.handleContainerRef}
        className={contentClass}
        style={{ height: contentHeight, width: contentWidth, position: contentPosition }}
        tabIndex="-1"
        aria-modal="true"
        role="dialog"
      >
        <ContentContainer header={header} fill={this.props.isHeightBounded || this.props.index > 0}>
          <List className={cx(['list'])} role="menu">
            {items}
          </List>
        </ContentContainer>
      </div>
    );
  }
}


MenuContent.propTypes = propTypes;
MenuContent.defaultProps = defaultProps;
MenuContent.childContextTypes = childContextTypes;

export default injectIntl(MenuContent);
