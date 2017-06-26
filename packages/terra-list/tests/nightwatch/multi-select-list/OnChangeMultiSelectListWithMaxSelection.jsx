import React from 'react';

import MultiSelectList from '../../../lib/MultiSelectList';

class listExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndexes: [] };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, selectedIndexes) {
    this.setState({ selectedIndexes });
  }

  render() {
    return (
      <div>
        <div id="selected-index">
          <h3>Max Selection of 2. Selected Item(s): {this.state.selectedIndexes.join(', ')}</h3>
        </div>
        <MultiSelectList onChange={this.handleSelection} maxSelectionCount={2}>
          <MultiSelectList.Item content={<p>test 1</p>} key="123" />
          <MultiSelectList.Item content={<p>test 2</p>} key="124" />
          <MultiSelectList.Item content={<p>test 3</p>} key="125" />
        </MultiSelectList>
      </div>
    );
  }
}
export default listExample;
