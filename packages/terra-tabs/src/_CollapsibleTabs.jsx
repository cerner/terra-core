import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';
import TabUtils from './TabUtils';
import Menu from './_TabMenu';
import styles from './Tabs.scss';

const cx = classNames.bind(styles);

const propTypes = {
  activeKey: PropTypes.string,
  activeIndex: PropTypes.number,
  children: PropTypes.node,
  variant: PropTypes.string,
  onChange: PropTypes.func,
};

class CollapsibleTabs extends React.Component {
  constructor(props) {
    super(props);
    this.setContainer = this.setContainer.bind(this);
    this.setMenuRef = this.setMenuRef.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleSelectionAnimation = this.handleSelectionAnimation.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.handleFocusLeft = this.handleFocusLeft.bind(this);
    this.handleFocusRight = this.handleFocusRight.bind(this);
    this.state = {
      hiddenStartIndex: -1,
      menuHidden: false,
      isCalculating: true,
    };
  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver((entries) => {
      // Resetting the state so that all elements will be rendered face-up for width calculations
      if (this.state.hiddenStartIndex !== -1 || this.state.menuHidden || !this.state.isCalculating) {
        this.setState({ hiddenStartIndex: -1, menuHidden: false, isCalculating: true });
      }
      this.handleResize(entries[0].contentRect.width);
    });
    this.resizeObserver.observe(this.container);

    this.handleSelectionAnimation();
  }

  componentDidUpdate() {
    this.handleSelectionAnimation();
  }

  componentWillUnmount() {
    this.resizeObserver.disconnect(this.container);
    this.container = null;
  }

  setContainer(node) {
    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element will be null on unmount
    this.container = node;
  }

  setMenuRef(node) {
    if (node === null) { return; }
    this.menuRef = node;
  }

  handleResize(width) {
    const menuToggleWidth = this.menuRef.getBoundingClientRect().width;
    const availableWidth = width - menuToggleWidth;

    // Calculate hide index
    let newHideIndex = this.container.children.length;
    let calcMinWidth = 0;
    let isMenuHidden = true;
    for (let i = 0; i < this.props.children.length; i += 1) {
      const tab = this.container.children[i];
      const minWidth = parseInt(window.getComputedStyle(tab, null).getPropertyValue('min-width'), 10);
      calcMinWidth += minWidth;
      if (calcMinWidth > availableWidth && !(i === this.props.children.length - 1 && calcMinWidth <= width)) {
        newHideIndex = i;
        isMenuHidden = false;
        break;
      }
    }

    // Calculate if label will be truncated
    let isLabelTruncated = false;
    let calcWidth = 0;
    for (let i = 0; i < newHideIndex; i += 1) {
      const tab = this.container.children[i];
      calcWidth += tab.getBoundingClientRect().width;
      if ((isMenuHidden && calcWidth > width) || (!isMenuHidden && calcWidth > availableWidth)) {
        isLabelTruncated = true;
        break;
      }
    }

    if (this.state.hiddenStartIndex !== newHideIndex || this.state.isLabelTruncated !== isLabelTruncated) {
      this.setState({ hiddenStartIndex: newHideIndex, menuHidden: isMenuHidden, isCalculating: false, isLabelTruncated });
    }
  }

  handleSelectionAnimation() {
    if (this.selectionBar && window.getComputedStyle(this.selectionBar, null).getPropertyValue('transition-property').includes('transform')) {
      const activeIndex = this.props.activeIndex > this.state.hiddenStartIndex ? this.state.hiddenStartIndex : this.props.activeIndex;
      const selectedTab = this.container.children[activeIndex];

      if (selectedTab) {
        const isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
        const tabRect = selectedTab.getBoundingClientRect();
        const barWidth = tabRect.width;
        let barLeft = tabRect.left - this.container.getBoundingClientRect().left;
        if (isRTL) {
          barLeft = tabRect.right - this.container.getBoundingClientRect().right;
        }

        this.selectionBar.style.width = `${barWidth}px`;
        this.selectionBar.style.transform = `translate3d(${barLeft}px,0,0)`;
      }
    }
  }

  handleOnKeyDown(event) {
    // If there are less than 2 children we don't need to worry about keyboard navigation
    if (!this.props.children.length) {
      return;
    }

    const isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
    const visibleChildren = this.container.children;

    if (event.nativeEvent.keyCode === TabUtils.KEYCODES.LEFT_ARROW) {
      if (isRTL) {
        this.handleFocusRight(visibleChildren);
      } else {
        this.handleFocusLeft(visibleChildren);
      }
    } else if (event.nativeEvent.keyCode === TabUtils.KEYCODES.RIGHT_ARROW) {
      if (isRTL) {
        this.handleFocusLeft(visibleChildren);
      } else {
        this.handleFocusRight(visibleChildren);
      }
    }
  }

  handleFocusRight(visibleChildren) {
    for (let i = this.props.activeIndex + 1; i < visibleChildren.length; i += 1) {
      if (!this.props.children[i].props.isDisabled) {
        if (visibleChildren[i] === this.menuRef) {
          this.menuRef.focus();
          break;
        } else {
          this.props.onChange(event, this.props.children[i]);
          break;
        }
      }
    }
  }

  handleFocusLeft(visibleChildren) {
    for (let i = this.props.activeIndex - 1; i >= 0; i -= 1) {
      if (!this.props.children[i].props.isDisabled) {
        if (document.activeElement === this.menuRef) {
          this.container.focus();
          this.props.onChange(event, this.props.children[visibleChildren.length - 2]);
          break;
        } else {
          this.props.onChange(event, this.props.children[i]);
          break;
        }
      }
    }
  }

  render() {
    const visibleChildren = [];
    const hiddenChildren = [];

    React.Children.forEach(this.props.children, (child, index) => {
      if (index < this.state.hiddenStartIndex || this.state.hiddenStartIndex < 0) {
        visibleChildren.push(child);
      } else {
        hiddenChildren.push(child);
      }
    });

    const menu = this.state.menuHidden ? null : (
      <Menu refCallback={this.setMenuRef} activeKey={this.props.activeKey}>
        {hiddenChildren}
      </Menu>
    );

    const selectionBar = this.props.variant === 'modular-centered' || this.props.variant === 'modular-left-aligned' ? (
      <div className={cx('selection-bar')} ref={(node) => { if (node) { this.selectionBar = node; } }} />
    ) : null;

    return (
      <div>
        {/* eslint-disable jsx-a11y/no-static-element-interactions */}
        <div
          className={cx(['collapsible-tabs-container', { 'is-calculating': this.state.isCalculating }])}
          ref={this.setContainer}
          tabIndex="0"
          onKeyDown={this.handleOnKeyDown}
          role="tablist"
        >
          {/* eslint-enable jsx-ally/no-static-element-interactions */}
          {visibleChildren}
          {menu}
        </div>
        {selectionBar}
      </div>
    );
  }
}

CollapsibleTabs.propTypes = propTypes;

export default CollapsibleTabs;
