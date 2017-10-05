import React from 'react';

import SelectableList from 'terra-list/lib/SelectableList';

class listExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: '' };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    return (
      <div>
        <div id="current-index">
          <h3>Last Triggered Index: {this.state.selectedIndex}</h3>
        </div>
        <SelectableList onChange={this.handleSelection}>
          <SelectableList.Item content={<p>Item 1</p>} key="123" />
          <SelectableList.Item content={<p>Item 2</p>} key="124" />
          <SelectableList.Item content={<p>Item 3</p>} key="125" />
        </SelectableList>
      </div>
    );
  }
}
export default listExample;
