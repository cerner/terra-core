import React from 'react';
import Menu from '../../../lib/Menu';

const MenuItemSubMenu = () => (
  <ul style={{ height: '34px', width: '240px' }}>
    <Menu.Item
      className="TestSubMenuItem"
      text="MenuItem - Submenu"
      subMenuItems={[
        <Menu.Item text="Not Visible" />,
      ]}
    />
  </ul>
);

export default MenuItemSubMenu;
