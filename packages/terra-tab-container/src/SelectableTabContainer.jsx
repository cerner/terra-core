import React from 'react';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';
import Menu from 'terra-menu';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import SelectableUtils from './SelectableUtils';
import Tab from './Tab';
import styles from './TabContainer.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Tab style. One of: "modular" or "structural"
   */
  variant: PropTypes.oneOf(['modular', 'structural']),

  /**
   * Callback function when selection has changed.
   * Parameters: 1. Event 2. Selected tab's key
   */
  onChange: PropTypes.func,

  /**
   * Tab components to be displayed
   */
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  variant: 'modular',
};

class SelectableTabContainer extends React.Component {
  constructor(props) {
    super(props);
    this.setTabPanelContainer = this.setTabPanelContainer.bind(this);
    this.setMenuToggle = this.setMenuToggle.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.wrapTabOnClick = this.wrapTabOnClick.bind(this);
    this.wrapTabOnKeyDown = this.wrapTabOnKeyDown.bind(this);
    this.state = {
      hiddenStartIndex: -1,
      menuHidden: false,
      menuOpen: false,
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
    const minWidth = window.getComputedStyle(tabElement, null).getPropertyValue('min-width');

    // Calculate how many full tabs can render at their minimum widths given the width of the container.
    let newHideIndex = Math.floor(width / minWidth);

    // If all the tabs can't fit recalculate hide index with the width of the menu toggle removed from available space.
    if (this.props.children.length > newHideIndex) {
      const menuToggleWidth = this.menuButton.getBoundingClientRect().width;
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
      this.setState({ menuOpen: false, hideIndex: newHideIndex, menuHidden });
    }
  }

  wrapTabOnKeyDown(tab) {
    return (event) => {
      if (tab.props.onKeyDown) {
        tab.props.onKeyDown(event);
      }

      if (event.nativeEvent.keyCode === SelectableUtils.KEYCODES.LEFT_ARROW) {
        // TODO: Find previous tab
      } else if (event.nativeEvent.keyCode === SelectableUtils.KEYCODES.RIGHT_ARROW) {
        // TODO: Find next tab and call onChange or focus menuToggle
      }
    };
  }

  wrapTabOnClick(tab) {
    return (event) => {
      if (this.props.onChange) {
        this.props.onChange(event, tab.key);
      }
      if (tab.props.onClick) {
        tab.props.onClick(event);
      }
    };
  }

  render() {
    const { variant, children, ...customProps } = this.props;
    const attributes = Object.assign({}, customProps);
    const tabContainerClassNames = cx([
      'tab-container',
      variant,
      attributes.className,
    ]);

    let content = null;
    const clonedTabs = [];
    React.Children.forEach(children, (child) => {
      if (child.props.isSelected) {
        content = child.props.children;
      }
      clonedTabs.push(React.cloneElement(child, {
        onClick: this.wrapTabOnClick(child),
        onKeyDown: this.wrapTabOnKeyDown(child),
      }));
    });

    const menu = this.state.menuHidden ? null : (
      <div ref={this.setMenuToggle}>
        Menu
      </div>
    );

    return (
      <div className={tabContainerClassNames}>
        <div className={cx('tab-panel')} ref={this.setTabPanelContainer}>
          {clonedTabs}
          {menu}
        </div>
        <div className={cx('tab-content')}>
          {content}
        </div>
      </div>
    );
  }
}

SelectableTabContainer.propTypes = propTypes;
SelectableTabContainer.defaultProps = defaultProps;
SelectableTabContainer.Tab = Tab;
SelectableTabContainer.Utils = SelectableUtils;

export default SelectableTabContainer;
