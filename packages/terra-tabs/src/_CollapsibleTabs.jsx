import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';
import 'terra-base/lib/baseStyles';
import TabUtils from './TabUtils';
import Menu from './_TabMenu';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Key of the current active tab.
   */
  activeKey: PropTypes.string.isRequired,

  /**
   * Index of the current active tab.
   */
  activeIndex: PropTypes.number.isRequired,

  /**
   * Tabs to be displayed in the collapsible tab bar.
   */
  children: PropTypes.node.isRequired,

  /**
   * Tabs style. One of: "modular-centered", "modular-left-aligned", or "structural".
   */
  variant: PropTypes.oneOf(['modular-centered', 'modular-left-aligned', 'structural']).isRequired,

  /**
   * Callback function when selection has changed.
   * Parameters: 1. Event 2. Selected pane element
   */
  onChange: PropTypes.func.isRequired,

  /**
   * Callback function when label truncation state has changed.
   * Parameters: 1. Bool indicating if any of the tab labels have been truncated.
   */
  onTruncationChange: PropTypes.func,
};

class CollapsibleTabs extends React.Component {
  constructor(props) {
    super(props);
    this.setContainer = this.setContainer.bind(this);
    this.setMenuRef = this.setMenuRef.bind(this);
    this.resetCache = this.resetCache.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleSelectionAnimation = this.handleSelectionAnimation.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.handleMenuOnKeyDown = this.handleMenuOnKeyDown.bind(this);
    this.handleFocusLeft = this.handleFocusLeft.bind(this);
    this.handleFocusRight = this.handleFocusRight.bind(this);
    this.resetCache();
  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver((entries) => {
      this.contentWidth = entries[0].contentRect.width;
      if (!this.isCalculating) {
        this.animationFrameID = window.requestAnimationFrame(() => {
          // Resetting the cache so that all elements will be rendered face-up for width calculations
          this.resetCache();
          this.forceUpdate();
        });
      }
    });
    this.resizeObserver.observe(this.container);
    this.handleResize(this.contentWidth);
    this.handleSelectionAnimation();
  }

  componentDidUpdate() {
    if (this.isCalculating) {
      this.isCalculating = false;
      this.handleResize(this.contentWidth);
    } else {
      this.handleSelectionAnimation();
    }
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameID);
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

  resetCache() {
    this.animationFrameID = null;
    this.hiddenStartIndex = -1;
    this.isCalculating = true;
    this.menuHidden = false;
  }

  handleResize(width) {
    const menuMarginLeft = parseInt(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-left'), 10);
    const menuMarginRight = parseInt(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-right'), 10);
    const menuToggleWidth = this.menuRef.getBoundingClientRect().width + menuMarginLeft + menuMarginRight;
    const availableWidth = width - menuToggleWidth;

    // Calculate hide index
    const childrenCount = React.Children.count(this.props.children);
    let newHideIndex = childrenCount;
    let calcMinWidth = 0;
    let isMenuHidden = true;
    for (let i = 0; i < this.props.children.length; i += 1) {
      const tab = this.container.children[i];
      const tabMarginLeft = parseInt(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-left'), 10);
      const tabMarginRight = parseInt(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-right'), 10);
      const minWidth = parseInt(window.getComputedStyle(tab, null).getPropertyValue('min-width'), 10);
      calcMinWidth += (minWidth + tabMarginLeft + tabMarginRight);
      if (calcMinWidth > availableWidth && !(i === childrenCount - 1 && calcMinWidth <= width)) {
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

    this.props.onTruncationChange(isLabelTruncated);

    if (this.menuHidden !== isMenuHidden || this.hiddenStartIndex !== newHideIndex) {
      this.menuHidden = isMenuHidden;
      this.hiddenStartIndex = newHideIndex;
      this.forceUpdate();
    }
  }

  handleSelectionAnimation() {
    if (this.selectionBar && window.getComputedStyle(this.selectionBar, null).getPropertyValue('transition-property').includes('transform')) {
      const activeIndex = this.props.activeIndex > this.hiddenStartIndex ? this.hiddenStartIndex : this.props.activeIndex;
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
    if (React.Children.count(this.props.children) < 2) {
      return;
    }

    // We don't want menu keydown events to propagate and conflict when the tabs keydown events
    // Instead of stopping menu key event propagation, we whitelist event.targets so we do tab focus mgmt only on tab based event targets
    const tabList = event.target.getAttribute('role') === 'tablist';
    const tabMoreBtn = event.target.getAttribute('data-terra-tabs-menu') === 'true';

    if (tabList || tabMoreBtn) {
      const isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
      const visibleChildren = this.container.children;

      if (event.nativeEvent.keyCode === TabUtils.KEYCODES.LEFT_ARROW) {
        if (isRTL) {
          this.handleFocusRight(visibleChildren, event);
        } else {
          this.handleFocusLeft(visibleChildren, event);
        }
      } else if (event.nativeEvent.keyCode === TabUtils.KEYCODES.RIGHT_ARROW) {
        if (isRTL) {
          this.handleFocusLeft(visibleChildren, event);
        } else {
          this.handleFocusRight(visibleChildren, event);
        }
      }
    }
  }

  handleFocusRight(visibleChildren, event) {
    if (this.props.activeIndex >= this.hiddenStartIndex) {
      return;
    }

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

  handleFocusLeft(visibleChildren, event) {
    let startIndex = this.props.activeIndex - 1;
    if (startIndex >= this.hiddenStartIndex || document.activeElement === this.menuRef) {
      startIndex = this.hiddenStartIndex - 1;
    }

    for (let i = startIndex; i >= 0; i -= 1) {
      if (!this.props.children[i].props.isDisabled) {
        if (document.activeElement === this.menuRef) {
          this.container.focus();
        }
        this.props.onChange(event, this.props.children[i]);
        break;
      }
    }
  }

  handleMenuOnKeyDown(event) {
    console.log('stop propagation');
    // Prevent menu key events from propagating up to CollabsibleTabs handleOnKeyDown listener
    // This prevents left / right arrow key usage in menu from shifting to different tabs
    event.stopPropagation();
  }

  render() {
    const visibleChildren = [];
    const hiddenChildren = [];

    React.Children.forEach(this.props.children, (child, index) => {
      if (index < this.hiddenStartIndex || this.hiddenStartIndex < 0) {
        visibleChildren.push(child);
      } else {
        hiddenChildren.push(child);
      }
    });

    const menu = this.menuHidden ? null : (
      <Menu onKeyDown={this.handleMenuOnKeyDown} refCallback={this.setMenuRef} activeKey={this.props.activeKey}>
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
          className={cx(['collapsible-tabs-container', { 'is-calculating': this.isCalculating }])}
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
