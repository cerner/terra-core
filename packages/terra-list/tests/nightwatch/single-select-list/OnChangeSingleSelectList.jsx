import React from 'react';

import SingleSelectList from '../../../src/SingleSelectList';

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
        <div id="selected-index">
          <h3>Selected Item: {this.state.selectedIndex}</h3>
        </div>
        <SingleSelectList onChange={this.handleSelection}>
          <SingleSelectList.Item content={<p>test 1</p>} key="123" />
          <SingleSelectList.Item content={<p>test 2</p>} key="124" isSelected />
          <SingleSelectList.Item content={<p>test 3</p>} key="125" />
        </SingleSelectList>
      </div>
    );
  }
}
export default listExample;
