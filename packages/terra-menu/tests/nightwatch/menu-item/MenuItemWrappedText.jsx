import React from 'react';
import Menu from '../../../lib/Menu';

const WrappedTextMenuItem = () => (
  <ul style={{ height: '34px', width: '240px' }}>
    <Menu.Item text="This menu item has a really long text that should wrap." className="testWrappedItem" />
  </ul>
);

export default WrappedTextMenuItem;
