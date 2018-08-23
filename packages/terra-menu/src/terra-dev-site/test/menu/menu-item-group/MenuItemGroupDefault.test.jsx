import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../../../Menu';

const childContextTypes = {
  isSelectableMenu: PropTypes.bool,
};

class DefaultMenuItemGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: null };
    this.handleSelection = this.handleSelection.bind(this);
  }

  getChildContext() {
    return { isSelectableMenu: true };
  }

  handleSelection(event, selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    return (
      <div>
        <div id="selected-index">
          <h3>
Selected Button:
            {this.state.selectedIndex}
          </h3>
        </div>
        <Menu.ItemGroup className="TestGroup" onChange={this.handleSelection}>
          <Menu.Item text="Group Item 1" key="1" className="TestGroupItem1" />
          <Menu.Item text="Group Item 2" key="2" className="TestGroupItem2" />
          <Menu.Item text="Group Item 3" key="3" className="TestGroupItem3" />
        </Menu.ItemGroup>
      </div>
    );
  }
}

DefaultMenuItemGroup.childContextTypes = childContextTypes;
export default DefaultMenuItemGroup;
