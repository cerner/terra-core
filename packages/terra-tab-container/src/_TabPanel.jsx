import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';
import Menu from './_TabMenu';
import styles from './TabContainer.scss';

const cx = classNames.bind(styles);

const propTypes = {
  activeKey: PropTypes.string,
  children: PropTypes.node,
};

class TabPanel extends React.Component {
  constructor(props) {
    super(props);
    this.setTabPanelContainer = this.setTabPanelContainer.bind(this);
    this.setMenuToggle = this.setMenuToggle.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.state = {
      hiddenStartIndex: -1,
      menuHidden: false,
      isCalculating: true,
    };
  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver((entries) => {
      // Resetting the state so that all elements will be rendered face-up for width calculations
      this.setState({ hiddenStartIndex: -1, menuHidden: false, isCalculating: true });
      this.handleResize(entries[0].contentRect.width);
    });
    this.resizeObserver.observe(this.tabPanelContainer);
  }

  componentWillUnmount() {
    this.resizeObserver.disconnect(this.tabPanelContainer);
    this.tabPanelContainer = null;
  }

  setTabPanelContainer(node) {
    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element will be null on unmount
    this.tabPanelContainer = node;
  }

  setMenuToggle(node) {
    if (node === null) { return; }
    this.menuToggle = node;
  }

  handleResize(width) {
    const childCount = React.Children.count(this.props.children);

    const tabElement = this.tabPanelContainer.children[0];
    const minWidth = parseInt(window.getComputedStyle(tabElement, null).getPropertyValue('min-width'), 10);

    // Calculate how many tabs can render at their minimum widths given the width of the container.
    let newHideIndex = Math.floor(width / minWidth);

    // If we can't fit all the tabs recalculate hide index with the menu present
    if (childCount > newHideIndex) {
      const menuToggleWidth = this.menuToggle.getBoundingClientRect().width;
      const availableWidth = width - menuToggleWidth;

      newHideIndex = Math.floor(availableWidth / minWidth);
    }

    if (this.state.hideIndex !== newHideIndex) {
      this.setState({ hiddenStartIndex: newHideIndex, menuHidden: newHideIndex >= childCount, isCalculating: false });
    }
  }

  render() {
    const visibleChildren = [];
    const hiddenChildren = [];
    React.Children.forEach(this.props.children, (child, index) => {
      if (index < this.state.hiddenStartIndex) {
        visibleChildren.push(child);
      } else {
        hiddenChildren.push(child);
      }
    });

    const menu = this.state.menuHidden ? null : (
      <Menu refCallback={this.setMenuToggle} activeKey={this.props.activeKey}>
        {hiddenChildren}
      </Menu>
    );

    return (
      <div className={cx(['tab-panel', { 'is-calculating': this.state.isCalculating }])} ref={this.setTabPanelContainer}>
        {visibleChildren}
        {menu}
      </div>
    );
  }
}

TabPanel.propTypes = propTypes;

export default TabPanel;
