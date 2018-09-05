import React from 'react';
import PropTypes from 'prop-types';
import SingleSelectList from 'terra-list/lib/SingleSelectList';
import 'terra-base/lib/baseStyles';

const propTypes = {
  /**
   * Menu.Items to be grouped together.
   */
  children: PropTypes.node.isRequired,

  /**
   * Callback function called when selected index changes.
   */
  onChange: PropTypes.func,
};

const childContextTypes = {
  isGroupItem: PropTypes.bool,
};

class MenuItemGroup extends React.Component {
  getChildContext() {
    return { isGroupItem: true };
  }

  render() {
    const { children, onChange, ...customProps } = this.props;

    return (
      <SingleSelectList {...customProps} onChange={onChange} role="group">
        {children}
      </SingleSelectList>
    );
  }
}

MenuItemGroup.propTypes = propTypes;
MenuItemGroup.childContextTypes = childContextTypes;

export default MenuItemGroup;
