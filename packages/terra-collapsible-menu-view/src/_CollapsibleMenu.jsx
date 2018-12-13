import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Menu from 'terra-menu';
import styles from './CollapsibleMenuView.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * List of CollapsibleMenuView.Item(s)/CollapsibleMenuView.ItemGroup(s)/CollapsibleMenuView.Divider(s) to be displayed as content within the Menu.
   */
  children: PropTypes.node.isRequired,
  /**
   * Bounding container for the menu, will use window if no value provided.
   */
  boundingRef: PropTypes.func,
  /**
   * A string representation of the width in px, limited to:
   * 160, 240, 320, 640, 960, 1280, 1760, or auto
   */
  contentWidth: PropTypes.oneOf(Object.keys(Menu.Opts.widths)),

  /**
   * Button to display the menu from
   */
  button: PropTypes.element.isRequired,
};

const childContextTypes = {
  isCollapsibleMenuItem: PropTypes.bool,
};

class CollapsibleMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.wrappedOnClick = this.wrappedOnClick.bind(this);
    this.wrapButtonClick = this.wrapButtonClick.bind(this);
    this.wrapChildrenOnClick = this.wrapChildrenOnClick.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { isOpen: false };
  }

  getChildContext() {
    return { isCollapsibleMenuItem: true };
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  handleRequestClose() {
    this.setState({ isOpen: false });
  }

  wrappedOnClick(item) {
    return (event) => {
      this.handleRequestClose();

      if (item.props.onClick) {
        item.props.onClick(event);
      }
    };
  }

  wrapButtonClick(button) {
    return (event) => {
      this.setState({ isOpen: true });

      if (button.props.onClick) {
        button.props.onClick(event);
      }
    };
  }

  wrapChildrenOnClick(children) {
    const cloneChildren = children ? [] : undefined;
    React.Children.forEach(children, (item) => {
      let clonedElement = item;
      if (item.props.shouldCloseOnClick) {
        clonedElement = React.cloneElement(item, { onClick: this.wrappedOnClick(item) });
      } else if (item.props.children) {
        const clonedChildren = this.wrapChildrenOnClick(item.props.children);
        clonedElement = React.cloneElement(item, { children: clonedChildren });
      } else if (item.props.subMenuItems) {
        const subMenuItems = this.wrapChildrenOnClick(item.props.subMenuItems);
        clonedElement = React.cloneElement(item, { subMenuItems });
      }
      cloneChildren.push(clonedElement);
    });

    return cloneChildren;
  }

  render() {
    const {
      children,
      button,
      contentWidth,
      ...customProps
    } = this.props;

    const clonedButton = React.cloneElement(button, { onClick: this.wrapButtonClick(button) });

    return (
      <div className={cx('face-up-item')} ref={this.setButtonNode}>
        <Menu
          {...customProps}
          onRequestClose={this.handleRequestClose}
          isArrowDisplayed
          isOpen={this.state.isOpen}
          targetRef={this.getButtonNode}
          contentWidth={contentWidth}
        >
          {this.wrapChildrenOnClick(children)}
        </Menu>
        {clonedButton}
      </div>
    );
  }
}

CollapsibleMenu.propTypes = propTypes;
CollapsibleMenu.childContextTypes = childContextTypes;
CollapsibleMenu.Item = Menu.Item;
CollapsibleMenu.ItemGroup = Menu.ItemGroup;
CollapsibleMenu.Opts = {
  widths: Menu.Opts.widths,
};

export default CollapsibleMenu;
