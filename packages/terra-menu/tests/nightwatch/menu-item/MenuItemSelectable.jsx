import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../../lib/Menu';

const childContextTypes = {
  isSelectableMenu: PropTypes.bool,
};

class MenuItemSelectable extends React.Component {
  getChildContext() {
    return { isSelectableMenu: true };
  }

  render() {
    return (
      <ul>
        <Menu.Item text="Selectable Menu Item" key="1" className="TestSelectableItem" isSelectable />
      </ul>
    );
  }

}

MenuItemSelectable.childContextTypes = childContextTypes;
export default MenuItemSelectable;
