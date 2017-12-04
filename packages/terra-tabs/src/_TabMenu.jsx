import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Menu from 'terra-menu';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import styles from './Tabs.scss';
import TabUtils from './TabUtils';

const cx = classNames.bind(styles);

const propTypes = {
  activeKey: PropTypes.string,
  children: PropTypes.node,
  refCallback: PropTypes.func,
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

  componentDidMount() {
    this.targetWidth = this.targetRef.getBoundingClientRect().width;
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
    const menuItems = [];
    let menuToggleText = 'Menu';
    let menuActive = false;

    React.Children.forEach(this.props.children, (child) => {
      const { label, customDisplay, icon, isIconOnly, ...otherProps } = child.props;
      let isSelected = false;

      if (this.props.activeKey === child.key) {
        menuToggleText = label;
        isSelected = true;
        menuActive = true;
      }
      menuItems.push((
        <Menu.Item
          {...otherProps}
          text={label}
          onClick={this.wrapOnClick(child)}
          isSelected={isSelected}
          isSelectable
          key={child.key}
        />
      ));
    });

    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <div
        role="button"
        tabIndex="0"
        ref={this.setTargetRef}
        onClick={this.handleOnClick}
        onKeyDown={this.handleOnKeyDown}
        style={{ width: this.targetWidth }}
        className={cx(['tab-menu', { 'is-active': menuActive }])}
      >
        {menuToggleText}
        <IconCaretDown height="0.571rem" width="0.571rem" />
        <Menu
          onRequestClose={this.handleOnRequestClose}
          targetRef={this.getTargetRef}
          isOpen={this.state.isOpen}
        >
          {menuItems}
        </Menu>
      </div>
      /* eslint-enable jsx-ally/no-static-element-interactions */
    );
  }
}

TabMenu.propTypes = propTypes;

export default TabMenu;
