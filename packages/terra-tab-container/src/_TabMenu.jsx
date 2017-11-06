import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Menu from 'terra-menu';
import styles from './TabContainer.scss';
import SelectableUtils from './SelectableUtils';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
  refCallback: PropTypes.func,
};

const childContextTypes = {
  isCollapsedTab: PropTypes.bool,
};

class TabMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnRequestClose = this.handleOnRequestClose.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.getTargetRef = this.getTargetRef.bind(this);
    this.setTargetRef = this.setTargetRef.bind(this);
    this.wrapOnClick = this.wrapOnClick.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  getChildContext() {
    return { isCollapsedTab: true };
  }

  getTargetRef() {
    return this.targetRef;
  }

  setTargetRef(node) {
    this.targetRef = node;

    if (this.props.refCallback) {
      this.props.refCallback(node);
    }
  }

  handleOnRequestClose() {
    this.setState({ isOpen: false });
  }

  handleOnClick() {
    this.setState({ isOpen: true });
  }

  handleOnKeyDown(event) {
    if (event.nativeEvent.keyCode === SelectableUtils.KEYCODES.ENTER) {
      this.setState({ isOpen: true });
    }
  }

  wrapOnClick(child) {
    return (event) => {
      if (child.props.onClick) {
        child.props.onClick(event);
      }

      this.setState({ isOpen: false });
    };
  }

  render() {
    let menu;

    const menuItems = [];
    React.Children.forEach(this.props.children, (child) => {
      menuItems.push(React.cloneElement(child, { onClick: this.wrapOnClick(child) }));
    });
    if (this.props.children) {
      menu = (
        <div className={cx(['tab-menu'])}>
          <Menu
            onRequestClose={this.handleOnRequestClose}
            targetRef={this.getTargetRef}
            isOpen={this.state.isOpen}
          >
            {menuItems}
          </Menu>
          <div role="button" ref={this.setTargetRef} onClick={this.handleOnClick} onKeyDown={this.handleOnKeyDown}>
            Menu
          </div>
        </div>
      );
    } else {
      // This should only occur on initial load when all tabs are displayed as well as the menu in order to get sizing info
      menu = (
        <div className={cx(['tab-menu'])} ref={this.setTargetRef}>
          Menu
        </div>
      );
    }

    return menu;
  }
}

TabMenu.propTypes = propTypes;
TabMenu.childContextTypes = childContextTypes;

export default TabMenu;
