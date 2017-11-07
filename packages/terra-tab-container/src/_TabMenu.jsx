import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Menu from 'terra-menu';
import styles from './TabContainer.scss';
import TabUtils from './TabUtils';

const cx = classNames.bind(styles);

const propTypes = {
  activeKey: PropTypes.string,
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
    if (event.nativeEvent.keyCode === TabUtils.KEYCODES.ENTER) {
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
      const { childLabel, customDisplay, icon, ...otherProps } = child.props;
      menuItems.push((
        <Menu.Item
          {...otherProps}
          text={child.props.label}
          onClick={this.wrapOnClick(child)}
          isSelected={this.props.activeKey === child.key}
          isSelectable
          key={child.key}
        />
      ));
    });

    return (
      <div className={cx(['tab-menu'])}>
        <Menu
          onRequestClose={this.handleOnRequestClose}
          targetRef={this.getTargetRef}
          isOpen={this.state.isOpen}
        >
          {menuItems}
        </Menu>
        {/* eslint-disable jsx-a11y/no-static-element-interactions */}
        <div role="button" ref={this.setTargetRef} onClick={this.handleOnClick} onKeyDown={this.handleOnKeyDown}>
          Menu
        </div>
        {/* eslint-enable jsx-ally/no-static-element-interactions */}
      </div>
    );
  }
}

TabMenu.propTypes = propTypes;
TabMenu.childContextTypes = childContextTypes;

export default TabMenu;
