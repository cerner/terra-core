import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'terra-popup';
import SlideGroup from 'terra-slide-group';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import MenuItem from './MenuItem';
import MenuItemGroup from './MenuItemGroup';
import MenuDivider from './MenuDivider';
import MenuContent from './_MenuContent';
import MenuWidths from './_MenuWidths';
import MenuUtils from './_MenuUtils';
import styles from './Menu.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * List of Menu.Item(s)/Menu.ItemGroup(s)/Menu.Divider(s) to be displayed as content within the Menu.
   */
  children: PropTypes.node.isRequired,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * Target element for the menu to anchor to.
   */
  targetRef: PropTypes.func.isRequired,
  /**
   * Bounding container for the menu, will use window if no value provided.
   */
  boundingRef: PropTypes.func,
  /**
   * CSS classnames that are append to the arrow.
   */
  classNameArrow: PropTypes.string,
  /**
   * CSS classnames that are append to the menu content inner.
   */
  classNameContent: PropTypes.string,
  /**
   * CSS classnames that are append to the overlay.
   */
  classNameOverlay: PropTypes.string,
  /**
   * Should the menu be presented as open.
   */
  isOpen: PropTypes.bool,
  /**
   * A string representation of the width in px, limited to:
   * 160, 240, 320, 640, 960, 1280, 1760
   */
  contentWidth: PropTypes.oneOf(['160', '240', '320', '640', '960', '1280', '1760']),
  /**
   * Indicates if the menu should have an center aligned arrow displayed on dropdown.
   * Otherwise, the menu will display without an arrow and right aligned.
   */
  isArrowDisplayed: PropTypes.bool,
};

const defaultProps = {
  isArrowDisplayed: false,
  children: [],
  isOpen: false,
  contentWidth: '240',
};

const MENU_PADDING_TOP = 6;
const MENU_PADDING_BOTTOM = 6;
const MENU_ITEM_HEIGHT = 23;
const MENU_DIVIDER_HEIGHT = 10;

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.getContentHeight = this.getContentHeight.bind(this);
    this.push = this.push.bind(this);
    this.pop = this.pop.bind(this);
    this.state = { stack: [this] };
  }


  componentWillReceiveProps(nextProps) {
    if ((this.props.isOpen && !nextProps.isOpen) || this.props.children.length !== nextProps.children.length) {
      this.setState({ stack: [this] });
    }
  }

  getContentHeight() {
    let itemCount = 0;
    let dividerCount = 0;

    React.Children.forEach(this.props.children, (child) => {
      if (child.props.children && child.props.children.length > 0) {
        itemCount += child.props.children.length;
      } else if (child.type === <MenuDivider />.type) {
        dividerCount += 1;
      } else {
        itemCount += 1;
      }
    });

    return (itemCount * MENU_ITEM_HEIGHT) + (dividerCount * MENU_DIVIDER_HEIGHT) + MENU_PADDING_TOP + MENU_PADDING_BOTTOM;
  }

  pop() {
    const newStack = this.state.stack.slice();
    newStack.pop();
    this.setState({ stack: newStack });
  }

  push(item) {
    const newStack = this.state.stack.slice();
    newStack.push(item);
    this.setState({ stack: newStack });
  }

  render() {
    const {
      boundingRef,
      classNameArrow,
      classNameContent,
      classNameOverlay,
      onRequestClose,
      isOpen,
      children,
      targetRef,
      isArrowDisplayed,
      contentWidth,
      ...customProps
    } = this.props;
    const contentHeight = this.getContentHeight();
    const popupHeight = MenuUtils.getPopupHeight(contentHeight);
    const boundingFrame = this.props.boundingRef ? this.props.boundingRef() : undefined;
    const isFullScreen = MenuUtils.isFullScreen(boundingFrame, popupHeight, MenuWidths[this.props.contentWidth]);

    const isSubMenu = this.state.stack.length > 1;
    const contentClass = cx([
      { submenu: isSubMenu },
      { 'main-menu': !isSubMenu },
      { fullscreen: isFullScreen },
      classNameContent,
    ]);

    const arrowClass = cx([
      'arrow',
      { submenu: isSubMenu },
      classNameArrow,
    ]);

    const slides = this.state.stack.map((item, index) => (
      <MenuContent
        // eslint-disable-next-line react/no-array-index-key
        key={`MenuPage-${index}`}
        title={item.props.text}
        onRequestNext={this.push}
        onRequestBack={this.pop}
        onRequestClose={this.props.onRequestClose}
        index={index}
      >
        {item.props.children || item.props.subMenuItems}
      </MenuContent>
    ));

    return (
      <Popup
        {...customProps}
        boundingRef={boundingRef}
        isArrowDisplayed={isArrowDisplayed}
        contentAttachment={isArrowDisplayed ? 'top center' : 'top right'}
        contentHeight={popupHeight.toString()}
        contentWidth={this.props.contentWidth}
        classNameArrow={arrowClass}
        classNameContent={contentClass}
        classNameOverlay={classNameOverlay}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        targetRef={targetRef}
        isHeaderDisabled
      >
        <SlideGroup items={slides} />
      </Popup>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
Menu.Item = MenuItem;
Menu.ItemGroup = MenuItemGroup;
Menu.Divider = MenuDivider;

export default Menu;
