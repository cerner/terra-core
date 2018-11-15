import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ButtonGroup from 'terra-button-group';
import List from 'terra-list';
import Menu from './_CollapsibleMenu';
import styles from './CollapsibleMenuView.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Callback function that is called when the group's selection state changes
   */
  onChange: PropTypes.func,
  /**
   * CollapsibleMenuView.Items to be grouped together
   */
  children: PropTypes.node.isRequired,
  /**
   * A list of keys of the CollapsibleMenuView.Items that should be selected.
   */
  selectedKeys: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  selectedKeys: [],
};

const childContextTypes = {
  isCollapsibleGroupItem: PropTypes.bool,
};

const contextTypes = {
  isCollapsibleMenuItem: PropTypes.bool,
};


class CollapsibleMenuViewItemGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  getChildContext() {
    return { isCollapsibleGroupItem: true };
  }

  handleOnChange(event, selectedIndex) {
    if (this.props.onChange) {
      let selectedKey = selectedIndex;
      React.Children.forEach(this.props.children, (child, index) => {
        if (selectedIndex === index) {
          selectedKey = child.key;
        }
      });

      this.props.onChange(event, selectedKey);
    }
  }

  render() {
    const {
      children,
      onChange,
      selectedKeys,
      ...customProps
    } = this.props;

    const { isCollapsibleMenuItem } = this.context;

    if (isCollapsibleMenuItem && selectedKeys.length) {
      return (
        <Menu.ItemGroup {...customProps} onChange={this.handleOnChange}>
          {children}
        </Menu.ItemGroup>
      );
    } if (isCollapsibleMenuItem) {
      return (
        <List {...customProps} role="listbox">
          {children}
        </List>
      );
    }

    const buttonGroupClassNames = cx([
      'face-up-item',
      customProps.className,
    ]);

    return (
      <ButtonGroup {...customProps} onChange={onChange} className={buttonGroupClassNames} selectedKeys={selectedKeys}>
        {children}
      </ButtonGroup>
    );
  }
}

CollapsibleMenuViewItemGroup.propTypes = propTypes;
CollapsibleMenuViewItemGroup.defaultProps = defaultProps;
CollapsibleMenuViewItemGroup.childContextTypes = childContextTypes;
CollapsibleMenuViewItemGroup.contextTypes = contextTypes;

export default CollapsibleMenuViewItemGroup;
