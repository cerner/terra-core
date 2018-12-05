import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'terra-popup';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import MenuItem from './MenuItem';
import MenuItemGroup from './MenuItemGroup';
import MenuDivider from './MenuDivider';
import MenuContent from './_MenuContent';
import styles from './Menu.module.scss';

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
   * 160, 240, 320, 640, 960, 1280, 1760 or auto
   */
  contentWidth: PropTypes.oneOf(Object.keys(Popup.Opts.widths)),
  /**
   * Indicates if the menu should have an center aligned arrow displayed on dropdown.
   * Otherwise, the menu will display without an arrow and right aligned.
   */
  isArrowDisplayed: PropTypes.bool,
};

const defaultProps = {
  isArrowDisplayed: false,
  isOpen: false,
  contentWidth: '240',
};

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.setPageDimensions = this.setPageDimensions.bind(this);
    this.push = this.push.bind(this);
    this.pop = this.pop.bind(this);
    this.state = { stack: [this] };
  }

  componentDidUpdate(prevProps) {
    if ((!this.props.isOpen && prevProps.isOpen) || this.props.children.length !== prevProps.children.length) {
      /* eslint-disable react/no-did-update-set-state */
      this.setState({ stack: [this] });
    }
  }

  setPageDimensions(node) {
    if (node) {
      this.pageHeight = node.clientHeight;
      if (this.props.contentWidth === 'auto') {
        this.pageWidth = node.clientWidth;
      }
    } else {
      this.pageHeight = undefined;
      this.pageWidth = undefined;
    }
  }

  pop() {
    if (this.state.stack.length > 1) {
      this.setState((prevState) => {
        const newStack = prevState.stack.slice();
        newStack.pop();
        return { stack: newStack };
      });
    }
  }


  push(item) {
    this.setState((prevState) => {
      const newStack = prevState.stack.slice();
      newStack.push(item);
      return { stack: newStack };
    });
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
    const arrowClass = cx([
      'arrow',
      { submenu: this.state.stack.length > 1 },
      classNameArrow,
    ]);

    const visiblePage = this.state.stack.length - 1;
    const slides = this.state.stack.map((item, index) => (
      <MenuContent
        // eslint-disable-next-line react/no-array-index-key
        key={`MenuPage-${index}`}
        title={item.props.text}
        onRequestNext={this.push}
        onRequestBack={this.pop}
        onRequestClose={this.props.onRequestClose}
        isHidden={index !== visiblePage}
        fixedHeight={this.pageHeight}
        fixedWidth={this.pageWidth}
        contentWidth={Popup.Opts.widths[contentWidth]}
        refCallback={visiblePage === 0 ? this.setPageDimensions : null}
        index={index}
        boundingRef={boundingRef}
        isFocused={index === visiblePage}
      >
        {item.props.children || item.props.subMenuItems}
      </MenuContent>
    ));

    return (
      <Popup
        {...customProps}
        boundingRef={boundingRef}
        isArrowDisplayed={isArrowDisplayed}
        attachmentBehavior="flip"
        contentAttachment={isArrowDisplayed ? 'top center' : 'top right'}
        contentHeight="auto"
        contentWidth={this.props.contentWidth}
        classNameArrow={arrowClass}
        classNameContent={classNameContent}
        classNameOverlay={classNameOverlay}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        targetRef={targetRef}
        isHeaderDisabled
        isContentFocusDisabled
      >
        {slides}
      </Popup>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
Menu.Item = MenuItem;
Menu.ItemGroup = MenuItemGroup;
Menu.Divider = MenuDivider;
Menu.Opts = {
  widths: Popup.Opts.widths,
};

export default Menu;
