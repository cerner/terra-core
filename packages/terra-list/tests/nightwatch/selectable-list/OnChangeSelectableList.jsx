import React from 'react';

import SelectableList from '../../../lib/SelectableList';

class listExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: null };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    return (
      <div>
        <div id="current-index">
          <h3>Triggered Item: {this.state.selectedIndex}</h3>
          <p><strong>Note:</strong> Marking an item as selected is an implementation detail of the consumer.</p>
        </div>
        <SelectableList onChange={this.handleSelection}>
          <SelectableList.Item content={<p>test 1</p>} key="123" />
          <SelectableList.Item content={<p>test 2</p>} key="124" />
          <SelectableList.Item content={<p>test 3</p>} key="125" />
        </SelectableList>
      </div>
    );
  }
}
export default listExample;
