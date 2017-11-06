import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';
import Menu from './_TabMenu';
import styles from './TabContainer.scss';

const cx = classNames.bind(styles);

const propTypes = {
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
    };
  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver((entries) => {
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
    let menuHidden = true;

    const tabElement = this.tabPanelContainer.children[0];
    const minWidth = parseInt(window.getComputedStyle(tabElement, null).getPropertyValue('min-width'), 10);

    // Calculate how many full tabs can render at their minimum widths given the width of the container.
    let newHideIndex = Math.floor(width / minWidth);

    // If all the tabs can't fit recalculate hide index with the width of the menu toggle removed from available space.
    if (this.props.children.length > newHideIndex) {
      const menuToggleWidth = this.menuToggle.getBoundingClientRect().width;
      const availableWidth = width - menuToggleWidth;

      newHideIndex = Math.floor(availableWidth / minWidth);

      // If all the the tabs can fit without the menu present, hide the menu
      if (this.props.children.length <= newHideIndex) {
        menuHidden = true;
      } else {
        menuHidden = false;
      }
    }

    if (this.state.hideIndex !== newHideIndex) {
      this.setState({ hiddenStartIndex: newHideIndex, menuHidden });
    }
  }

  render() {
    const visibleChildren = React.Children.toArray(this.props.children);
    let hiddenChildren = null;
    if (this.state.hiddenStartIndex >= 0) {
      hiddenChildren = visibleChildren.splice(this.state.hiddenStartIndex);
    }

    const menu = this.state.menuHidden ? null : (
      <Menu refCallback={this.setMenuToggle}>
        {hiddenChildren}
      </Menu>
    );

    return (
      <div className={cx('tab-panel')} ref={this.setTabPanelContainer}>
        {visibleChildren}
        {menu}
      </div>
    );
  }
}

TabPanel.propTypes = propTypes;

export default TabPanel;
