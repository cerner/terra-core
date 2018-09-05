import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../../../Menu';

const childContextTypes = {
  isSelectableMenu: PropTypes.bool,
};

class MenuItemSelectable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSelected: false };
    this.handleSelection = this.handleSelection.bind(this);
  }

  getChildContext() {
    return { isSelectableMenu: true };
  }

  handleSelection(event, isSelected) {
    this.setState({ isSelected });
  }

  render() {
    return (
      <div>
        <div id="isSelected">
          <h3>
Item is selected:
            {this.state.isSelected ? 'yes' : 'no'}
          </h3>
        </div>
        <ul>
          <Menu.Item text="Selectable Menu Item" key="1" className="TestSelectableItem" isSelectable onChange={this.handleSelection} />
        </ul>
      </div>
    );
  }
}

MenuItemSelectable.childContextTypes = childContextTypes;
export default MenuItemSelectable;
