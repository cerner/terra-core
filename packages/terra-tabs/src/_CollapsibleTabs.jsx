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
    const childCount = React.Children.count(this.props.children);
    let availableWidth = width;

    // All tabs will have the same min-width so we only need to get the first one
    const tabElement = this.container.children[0];
    const minWidth = parseInt(window.getComputedStyle(tabElement, null).getPropertyValue('min-width'), 10);

    // Calculate how many tabs can render at their minimum widths given the width of the container.
    let newHideIndex = Math.floor(width / minWidth);

    // If we can't fit all the tabs recalculate hide index with the menu present
    if (childCount > newHideIndex) {
      const menuToggleWidth = this.menuRef.getBoundingClientRect().width;
      availableWidth = width - menuToggleWidth;

      newHideIndex = Math.floor(availableWidth / minWidth);
    }

    let isLabelTruncated = false;
    let calcWidth = 0;
    for (let i = 0; i < this.props.children.length; i += 1) {
      const tab = this.container.children[i];
      calcWidth += tab.getBoundingClientRect().width;
      if (calcWidth > availableWidth) {
        isLabelTruncated = true;
        break;
      }
    }

    if (this.state.hiddenStartIndex !== newHideIndex || this.state.isLabelTruncated !== isLabelTruncated) {
      this.setState({ hiddenStartIndex: newHideIndex, menuHidden: newHideIndex >= childCount, isCalculating: false, isLabelTruncated });
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
    const isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
    const visibleChildrenCount = this.container.children.length;
    const lastVisibleTabIndex = this.menuRef ? visibleChildrenCount - 2 : visibleChildrenCount - 1;

    if (event.nativeEvent.keyCode === TabUtils.KEYCODES.LEFT_ARROW) {
      if (isRTL) {
        this.handleFocusRight(lastVisibleTabIndex);
      } else {
        this.handleFocusLeft(lastVisibleTabIndex);
      }
    } else if (event.nativeEvent.keyCode === TabUtils.KEYCODES.RIGHT_ARROW) {
      if (isRTL) {
        this.handleFocusLeft(lastVisibleTabIndex);
      } else {
        this.handleFocusRight(lastVisibleTabIndex);
      }
    }
  }

  handleFocusRight(lastVisibleTabIndex) {
    if (this.props.activeIndex === lastVisibleTabIndex && this.menuRef) {
      this.menuRef.focus();
    } else {
      this.props.onChange(event, this.props.children[this.props.activeIndex + 1].key);
    }
  }

  handleFocusLeft(lastVisibleTabIndex) {
    if (this.menuRef === document.activeElement) {
      this.props.onChange(event, this.props.children[lastVisibleTabIndex].key);
      this.container.focus();
    } else if (this.props.activeIndex > 0) {
      this.props.onChange(event, this.props.children[this.props.activeIndex - 1].key);
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

    const selectionBar = this.props.variant === 'modular' ? (
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
