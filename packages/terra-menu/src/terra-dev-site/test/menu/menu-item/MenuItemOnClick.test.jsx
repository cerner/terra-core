import React from 'react';
import Menu from '../../../../Menu';

class MenuItemOnClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickNumber: 0 };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection() {
    this.setState(prevState => ({ clickNumber: prevState.clickNumber + 1 }));
  }

  render() {
    return (
      <div>
        <div id="clickNumber">
          <h3>
Item has been clicked
            {this.state.clickNumber}
            {' '}
times
          </h3>
        </div>
        <ul>
          <Menu.Item text="OnClick Menu Item" key="1" className="TestOnClickItem" onClick={this.handleSelection} />
        </ul>
      </div>
    );
  }
}
export default MenuItemOnClick;
