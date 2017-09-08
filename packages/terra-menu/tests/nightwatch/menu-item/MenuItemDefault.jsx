import React from 'react';
import Menu from '../../../lib/Menu';

const DefaultMenuItem = () => (
  <div>
    <p>Below is a default Menu Item with text</p>
    <br />
    <ul style={{ height: '34px', width: '240px' }}>
      <Menu.Item text="DefaultMenuItem" className="TestMenuItem" />
    </ul>
  </div>
);

export default DefaultMenuItem;
