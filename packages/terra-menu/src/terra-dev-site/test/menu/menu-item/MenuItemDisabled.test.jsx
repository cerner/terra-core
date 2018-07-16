import React from 'react';
import PropTypes from 'prop-types';
import List from 'terra-list';
import Menu from '../../../../Menu';

const childContextTypes = {
  isSelectableMenu: PropTypes.bool,
};

class MenuItemDisabled extends React.Component {
  getChildContext() {
    return { isSelectableMenu: true };
  }

  render() {
    return (
      <div>
        <div id="isSelected">
          <p>The item is disabled. The selection state should not change with any user interaction.</p>
        </div>
        <List>
          <Menu.Item
            text="Disabled Menu Item"
            key="1"
            className="TestDisabledItem"
            isSelectable
            isDisabled
          />
          <Menu.Item
            isDisabled
            isSelectable
            text="Nested Menu"
            key="2"
            className="TestNestedMenu"
            subMenuItems={[
              <Menu.Item text="Default 2.1" key="2.1" className="TestNestedMenuContent" />,
            ]}
          />
        </List>
      </div>
    );
  }
}

MenuItemDisabled.childContextTypes = childContextTypes;
export default MenuItemDisabled;
