import React from 'react';
import PropTypes from 'prop-types';
import List from 'terra-list';
import 'terra-base/lib/baseStyles';

const propTypes = {
  /**
   * Menu.Items to be grouped together.
   */
  children: PropTypes.node.isRequired,
};

const childContextTypes = {
  isGroupItem: PropTypes.bool,
};

class MenuItemGroup extends React.Component {
  getChildContext() {
    return { isGroupItem: true };
  }

  render() {
    const { children, ...customProps } = this.props;

    return (
      <List {...customProps} role="group">
        {children}
      </List>
    );
  }
}

MenuItemGroup.propTypes = propTypes;
MenuItemGroup.childContextTypes = childContextTypes;

export default MenuItemGroup;
