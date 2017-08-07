import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../../lib/Menu';

const childContextTypes = {
  isSelectableMenu: PropTypes.bool,
};

class DefaultMenuItemGroup extends React.Component {
  getChildContext() {
    return { isSelectableMenu: true };
  }

  render() {
    return (
      <ul>
        <Menu.ItemGroup className="TestGroup">
          <Menu.Item text="Group Item 1" key="1" className="TestGroupItem1" />
          <Menu.Item text="Group Item 2" key="2" className="TestGroupItem2" />
          <Menu.Item text="Group Item 3" key="3" className="TestGroupItem3" />
        </Menu.ItemGroup>
      </ul>
    );
  }

}

DefaultMenuItemGroup.childContextTypes = childContextTypes;
export default DefaultMenuItemGroup;
